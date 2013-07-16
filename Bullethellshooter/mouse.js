

canvas.addEventListener("mousemove",function(e){
	mx = e.offsetX;
	my = e.offsetY;
});

canvas.addEventListener("mousedown",function(e){
	mx = e.offsetX;
	my = e.offsetY;
});

canvas.addEventListener("contextmenu",function(e){
	e.preventDefault();
});

canvas.addEventListener("mouseselect",function(e){
	e.preventDefault();
});