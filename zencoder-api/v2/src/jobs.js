// Create a Job

/**
 * @api {post} /v2/jobs Create a Job
 * @apiName Create a Job
 * @apiGroup Jobs
 * @apiVersion 2.0.0
 *
 * @apiDescription Create an encoding job. See [Encoding Settings](//docs.brightcove.com/en/zencoder/guides/encoding-settings.html) for more details on the request body fields.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json or application/xml
 * @apiHeader {String} Zencoder-Api-Key Zencoder-Api-Key: {APIKey}
 *
 * @apiParam (VOD Request Body Fields) {string} input A valid URL to a media file (HTTP/HTTPS, FTP/FTPS, SFTP, Azure, GCS, CF or S3), with or without authentication
 * @apiParam (VOD Request Body Fields) {string} [api_key] API Key (must be included here if not passed as a header, which is the recommended way)
 * @apiParam (VOD Request Body Fields) {string="us", "europe", "asia", "sa", "australia", "us-virginia", "us-oregon", "us-n-california", "eu-dublin", "asia-singapore", "asia-tokyo", "sa-saopaulo", "australia-sydney", "us-central-gce", "eu-west-gce",  "asia-east-gce"} [region="us"] The AWS region or Google Compute Engine instance (beta) where Zencoder should process the job
 * @apiParam (VOD Request Body Fields) {Boolean} [test=false] Enable test mode ("Integration Mode") for a job
 * @apiParam (VOD Request Body Fields) {Boolean} [private=false] Enable privacy mode for a job
 * @apiParam (VOD Request Body Fields) {Number} [download_connections=5] Utilize multiple, simultaneous connections for download acceleration (in some circumstances)
 * @apiParam (VOD Request Body Fields) {String} [pass_through] Optional information to store alongside this job
 * @apiParam (VOD Request Body Fields) {Boolean} [mock=false] Send a mocked job request
 * @apiParam (VOD Request Body Fields) {String} [grouping] A report grouping for this job
 * @apiParam (VOD Request Body Fields) {String} [aspera_transfer_policy="fair"] How to allocate available bandwidth for Aspera file transfers
 * @apiParam (VOD Request Body Fields) {Number} [transfer_minimum_rate=1000] A targeted rate in Kbps for data transfer minimums
 * @apiParam (VOD Request Body Fields) {Number} [transfer_maximum_rate=250000] A targeted rate in Kbps for data transfer maximums
 * @apiParam (VOD Request Body Fields) {String} [credentials] References saved credentials by a nickname
 * @apiParam (VOD Request Body Fields) {Object[]} [outputs] Array of output specifications
 * @apiParam (VOD Request Body Fields) {String="standard", "segmented", "playlist", "transfer-only"} [outputs.type="standard"] The type of file to output
 * @apiParam (VOD Request Body Fields) {String} [outputs.label] An optional label for this output
 * @apiParam (VOD Request Body Fields) {String} [outputs.url] A S3, Cloud Files, GCS, FTP, FTPS, SFTP, Aspera, Azure, HTTP, or RTMP URL where Zencoder will put the transcoded file
 * @apiParam (VOD Request Body Fields) {String} [outputs.secondary_url] A S3, Cloud Files, GCS, FTP, FTPS, SFTP, Aspera, Azure, HTTP, or RTMP URL where Zencoder will put the transcoded file
 * @apiParam (VOD Request Body Fields) {String} [outputs.base_url] A base S3, Cloud Files, GCS, FTP, FTPS, SFTP, Azure, or Aspera directory URL where Zencoder put the transcoded file, without a filename
 * @apiParam (VOD Request Body Fields) {String} [outputs.filename] The filename of a finished file
 * @apiParam (VOD Request Body Fields) {String} [outputs.package_filename] The filename of a packaged output
 * @apiParam (VOD Request Body Fields) {String="zip", "tar"} [outputs.package_format] Zip/packaging format to use for the output file(s)
 * @apiParam (VOD Request Body Fields) {String="mobile/advanced", "mobile/baseline", "mobile/legacy", "v1/mobile/advanced", "v1/mobile/baseline", "v1/mobile/legacy", "v2/mobile/advanced", "v2/mobile/baseline", "v2/mobile/legacy"} [outputs.device_profile] A device profile to use for mobile device compatibility
 * @apiParam (VOD Request Body Fields) {Boolean=false} [outputs.strict] Enable strict mode
 * @apiParam (VOD Request Body Fields) {Boolean=false} [outputs.skip_video] Do not output a video track
 * @apiParam (VOD Request Body Fields) {Boolean=false} [outputs.skip_audio] Do not output a audio track
 * @apiParam (VOD Request Body Fields) {String} [outputs.source] References a label on another job and uses the video created by that output for processing instead of the input file
 * @apiParam (VOD Request Body Fields) {String} [outputs.credentials] References saved credentials by a nickname
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.generate_md5_checksum=false] Generate an MD5 checksum of the output file
 * @apiParam (VOD Request Body Fields) {Number} [outputs.parallel_upload_limit] The maximum number of simultaneous uploads to attempt - defaults: `30` for S3, `10` for other destinations
 * @apiParam (VOD Request Body Fields) {Object} [outputs.headers] HTTP headers to send with your file when we upload it - this feature is currently supported when using S3, GCS and Cloud Files
 * @apiParam (VOD Request Body Fields) {String} [outputs.format] The output format to use - defaults determined by the output filename and then video or audio codec; otherwise: `mp4` (for standard outputs); `ts` (for segmented outputs)
 * @apiParam (VOD Request Body Fields) {String} [outputs.video_codec] The video codec to use - defaults determined by the format, profile, or audio_codec; `h264` if none are provided
 * @apiParam (VOD Request Body Fields) {String} [outputs.audio_codec] The audio codec to use - defaults determined by the format, profile, or video_codec; `aac` if none are provided
 * @apiParam (VOD Request Body Fields) {String} [outputs.size] The resolution of the output video (WxH, in pixels)
 * @apiParam (VOD Request Body Fields) {Number} [outputs.width] The maximum width of the output video (in pixels)
 * @apiParam (VOD Request Body Fields) {Number} [outputs.height] The maximum height of the output video (in pixels)
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.upscale=false] Upscale the output if the input is smaller than the target output resolution
 * @apiParam (VOD Request Body Fields) {String="preserve", "stretch", "crop", "pad"} [outputs.aspect_mode="preserve"] What to do when aspect ratio of input file does not match the target width/height aspect ratio
 * @apiParam (VOD Request Body Fields) {String} [outputs.sample_aspect_ratio] The sample (pixel) aspect ratio to be used for the output video. The size, width, height, and aspect_mode mode options all refer to the encoded pixel dimensions, not the display dimensions - sets the aspect ratio to use for sample/pixels of the output video, specified as `"8:9"`, `"32:27"`, or any other ratio of two positive integers, each between 1 and 65535
 * @apiParam (VOD Request Body Fields) {Number{1-5}} [outputs.quality=3] Autoselect the best video bitrate to to match a target visual quality
 * @apiParam (VOD Request Body Fields) {Number} [outputs.video_bitrate] A target video bitrate in kbps - not necessary if you select a quality setting, unless you want to target a specific bitrate
 * @apiParam (VOD Request Body Fields) {Number{1-5}} [outputs.audio_quality=3] Autoselect the best audio bitrate to to match a target sound quality
 * @apiParam (VOD Request Body Fields) {Number} [outputs.audio_bitrate] A target audio bitrate in kbps - not necessary if you select a audio_quality setting, unless you want to target a specific bitrate
 * @apiParam (VOD Request Body Fields) {Number} [outputs.max_video_bitrate] A maximum average bitrate
 * @apiParam (VOD Request Body Fields) {Number{1-5}} [outputs.speed=3] A target transcoding speed - slower encoding generally allows for more advanced compression
 * @apiParam (VOD Request Body Fields) {Number} [outputs.decoder_bitrate_cap] Max bitrate fed to decoder buffer - typically used for video intended for streaming, or for targeting specific devices (e.g. Blu-Ray)
 * @apiParam (VOD Request Body Fields) {Number} [outputs.decoder_buffer_size] Size of the decoder buffer, used in conjunction with bitrate_cap
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.one_pass=false] Force one-pass encoding
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.audio_constant_bitrate=false] Enable constant bitrate mode for audio if possible
 * @apiParam (VOD Request Body Fields) {Number} [outputs.frame_rate] The frame rate to use - defaults to original (input) frame rate
 * @apiParam (VOD Request Body Fields) {Number} [outputs.max_frame_rate] The maximum frame rate to use
 * @apiParam (VOD Request Body Fields) {Number} [outputs.decimate] Reduce the input frame rate by a divisor
 * @apiParam (VOD Request Body Fields) {Number} [outputs.keyframe_interval=250] The maximum number of frames between each keyframe
 * @apiParam (VOD Request Body Fields) {Number} [outputs.keyframe_rate] The number of keyframes per second
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.fixed_keyframe_interval=false] Enable fixed keyframe interval mode (VP6, VP8, VP9 and H.264 only)
 * @apiParam (VOD Request Body Fields) {Number} [outputs.forced_keyframe_interval] Force keyframes at the specified interval (H.264 only)
 * @apiParam (VOD Request Body Fields) {Number} [outputs.forced_keyframe_rate] Specify the number of keyframes per-second, taking frame rate into account (H.264 only)
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.generate_frame_index] Generate a video frame index file
 * @apiParam (VOD Request Body Fields) {String} [outputs.frame_index_filename] Override the default filename for the frame index when `generate_frame_index` is enabled
 * @apiParam (VOD Request Body Fields) {Number{0-16}} [outputs.video_reference_frames=3] A number of reference frames to use (H.264, HEVC) - you can also use the string `auto`
 * @apiParam (VOD Request Body Fields) {String="H.264", "HEVC", "VP9"} [outputs.video_codec_profile] The video codec profile to use - defaults: H.264: `baseline`, HEVC: `main`, VP9: `0`
 * @apiParam (VOD Request Body Fields) {String} [outputs.video_codec_level] The video codec level to use (H.264, HEVC) - the default is automatically calculated using a level chart based on the output video
 * @apiParam (VOD Request Body Fields) {Number{0-16}} [outputs.video_bframes=0] The maximum number of consecutive B-frames (H.264, HEVC)
 * @apiParam (VOD Request Body Fields) {String="preserve", "discard"} [outputs.color_metadata="preserve"] Preserve or discard color metadata information from the input in the output video
 * @apiParam (VOD Request Body Fields) {Number} [outputs.audio_sample_rate] The audio sample rate, in Hz
 * @apiParam (VOD Request Body Fields) {Number{1-2}} [outputs.audio_channels] The number of audio channels - defaults to `1` if the source is mono, otherwise `2`
 * @apiParam (VOD Request Body Fields) {Number=16,24,32} [outputs.audio_bit_depth] The number of bits per sample
 * @apiParam (VOD Request Body Fields) {String} [outputs.audio_language] Describes the language of the audio track
 * @apiParam (VOD Request Body Fields) {Object} [outputs.input_audio_channels] Sets the input audio tracks-to-channels layout
 * @apiParam (VOD Request Body Fields) {Object} [outputs.output_audio_channels] Sets the output audio tracks-to-channels layout
 * @apiParam (VOD Request Body Fields) {Object[]} [outputs.thumbnails] Defines a set of thumbnails to be captured for each output
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.label] A label to identify each set of thumbnail groups
 * @apiParam (VOD Request Body Fields) {String="png", "jpg"} [outputs.thumbnails.format="png"] The format of the thumbnail image
 * @apiParam (VOD Request Body Fields) {Number} [outputs.thumbnails.format="png"] A number of thumbnails, evenly-spaced
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.thumbnails.start_at_first_frame=false] Start generating the thumbnails starting at the first frame
 * @apiParam (VOD Request Body Fields) {Number} [outputs.thumbnails.interval] Take thumbnails at an even interval, in seconds
 * @apiParam (VOD Request Body Fields) {Number} [outputs.thumbnails.interval_in_frames] Take thumbnails at an even interval, in frames
 * @apiParam (VOD Request Body Fields) {Number[]} [outputs.thumbnails.times] An array of times, in seconds, at which to grab a thumbnail
 * @apiParam (VOD Request Body Fields) {String="preserve", "stretch", "crop", "pad"} [outputs.thumbnails.aspect_mode="preserve"] How to handle a thumbnail width/height that differs from the aspect ratio of the input file
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.size] Thumbnail resolution as WxH
 * @apiParam (VOD Request Body Fields) {Number} [outputs.thumbnails.width] The maximum width of the thumbnail (in pixels)
 * @apiParam (VOD Request Body Fields) {Number} [outputs.thumbnails.height] The maximum height of the thumbnail (in pixels)
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.base_url] A base S3, Cloud Files, GCS, FTP, FTPS, or SFTP directory URL where Zencoder will place the thumbnails, without a filename
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.prefix] Prefix for thumbnail filenames
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.filename] Prefix for thumbnail filenames
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.thumbnails.public=false] Make the output publicly readable on S3
 * @apiParam (VOD Request Body Fields) {Object[]} [outputs.thumbnails.access_control] Fine-grained access control rules for files sent to S3
 * @apiParam (VOD Request Body Fields) {String="READ", "READ_ACP", "WRITE_ACP", "FULL_CONTROL"} [outputs.thumbnails.access_control.permission] A string or array of strings containing: `READ`, `READ_ACP`, `WRITE_ACP`, or `FULL_CONTROL`
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.access_control.grantee] A valid S3 grantee (email, ID, or URI)
 * @apiParam (VOD Request Body Fields) {Boolean} [outputs.thumbnails.rrs] Amazon S3's Reduced Redundancy Storage
 * @apiParam (VOD Request Body Fields) {Object} [outputs.thumbnails.headers] HTTP headers to send with your file when we upload it - this feature is currently supported when using S3, GCS and Cloud Files
 * @apiParam (VOD Request Body Fields) {String} [outputs.thumbnails.credentials] References saved credentials by a nickname
 * @apiParam (VOD Request Body Fields) {Number} [outputs.thumbnails.parallel_upload_limit] The maximum number of simultaneous uploads to attempt - defaults: `30` for S3, `10` for other destinations
 * @apiParam (VOD Request Body Fields) {Object[]} [outputs.watermarks] Add one or more watermarks to an output video
 * @apiParam (VOD Request Body Fields) {String} [outputs.watermarks.url] The URL of a remote image file to use as a watermark
 * @apiParam (VOD Request Body Fields) {Number} [outputs.watermarks.x=-10] Where to place a watermark, on the x axis
 * @apiParam (VOD Request Body Fields) {Number} [outputs.watermarks.y=-10] Where to place a watermark, on the y axis
 * @apiParam (VOD Request Body Fields) {Mixed} [outputs.watermarks.width] The scaled width of a watermark - number of pixels (`100`)) or percentage of video width (`"10%"`)
 * @apiParam (VOD Request Body Fields) {Mixed} [outputs.watermarks.height] The scaled height of a watermark - number of pixels (`10`)) or percentage of video width (`"5%"`)
 * @apiParam (VOD Request Body Fields) {String="content", "frame"} [outputs.watermarks.origin] Which part of the output to base the watermark position on - this only affects jobs where aspect_mode is `pad`
 * @apiParam (VOD Request Body Fields) {Number{0.0-1.0}} [outputs.watermarks.opacity] Make the watermark transparent
 *
 * @apiParamExample {json} Standard Live Stream Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration": 30,
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream Custom Origin Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 30,
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "type":"playlist",
 *                "url":"s3://YOUR_BUCKET/custom/playlist.m3u8",
 *                "credentials":"YOUR_CREDENTIALS",
 *                "streams": [{"source": "hls480p"},{"source": "hls720p"}]
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream Transmuxed Rendition Example:
 *     // When using a transmuxed rendition within a multi-bitrate HLS output,
 *     // the segment_size and keyframe_interval should be avoided on any of the outputs
 *     // to ensure segments and keyframes follow the input GOP structure.
 *     //If not, the system will return an error in the job creation request.
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list,
 *        "reconnect_time": 20,
 *        "outputs": [
 *            {
 *                "label": "hls1080p transmux",
 *                "live_stream": true,
 *                "copy_video": true,
 *                "copy_audio": true,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "url":"s3://YOUR_BUCKET/live/20160403004644_test.mp4",
 *                "credentials": "YOUR_CREDENTIALS"
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream with VOD Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration":30,
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "url":"s3://YOUR_BUCKET/live/20160403004644_test.mp4",
 *                "credentials": "YOUR_CREDENTIALS"
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream with VOD and Notifications Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "notifications": [
 *            "http://httpbin.org/post?liveStateChange",
 *            {
 *                "url": "http://httpbin.org/post?liveStarted",
 *                "event": "first_segment_uploaded"
 *            },
 *            {
 *                "url": "http://httpbin.org/post?liveFinished",
 *                "event": "output_finished"
 *            }],
 *        "outputs": [
 *        {
 *            "label": "hls720p",
 *            "live_stream": true,
 *            "height": 720,
 *            "video_bitrate": 2000,
 *            "segment_seconds": 6,
 *            "video_codec": "h264",
 *            "h264_profile": "high",
 *            "segment_seconds": 6
 *        },
 *        {
 *            "label": "hls360p",
 *            "live_stream": true,
 *            "height": 360,
 *            "video_bitrate": 650,
 *            "segment_seconds": 6
 *        },
 *        {
 *            "url":"s3://YOUR_BUCKET/path/filename.mp4",
 *            "credentials": "YOUR_CREDENTIALS",
 *            "notifications":    [{
 *                "url": "http://httpbin.org/post?vodStateChange"
 *            },
 *            {
 *                "url": "http://httpbin.org/post?vodFinished",
 *                "event": "output_finished"
 *            }]
 *        }]
 *    }
 *
 * @apiParamExample {json} Live Stream with Multiple Output Playlists Example:
 *   {
 *       "live_stream": true,
 *       "region": "my-region-list",
 *       "reconnect_time": 180,
 *       "outputs": [{
 *           "label": "hls1080p",
 *           "live_stream": true,
 *           "height": 1080,
 *           "video_bitrate": 3000,
 *           "segment_seconds": 6,
 *           "keyframe_interval": 90
 *       },{
 *           "label": "hls720p",
 *           "live_stream": true,
 *           "height": 720,
 *           "video_bitrate": 2000,
 *           "segment_seconds": 6,
 *           "keyframe_interval": 90
 *       },{
 *           "label": "AudioOnly",
 *           "live_stream": true,
 *           "skip_video": true
 *       },{
 *           "label": "playlistVideoALL",
 *           "type": "playlist",
 *           "streams": [{"source": "hls1080p"},{"source": "hls720p"}]
 *       },{
 *           "label": "playlistHIGH",
 *           "type": "playlist",
 *           "filename":"playlist-high.m3u8",
 *           "streams": [{"source": "hls1080p"}]
 *       },{
 *           "label": "playlistAudio",
 *           "type": "playlist",
 *           "filename":"playlist-audio.m3u8",
 *           "streams": [{"source": "AudioOnly"}]
 *       },{
 *           "url":"s3://YOUR_BUCKET/PATH/20160804104116_test.mp4",
 *           "credentials": "S3_CREDENTIALS"
 *       }]
 *    }
 *
 * @apiParamExample {json} Live Stream with a Multiple CDN Config Example:
 *     // When using your own FTP or S3 origin location,
 *     // your CDN must be configured to fallback to your origin location.
 *     // The Brightcove Live system will not validate that the origin locations
 *     // for the CDN’s provided in the job request.
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 30,
 *        "add_cdns":[
 *            {
 *                "label": "akamai",
 *                "prepend": "akamai.playback.com/someApplication",
 *                "protocol": "http"
 *            },
 *            {
 *                "label": "level3_1",
 *                "prepend": "l3.playback.io/somPath/someApplication/someFolder",
 *                "protocol": "http"
 *            }
 *        ],
 *        "outputs": [
 *            {
 *                "label": "hls1",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls2",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 *
 *
 * @apiParamExample {json} Live Stream with SSAI and VOD output Example:
 *    {
 *            "ad_insertion": true,
 *            "live_stream": true,
 *            "region": "my-region-list,
 *            "reconnect_time": 180,
 *            "slate": "bbbff5ad67a94941be8cb987ba23049d",
 *            "notifications": [
 *                "http://httpbin.org/post"
 *            ],
 *            "add_cdns":[{
 *                "label": "akamai-test",
 *                "prepend": "vrnginx-useast.akamai.com",
 *                "protocol": "http"
 *            }],
 *            "outputs": [
 *                {
 *                    "label": "hls720p",
 *                    "live_stream": true,
 *                    "height": 720,
 *                    "video_bitrate": 2400,
 *                    "segment_seconds": 6,
 *                    "keyframe_interval": 90
 *                },{
 *                    "label": "hls480p",
 *                    "live_stream": true,
 *                    "height": 480,
 *                    "video_bitrate": 1000,
 *                    "segment_seconds": 6,
 *                    "keyframe_interval": 90
 *                }, {
 *                "url":"s3://YOUR_BUCKET/live/20160403004644_test.mp4",
 *                "credentials": "YOUR_CREDENTIALS"
 *            }]
 *    }
 *
 * @apiParamExample {json} Standard Live Stream with Internal Encryption Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration": 30,
 *        "encryption": {
 *            "method": "aes-128",
 *            "type": "internal",
 *            "key":"01234567890123450123456789012345"
 *        }
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Standard Live Stream with Internal Encryption and Passphrase Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration": 30,
 *        "encryption": {
 *            "method": "aes-128",
 *            "type": "internal",
 *            "passphrase": "SuperSecret
 *        }
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Standard Live Stream with Internal Encryption and Rotation Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration": 30,
 *        "encryption": {
 *            "method": "aes-128",
 *            "type": "internal",
 *            "rotate_every": 5,
 *            "key_rotation": true,
 *        }
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Standard Live Stream with External URL and Key Example:
 *    {
 *        "live_stream": true,
 *        "region": "my-region-list",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration": 30,
 *        "encryption": {
 *            "method": "aes-128",
 *            "type": "external",
 *            "key": "01234567890123456789012345678901",
 *            "external_url": "https://myserver/mykey/a.key"
 *        }
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 *
 * @apiSuccess (Response Fields) {String} id Id for the stream.
 * @apiSuccess (Response Fields) {Object[]} outputs Details on each output rendition of the Live job.
 * @apiSuccess (Response Fields) {String} outputs.id The unique id for the rendition.
 * @apiSuccess (Response Fields) {String} outputs.playback_url Media HLS manifest for the specified rendition (non-SSAI).
 * @apiSuccess (Response Fields) {String} outputs.playback_url_dvr Media HLS manifest with a configurable DVR window. Default 100 seconds (non-SSAI).
 * @apiSuccess (Response Fields) {String} outputs.playback_url_vod Media HLS manifest of the Live stream for the last 24 hours. (non-SSAI).
 * @apiSuccess (Response Fields) {Boolean} live_stream Indicates that the job is a live streaming job.
 * @apiSuccess (Response Fields) {Boolean} [ad_insertion=false] Setting this parameter to true will enable server side ad insertion (SSAI) on the job. Current support includes, DFP, Freewheel, or any VAST 2.0/3.0 ad tags.
 * @apiSuccess (Response Fields) {String} region You can specify an Amazon AWS region to use for encoding a job and we will process the job on servers in the region specified. It’s recommended to use the region closest to your encoder.
 * @apiSuccess (Response Fields) {Number} [reconnect_time=30] The time, in seconds, to wait for a stream to reconnect to the encoder. Default is set to 30 seconds.
 * @apiSuccess (Response Fields) {Number} [event_length=0] The minimum time, in seconds, to keep a live stream available. At any point within the specified event_length you may reconnect to your stream. The event_length setting goes into effect as soon as streaming begins.
 * @apiSuccess (Response Fields) {Number} [live_sliding_window_duration=100] The time, in seconds, to keep in the live DVR manifest. If the stream duration is longer than the window duration, segment references will be removed first in first out. Default is 100 seconds.
 * @apiSuccess (Response Fields) {Number} [max_hls_protocol_version=3] Sets the maximum HLS protocol version to use. Special features will be used as available. Default is 3.
 * @apiSuccess (Response Fields) {mixed[]} [notifications] Array of notification destination objects or strings.  A notification will be sent to the destination when selected event occurs. You can use a simple string with a url: "http://log:pass@httpbin.org/post", or you can use an object.
 * @apiSuccess (Response Fields) {String} notifications.url Destination for the notification.
 * @apiSuccess (Response Fields) {String} [notifications.credentials] Credentials for the destination, if required.
 * @apiSuccess (Response Fields) {String} [notifications.event="state_changed"] Event type to send notifications for.  It’s recommended to set events on the job and not individual rendition outputs since renditions will finish simultaneously.
 * @apiSuccess (Response Fields) {Object[]} [add_cdns] Array of additional CDN providers to be used for manifest generation. For each CDN provided, the manifest will be prepended accordingly
 * @apiSuccess (Response Fields) {String} add_cdns.label A lable to identify the CDN.
 * @apiSuccess (Response Fields) {String} add_cdns.prepend Typically, a domain or path to prepend to addresses
 * @apiSuccess (Response Fields) {String} add_cdns.protocol Protocol to use in sending the stream to the CDN.
 *
 * @apiSuccessExample {json} Success Response Standard Live Stream:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "edb92295e0f744f088f473ac047538c3",
 *      "outputs": [
 *        {
 *          "id": "0-edb92295e0f744f088f473ac047538c3",
 *          "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist_dvr.m3u8",
 *          "playback_url_vod": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist_vod.m3u8",
 *          "label": "hls720p"
 *        },
 *        {
 *          "id": "1-edb92295e0f744f088f473ac047538c3",
 *          "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist_dvr.m3u8",
 *          "playback_url_vod": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist_vod.m3u8",
 *          "label": "hls480p"
 *        },
 *        {
 *          "id": "2-edb92295e0f744f088f473ac047538c3",
 *          "playlist_type": "defaultS3",
 *          "type": "playlist",
 *          "filename": "playlist.m3u8",
 *          "dvr_filename": "playlist_dvr.m3u8",
 *          "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist_dvr.m3u8"
 *        }
 *      ],
 *      "stream_url": "rtmp://ep4-usw2.bcovlive.io:1935/edb92295e0f744f088f473ac047538c3",
 *      "stream_name": "alive",
 *      "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist.m3u8",
 *      "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist_dvr.m3u8"
 *    }
 *
 * @apiSuccessExample {json} Success Response Live Stream with Multiple Output Playlists:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "edcd4d356228417d80345a0c91864efe",
 *      "outputs": [
 *        {
 *          "id": "0-edcd4d356228417d80345a0c91864efe",
 *          "label": "hls1080p"
 *        },
 *        {
 *          "id": "1-edcd4d356228417d80345a0c91864efe",
 *          "label": "hls720p"
 *        },
 *        {
 *          "id": "2-edcd4d356228417d80345a0c91864efe",
 *          "label": "AudioOnly"
 *        },
 *        {
 *          "id": "3-edcd4d356228417d80345a0c91864efe",
 *          "playlist_type": "defaultS3",
 *          "type": "playlist",
 *          "label": "playlistVideoALL",
 *          "filename": "8b31bafdb20d462ea2e6e336a67ed4f3.m3u8",
 *          "dvr_filename": "8b31bafdb20d462ea2e6e336a67ed4f3_dvr.m3u8",
 *          "streams": [
 *            "hls1080p",
 *            "hls720p"
 *          ],
 *          "playback_url": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/8b31bafdb20d462ea2e6e336a67ed4f3.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/8b31bafdb20d462ea2e6e336a67ed4f3_dvr.m3u8",
 *          "playback_url_s3": "s3://BUCKET/edcd4d356228417d80345a0c91864efe/us-west-2/8b31bafdb20d462ea2e6e336a67ed4f3.m3u8"
 *        },
 *        {
 *          "id": "4-edcd4d356228417d80345a0c91864efe",
 *          "playlist_type": "defaultS3",
 *          "type": "playlist",
 *          "label": "playlistHIGH",
 *          "filename": "playlist-high.m3u8",
 *          "dvr_filename": "playlist-high_dvr.m3u8",
 *          "streams": [
 *            "hls1080p"
 *          ],
 *          "playback_url": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/playlist-high.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/playlist-high_dvr.m3u8",
 *          "playback_url_s3": "s3://BUCKET/edcd4d356228417d80345a0c91864efe/us-west-2/playlist-high.m3u8"
 *        },
 *        {
 *          "id": "5-edcd4d356228417d80345a0c91864efe",
 *          "playlist_type": "defaultS3",
 *          "type": "playlist",
 *          "label": "playlistAudio",
 *          "filename": "playlist-audio.m3u8",
 *          "dvr_filename": "playlist-audio_dvr.m3u8",
 *          "streams": [
 *            "AudioOnly"
 *          ],
 *          "playback_url": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/playlist-audio.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/playlist-audio_dvr.m3u8",
 *          "playback_url_s3": "s3://BUCKET/edcd4d356228417d80345a0c91864efe/us-west-2/playlist-audio.m3u8"
 *        }
 *      ],
 *      "stream_url": "rtmp://host/edcd4d356228417d80345a0c91864efe",
 *      "stream_name": "alive",
 *      "playback_url": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/8b31bafdb20d462ea2e6e336a67ed4f3.m3u8",
 *      "playback_url_dvr": "http://playback.bcovlive.io/edcd4d356228417d80345a0c91864efe/us-west-2/8b31bafdb20d462ea2e6e336a67ed4f3_dvr.m3u8",
 *      "playback_url_s3": "s3://BUCKET/edcd4d356228417d80345a0c91864efe/us-west-2/8b31bafdb20d462ea2e6e336a67ed4f3.m3u8",
 *    }
 *
 * @apiSuccessExample {json} Success Response Live Stream with a Multiple CDN Config:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "b3c20e416f964fb1b67334877bade99b",
 *      "outputs": [
 *        {
 *          "id": "0b3c20e416f964fb1b67334877bade99b",
 *          "playback_url": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_dvr.m3u8",
 *          "playback_url_vod": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_vod.m3u8",
 *          "playback_added_cdns": [
 *            {
 *              "label": "akamai",
 *              "playback_url": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist.m3u8",
 *              "playback_url_dvr": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_dvr.m3u8",
 *              "playback_url_vod": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_vod.m3u8"
 *            },
 *            {
 *              "label": "level3_1",
 *              "playback_url": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist.m3u8",
 *              "playback_url_dvr": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_dvr.m3u8",
 *              "playback_url_vod": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_vod.m3u8"
 *            }
 *          ],
 *          "label": "hls1"
 *        },
 *        {
 *          "id": "1b3c20e416f964fb1b67334877bade99b",
 *          "playback_url": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist_dvr.m3u8",
 *          "playback_url_vod": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist_vod.m3u8",
 *          "playback_added_cdns": [
 *            {
 *              "label": "akamai",
 *              "playback_url": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist.m3u8",
 *              "playback_url_dvr": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist_dvr.m3u8",
 *              "playback_url_vod": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist_vod.m3u8"
 *            },
 *            {
 *              "label": "level3_1",
 *              "playback_url": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist.m3u8",
 *              "playback_url_dvr": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist_dvr.m3u8",
 *              "playback_url_vod": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_1/chunklist_vod.m3u8"
 *            }
 *          ],
 *          "label": "hls2"
 *        }
 *      ],
 *      "stream_url": "rtmp://ep16-usw2.a-live.io:1935/b3c20e416f964fb1b67334877bade99b",
 *      "stream_name": "alive",
 *      "playback_url": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/playlist.m3u8",
 *      "playback_url_dvr": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/playlist_dvr.m3u8",
 *      "playback_url_vod": "http://playback.bcovlive.io/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_vod.m3u8",
 *      "playback_added_cdns": [
 *        {
 *          "label": "akamai",
 *          "playback_url": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/playlist.m3u8",
 *          "playback_url_dvr": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/playlist_dvr.m3u8",
 *          "playback_url_vod": "http://akamai.playback.com/someApplication/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_vod.m3u8"
 *        },
 *        {
 *          "label": "level3_1",
 *          "playback_url": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/playlist.m3u8",
 *          "playback_url_dvr": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/playlist_dvr.m3u8",
 *          "playback_url_vod": "http://l3.playback.io/somPath/someApplication/someFolder/b3c20e416f964fb1b67334877bade99b/us-west-2/profile_0/chunklist_vod.m3u8"
 *        }
 *      ]
 *    }
 *
 *
 * @apiSuccessExample {json} Success Response Live Stream with SSAI and VOD output:
 *    HTTP/1.1 200 OK
 *    {
 *       "id": "3158f1c9bc5c462182079f434ba4ae0a",
 *       "outputs": [
 *          {
 *             "id": "03158f1c9bc5c462182079f434ba4ae0a",
 *             "playback_url":"http://host/jobId/us-west-2/profile_0/chunklist.m3u8",
 *             "Playback_url_dvr": "http://host/jobId/us-west-2/profile_0/chunklist_dvr.m3u8",
 *             "playback_url_vod": "http://host/jobId/us-west-2/profile_0/chunklist_vod.m3u8",
 *             "label": "Out0"
 *          },
 *          {
 *             "id": "13158f1c9bc5c462182079f434ba4ae0a",
 *             "playback_url": "http://host/jobId/us-west-2/profile_1/chunklist.m3u8",
 *             "playback_url_dvr": "http://host/jobId/us-west-2/profile_1/chunklist_dvr.m3u8",
 *             "playback_url_vod": "http://host/jobId/us-west-2/profile_1/chunklist_vod.m3u8",
 *             "label": "Out1"
 *          },
 *          {
 *             "id": "23158f1c9bc5c462182079f434ba4ae0a",
 *             "playback_url": "http://host/jobId/us-west-2/profile_2/chunklist.m3u8",
 *             "playback_url_dvr": "http://host/jobId/us-west-2/profile_2/chunklist_dvr.m3u8",
 *             "playback_url_vod": "http://host/jobId/us-west-2/profile_2/chunklist_vod.m3u8",
 *             "label": "Out2"
 *          }
 *       ],
 *       "stream_url": "rtmp://ep6-usw2.a-live.io:1935/3158f1c9bc5c462182079f434ba4ae0a",
 *       "stream_name": "alive",
 *       "playback_url": "http://host/jobId/us-west-2/playlist.m3u8",
 *       "playback_url_dvr": "http://host/jobId/us-west-2/playlist_dvr.m3u8"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your key is correct
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "NOT_FOUND",
 *            "message": "Requested resource does not exist",
 *            "request_id": "df35af83-ac9b-44b0-b172-a80a11bd0bfa"
 *        }
 *    ]
 *
 *
 */

 // Stop Live Job

 /**
  * @api {put} /v1/jobs/:jobId/cancel Stop a Live Job
  * @apiName Stop Live Job
  * @apiGroup Jobs
  * @apiVersion 2.0.0
  *
  * @apiDescription Stop a live stream
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {String} jobId The job id for the stream you want to stop.
  *
  * @apiParamExample {url} Live Stream Custom Origin Example:
  *     https://api.bcovlive.io/v1/jobs/3158f1c9bc5c462182079f434ba4ae0a/cancel
  *
  * @apiSuccess (Response Fields) {String} id The job id for the stream that was stopped
  *
  * @apiSuccessExample {json} Success Response Stop a Live Stream:
  *    HTTP/1.1 200 OK
  *    {
  *        "id": "3158f1c9bc5c462182079f434ba4ae0a"
  *    }
  *
  */

// Get Live Job Details

 /**
  * @api {get} /v1/jobs/:jobId Get Live Job Details
  * @apiName Get Live Job Details
  * @apiGroup Jobs
  * @apiVersion 2.0.0
  *
  * @apiDescription Get Live Job Details
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {String} jobId The job id you want details for.
  *
  * @apiParamExample {url} Live Stream Custom Origin Example:
  *     https://api.bcovlive.io/v1/jobs/3158f1c9bc5c462182079f434ba4ae0a
  *
  * @apiSuccess (Response Fields) {Object} job Object containing the job details
  * @apiSuccess (Response Fields) {DateTimeString} job.created_at ISO 8601 date-time string representing when the job was created
  * @apiSuccess (Response Fields) {DateTimeString} job.finished_at ISO 8601 date-time string representing when the live stream was stopped
  * @apiSuccess (Response Fields) {String} job.id The live job id
  * @apiSuccess (Response Fields) {Boolean} job.privacy `TODO`
  * @apiSuccess (Response Fields) {String} job.state The current state of the job
  * @apiSuccess (Response Fields) {DateTimeString} job.submitted_at ISO 8601 date-time string representing when the job was submitted
  * @apiSuccess (Response Fields) {Boolean} job.test `TODO`
  * @apiSuccess (Response Fields) {DateTimeString} job.updated_at ISO 8601 date-time string representing when the job was last modified
  * @apiSuccess (Response Fields) {String} job.region The Amazon AWS region to use for encoding the job
  * @apiSuccess (Response Fields) {Number} job.reconnect_time The time, in seconds, that the system will wait for a stream to reconnect to the encoder
  * @apiSuccess (Response Fields) {Number} job.event_length The time, in seconds, that the system will keep the live stream available
  * @apiSuccess (Response Fields) {Number} job.live_sliding_window_duration The time, in seconds, kept in the live DVR manifest
  * @apiSuccess (Response Fields) {Boolean} job.live_stream Indicates whether this is a live stream or VOD
  * @apiSuccess (Response Fields) {Boolean} job.ad_insertion Indicates whether SSAI is enabled
  * @apiSuccess (Response Fields) {Boolean} job.metadata_passthrough `TODO`
  * @apiSuccess (Response Fields) {Number} job.out_worker_bytes `TODO`
  * @apiSuccess (Response Fields) {Number} job.out_worker_bytes_rate `TODO`
  * @apiSuccess (Response Fields) {String} job.playback_url Playback URL for the live stream
  * @apiSuccess (Response Fields) {String} job.playback_url_dvr Playback URL for the live DVR
  * @apiSuccess (Response Fields) {Object} job.input_media_file Object containing properties for the input media file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.audio_bitrate_in_kbps Audio bitrate of the input media file
  * @apiSuccess (Response Fields) {String} job.input_media_file.audio_codec Audio codec of the input media file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.audio_sample_rate Audio sample rate of the input media file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.audio_tracks The number of audio tracks
  * @apiSuccess (Response Fields) {Number} job.input_media_file.channels The number of audio channels
  * @apiSuccess (Response Fields) {DateTimeString} job.input_media_file.created_at ISO 8601 date-time string representing when the input file was created
  * @apiSuccess (Response Fields) {Number} job.input_media_file.duration_in_ms duration_in_ms.
  * @apiSuccess (Response Fields) {String} job.input_media_file.error_class Type of error thrown
  * @apiSuccess (Response Fields) {String} job.input_media_file.error_message Error message thrown
  * @apiSuccess (Response Fields) {Number} job.input_media_file.file_size_bytes File size
  * @apiSuccess (Response Fields) {DateTimeString} job.input_media_file.finished_at ISO 8601 date-time string representing when the input file was finished
  * @apiSuccess (Response Fields) {String} job.input_media_file.format Format of the input file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.frame_rate Frame rate of the input file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.height Frame height of the input file
  * @apiSuccess (Response Fields) {String} job.input_media_file.id System id of the input file
  * @apiSuccess (Response Fields) {String} job.input_media_file.md5_checksum Checksum for the input file
  * @apiSuccess (Response Fields) {Boolean} job.input_media_file.privacy `TODO`
  * @apiSuccess (Response Fields) {String} job.input_media_file.state Current state of input file processing
  * @apiSuccess (Response Fields) {Boolean} job.input_media_file.test `TODO`
  * @apiSuccess (Response Fields) {DateTimeString} job.input_media_file.updated_at ISO 8601 date-time string representing when the input file was last modified
  * @apiSuccess (Response Fields) {Number} job.input_media_file.video_bitrate_in_kbps Video bitrate of the input media file
  * @apiSuccess (Response Fields) {String} job.input_media_file.video_codec Video codec of the input media file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.width Frame width of the input media file
  * @apiSuccess (Response Fields) {Number} job.input_media_file.total_bitrate_in_kbps Total bitrate of the input media file
  * @apiSuccess (Response Fields) {String} job.input_media_file.url URL for the input media file
  * @apiSuccess (Response Fields) {Object} job.stream Object containing properties for the live stream
  * @apiSuccess (Response Fields) {DateTimeString} job.stream.created_at ISO 8601 date-time string representing when the stream was created
  * @apiSuccess (Response Fields) {Number} job.stream.duration ISO Duration of the stream in seconds
  * @apiSuccess (Response Fields) {DateTimeString} job.stream.finished_at ISO 8601 date-time string representing when the stream was finished
  * @apiSuccess (Response Fields) {Number} job.stream.height Frame height of the stream
  * @apiSuccess (Response Fields) {String} job.stream.id System id of the stream
  * @apiSuccess (Response Fields) {String} job.stream.name Name of the stream
  * @apiSuccess (Response Fields) {String} job.stream.protocol Protocol of the stream
  * @apiSuccess (Response Fields) {Boolean} job.stream.test `TODO`
  * @apiSuccess (Response Fields) {DateTimeString} job.stream.updated_at ISO 8601 date-time string representing when the stream was last modified
  * @apiSuccess (Response Fields) {Number} job.stream.video_bitrate_in_kbps Video bitrate of the input media file
  * @apiSuccess (Response Fields) {String} job.stream.video_codec Video codec of the input media file
  * @apiSuccess (Response Fields) {Number} job.stream.width Frame width of the stream
  * @apiSuccess (Response Fields) {Number} job.stream.total_bitrate_in_kbps Total bitrate of the stream
  * @apiSuccess (Response Fields) {String} job.stream.region AWS region list specified for the account
  * @apiSuccess (Response Fields) {String} job.stream.url URL for the stream
  * @apiSuccess (Response Fields) {Object} job.stream.location Object representing the location of the stream
  * @apiSuccess (Response Fields) {Object} job.stream.location.source Object representing the location source of the stream
  * @apiSuccess (Response Fields) {Object} job.stream.location.source.latitude `TODO`
  * @apiSuccess (Response Fields) {Object} job.stream.location.source.longitude `TODO`
  * @apiSuccess (Response Fields) {Object} job.stream.location.source.location `TODO`
  * @apiSuccess (Response Fields) {Object} job.stream.destination Object representing the destination of the stream
  * @apiSuccess (Response Fields) {Object} job.stream.destination.source Object representing the destination source of the stream
  * @apiSuccess (Response Fields) {Object} job.stream.destination.source.latitude `TODO`
  * @apiSuccess (Response Fields) {Object} job.stream.destination.source.longitude `TODO`
  * @apiSuccess (Response Fields) {Object} job.stream.destination.source.location `TODO`
  * @apiSuccess (Response Fields) {Number} job.stream.in_worker_bytes `TODO`
  * @apiSuccess (Response Fields) {Number} job.stream.in_worker_bytes_rate `TODO`
  * @apiSuccess (Response Fields) {Object[]} job.output_media_files Array of objects containing properties for the output media files
  * @apiSuccess (Response Fields) {Number} job.output_media_files.audio_bitrate_in_kbps Audio bitrate of the output media file
  * @apiSuccess (Response Fields) {String} job.output_media_files.audio_codec Audio codec of the output media file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.audio_sample_rate Audio sample rate of the output media file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.audio_tracks The number of audio tracks
  * @apiSuccess (Response Fields) {Number} job.output_media_files.channels The number of audio channels
  * @apiSuccess (Response Fields) {DateTimeString} job.output_media_files.created_at ISO 8601 date-time string representing when the output file was created
  * @apiSuccess (Response Fields) {Number} job.output_media_files.duration_in_ms ISO 8601 date-time string representing when the output file was created
  * @apiSuccess (Response Fields) {String} job.output_media_files.error_class Type of error thrown
  * @apiSuccess (Response Fields) {String} job.output_media_files.error_message Error message thrown
  * @apiSuccess (Response Fields) {Number} job.output_media_files.file_size_bytes File size
  * @apiSuccess (Response Fields) {DateTimeString} job.output_media_files.finished_at ISO 8601 date-time string representing when the output file was finished
  * @apiSuccess (Response Fields) {String} job.output_media_files.format Format of the output file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.fragment_duration_in_ms `TODO`
  * @apiSuccess (Response Fields) {Number} job.output_media_files.frame_rate Frame rate of the output file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.height Frame height of the output file
  * @apiSuccess (Response Fields) {String} job.output_media_files.id System id of the output file
  * @apiSuccess (Response Fields) {String} job.output_media_files.md5_checksum Checksum for the output file
  * @apiSuccess (Response Fields) {Boolean} job.output_media_files.privacy `TODO`
  * @apiSuccess (Response Fields) {String} job.output_media_files.rfc_6381_audio_codec `TODO`
  * @apiSuccess (Response Fields) {String} job.output_media_files.rfc_6381_video_codec `TODO`
  * @apiSuccess (Response Fields) {String} job.output_media_files.state Current state of output file processing
  * @apiSuccess (Response Fields) {Boolean} job.output_media_files.test `TODO`
  * @apiSuccess (Response Fields) {DateTimeString} job.output_media_files.updated_at ISO 8601 date-time string representing when the output file was last modified
  * @apiSuccess (Response Fields) {Number} job.output_media_files.video_bitrate_in_kbps Video bitrate of the output media file
  * @apiSuccess (Response Fields) {String} job.output_media_files.video_codec Video codec of the output media file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.width Frame width of the output media file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.total_bitrate_in_kbps Total bitrate of the output media file
  * @apiSuccess (Response Fields) {Number} job.output_media_files.keyframe_interval Keyframe interval for the output media file
  * @apiSuccess (Response Fields) {Boolean} job.output_media_files.keyframe_interval_follow_source Whether keyframe rate for the output matches the source
  * @apiSuccess (Response Fields) {Number} job.output_media_files.live_stream Whether the output is a live stream
  * @apiSuccess (Response Fields) {Boolean} job.output_media_files.keyframe_interval Keyframe interval for the output media file
  * @apiSuccess (Response Fields) {String} job.output_media_files.playback_url URL for the output file
  * @apiSuccess (Response Fields) {String} job.output_media_files.playback_url_dvr Live DVR url for live stream output
  * @apiSuccess (Response Fields) {String} job.output_media_files.playback_url_vod  URL for VOD output
  * @apiSuccess (Response Fields) {String} job.output_media_files.playlist_type Playlist type for playlist output
  * @apiSuccess (Response Fields) {String} job.output_media_files.type Will be `playlist` for playlist output
  * @apiSuccess (Response Fields) {String} job.output_media_files.filename File name for the playlist manifest
  * @apiSuccess (Response Fields) {String} job.output_media_files.dvr_filename File name for the DVR playlist manifest
  *
  * @apiSuccessExample {json} Success Response Get Live Job Details:
  *    HTTP/1.1 200 OK
  *    {
  *      "job": {
  *        "created_at": "2016-11-06T20:12:46.571Z",
  *        "finished_at": "2016-11-06T20:43:16.063Z",
  *        "id": "edb92295e0f744f088f473ac047538c3",
  *        "privacy": false,
  *        "state": "finished",
  *        "submitted_at": "2016-11-06T20:12:46.571Z",
  *        "test": false,
  *        "updated_at": "2016-11-06T20:42:55.980Z",
  *        "region": "my-region-list,
  *        "reconnect_time": 20,
  *        "event_length": 0,
  *        "live_sliding_window_duration": 30,
  *        "live_stream": true,
  *        "ad_insertion": false,
  *        "metadata_passthrough": false,
  *        "out_worker_bytes": 0,
  *        "out_worker_bytes_rate": 0,
  *        "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist.m3u8",
  *        "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist_dvr.m3u8",
  *        "input_media_file": {
  *          "audio_bitrate_in_kbps": null,
  *          "audio_codec": null,
  *          "audio_sample_rate": null,
  *          "audio_tracks": null,
  *          "channels": null,
  *          "created_at": "2016-11-06T20:12:46.571Z",
  *          "duration_in_ms": 1478464996063,
  *          "error_class": null,
  *          "error_message": null,
  *          "file_size_bytes": null,
  *          "finished_at": "2016-11-06T20:43:16.063Z",
  *          "format": null,
  *          "frame_rate": null,
  *          "height": null,
  *          "id": "input-edb92295e0f744f088f473ac047538c3",
  *          "md5_checksum": null,
  *          "privacy": false,
  *          "state": "finished",
  *          "test": false,
  *          "updated_at": "2016-11-06T20:42:55.980Z",
  *          "video_bitrate_in_kbps": null,
  *          "video_codec": null,
  *          "width": null,
  *          "total_bitrate_in_kbps": null,
  *          "url": null
  *        },
  *        "stream": {
  *          "created_at": null,
  *          "finished_at": "2016-11-06T20:43:16.063Z",
  *          "height": null,
  *          "id": "stream-edb92295e0f744f088f473ac047538c3",
  *          "name": "alive",
  *          "protocol": null,
  *          "state": null,
  *          "test": false,
  *          "updated_at": null,
  *          "width": null,
  *          "total_bitrate_in_kbps": null,
  *          "duration": 1478464996.063,
  *          "region": "my-region-list,
  *          "url": "rtmp://ep4-usw2.bcovlive.io:1935/edb92295e0f744f088f473ac047538c3",
  *          "location": {
  *            "source": {
  *              "latitude": null,
  *              "longitude": null,
  *              "location": null
  *            },
  *            "destination": {
  *              "latitude": null,
  *              "longitude": null,
  *              "location": null
  *            },
  *            "distance": null
  *          },
  *          "in_worker_bytes": 0,
  *          "in_worker_bytes_rate": 0
  *        },
  *        "output_media_files": [
  *          {
  *            "audio_bitrate_in_kbps": 196.608,
  *            "audio_codec": "AAC",
  *            "audio_sample_rate": null,
  *            "channels": null,
  *            "created_at": "2016-11-06T20:12:46.571Z",
  *            "duration_in_ms": 1478464996063,
  *            "error_class": null,
  *            "error_message": null,
  *            "file_size_bytes": null,
  *            "finished_at": "2016-11-06T20:43:16.063Z",
  *            "format": null,
  *            "fragment_duration_in_ms": null,
  *            "frame_rate": null,
  *            "height": 540,
  *            "id": "0-edb92295e0f744f088f473ac047538c3",
  *            "md5_checksum": null,
  *            "privacy": false,
  *            "rfc_6381_audio_codec": null,
  *            "rfc_6381_video_codec": null,
  *            "state": "finished",
  *            "test": false,
  *            "updated_at": "2016-11-06T20:42:55.980Z",
  *            "video_bitrate_in_kbps": 1887.232,
  *            "video_codec": "H.264",
  *            "video_codec_profile": "main",
  *            "width": 960,
  *            "label": "hls720p",
  *            "total_bitrate_in_kbps": 2083.84,
  *            "keyframe_interval": 60,
  *            "keyframe_interval_follow_source": false,
  *            "segment_seconds": 6,
  *            "live_stream": true,
  *            "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist.m3u8",
  *            "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist_dvr.m3u8",
  *            "playback_url_vod": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist_vod.m3u8"
  *          },
  *          {
  *            "audio_bitrate_in_kbps": 196.608,
  *            "audio_codec": "AAC",
  *            "audio_sample_rate": null,
  *            "channels": null,
  *            "created_at": "2016-11-06T20:12:46.571Z",
  *            "duration_in_ms": 1478464996063,
  *            "error_class": null,
  *            "error_message": null,
  *            "file_size_bytes": null,
  *            "finished_at": "2016-11-06T20:43:16.063Z",
  *            "format": null,
  *            "fragment_duration_in_ms": null,
  *            "frame_rate": null,
  *            "height": 360,
  *            "id": "1-edb92295e0f744f088f473ac047538c3",
  *            "md5_checksum": null,
  *            "privacy": false,
  *            "rfc_6381_audio_codec": null,
  *            "rfc_6381_video_codec": null,
  *            "state": "finished",
  *            "test": false,
  *            "updated_at": "2016-11-06T20:42:55.980Z",
  *            "video_bitrate_in_kbps": 838.656,
  *            "video_codec": "H.264",
  *            "video_codec_profile": "main",
  *            "width": 640,
  *            "label": "hls480p",
  *            "total_bitrate_in_kbps": 1035.264,
  *            "keyframe_interval": 60,
  *            "keyframe_interval_follow_source": false,
  *            "segment_seconds": 6,
  *            "live_stream": true,
  *            "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist.m3u8",
  *            "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist_dvr.m3u8",
  *            "playback_url_vod": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist_vod.m3u8"
  *          },
  *          {
  *            "playlist_type": "defaultS3",
  *            "type": "playlist",
  *            "filename": "playlist.m3u8",
  *            "dvr_filename": "playlist_dvr.m3u8",
  *            "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist.m3u8",
  *            "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist_dvr.m3u8"
  *          }
  *        ]
  *      }
  *    }
  *
  */

// Manual Ad Cue Point Insertion

/**
  * @api {post} /v1/jobs/:jobId/cuepoint Manual Ad Cue Point Insertion
  * @apiName Manual Ad Cue Point Insertion
  * @apiGroup Jobs
  * @apiVersion 2.0.0
  *
  * @apiDescription Inserts a manual Cue-Out with a duration to the Live ingest point.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {String} jobId The job id you want details for.
  * @apiParam (Request Body Fields) {Number} duration An integer value to indicate the length of the ad break in seconds.
  *
  * @apiParamExample {json} Live Stream Cuepoint Insertion Request Body Example:
  *    {
  *       "duration":30
  *    }
  *
  * @apiSuccess (Response Fields) {String} live_job_id The id of the live stream job
  * @apiSuccess (Response Fields) {Boolean} inserted Whether the cuepoint was successfully inserted
  *
  */
