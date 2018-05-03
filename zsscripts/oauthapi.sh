SWAGGER_DIR=${1?Need a apidoc-swagger local directory}
txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd oauth-api
echo ${txtyel}generating docs for oauth-api
apidoc -i v4/src/  -f .js -o v4/doc/ -t ../template-v3
echo ${txtyel}generating swagger json
node $SWAGGER_DIR/bin/apidocSwagger.js -i ./v4/src -o oauth-swagger-gen -t
echo ${txtgrn}swagger json generated
echo ${txtgrn}Finished!
echo ${txtrst}
