SWAGGER_DIR=${1?Need a apidoc-swagger local directory}
txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Generating API docs...
cd zencoder-api
echo ${txtyel}generating docs for zencoder-api
apidoc -i v2/src/  -f .js -o v2/doc/ -t ../template-v3
echo ${txtyel}generating swagger json
node $SWAGGER_DIR/bin/apidocSwagger.js -i ./v2/src -o zencoder-swagger-gen -t
echo ${txtgrn}finished generating docs
echo ${txtgrn}Finished!
echo ${txtrst}
