function Bullet(ax,ay,atx,aty){
    Entitity.call(this)
	
	this.tx = atx;
	this.ty = aty;
	
	this.x = ax;
	this.y = ay;
	
	
	
	this.draw = (function(ctx){
		ctx.fillStyle = "green"
		ctx.fillCircle(this.x,this.y,this.rad);
	}).bind(this)
	
	
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
	}).bind(this);
	
}