// get single plugin

/**
 * @api {get} /accounts/:account_id/plugins/:plugin_id Get Single Plugin
 * @apiName Get Single Plugin
 * @apiGroup Plugin Registry
 * @apiVersion 2.0.0
 *
 * @apiDescription Get a player plugin by id. **Note that the plugin id must be URI_encoded.**
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/getting-access-tokens))
 *
 * @apiParam (Path) {String} account_id account ID
 * @apiParam (Path) {String} plugin_id plugin id - **must be URI_encoded**
 *
 * @apiParamExample {curl} curl Statement:
 *    curl \
 *      --header "Content-Type: application/json" \
 *      --user $EMAIL \
 *      --request GET \
 *    https://players.api.brightcove.com/v2/plugins/%40brightcove%2fvideojs-ima3
 *
 * @apiSuccess (200) {Object[]} versions array of objects describing the versions of the plugin
 * @apiSuccess (200) {String} versions.version_number the version number
 * @apiSuccess (200) {String} versions.minimum_template_version the minimum player version required to use this plugin
 * @apiSuccess (200) {String[]} versions.stylesheets URLs for the plungin stylesheet(s)
 * @apiSuccess (200) {String[]} versions.scripts URLs for the plungin script(s)
 * @apiSuccess (200) {String} documentation URLs for the plungin documentation
 * @apiSuccess (200) {String} description Description of the plugin
 * @apiSuccess (200) {String} id The plugin id
 * @apiSuccess (200) {String} name The plugin name
 * @apiSuccess (200) {String} current_version The current version of the plugin
 *
 * @apiSuccessExample {JSON} Success Response:
 *    {
 *      "versions": [{
 *        "version_number": "2.x",
 *        "minimum_template_version": "5.0.0",
 *        "stylesheets": [
 *          "//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.css"
 *        ],
 *        "scripts": [
 *          "//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.js"
 *        ]
 *      }, {
 *        "version_number": "1.x",
 *        "minimum_template_version": "1.14.0",
 *        "stylesheets": [
 *          "//players.brightcove.net/videojs-ima3/1/videojs.ima3.min.css"
 *        ],
 *        "scripts": [
 *          "//players.brightcove.net/videojs-ima3/1/videojs.ima3.min.js"
 *        ]
 *      }],
 *      "documentation": "https://support.brightcove.com/advertising-ima3-plugin",
 *      "description": "Google Interactive Media Ads (IMA) v3 support for video.js",
 *      "id": "@brightcove/videojs-ima3",
 *      "name": "ima3",
 *      "current_version": "2.x"
 *    }
 * @apiError (400) {object}  BAD_REQUEST
 * @apiError (401) {object}  INVALID_AUTHENTICATION
 * @apiError (404) {object}  NOT_FOUND
 * @apiError (429) {object}  RATE_LIMIT_EXCEEDED
 * @apiError (500) {object}  INTERNAL_SERVER_ERROR
 */


// get all plugins

/**
 * @api {get} /accounts/:account_id/plugins Get All Plugins
 * @apiName Get All Plugins
 * @apiGroup Plugin Registry
 * @apiVersion 2.0.0
 *
 * @apiDescription Get a player plugin by id. **Note that the plugin id must be URI_encoded.**
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](https://support.brightcove.com/getting-access-tokens))
 *
 * @apiParam {String} account_id account ID
 * @apiParam {String} plugin_id plugin id - **must be URI_encoded**
 *
 * @apiParamExample {curl} curl Statement:
 *    curl \
 *      --header "Content-Type: application/json" \
 *      --user $EMAIL \
 *      --request GET \
 *    https://players.api.brightcove.com/v2/plugins/%40brightcove%2fvideojs-ima3
 *
 * @apiSuccess (200) {Object[]} versions array of objects describing the versions of the plugin
 * @apiSuccess (200) {String} versions.version_number the version number
 * @apiSuccess (200) {String} versions.minimum_template_version the minimum player version required to use this plugin
 * @apiSuccess (200) {String[]} versions.stylesheets URLs for the plungin stylesheet(s)
 * @apiSuccess (200) {String[]} versions.scripts URLs for the plungin script(s)
 * @apiSuccess (200) {String} documentation URLs for the plungin documentation
 * @apiSuccess (200) {String} description Description of the plugin
 * @apiSuccess (200) {String} id The plugin id
 * @apiSuccess (200) {String} name The plugin name
 * @apiSuccess (200) {String} current_version The current version of the plugin
 *
 * @apiSuccessExample {JSON} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "versions": [{
 *        "version_number": "2.x",
 *        "minimum_template_version": "5.0.0",
 *        "stylesheets": [
 *          "//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.css"
 *        ],
 *        "scripts": [
 *          "//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.js"
 *        ]
 *      }, {
 *        "version_number": "1.x",
 *        "minimum_template_version": "1.14.0",
 *        "stylesheets": [
 *          "//players.brightcove.net/videojs-ima3/1/videojs.ima3.min.css"
 *        ],
 *        "scripts": [
 *          "//players.brightcove.net/videojs-ima3/1/videojs.ima3.min.js"
 *        ]
 *      }],
 *      "documentation": "https://support.brightcove.com/advertising-ima3-plugin",
 *      "description": "Google Interactive Media Ads (IMA) v3 support for video.js",
 *      "id": "@brightcove/videojs-ima3",
 *      "name": "ima3",
 *      "current_version": "2.x"
 *    }
 * @apiError (400) {object}  BAD_REQUEST
 * @apiError (401) {object}  INVALID_AUTHENTICATION
 * @apiError (404) {object}  NOT_FOUND
 * @apiError (429) {object}  RATE_LIMIT_EXCEEDED
 * @apiError (500) {object}  INTERNAL_SERVER_ERROR
 */
