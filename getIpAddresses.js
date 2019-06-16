const mdns = require("mdns-js");
var addresses = [];
const browser = mdns.createBrowser(mdns.tcp("googlecast"));
browser.on("ready", function(){
	browser.discover();
});
browser.on("update", function(service){
	console.log("on-update : " + service.fullname);
	console.log("on-update : " + service.addresses);
	console.log("on-update : " + service.port);
	if(typeof service.fullname === "string" && service.fullname.indexOf("googlecast") >= 0) {
		addresses = service.addresses;
	}//if
});
browser.on("error", function(error){
	console.log("on-error : begins.");
});

module.exports.getIpAddresses = function(){
	return addresses;
}

