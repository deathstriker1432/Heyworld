

var __keysDown = [];


(function(){
	for(var i = 0; i<256;i++){
		__keysDown.push(false);
	}
})();


window.addEventListener("keydown",function(e){
	__keysDown[e.keyCode] = true;
});


window.addEventListener("keyup",function(e){
	__keysDown[e.keyCode] = false;
});


function isKeyDown(kcode){
	return __keysDown[kcode];
}


var keys = {
	w:87,
	a:65,
	s:83,
	d:68,
	space:32,
	enter:13,
	up:38,
	left:37,
	down:40,
	right:39
}
var __buttonsDown=[false,false,false,false];

function __mdown(e){
__buttonsDown[e.button]=true;
}

function __mup(e){
__buttonsDown[e.button]=false;
}

function isButtonDown(button){
return __buttonsDown[button]==true;
}

window.addEventListener("mousedown",__mdown);
window.addEventListener("mouseup",__mup);
