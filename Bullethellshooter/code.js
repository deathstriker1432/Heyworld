var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillCircle = (function(x,y,r){
	this.beginPath();
	this.arc(x,y,r,0,Math.PI*2,false);
	this.closePath();
	this.fill();
}).bind(ctx)

var world = new World();
for(i=0;i<16;i++){
	var j=0
	for(j=0;j<16;j++){
		var temp = new Enemy();
		world.addEnemy(temp);
		temp.rad = 15;
		temp.x = temp.rad*2.2*i+55;
		temp.y = temp.rad*2.2*j+55;
		
	}
}
canvas.addEventListener("mousedown",function(e){
	mx = e.offsetX;
	my = e.offsetY;
	var test = new Bullet(world.player.x,world.player.y,mx,my);
	world.addBullet(test);
});
canvas.addEventListener("contextmenu",function(e){
	e.preventDefault();
});
canvas.addEventListener("mouseselect",function(e){
	e.preventDefault();
});
var time = +new Date();
requestAnimationFrame(main);
function main(){
	
	var newTime = +new Date();
	var timeDiff = Math.min(newTime - time,30);
	time = newTime;
	world.update(timeDiff);
	world.col();
	world.col();
	world.col();

	
	ctx.clearRect(0,0,canvas.width,canvas.height);
	world.draw(ctx);

	requestAnimationFrame(main);	
}