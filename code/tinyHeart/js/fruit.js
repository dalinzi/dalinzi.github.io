var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];//图片大小，让果实变大
	this.spd = [];//给每个果实设定成长和上浮的速度
	this.fruitType = [];//果实类型
	this.aneId = [];//果实生长的海葵Id
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random() * 0.07 + 0.005;
		this.fruitType[i] = "";
	}
	
}
fruitObj.prototype.draw = function(){
	for (var i =0; i < this.num; i++) {
		if(this.alive[i] == true){
			if(this.fruitType[i] == "blue"){//根据果实种类选择果实图片
				var pic = this.blue;
			}
			else{
				var pic = this.orange;
			}

			if(this.l[i] <= 14){//果实生长
				var id = this.aneId[i];
				this.x[i] = ane.headX[id];
				this.y[i] = ane.headY[id];
				this.l[i] += this.spd[i] * deltaTime * 0.2;
			}
			else{//果实上浮
				this.y[i] -= this.spd[i] * deltaTime;
			}

			ctx2.drawImage(pic, this.x[i] - this.l[i]*0.5, this.y[i],this.l[i],this.l[i]);
			
			if(this.y[i] < 10){//果实上浮至顶部消失
				this.alive[i] = false;
				this.l[i] = 0;
			}
		}
	}
}
fruitObj.prototype.born = function(i){//果实生成的海葵的Id,type
	this.aneId[i] = Math.floor(Math.random() * ane.num);
	this.alive[i] = true;

	var ran = Math.random();//随机确定果实的种类
	if(ran < 0.15){
		this.fruitType[i] = "blue";
	}
	else{
		this.fruitType[i] = "orange";
	}

}
fruitObj.prototype.fruitMonitor = function(){//监控果实数量,使果实数量为15
	var num = 0;
	for(var i= 0; i< fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num < 15){
		this.sentFruit();
	}
}
fruitObj.prototype.sentFruit = function(){//找到一个alive为false的果实让其生成
	for(var i= 0; i< fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			break;
		}
	}
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
	this.l[i] = 0;
}