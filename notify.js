process = require("process");
buildCalendarMessage = require("./message").buildCalendarMessage;
buildChimeMessage = require("./message").buildChimeMessage;
cron = require("./node-cron");
getIpAddresses = require("./getIpAddresses").getIpAddresses;
if(typeof process.env.TZ !== 'string'){
	throw "Timezone is not set. Check environment variable 'TZ'.";
} else {
	console.log("TZ="+process.env.TZ);
}

function notifyChime(){
	ipaddr = getIpAddresses();
	console.log(ipaddr);
	message = buildChimeMessage('ja');
	console.log(message);
	googlehome = require('google-home-notify/google-home-notifier')(ipaddr, "ja");
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
}

module.exports.notifyChime = notifyChime;

