var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameover = false;
	this.alpha = 0;
}
dataObj.prototype.init = function(){
	ctx1.font = "20px Verdana";
	ctx1.textAlign = "center";

	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameover = false;
	this.alpha = 0;

}
dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.fillStyle = "white";
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	ctx1.fillText("SCORE: " + this.score, w * 0.5, h - 20);
	//小鱼生命值的显示
	ctx1.fillText("HP: ", 30, h - 20);
	ctx1.strokeStyle = "white";
	ctx1.strokeRect(50, h - 30, 19 * 4, 10);
	ctx1.fillStyle =  "pink";
	ctx1.fillRect(50, h - 30, (19 - baby.babyBodyCount) * 4, 10);


	if(this.gameover){
		this.alpha += deltaTime * 0.002;
		if(this.alpha > 1){
			this.alpha = 1;
		}
		ctx1.fillStyle ="rgba(255,255,255," + this.alpha + ")";
		ctx1.font = "40px Verdana";
		ctx1.fillText("GAMEOVER", w * 0.5, h * 0.5);
	}

	ctx1.restore();
}