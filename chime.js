CronJob = require("node-cron").CronJob;
getIpAddresses = require("./getIpAddresses").getIpAddresses;
notifyChime = require("./notify").notifyChime;
notifyCalendar= require("./notify").notifyCalendar;
notifyAll = require("./notify").notifyAll;

schedules = [
	"0,10,20,30,40,50 6,7,8,9 * * *", 
	"0,30 10,11,12,13,14,15,17,18,19,20,21 * * *", 
	"* 17 16 6 *", 
];//schedules

schedules_ = [
	"* 10,11,12,13,14,15,16,17,18,19,20,21 * * *", 
];//schedules
lang = "ja";

for(var i=0; i<schedules.length; ++i){
	console.log("schedule : " + schedules[i]);
	cron.schedule(schedules[i], ()=>{
		console.log("cron : " + new Date());
		notifyAll(getIpAddresses(), lang);
	});
}//for

