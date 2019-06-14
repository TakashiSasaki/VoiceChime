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


const factory = require('google-home-notify/google-home-notifier')
const ipaddr="192.168.0.4";
const message = buildTimeSignalMessage();
const googlehome = factory(ipaddr, "ja");
console.log(googlehome);
console.log(message);
googlehome.notify(message);
console.log("notified.");

