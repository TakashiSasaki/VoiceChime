const d = new Date();
console.log("Timezone offset in seconds : " + d.getTimezoneOffset());
console.log("                           : negative offset means your timezone is ahead of UTC.");
console.log("                           : positive offset means your timezone is behind of UTC.");
console.log("UTC hours   : " + d.getUTCHours());
console.log("Local hours : " + d.getHours());
console.log("            : If local hours is not collect, TZ environment variable should be set.");
console.log(d);
