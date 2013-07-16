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