var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillCircle = (function(x,y,r){
	this.beginPath();
	this.arc(x,y,r,0,Math.PI*2,false);
	this.closePath();
	this.fill();
}).bind(ctx)

var world = new World();
for(i=0;i<5;i++){
	var j=0
	for(j=0;j<5;j++){
		var temp = new Enemy();
		world.addEntity(temp);
		temp.rad = 15;
		temp.x = temp.rad*2.2*i+55;
		temp.y = temp.rad*2.2*j+55;
		
	}
}
canvas.addEventListener("mousemove",function(e){
	mouseX = e.offsetX;
	mouseY = e.offsetY;
});

canvas.addEventListener("contextmenu",function(e){
	e.preventDefault();
});
canvas.addEventListener("mouseselect",function(e){
	e.preventDefault();
});

requestAnimationFrame(main);

function main(){

	world.update();
	world.col();


	
	ctx.clearRect(0,0,canvas.width,canvas.height);
	world.draw(ctx);

	requestAnimationFrame(main);	
}