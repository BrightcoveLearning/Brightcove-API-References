SWAGGER_DIR=/Users/rcrooks/git/apidoc-swagger
txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd policy-api
echo ${txtyel}generating swagger json
node $SWAGGER_DIR/bin/apidocSwagger.js -i ./v1/src -o ./swagger -t
echo ${txtgrn}swagger json generated
echo ${txtgrn}Finished!
echo ${txtrst}
