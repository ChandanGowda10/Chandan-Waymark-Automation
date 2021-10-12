#!/bin/bash

# import everything form .env
export $(cat .env | grep -v ^# | xargs)

echo "e2e tests..."



# making sure the server has started
echo "------start sleeping------"
pkill -f selenium-standalone
sleep 5
echo "------end sleeping------"

if [ -z "${CIRCLECI}" ]
then
      npm run selenium-setup
      echo "------starting selenium server------"
      npm run selenium-start &
else
      npm run selenium-setup-circleci
      echo "------starting selenium server------"
      npm run selenium-start-circleci &
fi

echo "------starting tests------"
npm run e2e-tests

echo "------stopping selenium & server------"
pkill -f selenium-standalone

