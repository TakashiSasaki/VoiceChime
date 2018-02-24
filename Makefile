.PHONY: chime prepare 
NODE=/usr/local/bin/node

chime:
	$(NODE) chime.js

prepare:
	sudo n stable ;\
	npm install google-home-notifier -g

