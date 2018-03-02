define({ "api": [  {    "type": "get",    "url": "/accounts/:account_id/social-status/video/:video_id",    "title": "Get Status of Video",    "name": "Get_Status_of_Video",    "group": "Status",    "version": "1.0.0",    "description": "<p>Get the current status of the requested video on every destination to which Social has ever attempted to distribute it, ordered by date, most recent first.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "video_id",            "description": "<p>Video ID</p>"          }        ],        "URL Parameters": [          {            "group": "URL Parameters",            "type": "DateTime",            "optional": true,            "field": "before",            "description": "<p>Only videos last modified at or before the specified timestamp will be returned - ISO 8601 Timestamp</p>"          },          {            "group": "URL Parameters",            "type": "DateTime",            "optional": true,            "field": "since",            "description": "<p>Only videos last modified at or since the specified timestamp will be returned - ISO 8601 Timestamp</p>"          },          {            "group": "URL Parameters",            "type": "String",            "optional": true,            "field": "pageKey",            "description": "<p>The key for the next page of data to return.  If left empty the API returns the first page of data</p>"          },          {            "group": "URL Parameters",            "type": "Number",            "size": "1-100",            "optional": true,            "field": "pageSize",            "defaultValue": "100",            "description": "<p>The number of entries to return in this page of data</p>"          },          {            "group": "URL Parameters",            "type": "String",            "allowedValues": [              "\"YOUTUBE\"",              "\"TWITTER\"",              "\"FACEBOOK\""            ],            "optional": true,            "field": "platform",            "description": "<p>TThe social platform to return data for; if left blank will return data for all social platforms</p>"          }        ]      },      "examples": [        {          "title": "Get Status of Video Examples:",          "content": "https://social.api.brightcove.com/v1/accounts/57838016001/social-status/video/1234",          "type": "http"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "Number",            "optional": false,            "field": "video_id",            "description": "<p>The video id</p>"          },          {            "group": "Response Fields",            "type": "DateTime",            "optional": false,            "field": "time",            "description": "<p>The time at which Social last attempted to modify the video on the remote social platform</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "remote_url",            "description": "<p>The URL of the video on the remote social platform.  May not exist.  (e.g.,  If the last action was <code>DELETE</code>, or an <code>UPLOAD</code> with result <code>ERROR</code>.)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "destination_id",            "description": "<p>The Social ID of the destination to which this remote_url points (UUID)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "action",            "description": "<p>The last action Social attempted to take for this video with respect to this destination (<code>UPLOAD</code>, <code>UPDATE</code>, or <code>DELETE</code>)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "result",            "description": "<p>The result of the last action Social attempted (<code>SUCCESS</code> or 'ERROR')</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>The error that Social encountered while trying to complete this action.  Will only exist if the 'result' was <code>ERROR</code></p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "distribution_method",            "description": "<p>Whether this video was distributed automatically via an Autosync, or manually via Single Video Publish (svp)</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n   [\n     {\n       \"video_id\": 1234,\n       \"time\": \"2017-04-01T12:12:12\",\n       \"remote_url\": \"http://facebook/page/foo\",\n       \"destination_id\": \"123-abc\"\n       \"action\": \"UPLOAD\",\n       \"result\": \"SUCCESS\",\n       \"distribution_method\": \"autosync\"\n     }, ...\n   ]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Insufficient permissions to access this API method</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNPROCESSIBLE",            "description": "<p>ENTITY 422: Invalid query parameters.</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p>"          }        ]      },      "examples": [        {          "title": "401 Error Response",          "content": "HTTP/1.1 401 Not Found\n[\n    {\n        \"error_code\": \"UNAUTHORIZED\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/status.js",    "groupTitle": "Status"  },  {    "type": "get",    "url": "/accounts/:account_id/social-status/destination/:destination_id/video/:video_id",    "title": "Get Status of Video for Destination",    "name": "Get_Status_of_Video_for_Destination",    "group": "Status",    "version": "1.0.0",    "description": "<p>Get the current status of one video with respect to one destination.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "destination_id",            "description": "<p>The Social ID of the destination</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "video_id",            "description": "<p>Video ID</p>"          }        ]      },      "examples": [        {          "title": "Get Status of Video Examples:",          "content": "https://social.api.brightcove.com/v1/accounts/57838016001/social-status/destination/123-abc/video/1234",          "type": "http"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "Number",            "optional": false,            "field": "video_id",            "description": "<p>The video id</p>"          },          {            "group": "Response Fields",            "type": "DateTime",            "optional": false,            "field": "time",            "description": "<p>The time at which Social last attempted to modify the video on the remote social platform</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "remote_url",            "description": "<p>The URL of the video on the remote social platform.  May not exist.  (e.g.,  If the last action was <code>DELETE</code>, or an <code>UPLOAD</code> with result <code>ERROR</code>.)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "destination_id",            "description": "<p>The Social ID of the destination to which this remote_url points (UUID)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "action",            "description": "<p>The last action Social attempted to take for this video with respect to this destination (<code>UPLOAD</code>, <code>UPDATE</code>, or <code>DELETE</code>)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "result",            "description": "<p>The result of the last action Social attempted (<code>SUCCESS</code> or 'ERROR')</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>The error that Social encountered while trying to complete this action.  Will only exist if the 'result' was <code>ERROR</code></p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "distribution_method",            "description": "<p>Whether this video was distributed automatically via an Autosync, or manually via Single Video Publish (svp)</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n   [\n     {\n       \"video_id\": 1234,\n       \"time\": \"2017-04-01T12:12:12\",\n       \"remote_url\": \"http://facebook/page/foo\",\n       \"destination_id\": \"123-abc\"\n       \"action\": \"UPLOAD\",\n       \"result\": \"SUCCESS\",\n       \"distribution_method\": \"autosync\"\n     }, ...\n   ]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Insufficient permissions to access this API method</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNPROCESSIBLE",            "description": "<p>ENTITY 422: Invalid query parameters.</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p>"          }        ]      },      "examples": [        {          "title": "401 Error Response",          "content": "HTTP/1.1 401 Not Found\n[\n    {\n        \"error_code\": \"UNAUTHORIZED\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/status.js",    "groupTitle": "Status"  },  {    "type": "get",    "url": "/accounts/:account_id/social-status/destination/:destination_id",    "title": "Get Status of Videos for Destination",    "name": "Get_Status_of_Videos_for_Destination",    "group": "Status",    "version": "1.0.0",    "description": "<p>Get the current status of every video which Social ever attempted to distribute to the given destination.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "destination_id",            "description": "<p>The Social ID of the destination</p>"          }        ],        "URL Parameters": [          {            "group": "URL Parameters",            "type": "DateTime",            "optional": true,            "field": "before",            "description": "<p>Only videos last modified at or before the specified timestamp will be returned - ISO 8601 Timestamp</p>"          },          {            "group": "URL Parameters",            "type": "DateTime",            "optional": true,            "field": "since",            "description": "<p>Only videos last modified at or since the specified timestamp will be returned - ISO 8601 Timestamp</p>"          },          {            "group": "URL Parameters",            "type": "String",            "optional": true,            "field": "pageKey",            "description": "<p>The key for the next page of data to return.  If left empty the API returns the first page of data</p>"          },          {            "group": "URL Parameters",            "type": "Number",            "size": "1-100",            "optional": true,            "field": "pageSize",            "defaultValue": "100",            "description": "<p>The number of entries to return in this page of data</p>"          }        ]      },      "examples": [        {          "title": "Get Status of Videos for Destination Example:",          "content": "https://social.api.brightcove.com/v1/accounts/57838016001/social-status/destination/123-abc",          "type": "http"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "Number",            "optional": false,            "field": "video_id",            "description": "<p>The video id</p>"          },          {            "group": "Response Fields",            "type": "DateTime",            "optional": false,            "field": "time",            "description": "<p>The time at which Social last attempted to modify the video on the remote social platform</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "remote_url",            "description": "<p>The URL of the video on the remote social platform.  May not exist.  (e.g.,  If the last action was <code>DELETE</code>, or an <code>UPLOAD</code> with result <code>ERROR</code>.)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "destination_id",            "description": "<p>The Social ID of the destination to which this remote_url points (UUID)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "action",            "description": "<p>The last action Social attempted to take for this video with respect to this destination (<code>UPLOAD</code>, <code>UPDATE</code>, or <code>DELETE</code>)</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "result",            "description": "<p>The result of the last action Social attempted (<code>SUCCESS</code> or 'ERROR')</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>The error that Social encountered while trying to complete this action.  Will only exist if the 'result' was <code>ERROR</code></p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "distribution_method",            "description": "<p>Whether this video was distributed automatically via an Autosync, or manually via Single Video Publish (svp)</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n   [\n     {\n       \"video_id\": 1234,\n       \"time\": \"2017-04-01T12:12:12\",\n       \"remote_url\": \"http://facebook/page/foo\",\n       \"destination_id\": \"123-abc\"\n       \"action\": \"UPLOAD\",\n       \"result\": \"SUCCESS\",\n       \"distribution_method\": \"autosync\"\n     }, ...\n   ]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Insufficient permissions to access this API method</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNPROCESSIBLE",            "description": "<p>ENTITY 422: Invalid query parameters.</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p>"          }        ]      },      "examples": [        {          "title": "401 Error Response",          "content": "HTTP/1.1 401 Not Found\n[\n    {\n        \"error_code\": \"UNAUTHORIZED\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/status.js",    "groupTitle": "Status"  }] });
