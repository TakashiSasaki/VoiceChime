const mdns = require("mdns-js");
const browser = mdns.createBrowser(mdns.tcp("googlecast"));
browser.on("ready", function(){
	browser.discover();
});
browser.on("update", function(service){
	console.log(service.fullname);
	console.log(service.addresses[0]);
	console.log(service.port);
	browser.stop();
});
