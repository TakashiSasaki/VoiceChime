.PHONY: chime prepare 
DEFAULT: test-mdns-js
NODE=/usr/bin/node
export NODE_PATH=$(shell npm root -g)
export TZ=Asia/Tokyo
export LANG=C.UTF-8
export LANG=ja_jp.utf8
export LC_ALL=ja_jp.utf8
chime:
	echo NODE_PATH=${NODE_PATH}
	echo LANG=${LANG}
	echo TZ=${TZ}
	$(NODE) chime.js

install-node:
	curl -L -o setup https://deb.nodesource.com/setup_8.x
	chmod +x setup
	./setup
	apt-get install -y nodejs

install-npm-packages:
	npm install -g google-home-notify mdns-js
	#nodejs npm install -g -y n
	#sudo n stable 
	#npm install google-home-notifier

test-mdns-js:
	$(NODE) test-mdns-js.js

test-date:
	sh -c 'echo $${LANG}'
	echo $${LC_ALL}
	echo $${TZ}
	locale
	date
	$(NODE) test-date.js

crontab.sample:
	crontab -l >$@

avahi:
	-service dbus start
	-service avahi-daemon
	avahi-browse -at

apt:
	apt-get install aptitude apt-file curl wget locales


