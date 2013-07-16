function World(){
    
	this.eArray = [];
	this.bArray = [];
	this.player = new Player(this);
	this.eArray.push(this.player);
	
	this.addEntity = (function(x){
		this.eArray.push(x);
	}).bind(this);

	this.update = (function(){
		for(var i = 0;i<this.eArray.length;i++){
			this.eArray[i].update(this);
		}
	}).bind(this);
    
    
	this.draw = (function(ctx){
		this.player.draw(ctx);
		for(var i = 0;i<this.eArray.length;i++){
			this.eArray[i].draw(ctx);
		}
		for(var j = 0;j<this.bArray.length;j++){
			this.bArray[j].draw(ctx);
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
				var magd = magx*magx+magy*magy;
				dist = a.rad+b.rad;
				if(dist*dist>magd){		
					magd = Math.sqrt(magd)+0.00000001;
					pen = magd-dist;
					if(-pen>2.5){
						a.die();
						b.die();
						continue
					}
/*					if(a.constructor.name != b.constructor.name){
						a.die();
						b.die();
						continue
					}
*/
					vectx = magx/magd;
					vecty = magy/magd;
					var magxs = b.xs-a.xs;
					var magys = b.ys-a.ys;
//					var magds = Math.sqrt(magxs*magxs+magys*magys)+0.000000001;
					a.x+=vectx*pen/2;
					a.y+=vecty*pen/2;
					b.x-=vectx*pen/2;
					b.y-=vecty*pen/2;
/*					a.xs+=vectx*pen/20*magds;
					a.ys+=vecty*pen/20*magds;
					b.xs-=vectx*pen/20*magds;
					b.ys-=vecty*pen/20*magds;
*/				}
			}
		}
	}).bind(this);
	this.removeEntity = (function(dead){
		for(var i = 0;i<this.eArray.length;i++){
			if(this.eArray[i] === dead){
				this.eArray.splice(i,1);
			}
		}
	}).bind(this);
}
