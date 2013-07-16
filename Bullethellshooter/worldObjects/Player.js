function Player(aworld){
    Entitity.call(this,aworld)
	this.x = 400;
	this.y = 400;
	this.counter = 10;
	this.draw = (function(ctx){
		ctx.fillStyle = "red"
		ctx.fillCircle(this.x,this.y,10);
	}).bind(this)
	this.superupdate = this.update;
	this.update = (function(){
		var acc = 2;
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
		if(isButtonDown(0)){
			this.counter++;
			if (this.counter>15){
				this.counter = 0;
				for(var i=0;i<5;i++){	
					var test = new Bullet(this.world,this.world.player.x,this.world.player.y,mouseX,mouseY);
					this.world.addEntity(test);
				}
			}
		}else{
		this.counter = 15
		}
		this.superupdate();
	}).bind(this)	
}