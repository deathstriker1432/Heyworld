function Entitity(aworld){
	this.world = aworld
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
	
	this.update = (function(){
		this.x += this.xs;
		this.y += this.ys;
		
		this.xs *= this.frict;
		this.ys *= this.frict;
	
	}).bind(this)
	this.die = (function(){
		world.removeEntity(this);
	}).bind(this);
}