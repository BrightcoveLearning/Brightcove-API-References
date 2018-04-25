# Changes

## Path Parameter
remove "(Path Parameters) " from all the files

`sed -i "" 's/(Path Parameters) //g' *.js`

## apiSuccess Reponse Fields

`sed -i "" 's/apiSuccess (Response Fields)/apiSuccess (200)/g' *.js`
`sed -i "" 's/apiSuccess (Response Field)/apiSuccess (200)/g' *.js`

## Generate swagger

Use https://github.com/zshaw-brightcove/apidoc-swagger

To run it: `node ~/work/apidoc-swagger-zshaw-brightcove/bin/apidocSwagger.js -i ~/work/Brightcove-API-References/cms-api/v1/src -o cms-swagger-zshaw -t`

NOTE: We're checking in the generated swagger.json and starting to hack on that so it will diverge from the generated version

## Cue points

In video.js changed `cue_points.force_stop` to `cue_points.force-stop` for consistency with other files.

This was problematic for code generation



