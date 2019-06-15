function buildTimeSignalMessage(){ 
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if(minutes === 0) {
    var message = "現在、" + hours + "時ちょうど、" + hours + "時ちょうどです。";
    return message + buildCalendarMessage();
  } else {
    var message = "現在、" + hours + "時" + minutes + "分、" + hours + "時" + minutes + "分です。";
  }
  return message;
}

function buildCalendarMessage(){
  var now = new Date();
  var youbi = ["日", "月","火","水","木","金","土"][now.getDay()];
  var month = now.getMonth()+1;
  var date = now.getDate();
  var message = "今日は、" + month + "月" + date + "日、" + youbi + "曜日です。";
  return message;
}


ipaddr="Google-Home-Mini";
ipaddr="192.168.0.4";
message = buildTimeSignalMessage();
console.log(message);
googlehome = require('google-home-notify/google-home-notifier')(ipaddr, "ja");
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

