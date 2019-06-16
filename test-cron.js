cron = require("node-cron");
cron.schedule("*/5 * * * * *", (x)=>{
	console.log(new Date());
});

