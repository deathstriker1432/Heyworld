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