function Bullet(ax,ay,atx,aty){
    Entitity.call(this)
	
	this.tx = atx;
	this.ty = aty;
	
	this.x = ax;
	this.y = ay;
	
	this.frict = 1;
	this.rad = 5;
	
	
	var dx = this.tx - this.x;
	var dy = this.ty - this.y;
	var mag = Math.sqrt(dx*dx+dy*dy)+0.0000001;
	dx *= 5/mag;
	dy *= 5/mag;
	this.xs = dx;
	this.ys = dy;
		
		
	this.draw = (function(ctx){
		ctx.fillStyle = "green"
		ctx.fillCircle(this.x,this.y,this.rad);
	}).bind(this)

}