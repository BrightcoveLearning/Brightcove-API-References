package oauth;

import com.google.gson.Gson;
import com.squareup.okhttp.*;

import javax.net.ssl.*;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.time.Instant;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class Oauth2Interceptor implements Interceptor {
    private static MediaType accessTokenContentType = MediaType.parse("application/x-www-form-urlencoded");

    private String clientId;
    private String clientSecret;
    private OauthClient oauthClient;

    private Token token;

    public Oauth2Interceptor(String clientId, String clientSecret, String oauthHost) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        oauthClient = new OauthClient(oauthHost);
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        try {
            Request request = chain.request();
            refreshToken();
            Request authedRequest = request.newBuilder()
                    .header("Authorization", "Bearer " + token.getAccessToken())
                    .build();

            return chain.proceed(authedRequest);
        } catch (Exception e){
            System.out.println("Unable to get token to sign request: " + e.getMessage());
            throw e;
        }
    }

    private void refreshToken() throws IOException {
        if (token == null || token.isExpired()) {
            System.out.println("refreshing token: " + token);
            token = oauthClient.getToken(clientId, clientSecret);
        }
    }

    private class OauthToken {
        String access_token;
        String token_type;
        long expires_in;
    }

    private class Token {
        OauthToken oauthToken;
        Date expires_at;

        Token(OauthToken oauthToken) {
            this.oauthToken = oauthToken;
            this.expires_at = new Date(Instant.now()
                    .plusMillis(oauthToken.expires_in * 1000)
                    .minusMillis(5000) // refresh a little early to guard against slow network calls
                    .toEpochMilli());
        }

        boolean isExpired() {
            return Instant.now().toEpochMilli() >= expires_at.getTime();
        }

        String getAccessToken() {
            return oauthToken.access_token;
        }
    }

    private class OauthClient {
        String host;
        OkHttpClient client;

        OauthClient(String host) {
            this.host = host;
            this.client = buildClient();
        }

        OkHttpClient buildClient() {
            OkHttpClient client = new OkHttpClient();
            client.setConnectTimeout(1000, TimeUnit.MILLISECONDS);
            client.setReadTimeout(5000, TimeUnit.MILLISECONDS);

            if (host.contains(".qa.") || host.contains("staging")) {
                trustAllCerts(client);
            }

            return client;
        }

        private void trustAllCerts(OkHttpClient client) {
            try {
                X509TrustManager trustManager = new TrustEveryoneManager();
                TrustManager[] trustAllCerts = new TrustManager[]{trustManager};
                // Install the all-trusting trust manager
                SSLContext sslContext = null;
                sslContext = SSLContext.getInstance("SSL");
                sslContext.init(null, trustAllCerts, new java.security.SecureRandom());
                // Create an ssl socket factory with our all-trusting manager
                SSLSocketFactory sslSocketFactory = sslContext.getSocketFactory();
                client.setSslSocketFactory(sslSocketFactory);
                // below line requires a builder. or expose CertificationChainSomethingSomething
                // builder.setSslSocketFactory(sslSocketFactory, trustManager);
                client.setHostnameVerifier(new TrustEveryoneHostnameVerifier());
            } catch (Exception e) {
                System.out.println("Cannot trust all certs");
                e.printStackTrace();
            }
        }

        Token getToken(String clientId, String clientSecret) throws IOException {
            Request request = new Request.Builder()
                    .url(host + "/v3/access_token")
                    .header("User-Agent", "foo")
                    .header("Authorization", Credentials.basic(clientId, clientSecret))
                    .post(RequestBody.create(accessTokenContentType, "grant_type=client_credentials"))
                    .build();

            Response response = client.newCall(request).execute();

            System.out.println("token requested: status " + response.code());

            if (response.isSuccessful()) {
                Gson gson = new Gson();
                OauthToken oauthToken = gson.fromJson(response.body().string(), OauthToken.class);
                return new Token(oauthToken);
            } else {
                // TODO log response
                throw new IOException("Unexpected status " + response.code() + " while fetching token: " + response);
            }
        }
    }

    class TrustEveryoneManager implements X509TrustManager {
        public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {

        }

        public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {

        }

        public X509Certificate[] getAcceptedIssuers() {
            return new X509Certificate[0];
        }

    }

    class TrustEveryoneHostnameVerifier implements HostnameVerifier {
        public boolean verify(String hostname, SSLSession session) {
            return true;
        }

    }
}
