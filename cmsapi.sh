txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd cms-api
echo ${txtyel}generating docs for cms-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
apidoc -i v1/src/  -f .js -o v1/drupal/ -t ../template-d
echo ${txtyel}generating swagger json
apidoc-swagger -i ./cms-api/ -o ./cms-api/swagger
echo ${txtgrn}swagger json generated
echo ${txtgrn}Finished!
echo ${txtrst}
