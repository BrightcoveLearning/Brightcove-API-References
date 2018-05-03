txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
cd playback-api-stage
echo ${txtyel}generating docs for playback-api-stage
apidoc -i stage/src/  -f .js -o stage/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
