cron = require("node-cron");
getIpAddresses = require("./getIpAddresses").getIpAddresses;
notifyChime = require("./notify").notifyChime;
notifyCalendar= require("./notify").notifyCalendar;
notifyAll = require("./notify").notifyAll;

schedules = [
	"*/10 6,7,8,9 * * *", 
	"*/30 10,11,12,13,14,15,16,17,18,19,20,21  * * *", 
];

lang = "ja";

for(var i=0; i<schedules.length; ++i){
	console.log("schedule : " + schedules[i]);
	cron.schedule(schedules[i], ()=>{
		notifyAll(getIpAddresses(), lang);
	});
}

