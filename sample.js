// https://qiita.com/ktetsuo/items/8c9cd5714e231aa6ae09

const googlehome = require('google-home-notifier')

var messages = [];
messages.push('こんにちは。私はグーグルホームです。');
messages.push('みなさん、お元気ですか？');
var message = messages.join("");

googlehome.device('Google-Home', 'ja'); 
googlehome.ip("192.168.0.5")

googlehome.notify(message, function(res) {
	  console.log(res);
});

