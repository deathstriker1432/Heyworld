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