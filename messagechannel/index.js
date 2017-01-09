
var worker = new SharedWorker("./worker.js");


worker.port.postMessage({type:"createPort"+document.getElementById("send").dataset.t});


var createPort = function(port){
	document.getElementById("send").addEventListener("click",function(){
		var value = document.getElementById("content").value;
		document.getElementById("content").value = "";
		port.postMessage(value);
	},false);

	port.onmessage = function(msg){
	 	document.getElementById("receive").value+=('\r\n'+msg.data);
	}
}

worker.port.onmessage = function(msg){
	switch(msg.data.type){
		case "createPort1" : createPort(msg.data.port1);break;
		case "createPort2" : createPort(msg.data.port2);break;
	}
}

