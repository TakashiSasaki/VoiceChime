buildCalendarMessage = require("./message").buildCalendarMessage;
buildChimeMessage = require("./message").buildChimeMessage;
mdns = require("mdns");
process = require("process");
if(typeof process.env.TZ !== 'string'){
	throw "Timezone is not set. Check environment variable 'TZ'.";
} else {
	console.log("TZ="+process.env.TZ);
}

ipaddr="Google-Home-Mini";
ipaddr="192.168.0.4";

ipaddr = undefined
message = buildChimeMessage('ja');
console.log(message);
googlehome = require('google-home-notify/google-home-notifier')(ipaddr, "ja");
if(typeof googlehome !== "object") {
	throw "failed to create an instance of 
}
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
	require("process").exit();
});
console.log(Object.keys(googlehome));
console.log(googlehome);
googlehome.notify(message);
console.log("'notify' method has been called.");

