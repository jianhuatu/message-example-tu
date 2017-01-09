var channel = new MessageChannel();

var port1 = channel.port1;

var port2 = channel.port2;

var checkPort1 = false;

var checkPort2 = false;

var createPort1 = function(port){
	if(checkPort1)createNewChannel();
	port.postMessage({type:"createPort1",port1:port1},[port1]);
	checkPort1 = true;
}

var createPort2 = function(port){
	if(checkPort2)createNewChannel();
	port.postMessage({type:"createPort2",port2:port2},[port2]);
	checkPort2 = true;
}

var createNewChannel = function(){
	checkPort1 = false;
	checkPort2 = false;

	channel = new MessageChannel();
	port1 = channel.port1;
	port2 = channel.port2;
}

onconnect = function(e){
	var port = e.ports[0];
	port.onmessage = function(msg){
		switch(msg.data.type){
			case "createPort1" : createPort1(port);break;
			case "createPort2" : createPort2(port);break;
		}
	}
}