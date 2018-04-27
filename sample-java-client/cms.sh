#!/bin/bash

if [ $# -ne 1 ]; then
  echo "usage: $0 CONFIG_FILE"
  exit 1
fi

java -jar build/libs/javaclient.jar $1

