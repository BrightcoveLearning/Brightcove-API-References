txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd delivery-system-api
echo ${txtyel}generating docs for delivery-system-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtyel}generating swagger json
apidoc-swagger -i ../delivery-system-api/ -o ../delivery-system-api/swagger
echo ${txtgrn}swagger json generated
echo ${txtgrn}Finished!
echo ${txtrst}
