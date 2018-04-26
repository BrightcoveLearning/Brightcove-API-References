import com.brightcove.cmsapi.ApiClient;
import com.brightcove.cmsapi.ApiException;
import com.brightcove.cmsapi.Configuration;
import com.brightcove.cmsapi.api.PlaylistGroupApi;
import com.brightcove.cmsapi.api.VideoGroupApi;
import com.brightcove.cmsapi.model.GetPlaylistByID200;
import com.brightcove.cmsapi.model.Video;

import java.math.BigDecimal;
import java.util.List;

public class SdkClient {

    //static String ACCESS_TOKEN = "";
    static String CLIENT_ID = "646724fb-f8dc-4661-b2e4-b2a46d28bedb";
    static String CLIENT_SECRET = "iH4Jn-wtNjPTNl_ynmkkbMkOVP1viJDw4ymJPzH46m_6uqwU98NfH1B9NCvoCD9LmoH3tbnxQ6abJX6dYMgSGg";
    static String OAUTH_URL = "https://oauth.brightcove.com";

    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();
        apiClient.setBasePath("https://cms.api.brightcove.com/v1");
        configureOauth(apiClient, CLIENT_ID, CLIENT_SECRET, OAUTH_URL);

        String accountId = "10930819";
        String videoId = "5446397641001";
        String playlistId = "63787966001";

        getVideos(accountId);
        //getVideo(accountId, videoId);
        //getPlaylist(accountId, playlistId);
    }

    static void getVideos(String accountId) {
        VideoGroupApi apiInstance = new VideoGroupApi();
        try {
            List<Video> result = apiInstance.getVideos(accountId, "application/json", "wrong");
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception");
            e.printStackTrace();
        }
    }

    static void getVideo(String accountId, String videoId) {
        VideoGroupApi apiInstance = new VideoGroupApi();
        try {
            Video result = apiInstance.getVideoByIDOrReferenceID(accountId, videoId, "application/json", "wrong");
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception");
            e.printStackTrace();
        }
    }

    static void getPlaylist(String accountId, String playlistId) {
        PlaylistGroupApi apiInstance = new PlaylistGroupApi();
        try {
            GetPlaylistByID200 result = apiInstance.getPlaylistByID(accountId, new BigDecimal(playlistId), "application/json", "wrong");
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception");
            e.printStackTrace();
        }
    }

    public static void configureOauth(ApiClient apiClient, String clientId, String clientSecret, String oauthUrl) {
        Oauth2Interceptor oauth2Interceptor = new Oauth2Interceptor(clientId, clientSecret, oauthUrl);
        apiClient.getHttpClient().interceptors().add(oauth2Interceptor);
    }


}
