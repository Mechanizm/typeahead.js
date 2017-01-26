#! bin/bash

grunt build --force
git add .
git commit -m 'Add new version'
git push origin head
cd ../bcd-frontend
rm -rf bower_components/typeahead.js
bower install
killall gulp
gulp serve
cd ../typeahead.js
