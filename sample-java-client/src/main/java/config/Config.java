package config;

import com.brightcove.cmsapi.ApiClient;
import oauth.Oauth2Interceptor;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Config {

    Properties prop = new Properties();

    public static Config load(String path) throws IOException {

        Config config = new Config();
        InputStream input = null;

        input = new FileInputStream(path);

        // load a properties file
        config.prop.load(input);

        return config;
    }

    public String getClientId() {
        return prop.getProperty("client_id");
    }

    public String getClientSecret() {
        return prop.getProperty("client_secret");
    }

    public String getOauthHost() {
        return prop.getProperty("oauth_host");
    }

    public String getCmsHost() {
        return prop.getProperty("cms_host");
    }

    public String getAccountId() {
        return prop.getProperty("account_id");
    }

    public void initializeOauth(ApiClient apiClient) {
        Oauth2Interceptor oauth2Interceptor = new Oauth2Interceptor(getClientId(), getClientSecret(), getOauthHost());
        apiClient.getHttpClient().interceptors().add(oauth2Interceptor);
    }
}
