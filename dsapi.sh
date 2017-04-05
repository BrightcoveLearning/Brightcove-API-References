txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd delivery-system-api
echo ${txtyel}generating docs for delivery-system-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-new
../BCL-developer-docs/en/perform/concepts/delivery-system-api/references/v1
echo ${txtgrn}Finished!
echo ${txtrst}
