function World(){
    
	this.eArray = [];
	this.bArray = [];
	this.player = new Player();
    
	this.addEnemy = (function(x){
		this.eArray.push(x);
	}).bind(this);
    
    
	this.takeEnemy = (function(x){
		//this.eArray.(x);
	}).bind(this);
    
    
	this.addBullet = (function(y){
		this.bArray.push(y);
	}).bind(this);
    
    
	this.takeBullet = (function(y){
		//this.bArray.(y);
	}).bind(this);
    
    
	this.update = (function(timeDiff){
		this.player.update(timeDiff);
		for(var i = 0;i<this.eArray.length;i++){
			this.eArray[i].update(timeDiff,this);
		}
		
	}).bind(this);
    
    
	this.draw = (function(ctx){
		this.player.draw(ctx);
		for(var i = 0;i<this.eArray.length;i++){
			this.eArray[i].draw(ctx);
		}
	}).bind(this);
    
    
	this.col= (function(){
		var a;
		var b;
		for(var i = 0;i<this.eArray.length;i++){
			for(var j = i;j<this.eArray.length;j++){
				if(i==j){
					continue
				}
				a = this.eArray[i];
				b = this.eArray[j];
				var magx = b.x-a.x;
				var magy = b.y-a.y;
				var magd = Math.sqrt(magx*magx+magy*magy);
				dist = a.rad+b.rad;
				if(dist>magd){
					pen = magd-dist;
					vectx = magx/magd;
					vecty = magy/magd;
					var magxs = b.xs-a.xs;
					var magys = b.ys-a.ys;
					var magds = Math.sqrt(magxs*magxs+magys*magys);
					a.x+=vectx*pen/2;
					a.y+=vecty*pen/2;
					b.x-=vectx*pen/2;
					b.y-=vecty*pen/2;
					a.xs+=vectx*pen/20*magds;
					a.ys+=vecty*pen/20*magds;
					b.xs-=vectx*pen/20*magds;
					b.ys-=vecty*pen/20*magds;
				}
			}
		}
	}).bind(this);
}
