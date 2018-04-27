Things that are wrong with cms-swagger.json:

* Create and Update bodies are the same as the Get response. This is misleading since not all fields are usable in those contexts.
* Most POST calls are missing the 201 response code and incorrectly have 201.
* Names of fields are not always what we would want in an sdk for parameter names.
* Descriptions are missing for many things.
* Descriptions of operations are all ugly.
* VideoAsset missing Hls and Hds?