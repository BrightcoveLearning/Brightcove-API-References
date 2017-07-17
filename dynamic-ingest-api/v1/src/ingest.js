
// ingest media asset

 /**
 * @api {post} /accounts/:account_id/videos/:video_id/ingest-requests Ingest Media Asset
 * @apiName Ingest Media Asset
 * @apiGroup Ingest
 * @apiVersion 1.0.0
 *
 * @apiDescription Uploads a video, images, and/or text track (WebVTT files) and adds them to your media library. **NOTE that before you ingest a new video, you must first make a [Create Video request](https://brightcovelearning.github.io/Brightcove-API-References/cms-api/v1/doc/index.html#api-videoGroup-Create_Video).**
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/node/17925))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID; if this is a new video ingest, the ID will be the one returned by the _Create Video_ request
 * @apiParam (Request Body Fields) {Object} [master] the video master to be ingested
 * @apiParam (Request Body Fields) {Url} [master.url] URL for the video source; required except for re-transcoding where a digital master has been archived, or you are adding images or text tracks to an existing video
 * @apiParam (Request Body Fields) {Boolean} [master.use_archived_master] For retranscode requests, will use the archived master if set to `true`; if set to `false`, you must also include the `url` for the source video
 * @apiParam (Request Body Fields) {String} [profile] ingest profile to use for transcoding; if absent, account default profile will be used
 * @apiParam (Request Body Fields) {Object[]} [text_tracks] array of text_track maps
 * @apiParam (Request Body Fields) {Url} text_tracks.url URL for a WebVTT file
 * @apiParam (Request Body Fields) {String} text_tracks.srclang ISO 639 2-letter (alpha-2) language code for the text tracks
 * @apiParam (Request Body Fields) {String="captions","subtitles","chapters","metadata"} [text_tracks.kind="captions"] how the vtt file is meant to be used
 * @apiParam (Request Body Fields) {String} [text_tracks.label] user-readable title
 * @apiParam (Request Body Fields) {Boolean} [text_tracks.default] sets the default language for captions/subtitles
 * @apiParam (Request Body Fields) {Object} [poster] the video master to be ingested
 * @apiParam (Request Body Fields) {Url} poster.url URL for the video poster image
 * @apiParam (Request Body Fields) {Number} [poster.height] pixel height of the image
 * @apiParam (Request Body Fields) {Number} [poster.width] pixel width of the image
 * @apiParam (Request Body Fields) {Object} [thumbnail] the video master to be ingested
 * @apiParam (Request Body Fields) {Url} thumbnail.url URL for the video thumbnail image
 * @apiParam (Request Body Fields) {Number} [thumbnail.height] pixel height of the image
 * @apiParam (Request Body Fields) {Number} [thumbnail.width] pixel width of the image
 * @apiParam (Request Body Fields) {Boolean} [capture-images] whether poster and thumbnail should be captured during transcoding; defaults to `true` if the the profile has image renditions, `false` if it does not
 * @apiParam (Request Body Fields) {String[]} [callbacks] array of URLs that [notifications](https://support.brightcove.com/node/17939) should be sent to
 *
 * @apiParamExample {json} Ingest Request Example:
 *    {
 *      "master": {
 *          "url": "http://host/master.mp4"
 *      },
 *      "profile": "high-resolution",
 *      "poster": {
 *            "url": "http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-poster.png",
 *            "width": 640,
 *            "height": 360
 *        },
 *        "thumbnail": {
 *            "url": "http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-thumbnail.png",
 *            "width": 160,
 *            "height": 90
 *        },
 *        "capture-images": false,
 *        "text_tracks": [
 *            {
 *                "url": "http://learning-services-media.brightcove.com/captions/for_video/Water-in-Motion.vtt",
 *                "srclang": "en",
 *                "kind": "captions",
 *                "label": "EN",
 *                "default": true
 *            }
 *        ],
 *        "callbacks": [
 *            "http://solutions.brightcove.com/bcls/di-api/di-callbacks.php"
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id job id for the request
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *       "id":"c6926dcf-0978-4085-8afc-e578ccfbf742"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} PROFILE 400: Unable to find profile by name
 * @apiError (Error 4xx) {json} NOT_SUBMITTED 400: Unable to submit job, please try again later
 * @apiError (Error 4xx) {json} NO_SUCH_VIDEO 400: Unable to find the referenced video
 * @apiError (Error 4xx) {json} NO_SOURCE 400: Unable to find a source to use
 * @apiError (Error 4xx) {json} CDN_CREDENTIALS 400: Unable to fetch CDN credentials
 * @apiError (Error 4xx) {json} BAD_CALLBACKS 400: Callbacks were not in expected format
 * @apiError (Error 5xx) {json} SUBMISSION_FAILURE 500: Unable to submit job please try again later.
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Unable to authorize request.
 * @apiError (Error 4xx) {json} MALFORMED_SOURCE_URL 422: source url is malformed.
 * @apiError (Error 4xx) {json} BAD_PROTOCOL_SOURCE_URL 422: source url uses a unsupported protocol.
 * @apiError (Error 4xx) {json} EXCEED_MAXIMUM_VTT_SOURCES 422: vtt sources exceed the maximum size.
 * @apiError (Error 4xx) {json} INVALID_VTT_KIND 422: vtt kind is invalid.
 * @apiError (Error 4xx) {json} CONSTRAINT_VIOLATION 422: capture-image is not allowed if an image source is provided.
 * @apiError (Error 4xx) {json} UNPROCESSABLE_ENTITY 422: request data contains some unprocessable entity.
 * @apiError (Error 4xx) {json} BAD_REQUEST 400: Unable to parse request body.
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} CDN_CONFIGS Unable to fetch CDN credentials
 * @apiError (Error 4xx) {json} AMBIGUOUS_REQUEST 400 Both a master url and use_archived_master were set in the request.
 * @apiError (Error 5xx) {json} INTERNAL_ERROR 500: Internal error, please try again later
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 400 PROFILE
 *    HTTP/1.1 400 Bad Request
 *    [
 *        {
 *            "error_code": "PROFILE",
 *            "message": "Unable to find profile by name."
 *        }
 *    ]
 *
 * @apiErrorExample {json} 404 Not Found
 *    HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "NO_SUCH_VIDEO",
 *            "message": "Unable to find the referenced video."
 *        }
 *    ]
 *
 * @apiErrorExample 403 Forbidden
 *    HTTP/1.1 403 Forbidden
 *    [
 *        {
 *            "error_code": "UNAUTHORIZED",
 *            "message": "Unable to authorize request."
 *        }
 *    ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 403 Bad Request
 *    [
 *        {
 *            "error_code": "BAD_REQUEST",
 *            "message": "Unable to parse request body."
 *        }
 *    ]
 *
 * @apiErrorExample 422 CONSTRAINT_VIOLATION
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "CONSTRAINT_VIOLATION",
 *            "message": "capture-image is not allowed if an image source is provided."
 *        }
 *    ]
 *
 * @apiErrorExample 400 AMBIGUOUS_REQUEST
 *    HTTP/1.1 400 Bad Request
 *    [
 *        {
 *            "error_code": "AMBIGUOUS_REQUEST",
 *            "message": "Both a master url and use_archived_master were set in the request."
 *        }
 *    ]
 *
 * @apiErrorExample 422 TYPE_VIOLATION
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "TYPE_VIOLATION",
 *            "message": ".text_tracks.kind must be of type String"
 *        }
 *    ]
 *
 */
