const googlehome = require('google-home-notifier')

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
  var youbi = ["月","火","水","木","金","土","日"][now.getDay()];
  var month = now.getMonth();
  var date = now.getDate();
  var message = "今日は、" + month + "月" + date + "日、" + youbi + "曜日です。";
  return message;
}



function talk(message,ip){
  if(typeof message !== "string") {
    throw "talk: expecting message string";
  }

  googlehome.device('Google-Home', 'ja'); 
  if(typeof ip === "string"){
    googlehome.ip(ip)
  } 

  googlehome.notify(message, function(res) {
    console.log("google-home-notifier finished")
  	//console.log(res);
  });
}//talk

talk(buildTimeSignalMessage(), "192.168.0.5");
