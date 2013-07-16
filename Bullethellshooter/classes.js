function Entitity(){
	this.x = 0;
	this.y = 0;
	this.xs = 0;
	this.ys = 0;
	this.ang = 0;
	this.rad = 10;
	this.frict = 0.7;
	this.draw = (function(ctx){
		ctx.fillStyle = "red"
		ctx.fillRect(this.x-10,this.y-10,20,20)
	}).bind(this)
	
	this.update = (function(timeDiff){
		this.x += this.xs;
		this.y += this.ys;
		
		this.xs *= this.frict;
		this.ys *= this.frict;
	
	}).bind(this)
	
}
function Player(){
	Entitity.call(this)
	this.x = 400;
	this.y = 400;
	this.draw = (function(ctx){
		ctx.fillStyle = "red"
		ctx.fillCircle(this.x,this.y,10);
	}).bind(this)
	this.superupdate = this.update;
	this.update = (function(timeDiff){
		var acc = timeDiff/10;
		if(isKeyDown(keys.d)){
			this.xs += acc;
		}
		if(isKeyDown(keys.a)){
			this.xs -= acc;
		}
		if(isKeyDown(keys.w)){
			this.ys -= acc;
		}
		if(isKeyDown(keys.s)){
			this.ys += acc;
		}
		this.superupdate();
	}).bind(this)
	
	
	
}
function Enemy(){
	Entitity.call(this)
	this.draw = (function(ctx){
		ctx.fillStyle = "blue"
		ctx.fillCircle(this.x,this.y,this.rad);
	}).bind(this)
	this.superupdate = this.update;
	this.update = (function(timeDiff,world){
		var acc = timeDiff/15;
		var dx = world.player.x-this.x;
		var dy = world.player.y-this.y;
		var mag = Math.sqrt(dx*dx+dy*dy)+0.0000001;
		dx *= acc/mag;
		dy *= acc/mag;
		this.xs += dx;
		this.ys += dy;
		this.superupdate();
	}).bind(this)
}
function Bullet(mx,my,world){
	Entitity.call(this)
	this.mx = mx
	this.my = my
	this.draw = (function(ctx){
		ctx.fillStyle = "green"
		ctx.fillCircle(this.x,this.y,this.rad);
	}).bind(this)
	this.rx = world.player.x
	this.x = world.player.x
	this.ry = world.player.y
	this.y = world.player.y
	
	this.superupdate = this.update;
	this.update = (function(timeDiff){
		var acc = timeDiff/15;
		var dx = this.mx - this.rx;
		var dy = this.my - this.ry;
		var mag = Math.sqrt(dx*dx+dy*dy)+0.0000001;
		dx *= acc/mag;
		dy *= acc/mag;
		this.xs += dx;
		this.ys += dy;
		this.superupdate();
	}).bind(this)
}