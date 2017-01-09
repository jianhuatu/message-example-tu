var worker = new Worker("./worker.js");
var channel = new BroadcastChannel("myChannel");

document.getElementById("send").addEventListener("click",function(){
	var value = document.getElementById("content").value;
	document.getElementById("content").value = "";
	worker.postMessage(value);
},false);

 channel.onmessage = function(msg){
 	document.getElementById("receive").value+=('\r\n'+msg.data);
 }