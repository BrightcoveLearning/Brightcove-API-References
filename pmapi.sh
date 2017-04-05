txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Generating Player Management API docs...
cd player-management-api
echo ${txtyel}generating docs for player-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-new
echo ${txtgrn}Finished!
echo ${txtrst}
