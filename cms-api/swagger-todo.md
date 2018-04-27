Things that are wrong with cms-swagger.json:

* Create and Update bodies are the same as the Get response. This is misleading since not all fields are usable in those contexts.
* Names of fields are not always what we would want in an sdk for parameter names.
* Descriptions are missing for many things.
* Descriptions of operations are all ugly.
* VideoAsset missing Hls and Hds?
* GET /v1/accounts{account_id}/videos/{video_id}/assets needs to return a mix of types. not sure how to do that.