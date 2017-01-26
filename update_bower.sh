#! bin/bash

git add . && git commit -m 'Add new version' && git push origin head && cd ../bcd-frontend && rm -rf bower_components/typeahead.js && bower install
