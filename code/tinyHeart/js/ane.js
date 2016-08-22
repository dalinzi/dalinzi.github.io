var aneObj = function(){//海葵对象
	this.rootX = [];
	this.headX = [];
	this.headY = [];
	this.amp = [];//海葵摆动的幅度
	this.alpha = 0;//控制摆动的角度
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){//初始化海葵位置数组和长度数组
	for(var i =0;i < this.num;i++){
		this.rootX[i] = i * 16 + Math.random() * 20;
		this.headX[i] = this.rootX[i];
		this.headY[i] = canHeight - 250 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 60;
	}
	this.alpha = 0;
}
aneObj.prototype.draw = function(){//绘制海葵
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);

	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for(var i =0; i < this.num; i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootX[i], canHeight);
		this.headX[i] = this.rootX[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootX[i], canHeight - 100, this.headX[i], this.headY[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}