package options;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;

public class CliOptions {
    public static final String CONFIG_FILE = "configFile";
    public static final String PATCH_VIDEO = "patchVideo";
    public static final String GET_VIDEOS = "getVideos";
    public static final String GET_VIDEO = "getVideo";
    public static final String CREATE_VIDEO = "createVideo";

    public static Options getOptions() {
        org.apache.commons.cli.Options options = new org.apache.commons.cli.Options();

        options.addRequiredOption("c", CONFIG_FILE, true, "path to config file");
        options.addOption(GET_VIDEO, true, "videoId");
        options.addOption(GET_VIDEOS, false, "get videos for your account");
        options.addOption(CREATE_VIDEO, true, "videoJson");
        options.addOption(PATCH_VIDEO, true, "videoJson");
        return options;
    }

    public static CommandLine read(String[] args) {
        CommandLineParser parser = new DefaultParser();
        Options options = getOptions();
        try {
            return parser.parse(options, args);
        } catch (ParseException e) {
            System.err.println(e.getMessage());
            printUsage();
            System.exit(1);
        }
        return null;
    }

    public static void printUsage() {
        HelpFormatter helpFormatter = new HelpFormatter();
        helpFormatter.printHelp("cli", getOptions());
    }
}