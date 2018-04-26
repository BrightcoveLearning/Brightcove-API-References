txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Generating API docs...
cd analytics-api
echo ${txtyel}generating docs for analytics-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}finished generating docs
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../audience-api
echo ${txtyel}generating docs for audience-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../cms-api
echo ${txtyel}generating docs for cms-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../data-collection-api
echo ${txtyel}generating docs for data-collection-api
apidoc -i v2/src/  -f .js -o v2/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../dynamic-ingest-api
echo ${txtyel}generating docs for dynamic-ingest-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../ingest-profiles-api
echo ${txtyel}generating docs for ingest-profiles-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../live-api
echo ${txtyel}generating docs for live-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../oauth-api
echo ${txtyel}generating docs for oauth-api
apidoc -i v4/src/  -f .js -o v4/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../once-ingest-api
echo ${txtyel}generating docs for once-ingest-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../once-media-management-api
echo ${txtyel}generating docs for once-media-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../once-status-api
echo ${txtyel}generating docs for once-status-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../playback-api
echo ${txtyel}generating docs for playback-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../player-management-api
echo ${txtyel}generating docs for player-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
cd ../policy-api
echo ${txtyel}generating docs for policy-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v3
cd ../zencoder-api
echo ${txtyel}generating docs for zencoder api
apidoc -i v2/src/  -f .js -o v2/doc/ -t ../template-v3
echo ${txtgrn}Finished!
echo ${txtrst}
