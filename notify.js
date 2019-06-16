process = require("process");
cron = require("node-cron");
buildCalendarMessage = require("./message").buildCalendarMessage;
buildChimeMessage = require("./message").buildChimeMessage;
getIpAddresses = require("./getIpAddresses").getIpAddresses;
if(typeof process.env.TZ !== 'string'){
	throw "Timezone is not set. Check environment variable 'TZ'.";
} else {
	console.log("TZ="+process.env.TZ);
}

function notify(address, lang){
	message = buildChimeMessage(lang);
	googlehome = require('google-home-notify/google-home-notifier')(address, lang);
	console.log(googlehome);
	EventEmitter = require("events").EventEmitter;
	eventEmitter = new EventEmitter;
	console.log(Object.getOwnPropertyNames(eventEmitter));
	console.log(Object.getPrototypeOf(eventEmitter));
	Object.setPrototypeOf(googlehome, Object.getPrototypeOf(eventEmitter));
	googlehome.on("speech", function(x){
		console.log("speech event has been emitted.");
		console.log(x);
		googlehome.removeAllListeners();
		console.log("EventEmitter was stopped.");
	});
	googlehome.notify(message);
}//notify

function notifyAll(addresses, lang){
	console.log("notifyAll : " + addresses);
	addresses.forEach((address)=>{notify(address, lang);});
}//notifyAll

module.exports.notify = notify;
module.exports.notifyAll = notifyAll;
if(module.id = "."){
	setInterval(function(){
		notifyAll(getIpAddresses(), 'ja');
	}, 60000);
}

