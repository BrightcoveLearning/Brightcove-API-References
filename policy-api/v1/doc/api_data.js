define({ "api": [  {    "type": "post",    "url": "/accounts/:account_id/policy_keys",    "title": "Create a Policy Key",    "name": "Create_a_Policy_Key",    "group": "Policy",    "version": "1.0.0",    "description": "<p>Create a new policy key to access the Playback API</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p>"          }        ],        "Request Body Fields": [          {            "group": "Request Body Fields",            "type": "Object",            "optional": false,            "field": "key-data",            "description": "<p>data for the policy key</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": false,            "field": "key-data.account-id",            "description": "<p>Video Cloud account id</p>"          },          {            "group": "Request Body Fields",            "type": "String[]",            "optional": true,            "field": "key-data.apis",            "description": "<p>Array of APIs that are permitted for this key (currently <code>&quot;search&quot;</code> is the only one available - this must be included to use the <a href=\"https://brightcovelearning.github.io/Brightcove-API-References/playback-api/v1/doc/index.html#api-videoGroup-Get_Videos\">search functionality</a> for the Playback API)</p>"          },          {            "group": "Request Body Fields",            "type": "String[]",            "optional": true,            "field": "key-data.allowed-domains",            "description": "<p>For domain restriction, the domains this key will work on</p>"          }        ]      },      "examples": [        {          "title": "Create Policy Request Body Examples:",          "content": "{\n    key-data: {\n        \"account-id\": \"8523\",\n        \"apis\": [\n            \"search\"\n        ],\n        \"allowed-domains\": [\n            \"http://support.brightcove.com\",\n            \"https://solutions.brightcove.com.\"\n        ]\n    }\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "key_string",            "description": "<p>the policy key string</p>"          },          {            "group": "Response Fields",            "type": "Object",            "optional": false,            "field": "key-data",            "description": "<p>map of key data prescribing the policy</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "key-data.account-id",            "description": "<p>the Video Cloud account id</p>"          },          {            "group": "Response Fields",            "type": "Sting[]",            "optional": false,            "field": "key-data.apis",            "description": "<p>array of apis permitted for the key</p>"          },          {            "group": "Response Fields",            "type": "Sting[]",            "optional": false,            "field": "key-data.allowed-domains",            "description": "<p>array of domains allowed to use this key</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n\t\"key-string\": \"BCpkADawqM3Y8LpDbjIPcWKZSiCwNwbeAoZPIhFnkPq0LyyRpXfjmIYvPIr-x5G0G9MWx8INLb39GGbPgrOYQfv5yN-1xph02-AE2DAvU6sZ7KshLC5E9SqTFBPR-gDNd87Z7SLkbexUPgp78KYWjRuh2mxmV_mg3y_i5BMLQHLbvvLaRksV0j8khLx0pVgnkmsUy50cARhPM9rgC2n7pzGYGSbCBXAqDd6jssJp2f670OzSjbCMHS65yG8\",\n\t\"key-data\": {\n\t\t\"account-id\": \"1752604059001\",\n\t\t\"apis\": [\n\t\t\t\"search\"\n\t\t],\n\t\t\"allowed-domains\": [\n\t\t\t\"http://support.brightcove.com\",\n\t\t\t\"https://solutions.brightcove.com\"\n\t\t]\n\t}\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your policy key is correct</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "NOT_AVAILABLE",            "description": "<p>400: The resource you are requesting is temporarily unavailable</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "UNKNOWN",            "description": "<p>500: Issue in Brightcove system; try again later.</p>"          },          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p>"          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/policy.js",    "groupTitle": "Policy"  },  {    "type": "get",    "url": "/accounts/:account_id/policy_keys/:key_string",    "title": "Get Policy",    "name": "Get_Policy",    "group": "Policy",    "version": "1.0.0",    "description": "<p>Get a policy key associated with a policy key string</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/node/17925\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "key_string",            "description": "<p>the key string for the policy</p>"          }        ]      },      "examples": [        {          "title": "Get Policy Example:",          "content": "https://policy.api.brightcove.com/v1/accounts/57838016001/policy_keys/BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk",          "type": "Url"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "key_string",            "description": "<p>the policy key string</p>"          },          {            "group": "Response Fields",            "type": "Object",            "optional": false,            "field": "key-data",            "description": "<p>map of key data prescribing the policy</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "key-data.account-id",            "description": "<p>the Video Cloud account id</p>"          },          {            "group": "Response Fields",            "type": "Sting[]",            "optional": false,            "field": "key-data.apis",            "description": "<p>array of apis permitted for the key</p>"          },          {            "group": "Response Fields",            "type": "Sting[]",            "optional": false,            "field": "key-data.allowed-domains",            "description": "<p>array of domains allowed to use this key</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n\t\"key-string\": \"BCpkADawqM3Y8LpDbjIPcWKZSiCwNwbeAoZPIhFnkPq0LyyRpXfjmIYvPIr-x5G0G9MWx8INLb39GGbPgrOYQfv5yN-1xph02-AE2DAvU6sZ7KshLC5E9SqTFBPR-gDNd87Z7SLkbexUPgp78KYWjRuh2mxmV_mg3y_i5BMLQHLbvvLaRksV0j8khLx0pVgnkmsUy50cARhPM9rgC2n7pzGYGSbCBXAqDd6jssJp2f670OzSjbCMHS65yG8\",\n\t\"key-data\": {\n\t\t\"account-id\": \"1752604059001\",\n\t\t\"apis\": [\n\t\t\t\"search\"\n\t\t],\n\t\t\"allowed-domains\": [\n\t\t\t\"http://support.brightcove.com\",\n\t\t\t\"https://solutions.brightcove.com\"\n\t\t]\n\t}\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your policy key is correct</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "NOT_AVAILABLE",            "description": "<p>400: The resource you are requesting is temporarily unavailable</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "UNKNOWN",            "description": "<p>500: Issue in Brightcove system; try again later.</p>"          },          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p>"          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/policy.js",    "groupTitle": "Policy"  }] });
