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
	//console.log(googlehome);
	EventEmitter = require("events").EventEmitter;
	eventEmitter = new EventEmitter;
	//console.log(Object.getOwnPropertyNames(eventEmitter));
	//console.log(Object.getPrototypeOf(eventEmitter));
	Object.setPrototypeOf(googlehome, Object.getPrototypeOf(eventEmitter));
	googlehome.on("speech", function(x){
		//console.log("speech event has been emitted.");
		console.log("on-speech : " + x);
		googlehome.removeAllListeners();
		//console.log("EventEmitter was stopped.");
	});
	googlehome.notify(message);
}//notify

function notifyAll(addresses, lang){
	if(addresses === undefined) throw "The list of IP address is not given.";
	if(lang === undefined) throw "Language is not specified.";
	console.log("notifyAll : " + addresses);
	for(var i=0; i<addresses.length; ++i) {
		notify(addresses[i], lang);
	}//for
}//notifyAll

module.exports.notify = notify;
module.exports.notifyAll = notifyAll;
console.log("notify.js : " + module.id);
if(module.id === "."){
	console.log("notify.js : debug mode");
	setInterval(function(){
		notifyAll(getIpAddresses(), 'ja');
	}, 60000);
}

