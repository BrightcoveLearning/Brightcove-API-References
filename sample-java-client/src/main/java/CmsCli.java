import com.brightcove.cmsapi.ApiClient;
import com.brightcove.cmsapi.ApiException;
import com.brightcove.cmsapi.Configuration;
import com.brightcove.cmsapi.api.PlaylistGroupApi;
import com.brightcove.cmsapi.api.VideoGroupApi;
import com.brightcove.cmsapi.model.Video;
import com.google.gson.Gson;
import config.Config;
import options.CliOptions;
import org.apache.commons.cli.CommandLine;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

public class CmsCli {

    static String CONTENT_TYPE = "application/json";
    static String FAKE_OAUTH_TOKEN = "whatever";

    Config config;
    CommandLine cmd;
    VideoGroupApi videoApi;
    PlaylistGroupApi playlistApi;

    public static void main(String[] args) throws Exception {

        CommandLine cmd = CliOptions.read(args);
        Config config = Config.load(cmd.getOptionValue(CliOptions.CONFIG_FILE));
        ApiClient apiClient = Configuration.getDefaultApiClient();
        apiClient.setBasePath(config.getCmsHost() + "/v1");
        config.initializeOauth(apiClient);

        new CmsCli(config, cmd);
    }

    public CmsCli(Config config, CommandLine cmd) throws FileNotFoundException {
        this.config = config;
        this.cmd = cmd;
        this.videoApi = new VideoGroupApi();
        this.playlistApi = new PlaylistGroupApi();
        if (cmd.hasOption(CliOptions.GET_VIDEO)) {
            getVideo(cmd.getOptionValue(CliOptions.GET_VIDEO));
        } else if (cmd.hasOption(CliOptions.GET_VIDEOS)) {
            getVideos();
        } else if (cmd.hasOption(CliOptions.CREATE_VIDEO)) {
            createVideo(cmd.getOptionValue(CliOptions.CREATE_VIDEO));
        } else if (cmd.hasOption(CliOptions.PATCH_VIDEO)) {
            patchVideo(cmd.getOptionValue(CliOptions.PATCH_VIDEO));
        } else {
            CliOptions.printUsage();
            System.exit(1);
        }
    }

    private void getVideo(String videoId) {
        Video video = videoApi.getVideoByIDOrReferenceID(config.getAccountId(), videoId, CONTENT_TYPE, FAKE_OAUTH_TOKEN);
        System.out.println(video);
    }

    private void getVideos() {
        List<Video> videos = videoApi.getVideos(config.getAccountId(), CONTENT_TYPE, FAKE_OAUTH_TOKEN);
        System.out.println(videos);
    }

    private void createVideo(String jsonFilePath) throws FileNotFoundException {
        Gson gson = new Gson();
        Video v = gson.fromJson(new FileReader(jsonFilePath), Video.class);
        try {
            System.out.println(videoApi.createVideo(config.getAccountId(), v, CONTENT_TYPE, FAKE_OAUTH_TOKEN));
        } catch (ApiException e) {
            System.err.println("Created failed: " + e.getMessage());
            System.err.println("status: " + e.getCode());
            System.err.println(e.getResponseBody());
        }
    }

    private void patchVideo(String jsonFilePath) throws FileNotFoundException {
        Gson gson = new Gson();
        Video v = gson.fromJson(new FileReader(jsonFilePath), Video.class);
        String id = v.getId();
        v.setId(null);
        try {
            System.out.println(videoApi.updateVideo(config.getAccountId(), id, v, CONTENT_TYPE, FAKE_OAUTH_TOKEN));
        } catch (ApiException e) {
            System.err.println("Update failed: " + e.getMessage());
            System.err.println("status: " + e.getCode());
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
