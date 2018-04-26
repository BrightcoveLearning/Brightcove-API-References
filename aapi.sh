SWAGGER_DIR=${1?Need a apidoc-swagger local directory}
txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Generating API docs...
cd analytics-api
echo ${txtyel}generating docs for analytics-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}finished generating docs
echo ${txtyel}generating swagger json
node $SWAGGER_DIR/bin/apidocSwagger.js -i ./v1/src -o aaip-swagger-gen -t
echo ${txtgrn}swagger json generated
echo ${txtgrn}Finished!
echo ${txtrst}
