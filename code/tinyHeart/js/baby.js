var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	//this.babyEye = new Image();
	//this.babyBody = new Image();
	//this.babyTail = new Image();

	this.babyTailTimer = 0;//用于尾部动画
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;//用于眼睛动画
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyTimer = 0;//用于身体动画
	this.babyBodyCount = 0;
}
babyObj.prototype.init = function(){
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	//this.babyEye.src = "./src/babyEye0.png";
	//this.babyBody.src = "./src/babyFade0.png";
	//this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function(){
	//lerp x,y让小鱼位置趋向大鱼位置
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);

	//delta angle计算小鱼与大鱼位置的角度差
	//Math.atan2(y,x);
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	//lerp angle让小鱼角度趋向大鱼位置
	this.angle = lerpAngle(beta, this.angle, 0.96);

	//baby tail count
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	//baby eye count
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1500 +2000;
		}
		else{
			this.babyEyeInterval = 150;
		}
	}

	//baby body count
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > 300){
		this.babyBodyCount = this.babyBodyCount + 1;
		this.babyBodyTimer %= 300;
		if(this.babyBodyCount > 19){//gameover
			this.babyBodyCount = 19;
			data.gameover = true;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	ctx1.drawImage(babyTail[this.babyTailCount], -babyTail[this.babyTailCount].width * 0.5 + 23, -babyTail[this.babyTailCount].height * 0.5);
	ctx1.drawImage(babyBody[this.babyBodyCount], -babyBody[this.babyBodyCount].width * 0.5, -babyBody[this.babyBodyCount].height * 0.5);
	ctx1.drawImage(babyEye[this.babyEyeCount], -babyEye[this.babyEyeCount].width * 0.5, -babyEye[this.babyEyeCount].height * 0.5);
	
	ctx1.restore();

}