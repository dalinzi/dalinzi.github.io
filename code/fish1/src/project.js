window.__require=function t(e,o,n){function i(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var h="function"==typeof __require&&__require;if(!a&&h)return h(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+c+"'")}}var p=o[c]={exports:{}};e[c][0].call(p.exports,function(t){return i(e[c][1][t]||t)},p,p.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({Bomb:[function(t,e,o){"use strict";cc._RF.push(e,"18431omdzNM85VtpRyzjB+Z","Bomb"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.angle=0,e.attack=4,e.speed=10,e.bombLevel=1,e}return __extends(e,t),e.prototype.shot=function(t,e){this.game=t,this.enabled=!0;var o=t.gunNode.parent.convertToWorldSpaceAR(t.gunNode.getPosition());this.angle=t.gunNode.rotation,this.node.rotation=this.angle;var n=cc.v2(o.x+50*Math.sin(this.angle/180*3.14),o.y+50*Math.cos(this.angle/180*3.14));this.node.position=n,this.node.parent=cc.director.getScene()},e.prototype.update=function(t){var e=this.node.x,o=this.node.y;e+=t*this.speed*Math.sin(this.angle/180*3.14),o+=t*this.speed*Math.cos(this.angle/180*3.14),this.node.x=e,this.node.y=o,(this.node.x>cc.winSize.width+100||this.node.x<-100||this.node.y>cc.winSize.height+100||this.node.y<0)&&this.game.returnBomb(this.node)},e.prototype.onCollisionEnter=function(t,e){var o=e.world.points,n=o[0].add(o[3]).mul(.5);this.game.createNet(n),this.game.returnBomb(this.node)},e.prototype.getAttackValue=function(){return this.attack*this.bombLevel},__decorate([r],e.prototype,"speed",void 0),e=__decorate([i],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],Coin:[function(t,e,o){"use strict";cc._RF.push(e,"ad931U8u2NLh7x+bC5wJsEx","Coin"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.init=function(t){this.cointroller=t},e.prototype.goDown=function(t,e){this.node.parent=cc.director.getScene(),this.node.position=t;var o=cc.spawn(cc.moveTo(.8,e),cc.scaleTo(.8,.5)),n=cc.callFunc(this.returnCoin,this),i=cc.sequence(o,n);this.node.runAction(i)},e.prototype.returnCoin=function(){this.cointroller.returnCoin(this.node)},e=__decorate([i],e)}(cc.Component));o.default=r,cc._RF.pop()},{}],FishType:[function(t,e,o){"use strict";var n;cc._RF.push(e,"8080eT8Uv9LjIqY/fnpA0es","FishType"),Object.defineProperty(o,"__esModule",{value:!0}),function(t){t[t.alive=0]="alive",t[t.dead=1]="dead"}(n||(n={})),o.FishState=n,cc._RF.pop()},{}],Fish:[function(t,e,o){"use strict";cc._RF.push(e,"cc0e4+OxlZHObL/7RDBWd06","Fish"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./FishType"),i=cc._decorator,r=i.ccclass,c=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.hp=10,e.gold=2,e.fishState=n.FishState.alive,e}return __extends(e,t),e.prototype.init=function(t){this.game=t,this.enabled=!0,this.spawnFish(t)},e.prototype.spawnFish=function(t){t.fishTypes.length;var e=Math.floor(2*Math.random());this.fishType=t.fishTypes[e],this.fishType=this.randomFishType(t.fishTypes);var o=this.getPosAndBezier(),i=o.pos,r=o.bezier;this.node.position=cc.find("Canvas").convertToNodeSpaceAR(i);var c=r[0],a=Math.atan(c.y/c.x);this.node.rotation=180*-a/3.14,this.hp=this.fishType.hp,this.gold=this.fishType.gold,this.fishState=n.FishState.alive,this.anim.play(this.fishType.name+"_run"),this.node.parent=cc.find("Canvas"),this.lastPosition=this.node.getPosition(),this.changeCollider(),this.swimming(r)},e.prototype.randomFishType=function(t){var e=t[0],o=Math.floor(100*Math.random());return t.some(function(t){return o<t.rate?(e=t,!0):(o-=t.rate,!1)}),e},e.prototype.getPosAndBezier=function(){var t,e;switch(this.dirFlag=Math.floor(3*Math.random()),this.dirFlag){case 0:t=cc.v2(100*-Math.random()-100,2*(Math.random()-.5)*300+340),e=[cc.v2(Math.floor(100*Math.random())+100,2*(Math.random()-.5)*500),cc.v2(Math.floor(100*Math.random())+600,2*(Math.random()-.5)*500),cc.v2(1800,2*(Math.random()-.5)*1800)];break;case 1:t=cc.v2(100*Math.random()+100+cc.winSize.width,2*(Math.random()-.5)*300+340),e=[cc.v2(-Math.floor(100*Math.random())-100,2*(Math.random()-.5)*500),cc.v2(-Math.floor(100*Math.random())-600,2*(Math.random()-.5)*500),cc.v2(-1800,2*(Math.random()-.5)*1800)];break;case 2:t=cc.v2(2*(Math.random()-.5)*400+cc.winSize.width/2,100*Math.random()+800),e=[cc.v2(2*(Math.random()-.5)*300,-Math.floor(100*Math.random())-100),cc.v2(2*(Math.random()-.5)*400,-Math.floor(100*Math.random())-300),cc.v2(2*(Math.random()-.5)*600,-1800)]}return{pos:t,bezier:e}},e.prototype.changeCollider=function(){this.node.getComponent(cc.BoxCollider).size=this.node.getContentSize()},e.prototype.swimming=function(t){var e=10*Math.random()+10,o=cc.bezierBy(e,t);this.node.runAction(o)},e.prototype.onLoad=function(){},e.prototype.update=function(t){this.updateDegree(),this.changeCollider()},e.prototype.updateDegree=function(){var t,e=this.node.getPosition();this.lastPosition.sub(e).mag()<1||(e.x-this.lastPosition.x==0?(t=e.y-this.lastPosition.y>0?-90:90,cc.log(11111)):t=180*-Math.atan((e.y-this.lastPosition.y)/(e.x-this.lastPosition.x))/3.14,2==this.dirFlag?this.node.rotation=t>0?t-90:t+90:(this.node.rotation=t-90,1==this.dirFlag&&(this.node.rotation-=180)),this.lastPosition=e,this.beAttack())},e.prototype.beAttack=function(){if(this.isDie()){this.node.stopAllActions();var t=this.node.parent.convertToWorldSpaceAR(this.node.position);this.game.gainCoin(t,this.gold),this.dieCallback()}else this.returnFish()},e.prototype.dieCallback=function(){this.node.stopAllActions(),this.game.returnFish(this.node)},e.prototype.returnFish=function(){(this.node.x>900||this.node.x<-1e3||this.node.y>600||this.node.y<-900)&&(this.node.stopAllActions(),this.game.returnFish(this.node))},e.prototype.isDie=function(){return this.fishState==n.FishState.dead},e.prototype.onCollisionEnter=function(t,e){"net"==t.node.name&&(this.hp-=Math.floor(10*Math.random()+5)),this.hp<=0&&(this.fishState=n.FishState.dead)},__decorate([c(cc.Animation)],e.prototype,"anim",void 0),e=__decorate([r],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./FishType":"FishType"}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Game"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,c=t("./Fish"),a=t("./Bomb"),s=t("./Net"),h=t("./Score"),p=t("./Gun"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fishPrefab=null,e.gunNode=null,e.bombPrefab=null,e.netPrefab=null,e.Score=null,e.timeLabel=null,e.gameOverNode=null,e.shotTime=0,e.gameTime=60,e.gameState=0,e}return __extends(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0,this.bombPool=new cc.NodePool(a.default),this.netsPool=new cc.NodePool,this.fishPool=new cc.NodePool(c.default);for(var t=0;t<10;++t){var e=cc.instantiate(this.fishPrefab);this.fishPool.put(e)}this.Score.getComponent(h.default).init(),this.gunNode.getComponent(p.default).init(),cc.find("Canvas/background").zIndex=-1,cc.find("Canvas/bottom").zIndex=1,cc.find("Canvas/backBtn").zIndex=2,cc.find("Canvas/gameStart").zIndex=3,this.gameOverNode.zIndex=2,this.gameOverNode.active=!1,this.timeLabel.string=this.gameTime.toString(),cc.find("Canvas/gameStart").getComponent(cc.Animation).play("count").on("stop",this.gameStart,this);var o=this;cc.debug.setDisplayStats(!0),cc.loader.loadRes("config",function(t,e){t?cc.error(t.message||t):(o.fishTypes=e.json,o.schedule(o.creatFish,2))}),this.node.on(cc.Node.EventType.TOUCH_START,function(t){if(1==this.gameState){var e=o.gunNode.parent.convertToNodeSpaceAR(t.touch.getLocation()),n=o.gunNode.getPosition();if(e.y<n.y)return;var i=180*Math.atan((e.x-n.x)/(e.y-n.y))/3.14;o.gunNode.rotation=i;var r=o.gunNode.getComponent(p.default).curLevel;o.shot(r),o.shotTime=.25}},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){if(1==this.gameState){var e=o.gunNode.parent.convertToNodeSpaceAR(t.touch.getLocation()),n=o.gunNode.getPosition();if(e.y<n.y)return;var i=180*Math.atan((e.x-n.x)/(e.y-n.y))/3.14;o.gunNode.rotation=i}},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){o.shotTime=0},this)},e.prototype.update=function(t){if(1==this.gameState)if(this.gameTime>0){if(0!=this.shotTime&&(this.shotTime-=t,this.shotTime<=0)){this.shotTime=.25;var e=this.gunNode.getComponent(p.default).curLevel;this.shot(e)}this.gameTime-=t,this.timeLabel.string=(Math.floor(this.gameTime)+1).toString()}else this.gameTime=0,this.timeLabel.string="0",this.gameState=0,this.scheduleOnce(function(){this.gameOverNode.getChildByName("scoreNum").getComponent(cc.Label).string=this.Score.getComponent(h.default).currentValue.toString(),this.gameOverNode.active=!0},1.5)},e.prototype.shot=function(t){this.bombPool.size()>0?this.oneBomb=this.bombPool.get(this):this.oneBomb=cc.instantiate(this.bombPrefab),this.oneBomb.getComponent(a.default).shot(this,t),this.gunNode.getComponent(p.default).play()},e.prototype.creatFish=function(){for(var t=0;t<5;++t){(this.fishPool.size()>0?this.fishPool.get(this):cc.instantiate(this.fishPrefab)).getComponent(c.default).init(this)}},e.prototype.createNet=function(t){this.netsPool.size()>0?this.oneNet=this.netsPool.get(this):this.oneNet=cc.instantiate(this.netPrefab);var e=this.gunNode.getComponent(p.default).curLevel;this.oneNet.getComponent(s.default).init(t,this,e)},e.prototype.returnFish=function(t){this.fishPool.put(t)},e.prototype.returnBomb=function(t){this.bombPool.put(t)},e.prototype.returnNet=function(t){this.netsPool.put(t)},e.prototype.gainCoin=function(t,e){this.Score.getComponent(h.default).gainCoin(t,e)},e.prototype.gameOver=function(){this.unscheduleAllCallbacks()},e.prototype.gameStart=function(){this.gameState=1},e.prototype.gameRestart=function(){cc.director.loadScene("game")},e.prototype.back=function(){cc.director.loadScene("menu")},__decorate([r(cc.Prefab)],e.prototype,"fishPrefab",void 0),__decorate([r(cc.Node)],e.prototype,"gunNode",void 0),__decorate([r(cc.Prefab)],e.prototype,"bombPrefab",void 0),__decorate([r(cc.Prefab)],e.prototype,"netPrefab",void 0),__decorate([r(cc.Node)],e.prototype,"Score",void 0),__decorate([r(cc.Label)],e.prototype,"timeLabel",void 0),__decorate([r(cc.Node)],e.prototype,"gameOverNode",void 0),e=__decorate([i],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./Bomb":"Bomb","./Fish":"Fish","./Gun":"Gun","./Net":"Net","./Score":"Score"}],Gun:[function(t,e,o){"use strict";cc._RF.push(e,"63bf99puZBFX5yFzwFjcP4b","Gun"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e}return __extends(e,t),e.prototype.init=function(){this.curLevel=1},e.prototype.play=function(){this.anim.play("shot")},__decorate([r(cc.Animation)],e.prototype,"anim",void 0),e=__decorate([i],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],Menu:[function(t,e,o){"use strict";cc._RF.push(e,"54797TPDTFJw4Mc5oTu65RJ","Menu"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.onLoad=function(){cc.director.preloadScene("game")},e.prototype.startGame=function(){cc.director.loadScene("game")},e=__decorate([i],e)}(cc.Component));o.default=r,cc._RF.pop()},{}],Net:[function(t,e,o){"use strict";cc._RF.push(e,"0bddeiGokJOlqTAIJlaSwI3","Net"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.curLevel=1,e}return __extends(e,t),e.prototype.init=function(t,e,o){this.curLevel=o,this.node.parent=cc.director.getScene(),this.node.position=t,this.game=e,this.anim.play("net")},e.prototype.returnNet=function(){this.game.returnNet(this.node)},__decorate([r(cc.Animation)],e.prototype,"anim",void 0),e=__decorate([i],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],NumUp:[function(t,e,o){"use strict";cc._RF.push(e,"fae16wnchJB4aIklbwBMgJO","NumUp"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.label=null,e}return __extends(e,t),e.prototype.init=function(t,e,o){this.Score=o,this.label.string=e.toString(),this.node.parent=cc.director.getScene(),this.node.position=t,this.anim.play("labelUp").on("stop",this.returnNumup,this)},e.prototype.returnNumup=function(){this.Score.returnNumup(this.node)},__decorate([r(cc.Animation)],e.prototype,"anim",void 0),__decorate([r(cc.Label)],e.prototype,"label",void 0),e=__decorate([i],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],Score:[function(t,e,o){"use strict";cc._RF.push(e,"096efimQO1BrqROcx34yYfd","Score"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./Coin"),i=t("./NumUp"),r=cc._decorator,c=r.ccclass,a=r.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.numUpPrefab=null,e.coinPrefab=null,e.number=null,e.currentValue=0,e.toValue=0,e}return __extends(e,t),e.prototype.onLoad=function(){},e.prototype.init=function(){this.coinUpPool=new cc.NodePool,this.coinsPool=new cc.NodePool,this.setValue(this.currentValue)},e.prototype.prefixInteger=function(t,e){return(Array(e).join("0")+t).slice(-e)},e.prototype.setValue=function(t){var e=t.toString();this.number.string=e},e.prototype.addCoin=function(t){this.currentValue+=t,this.setValue(this.currentValue)},e.prototype.reduceCoin=function(t){return this.currentValue>=t?(this.setValue(this.currentValue-=t),!0):(this.setValue(0),!1)},e.prototype.gainCoin=function(t,e){this.coinUpPool.size()>0?this.numUp=this.coinUpPool.get():this.numUp=cc.instantiate(this.numUpPrefab),this.numUp.getComponent(i.default).init(t,e,this),this.coinsPool.size()>0?this.oneCoin=this.coinsPool.get():this.oneCoin=cc.instantiate(this.coinPrefab),this.oneCoin.getComponent(n.default).init(this);var o=this.node.convertToWorldSpaceAR(this.number.node.position);this.oneCoin.getComponent(n.default).goDown(t,o),this.addCoin(e)},e.prototype.returnCoin=function(t){this.coinsPool.put(t)},e.prototype.returnNumup=function(t){this.coinUpPool.put(t)},__decorate([a(cc.Prefab)],e.prototype,"numUpPrefab",void 0),__decorate([a(cc.Prefab)],e.prototype,"coinPrefab",void 0),__decorate([a(cc.Label)],e.prototype,"number",void 0),__decorate([a],e.prototype,"currentValue",void 0),__decorate([a],e.prototype,"toValue",void 0),e=__decorate([c],e)}(cc.Component);o.default=s,cc._RF.pop()},{"./Coin":"Coin","./NumUp":"NumUp"}]},{},["Bomb","Coin","Fish","FishType","Game","Gun","Menu","Net","NumUp","Score"]);