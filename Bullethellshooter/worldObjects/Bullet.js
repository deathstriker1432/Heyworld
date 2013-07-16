function Bullet(aworld,ax,ay,atx,aty){
    Entitity.call(this,aworld)
	
	this.tx = atx;
	this.ty = aty;
	
	this.x = ax;
	this.y = ay;
	
	this.frict = 1;
	this.rad = 5;
	
	
	var dx = this.tx - this.x;
	var dy = this.ty - this.y;
	var mag = Math.sqrt(dx*dx+dy*dy)+0.0000001;
	dx *= 6/mag;
	dy *= 6/mag;
	this.xs = dx + 2*Math.random()-1;
	this.ys = dy + 2*Math.random()-1;
		
	this.age = 0;
	this.superupdate = this.update;
	this.update = (function(){
		this.age++;
		if(this.age>60){
			this.die();
		}
		this.superupdate();
	}).bind(this);
	this.draw = (function(ctx){
		ctx.fillStyle = "green"
		ctx.fillCircle(this.x,this.y,this.rad);
	}).bind(this);
	
}