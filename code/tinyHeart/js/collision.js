//大鱼和果实的碰撞检测
function momFruitsCollision(){
	if(!data.gameover){
		for(var i = 0; i < fruit.num; i++){
			if(fruit.alive[i] == true){
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);//返回距离的平方
				if(l < 400){//距离小于20
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;//大鱼吃到果实身体变化
					if(mom.momBodyCount > 7){
						mom.momBodyCount = 7;
					}
					if(fruit.fruitType[i] == "blue"){
						data.double = 2;
					}
					wave.born(fruit.x[i], fruit.y[i], "white");
				}
			}
		}
	}
}
//mom baby colision
function momBabyCollision(){
	if(data.fruitNum > 0 && !data.gameover){
		var l = calLength2(baby.x, baby.y, mom.x, mom.y);//返回距离的平方
		if(l < 400){//距离小于20
			//baby 根据喂的果实数量来修改baby.babyBodyCount，恢复小鱼生命值
			var num = baby.babyBodyCount - data.fruitNum * 2;
			if(num >= 0){
				baby.babyBodyCount = num;
			}
			else{
				baby.babyBodyCount = 0;
			}
			//data
			data.addScore();
			//mom
			mom.momBodyCount = 0;
			//动画效果
			wave.born(baby.x, baby.y, "orange");
		}
	}
}