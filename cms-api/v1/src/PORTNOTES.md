# Changes

## Path Parameter
remove "(Path Parameters) " from all the files

`sed -i "" 's/(Path Parameters) //g' *.js`

## apiSuccess Reponse Fields

`sed -i "" 's/apiSuccess (Response Fields)/apiSuccess (200)/g' *.js`

## Cue points

In video.js changed `cue_points.force_stop` to `cue_points.force-stop` for consistency with other files.

This was problematic for code generation



