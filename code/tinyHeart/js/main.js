document.body.onload = game;

var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;//上一帧的时间
var deltaTime;//两帧之间的时间差

var canWidth;
var canHeight;

var bgPic = new Image();

var ane;//海葵
var fruit;//果实
var mom;//大鱼

var mx;//鼠标坐标
var my;

var babyTail = [];//小鱼的图片数组
var babyEye = [];
var babyBody = [];

var momTail = [];//大鱼的图片数组
var momEye = [];
var momBodyOrg = [];
var momBodyBlue = [];

var data;//游戏数据
var wave;//波纹效果

var dust;//漂浮物
var dustPic = [];//漂浮物图片数组

var oBtn;

function game(){
	init();
	gameloop();
}

function init(){
	//获得canvas context
	can1 = document.getElementById("canvas1");//fishes
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background
	ctx2 = can2.getContext("2d");

	oBtn = document.getElementById("new_game");
	oBtn.addEventListener("click", new_game, false);

	lastTime = Date.now();
	deltaTime = 0;

	canWidth = can1.width;
	canHeight = can1.height;

	bgPic.src = "./src/background.jpg";

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	data = new dataObj();
	data.init();

	wave = new waveObj();
	wave.init();

	dust = new dustObj();
	dust.init();

	can1.addEventListener("mousemove", onMouseMove, false);
	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	//小鱼图片数组
	for(var i = 0; i < 8; i++){//小鱼尾巴图片数组初始化
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
	for(var i = 0; i < 2; i++){//小鱼眼睛图片数组初始化
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i + ".png";
	}
	for(var i = 0; i < 20; i++){//小鱼身体图片数组初始化
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	}
	//大鱼图片数组
	for(var i = 0; i < 8; i++){//大鱼尾巴图片数组初始化
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail" + i + ".png";
	}
	for(var i = 0; i < 2; i++){//大鱼眼睛图片数组初始化
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye" + i + ".png";
	}
	for(var i = 0; i < 8; i++){//大鱼身体图片数组初始化
		momBodyOrg[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrg[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}
	//漂浮物图片数组初始化
	for(var i = 0; i < 7; i++){
		dustPic[i] = new Image();
		dustPic[i].src = "./src/dust" + i + ".png";
	}


}

function gameloop(){
	window.requestAnimFrame(gameloop);//setInterval,setTimeout
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40) deltaTime = 40;//防止切换页面后使deltaTime变得过大从而生成巨大果实

	drawBackground();
	ane.draw();
	fruit.fruitMonitor();
	fruit.draw();
	//canvas1只绘制了fish并覆盖在canvas2上，其他部分是空白的，
	//每次绘制前要用clearRect方法将画布清空，否则之前的fish会留在画布上
	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitsCollision();
	momBabyCollision();

	baby.draw();
	data.draw();
	wave.draw();
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameover){
		if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}
}

function new_game(){
	lastTime = Date.now();
	deltaTime = 0;

	ane.init();
	fruit.init();
	mom.init();
	baby.init();
	data.init();
	wave.init();
	dust.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;
}