txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd audience-api
echo ${txtyel}generating docs for audience-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtyel}generating swagger json
apidoc-swagger -i ../audience-api/ -o ../audience-api/swagger
echo ${txtgrn}swagger json generated
echo ${txtgrn}Finished!
echo ${txtrst}
