window.__require=function t(o,i,e){function n(c,s){if(!i[c]){if(!o[c]){var h=c.split("/");if(h=h[h.length-1],!o[h]){var a="function"==typeof __require&&__require;if(!s&&a)return a(h,!0);if(r)return r(h,!0);throw new Error("Cannot find module '"+c+"'")}}var d=i[c]={exports:{}};o[c][0].call(d.exports,function(t){return n(o[c][1][t]||t)},d,d.exports,t,o,i,e)}return i[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<e.length;c++)n(e[c]);return n}({blockScript:[function(t,o,i){"use strict";cc._RF.push(o,"d2d07sSQHND1rWgmqVK6R+z","blockScript");cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.node.on("touchstart",this.touchStart,this),this.node.on("touchmove",this.touchMove,this),this.node.on("touchend",this.touchEnd,this),this.gameOver=!1},onDestroy:function(){this.node.off("touchstart",this.touchStart,this),this.node.off("touchmove",this.touchMove,this),this.node.off("touchend",this.touchEnd,this)},touchStart:function(t){this.node.opacity=128,this.startPos=this.node.position,this.node.zIndex=1},touchMove:function(t){var o=t.getDelta();this.node.x+=o.x,this.node.y+=o.y},getPos2Index:function(t){var o=this.node.width,i=this.node.height;return{i:Math.abs(Math.round(t.x/o)),j:Math.abs(Math.round(t.y/i))}},touchEnd:function(t){this.node.opacity=255,this.node.zIndex=0;var o=this.node.width,i=this.node.height,e=this.getPos2Index(this.node.position);if(e.i<4){var n=window.game.picBlockArr[e.i][e.j];if(n){this.node.setPosition(e.i*o,-e.j*i),n.setPosition(this.startPos);var r=this.getPos2Index(this.startPos);window.game.picBlockArr[r.i][r.j]=n,window.game.picBlockArr[e.i][e.j]=this.node,window.game.checkComplete()&&setTimeout(function(){confirm("Puzzle Completed!")},100)}}else this.node.setPosition(this.startPos)},init:function(t,o){var i=this.node.getComponent(cc.Sprite),e=this.node.width,n=this.node.height,r=new cc.SpriteFrame(t,cc.rect(o.x*e,o.y*n,e,n));i.spriteFrame=r}});cc._RF.pop()},{}],gameScript:[function(t,o,i){"use strict";cc._RF.push(o,"1be40edFjVOA6gESU6nF/zB","gameScript");cc.Class({extends:cc.Component,properties:{blockPrefab:cc.Prefab},onLoad:function(){var t=this;window.game=this,cc.loader.loadRes("img",function(o,i){t.picTexture=i,t.picBlockArr=[];for(var e=0;e<4;e++){t.picBlockArr[e]=[];for(var n=0;n<4;n++){var r=cc.instantiate(t.blockPrefab);t.node.addChild(r),r.setPosition(cc.v2(180*e,180*-n)),r.getComponent("blockScript").init(i,cc.v2(e,n)),r.myPos={i:e,j:n},t.picBlockArr[e][n]=r}}t.randPic()})},checkComplete:function(){for(var t=0,o=0;o<4;o++)for(var i=0;i<4;i++){var e=this.picBlockArr[o][i].myPos;e.i==o&&e.j==i&&t++}return 16==t},randPic:function(){for(var t=0;t<4;t++)for(var o=0;o<4;o++){var i={i:parseInt(4*Math.random()),j:parseInt(4*Math.random())},e=this.picBlockArr[t][o],n=this.picBlockArr[i.i][i.j],r=e.position,c=n.position;e.setPosition(c),n.setPosition(r),this.picBlockArr[t][o]=n,this.picBlockArr[i.i][i.j]=e}}});cc._RF.pop()},{}]},{},["blockScript","gameScript"]);