// Create a VOD Clip by Duration from Live

/**
  * @api {post} /v1/vods Create VOD Clip
  * @apiName Create VOD Clip
  * @apiGroup Clips
  * @apiVersion 1.0.0
  *
  * @apiDescription Create VOD clips from a Live Stream.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (Request Body Fields) {String} live_job_id The id of Live Stream job to create the VOD clip from.
  * @apiParam (Request Body Fields) {Object[]} outputs Array of VOD outputs
  * @apiParam (Request Body Fields) {String} outputs.label Label for the output
  * @apiParam (Request Body Fields) {Number} outputs.duration Duration of the clip in seconds
  * @apiParam (Request Body Fields) {Number} outputs.stream_start_time Start time in seconds for the clip relative to the start time of the live stream
  * @apiParam (Request Body Fields) {Number} outputs.stream_end_time End time in seconds for the clip relative to the start time of the live stream
  * @apiParam (Request Body Fields) {Number} outputs.stream_start_timecode Start for the clip as an SMPTE timecode for the live stream
  * @apiParam (Request Body Fields) {Number} outputs.stream_end_timecode End for the clip as an SMPTE timecode for the live stream
  * @apiParam (Request Body Fields) {Number} outputs.start_time Start time for the clip in Epoch (Unix) time (seconds)
  * @apiParam (Request Body Fields) {Number} outputs.end_time End time for the clip in Epoch (Unix) time (seconds)
  * @apiParam (Request Body Fields) {String} outputs.url URL for the clip
  * @apiParam (Request Body Fields) {String} outputs.credentials The name of the credentials configured in your account for this address - A credential label for a valid client id + client secret should have been created when your Live account was set up, the credential label sent to you. If you do not have it, please <a href="https://help.brightcove.com/en/contact">Contact Brightcove Support</a>
  * @apiParam (Request Body Fields) {Object} outputs.videocloud An object containing inputs for Video Cloud ingestion
  * @apiParam (Request Body Fields) {Object} outputs.videocloud.video An object containing inputs for Video Cloud video object creation - see the [CMS API Reference](https://brightcovelearning.github.io/Brightcove-API-References/cms-api/v1/doc/index.html#api-videoGroup-Create_Video)
  * @apiParam (Request Body Fields) {Object} outputs.videocloud.ingest An object containing inputs for Video Cloud video ingestion - see the [Dynamic Ingest Reference](https://brightcovelearning.github.io/Brightcove-API-References/dynamic-ingest-api/v1/doc/index.html#api-Ingest-Ingest_Media_Asset) - do **not** include the `master` field, as that information will be provided by the Live API
  *
  * @apiParamExample {json} Create a VOD Clip by Duration from Live Request Body Example:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "last 60 secs of live job",
  *                "duration": 60,
  *                "url": "ftp://log:pass@yourftpserver.com:21/live/test_dur60.mp4"
  *            }
  *        ]
  *    }
  *
  * @apiParamExample {json} Create a VOD Clip by an Offset from the Start Request Body Example:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "60 secs by stream from min 2 to min 3",
  *                "stream_start_time": 120,
  *                "stream_end_time": 180,
  *                "url": "ftp://yourftpserver.com/live/test_stream_min2to3.mp4",
  *                "credentials": "YOUR_CREDENTIALS"
  *            }
  *        ]
  *    }
  *
  * @apiParamExample {json} Create a VOD Clip by Unix Epoch time:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "60 secs by timestamp”,
  *                "start_time": 1471375580,
  *                "end_time": 1471375640,
  *                "url": "s3://yourS3bucket/live/test_stream_timestamp.mp4",
  *                "credentials": "YOUR_CREDENTIALS"
  *            }
  *        ]
  *    }
  *
  * @apiParamExample {json} Create a VOD Clip by duration:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "last 60 secs if live job",
  *                "duration": 60,
  *                "credentials": "VC_CREDENTIALS",
  *                "videocloud": {
  *                    "video": {
  *                        "name": "TEST"
  *                    },
  *                    "ingest": { }
  *                }
  *            }
  *        ]
  *    }
  *
  * @apiParamExample {json} Create a VOD Clip by stream timecodes:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "Clipping using Timecode from-01:10:18:15 to-01:11:08:15",
  *                "stream_start_timecode": "01:10:18:15",
  *                "stream_end_timecode": "01:11:08:15",
  *                "credentials": "VC_CREDENTIALS",
  *                "videocloud": {
  *                    "video": {
  *                        "name": "One Minute Clip",
  *                        "tags": ["live", "clip"]
  *                    },
  *                    "ingest": {
  *                        "profile": "high-resolution",
  *                        "capture-images": true
  *                    }
  *                },
  *                "notifications": ["http://myserver.com/api/notification_listener?type=jvod"]
  *            }
  *        ]
  *    }
  *
  * @apiSuccess (Response Fields) {Object} vod_jobs The clip response object
  * @apiSuccess (Response Fields) {String} vod_jobs.jvod_id The clip job id
  * @apiSuccess (Response Fields) {String} vod_jobs.label The clip label (from the input)
  * @apiSuccess (Response Fields) {String} live_job_id The clip label (from the input)
  *
  * @apiSuccessExample {json} Creation of a clip
  *    {
  *      "vod_jobs": [
  *        {
  *          "jvod_id": "9582606c50d84be5ad4bc104f2aa3360",
  *          "label": "last 60 secs of live job"
  *        }
  *      ],
  *      "live_job_id": "88ba5d87b61a4ef3a6dddabd0c38d319"
  *    }
  *
  * @apiError (Error 4xx) {json} BAD REQUEST 400: Invalid input value - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 4xx) {json} BAD REQUEST 400: The notification target type is not supported currently - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Unauthorized - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 5xx) {json} INTERNAL SERVER ERROR 500: DB getItem, no results found - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  *
  *
  */
