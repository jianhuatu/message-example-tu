var channel = new BroadcastChannel("myChannel");

channel.onmessage = function(e){
	console.log(e.data);
}

onmessage = function(e){
	channel.postMessage(e.data);
}