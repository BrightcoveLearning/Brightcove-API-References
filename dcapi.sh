txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Generating API docs...
cd data-collection-api
echo ${txtyel}generating docs for data-collection-api
apidoc -i v2/src/  -f .js -o v2/doc/ -t ../template-new
echo ${txtgrn}Finished!
echo ${txtrst}
