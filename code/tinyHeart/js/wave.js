var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
	this.type = [];
}

waveObj.prototype.num = 10;

waveObj.prototype.init = function(){
	for(var i = 0; i < this.num; i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

waveObj.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	for(var i = 0; i < this.num; i++){
		if(this.alive[i]){
			if(this.type[i] == "white"){//大鱼吃果实的wave效果
				this.r[i] += deltaTime * 0.04;//圆圈逐渐变大变浅，半径>50时消失
				if(this.r[i] > 50){
					this.alive[i] = false;
					break;//不绘制
				} 
				var alpha = 1 - this.r[i] / 50;
				ctx1.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
			}
			else{//大鱼喂小鱼的wave效果
				this.r[i] += deltaTime * 0.08;//圆圈逐渐变大变浅，半径>80时消失
				if(this.r[i] > 80){
					this.alive[i] = false;
					break;//不绘制
				} 
				var alpha = 1 - this.r[i] / 80;
				ctx1.strokeStyle = "rgba(243, 91, 0," + alpha + ")";
			}
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2, false);
			ctx1.closePath();
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

waveObj.prototype.born = function(x, y, type){
	for(var i = 0; i < this.num; i++){
		if(!this.alive[i]){
			this.x[i] = x;
			this.y[i] = y;
			this.alive[i] = true;
			this.r[i] = 10;
			this.type[i] = type;
			return;
		}
	}
}