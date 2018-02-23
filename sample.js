// https://qiita.com/ktetsuo/items/8c9cd5714e231aa6ae09

const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language); 
googlehome.ip("192.168.0.5")

googlehome.notify('こんにちは。私はグーグルホームです。あゆなさん、お元気ですか？', function(res) {
	  console.log(res);
});

