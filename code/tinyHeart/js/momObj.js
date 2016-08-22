var momObj = function(){
	this.x;
	this.y;
	this.angle;//计算大鱼与鼠标的角度
	//this.bigEye = new Image();
	//this.bigBody = new Image();
	//this.bigTail = new Image();

	this.momTailTimer = 0;//用于尾部动画
	this.momTailCount = 0;

	this.momEyeTimer = 0;//用于眼睛动画
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyTimer = 0;//用于身体动画
	this.momBodyCount = 0;
}
momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	//this.bigEye.src = "./src/bigEye0.png";
	//this.bigBody.src = "./src/bigSwim0.png";
	//this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function(){
	//lerp x,y让大鱼位置趋向鼠标位置
	this.x = lerpDistance(mx, this.x, 0.9);
	this.y = lerpDistance(my, this.y, 0.9);

	//delta angle计算大鱼与鼠标位置的角度差
	//Math.atan2(y,x);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	//lerp angle让大鱼角度趋向鼠标位置
	this.angle = lerpAngle(beta, this.angle, 0.9);

	//mom tail count
	this.momTailTimer += deltaTime;
	if(this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}

	//mom eye count
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;

		if(this.momEyeCount == 0){
			this.momEyeInterval = Math.random() * 1500 +2000;
		}
		else{
			this.momEyeInterval = 150;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	ctx1.drawImage(momTail[this.momTailCount], -momTail[this.momTailCount].width * 0.5 + 30, -momTail[this.momTailCount].height * 0.5);
	if(data.double == 2){
		ctx1.drawImage(momBodyBlue[this.momBodyCount], -momBodyBlue[this.momBodyCount].width * 0.5, -momBodyBlue[this.momBodyCount].height * 0.5);
	}
	else{
		ctx1.drawImage(momBodyOrg[this.momBodyCount], -momBodyOrg[this.momBodyCount].width * 0.5, -momBodyOrg[this.momBodyCount].height * 0.5);
	}
	ctx1.drawImage(momEye[this.momEyeCount], -momEye[this.momEyeCount].width * 0.5, -momEye[this.momEyeCount].height * 0.5);

	ctx1.restore();
}