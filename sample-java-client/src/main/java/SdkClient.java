import com.brightcove.cmsapi.ApiClient;
import com.brightcove.cmsapi.ApiException;
import com.brightcove.cmsapi.Configuration;
import com.brightcove.cmsapi.api.PlaylistGroupApi;
import com.brightcove.cmsapi.api.VideoGroupApi;
import com.brightcove.cmsapi.model.Video;
import config.Config;

public class SdkClient {

    static String CONTENT_TYPE = "application/json";
    static String FAKE_OAUTH_TOKEN = "whatever";

    public static void main(String[] args) throws Exception {
        if (args == null || args.length != 1) {
            System.err.println("ERROR: Provide path to config file");
            System.exit(1);
        }

        Config config = Config.load(args[0]);
        ApiClient apiClient = Configuration.getDefaultApiClient();
        apiClient.setBasePath(config.getCmsHost() + "/v1");
        config.initializeOauth(apiClient);

        try {
            //doStuff();
            readStuff();
        } catch (ApiException e) {
            System.err.println("Request failed");
            System.err.println("status: " + e.getCode());
            System.err.println("header: " + e.getResponseHeaders());
            System.err.println(e.getResponseBody());
        }
    }

    static void readStuff() {
        String accountId = "10930819";
        String videoId = "5446397641001";
        String playlistId = "63787966001";

        VideoGroupApi videoApi = new VideoGroupApi();
        PlaylistGroupApi playlistApi = new PlaylistGroupApi();

        System.out.println(videoApi.getVideoByIDOrReferenceID(accountId, videoId, "application/json", "wrong"));
    }

    static void doStuff() {
        String accountId = "10930819";
        String videoId = "5446397641001";
        String playlistId = "63787966001";

        VideoGroupApi videoApi = new VideoGroupApi();
        PlaylistGroupApi playlistApi = new PlaylistGroupApi();

        //System.out.println(videoApi.getVideos(accountId, "application/json", "wrong"));
        //System.out.println(videoApi.getVideoByIDOrReferenceID(accountId, videoId, "application/json", "wrong"));
        //System.out.println(playlistApi.getPlaylistByID(accountId, new BigDecimal(playlistId), "application/json", "wrong"));

        Video newVideo = new Video();
        newVideo.name("I came from an sdk");
        Video created = videoApi.createVideo(accountId, newVideo, CONTENT_TYPE, FAKE_OAUTH_TOKEN);
        created.setDescription("New video");
        String newVideoId = created.getId();
        System.out.println("Created " + created);

        created.setName("I was modified in the sdk");
        created.setHasDigitalMaster(null);
        created.setId(null);
        created.setImages(null);
        created.setDescription("modified once");
        Video updatedVideo = videoApi.updateVideo(accountId, newVideoId, created, CONTENT_TYPE, FAKE_OAUTH_TOKEN);
        System.out.println("----");
        System.out.println(updatedVideo.getName());
        System.out.println(updatedVideo.getDescription());

        updatedVideo.setDescription(null);
        updatedVideo.setHasDigitalMaster(null);
        updatedVideo.setId(null);
        updatedVideo.setImages(null);
        updatedVideo.setName("another new name");

        videoApi.updateVideo(accountId, newVideoId, updatedVideo, CONTENT_TYPE, FAKE_OAUTH_TOKEN);
        Video currentVideo = videoApi.getVideoByIDOrReferenceID(accountId, newVideoId, CONTENT_TYPE, FAKE_OAUTH_TOKEN);
        System.out.println("----");
        System.out.println(currentVideo.getName());
        System.out.println(currentVideo.getDescription());

    }

}
