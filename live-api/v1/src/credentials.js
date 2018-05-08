// List Credentials

/**
  * @api {get} /v1/credentials List Credentials
  * @apiName List Credentials
  * @apiGroup Credentials
  * @apiVersion 1.0.0
  *
  * @apiDescription This endpoint can be used to get user credentials for a given user provided one has an API key.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  *
  * @apiParamExample {String} List Credentials Example:
  *    https://api.bcovlive.io/v1/credentials
  *
  *
  * @apiSuccess (200) {Object} user_id The user's id
  * @apiSuccess (200) {Object[]} credentials Array of credentials objects
  * @apiSuccess (200) {String} vod_jobs.label The clip label (from the input)
  * @apiSuccess (200) {String} live_job_id The clip label (from the input)
  *
  * @apiSuccessExample {Object} Creation of a clip
  {
  	"user_id": "c2691d4d039040be96c190a949d754a7",
  	"credentials": [
  		{
  			"credential_default_for_type": true,
  			"user_id": "c2691d4d039040be96c190a949d754a7",
  			"credential_private": "*************",
  			"credential_type": "videocloud",
  			"credential_label": "bc-rcrooks-vc",
  			"credential_id": "cbdd669730aa4ecfa34a74913df32026",
  			"credential_public": "553d4903-4547-435d-944c-2c8e2f6abc5d"
  		},
  		{
  			"credential_default_for_type": true,
  			"user_id": "c2691d4d039040be96c190a949d754a7",
  			"credential_type": "oauth",
  			"credential_label": "bcls-oauth",
  			"credential_private": "************ey",
  			"oauth_settings": {
  				"url": "https://api.bcovlive.io/oauth/authorize"
  			},
  			"credential_id": "ac0f35e240b24081b38ba3e5f040536e",
  			"credential_public": "secret-client"
  		},
  		{
  			"credential_default_for_type": false,
  			"user_id": "c2691d4d039040be96c190a949d754a7",
  			"credential_type": "oauth",
  			"credential_label": "rcrooks-oauth",
  			"credential_private": "************ey",
  			"oauth_settings": {
  				"url": "https://api-mocks.a-live.io/oauth/authorize"
  			},
  			"credential_id": "85bc309ce70049b2b0659e4c0ef85432",
  			"credential_public": "secret-client"
  		},
  		{
  			"credential_default_for_type": false,
  			"user_id": "c2691d4d039040be96c190a949d754a7",
  			"credential_type": "videocloud",
  			"credential_label": "BCLearning",
  			"credential_private": "************G6ABYS1FMDVE4JNDQ",
  			"credential_id": "38385b978469409482e5d59af423b309",
  			"credential_public": "b10631d3-7597-4be8-b8b5-dce142f81006"
  		},
  		{
  			"credential_default_for_type": false,
  			"user_id": "c2691d4d039040be96c190a949d754a7",
  			"credential_private": "************9KeXmce9",
  			"credential_type": "s3",
  			"credential_label": "BCLS-S3",
  			"credential_id": "646ae46351074fcdaea52542903c3d16",
  			"credential_public": "AKIAIVCKQ7XZRGUIBBWQ"
  		},
  		{
  			"credential_default_for_type": true,
  			"user_id": "c2691d4d039040be96c190a949d754a7",
  			"credential_private": "************240aef",
  			"credential_type": "zencoder",
  			"credential_label": "alive-zencoder",
  			"credential_id": "bc303a92793249dcb759a114dbbfe7c2",
  			"credential_public": "Credentials for Zencoder"
  		}
  	]
  }  *
  * @apiError (Error 4xx) {json} BAD REQUEST 400: Invalid input value - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 4xx) {json} BAD REQUEST 400: The notification target type is not supported currently - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Unauthorized - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  * @apiError (Error 5xx) {json} INTERNAL SERVER ERROR 500: DB getItem, no results found - see [Live API Error Messages](https://support.brightcove.com/live-api-error-messages) for more details
  *
  *
  */

// Create OAuth Credential

/**
  * @api {post} /v1/credentials Create OAuth Credential
  * @apiName Create OAuth Credential
  * @apiGroup Credentials
  * @apiVersion 1.0.0
  *
  * @apiDescription Create an OAuth credential for notifications.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (Request Body Fields) {String} user_id The user id, which you can get from the List Credentials response.
  * @apiParam (Request Body Fields) {Boolean} credential_default_for_type Whether these are the default credentials for the request type
  * @apiParam (Request Body Fields) {String} credential_label Label for the credential
  * @apiParam (Request Body Fields) {Number} credential_type Duration of the clip in seconds
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
  * @apiSuccess (200) {Object} vod_jobs The clip response object
  * @apiSuccess (200) {String} vod_jobs.jvod_id The clip job id
  * @apiSuccess (200) {String} vod_jobs.label The clip label (from the input)
  * @apiSuccess (200) {String} live_job_id The clip label (from the input)
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
