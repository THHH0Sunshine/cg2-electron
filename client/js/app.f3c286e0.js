(function(e){function t(t){for(var s,c,r=t[0],o=t[1],d=t[2],h=0,u=[];h<r.length;h++)c=r[h],a[c]&&u.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(u.length)u.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},a={app:0},i=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"0ab0":function(e,t,n){"use strict";var s=n("2b99"),a=n.n(s);a.a},"2b1b":function(e,t,n){"use strict";var s=n("b4af"),a=n.n(s);a.a},"2b99":function(e,t,n){},4366:function(e,t,n){},"43ee":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("6762"),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2fdb"),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__),_home_fairysunny_my_test_vueworkspace_cg2webclient_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("cebc"),vuex__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("2f62"),_components_Player_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("cccf"),_components_Card_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("ae8d"),_components_Discover_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("7542"),_js_util_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("f644");__webpack_exports__["a"]={name:"game",components:{Player:_components_Player_vue__WEBPACK_IMPORTED_MODULE_5__["a"],Card:_components_Card_vue__WEBPACK_IMPORTED_MODULE_6__["a"],Discover:_components_Discover_vue__WEBPACK_IMPORTED_MODULE_7__["a"]},data:function(){return{discover:[],discoverMode:1,discoverVisible:!1,socket:null}},computed:Object(vuex__WEBPACK_IMPORTED_MODULE_4__["b"])(["canPlay","self","hand","players","playerNum","selected","choice","downpos","state","searchObj"]),methods:Object(_home_fairysunny_my_test_vueworkspace_cg2webclient_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["a"])({},Object(vuex__WEBPACK_IMPORTED_MODULE_4__["c"])(["addBuff","addHand","addMinion","armoradd","changeHand","choose","clearTable","coinadd","damage","deckadd","downat","draw","handdec","handinc","heal","maxcoinadd","odraw","refreshGreen","removeBuff","removeHand","removeMinion","sit","select","changeState"]),Object(vuex__WEBPACK_IMPORTED_MODULE_4__["c"])({setCanPlay:"canPlay",setCoins:"coins",setDecklen:"decklen",setHero:"hero",setWeapon:"weapon",setSkill:"skill",setProp:"prop",setShield:"shield",setCurrent:"turn",setSearchObj:"searchObj"}),{joinRoom:function(){if(0==this.state){this.changeState(1);var e=new ArrayBuffer(1),t=new DataView(e);t.setInt8(0,-1),this.socket.send(t)}},connect:function(){if(-1==this.state){this.changeState(-2);var e=location.host;e||(e=this.searchObj.wshost),e||(e="localhost:7788"),this.socket=new WebSocket("ws://"+e+"/websocket/"),this.socket.binaryType="arraybuffer",this.socket.onopen=this.opened,this.socket.onmessage=this.received,this.socket.onclose=this.disconnected}},startGame:function(){if(2==this.state){this.changeState(4);var e=new ArrayBuffer(1),t=new DataView(e);t.setInt8(0,-3),this.socket.send(t)}},disconnect:function(){this.socket.close()},opened:function(){this.changeState(0),console.log("Socket connected:"),console.log(this.socket),this.joinRoom()},received:function received(e){if(!(this.state<0)){var json=eval("("+e.data+")");if(console.log(json),null!=json.join){if(3==this.state)return;json.join?(this.changeState(2),console.log("Joined.")):(this.disconnect(),console.log("Cannot join the room."))}else if(null!=json.start){if(3==this.state)return;json.start?(this.clearTable(),this.changeState(3),console.log("Game started.")):(this.changeState(2),console.log("Cannot start the game."))}else if(null!=json.stop){if(3!=this.state)return;json.stop&&(this.closeAll(),this.changeState(2),console.log("Game stopped."))}else if(null!=json.message){if(3!=this.state)return;this.handleMessage(json)}}},disconnected:function(){3==this.state&&this.closeAll(),this.changeState(-1),console.log("Socket disconnected.")},handleMessage:function(e){switch(e.message){case"ASKFORDISCOVER":this.discoverMode=2,this.discover=e.data.choices,this.discoverVisible=!0;break;case"ASKFORFIRST":this.discoverMode=3,this.discover=this.hand,this.discoverVisible=!0;break;case"BURN":e.data.num=-1,this.deckadd(e.data);break;case"CANPLAY":this.refreshGreen(e.data),this.setCanPlay(!0);break;case"CHANGEFIRST":this.changeHand(e.data);break;case"CHANGEHERO":this.setHero(e.data);break;case"CHANGEPP":this.setProp(e.data);break;case"CHANGESKILL":this.setSkill(e.data);break;case"CHECKCOINS":this.setCoins(e.data);break;case"CHECKDECK":this.setDecklen(e.data);break;case"CHECKHERO":this.setHero(e.data);break;case"CHECKSKILL":this.setSkill(e.data);break;case"DAMAGE":this.damage(e.data);break;case"DRAW":this.draw(e.data.card);break;case"EQUIP":this.setWeapon(e.data);break;case"FILLCOINS":this.coinadd(e.data);break;case"FIRSTHAND":this.draw(e.data.card);break;case"GAINARMOR":this.armoradd(e.data);break;case"GAINBUFF":this.addBuff(e.data);break;case"GAINCOINS":this.maxcoinadd(e.data);break;case"GET":this.addHand(e.data.card);break;case"HEAL":this.heal(e.data);break;case"LOSEBUFF":this.removeBuff(e.data);break;case"LOSECOINS":e.data.num=-e.data.num,this.maxcoinadd(e.data);break;case"LOSESHIELD":this.setShield({hash:e.data.hash,shield:!1});break;case"ODRAW":e.data.num=1,this.odraw(e.data);break;case"OFIRSTHAND":this.odraw(e.data);break;case"OGET":this.handinc(e.data.who);break;case"REMOVEMINION":this.removeMinion(e.data);break;case"SEATS":this.sit(e.data);break;case"SHUFFLE":e.data.num=1,this.deckadd(e.data);break;case"SPENDCOINS":e.data.num=-e.data.num,this.coinadd(e.data);break;case"STOPPLAY":this.closeAll();break;case"SUMMON":this.addMinion(e.data);break;case"THROWDECK":e.data.num=-e.data.num,this.deckadd(e.data);break;case"THROWHAND":e.data.who==this.self?this.removeHand(e.data.index):this.handdec(e.data.who);break;case"THROWWEAPON":e.data.card=null,this.setWeapon(e.data);break;case"TURN":this.setCurrent(e.data.who);break}},chooseone:function(e){this.discoverMode=1;var t=[];for(i=0;i<e.choices;i++)t.push({name:e.card.name+"$"+i,cost:0,atk:0,hp:0,canplay:!1,type:"NONE"});this.discover=e,this.discoverVisible=!0},concede:function(){if(this.setCanPlay(!1),3==this.state){var e=new DataView(new ArrayBuffer(1));e.setInt8(0,3),this.socket.send(e)}},move:function(e){var t,n;(this.setCanPlay(!1),3==this.state)&&(this.selected.pIndex<0?this.selected.mIndex<0?(t=new ArrayBuffer(4),n=new DataView(t),n.setInt8(0,6),n.setInt8(1,this.choice),n.setInt8(2,null==e?-1:e.pIndex),n.setInt8(3,null==e?-1:e.mIndex)):(t=new ArrayBuffer(6),n=new DataView(t),n.setInt8(0,5),n.setInt8(1,this.selected.mIndex),n.setInt8(2,this.downpos<0?0:this.downpos),n.setInt8(3,this.choice),n.setInt8(4,null==e?-1:e.pIndex),n.setInt8(5,null==e?-1:e.mIndex)):(t=new ArrayBuffer(4),n=new DataView(t),n.setInt8(0,1),n.setInt8(1,this.selected.mIndex),n.setInt8(2,e.pIndex),n.setInt8(3,e.mIndex)),this.socket.send(n));this.select(null),this.choose(-1),this.downat(-1)},discovered:function(e){if(this.discoverVisible=!1,3==this.state)switch(this.discoverMode){case 1:if(e.data<0)this.select(null),this.downat(-1);else{this.choose(e.data);var t=this.selected.mIndex<0?this.players[this.self].skill:this.hand[this.selected.mIndex];t.greens[e.data].includes(null)&&this.move(null)}break;case 2:var n=new ArrayBuffer(2),s=new DataView(n);s.setInt8(0,2),s.setInt8(1,e.data),this.socket.send(s);break;case 3:n=new ArrayBuffer(2),s=new DataView(n);s.setInt8(0,2);for(var a=0,i=0;i<e.length;i++)e.data[i]&&(a|=1<<i);s.setInt8(1,a),this.socket.send(s);break}},endturn:function(){this.closeAll();var e=new ArrayBuffer(1),t=new DataView(e);t.setInt8(0,4),this.socket.send(t)},closeAll:function(){this.discoverVisible=!1,this.setCanPlay(!1),this.select(null),this.choose(-1),this.downat(-1)}}),mounted:function(){this.setSearchObj(Object(_js_util_js__WEBPACK_IMPORTED_MODULE_8__["a"])()),this.connect()}}},"49c2":function(e,t,n){"use strict";var s=n("6866"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Game"),n("div",{staticClass:"about"},[e._v("cardgame2 web client by Sunny💗")])],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:-1==e.state,expression:"state==-1"}]},[e._v("YOU ARE DISCONNECTED")]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.state<0,expression:"state<0"}],attrs:{disabled:-2==e.state},on:{click:e.connect}},[e._v(e._s(-1==e.state?"RECONNECT":"CONNECTING..."))]),n("button",{attrs:{disabled:2!=e.state},on:{click:e.startGame}},[e._v(e._s(3==e.state?"IN GAME":"START GAME"))]),n("button",{directives:[{name:"show",rawName:"v-show",value:3==e.state,expression:"state==3"}],on:{click:e.concede}},[e._v("CONCEDE")])]),n("div",{staticClass:"game"},[e.playerNum>1?n("div",{attrs:{id:"other"}},[e._l(e.playerNum-e.self-1,function(t){return n("Player",{key:t+e.self,staticClass:"otherp",attrs:{pIndex:t+e.self,player:e.players[t+e.self]},on:{move:e.move}})}),e._l(e.self,function(t){return n("Player",{key:t-1,staticClass:"otherp",attrs:{pIndex:t-1,player:e.players[t-1]},on:{move:e.move}})})],2):e._e(),e.playerNum>e.self?n("div",{attrs:{id:"me"}},[n("Player",{staticClass:"mep",attrs:{pIndex:e.self,player:e.players[e.self]},on:{move:e.move,chooseone:e.chooseone}}),n("button",{staticClass:"endturn",attrs:{disabled:!e.canPlay},on:{click:e.endturn}},[e._v("END TURN")])],1):e._e(),n("div",{staticClass:"hand"},e._l(e.hand,function(t,s){return n("Card",{key:s,staticClass:"handc",attrs:{index:s,card:t},on:{move:e.move,chooseone:e.chooseone}})}),1),e.discoverVisible?n("Discover",{attrs:{cards:e.discover,mode:e.discoverMode},on:{discover:e.discovered}}):e._e()],1)])},r=[],o=n("43ee"),d=o["a"],l=(n("68e4"),n("2877")),h=Object(l["a"])(d,c,r,!1,null,null,null),u=h.exports,_={name:"app",components:{Game:u}},f=_,m=(n("034f"),Object(l["a"])(f,a,i,!1,null,null,null)),p=m.exports,b=n("2f62");s["a"].use(b["a"]);var v=new b["a"].Store({state:{canPlay:!1,self:0,turn:0,hand:[],table:[],chars:{},selected:null,choice:-1,downpos:-1,state:-1,searchObj:{}},getters:{canPlay:function(e){return e.canPlay},self:function(e){return e.self},turn:function(e){return e.turn},hand:function(e){return e.hand},players:function(e){return e.table},playerNum:function(e){return e.table.length},selected:function(e){return e.selected},choice:function(e){return e.choice},downpos:function(e){return e.downpos},state:function(e){return e.state},searchObj:function(e){return e.searchObj}},mutations:{addBuff:function(e,t){return e.chars[t.hash].buff.push(t.buff)},addHand:function(e,t){e.hand.push(t),e.table[e.self].handlen++},addMinion:function(e,t){s["a"].set(e.chars,t.card.hash,t.card),e.table[t.pIndex].minions.splice(t.mIndex,0,t.card)},armoradd:function(e,t){return e.table[t.who].hero.armor+=t.num},canPlay:function(e,t){return e.canPlay=t},changeHand:function(e,t){return s["a"].set(e.hand,t.index,t.card)},choose:function(e,t){return e.choice=t},clearTable:function(e){e.hand=[],e.chars={},e.table=[]},coinadd:function(e,t){return e.table[t.who].coins+=t.num},coins:function(e,t){return e.table[t.who].coins=t.num},damage:function(e,t){var n=e.chars[t.tohash];t.num<=n.armor?n.armor-=t.num:(n.hp-=t.num-n.armor,n.armor=0)},deckadd:function(e,t){return e.table[t.who].decklen+=t.num},decklen:function(e,t){return e.table[t.who].decklen=t.num},downat:function(e,t){return e.downpos=t},draw:function(e,t){e.hand.push(t),e.table[e.self].handlen++,e.table[e.self].decklen--},handdec:function(e,t){return e.table[t].handlen--},handinc:function(e,t){return e.table[t].handlen++},heal:function(e,t){return e.chars[t.tohash].hp+=t.num},hero:function(e,t){e.table[t.who].hero&&s["a"].delete(e.chars,e.table[t.who].hero.hash),s["a"].set(e.chars,t.card.hash,t.card),e.table[t.who].hero=t.card},weapon:function(e,t){t.card?s["a"].set(e.chars,t.card.hash,t.card):e.table[t.who].weapon&&s["a"].delete(e.chars,e.table[t.who].weapon.hash),e.table[t.who].weapon=t.card},skill:function(e,t){e.table[t.who].skill=t.card},maxcoinadd:function(e,t){var n=e.table[t.who];n.maxcoins+=t.num,n.coins>n.maxcoins&&(n.coins=n.maxcoins)},odraw:function(e,t){e.table[t.who].handlen+=t.num,e.table[t.who].decklen-=t.num},prop:function(e,t){var n=e.chars[t.hash];n.atk=t.atk,n.maxhp=t.maxhp,n.hp=t.hp},refreshGreen:function(e,t){for(var n in t.minioncan){var a=t.minioncan[n],i=a.index<0?e.table[e.self].hero:e.table[e.self].minions[a.index];s["a"].set(i,"green",a.green)}for(var n in t.handcan)s["a"].set(e.hand[n],"greens",t.handcan[n]);e.table[e.self].skill&&s["a"].set(e.table[e.self].skill,"greens",t.skillcan)},removeBuff:function(e,t){return e.chars[t.hash].buff.splice(t.index,1)},removeHand:function(e,t){e.hand.splice(t,1),e.table[e.self].handlen--},removeMinion:function(e,t){var n=e.table[t.pIndex].minions;s["a"].delete(e.chars,n[t.mIndex].hash),n.splice(t.mIndex,1)},shield:function(e,t){return e.chars[t.hash].shield=t.shield},sit:function(e,t){e.self=t.self;for(var n=0;n<t.num;n++)e.table.push({maxcoins:0,coins:0,decklen:0,handlen:0,hero:null,weapon:null,skill:null,minions:[]})},turn:function(e,t){return e.turn=t},select:function(e,t){return e.selected=t},changeState:function(e,t){return e.state=t},searchObj:function(e,t){return e.searchObj=t}}});s["a"].config.productionTip=!1,new s["a"]({store:v,render:function(e){return e(p)}}).$mount("#app")},6131:function(e,t,n){"use strict";var s=n("bf75"),a=n.n(s);a.a},"64a9":function(e,t,n){},6866:function(e,t,n){},"68e4":function(e,t,n){"use strict";var s=n("4366"),a=n.n(s);a.a},7542:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discover",on:{click:e.clickall}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"discover-window"},e._l(e.cards,function(t,s){return n("Card",{key:s,staticClass:"discover-card",class:{"discover-selected":e.chosen[s]},attrs:{index:-2,card:t},nativeOn:{click:function(t){return e.select(s)}}})}),1),3==e.mode?n("button",{staticClass:"discover-mtbtn",on:{click:e.ok}},[e._v("OK")]):e._e(),2==e.mode?n("button",{staticClass:"discover-btn",on:{click:function(t){e.visible=!e.visible}}},[e._v(e._s(e.visible?"HIDE":"SHOW"))]):e._e()])},a=[],i=(n("c5f6"),n("2b0e")),c=n("ae8d"),r={name:"discover",components:{Card:c["a"]},props:{cards:Array,mode:Number},data:function(){return{visible:!0,chosen:[]}},methods:{clickall:function(e){1!=this.mode||e.target.classList.contains("discover-card")||this.$emit("discover",{data:-1})},select:function(e){3==this.mode?i["a"].set(this.chosen,e,!this.chosen[e]):this.$emit("discover",{data:e})},ok:function(){this.$emit("discover",{length:this.cards.length,data:this.chosen}),this.chosen=[]}}},o=r,d=(n("2b1b"),n("2877")),l=Object(d["a"])(o,s,a,!1,null,null,null);t["a"]=l.exports},ae8d:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"handcard",class:{"hc-green":e.green,"hc-selected":e.thisSelected},on:{click:e.clickme}},[n("div",{staticClass:"hc-id"},[e._v(e._s(e.id))]),n("div",{staticClass:"hc-cost"},[e._v(e._s(e.cost))]),n("div",{staticClass:"hc-atk"},[e._v(e._s(e.atk))]),n("div",{staticClass:"hc-hp"},[e._v(e._s(e.hp))])])},a=[],i=(n("6762"),n("2fdb"),n("7f7f"),n("cebc")),c=(n("c5f6"),n("2f62")),r={name:"card",props:{index:Number,card:Object},computed:Object(i["a"])({},Object(c["b"])(["canPlay","selected","choice"]),{id:function(){return null==this.card?"":this.card.name},cost:function(){return null==this.card?"":this.card.cost},atk:function(){return null==this.card?"":this.card.atk},hp:function(){return null==this.card?"":this.card.hp},green:function(){if(null==this.card||!this.canPlay||null==this.card.greens||this.card.greens.length<=0)return!1;var e=this.card.greens;for(var t in e)if(e[t].length>0)return!0;return!1},thisSelected:function(){return null!=this.selected&&-1==this.selected.pIndex&&this.index==this.selected.mIndex}}),methods:Object(i["a"])({},Object(c["c"])(["choose","downat","select"]),{clickme:function(){this.index<-1||(null==this.selected?this.green&&(this.select({pIndex:-1,mIndex:this.index}),"MINION"!=this.card.type&&(this.card.greens.length<=1?(this.choose(0),this.card.greens[this.choice].includes(null)&&this.$emit("move",null)):this.$emit("chooseone",{card:this.card,choices:this.card.greens.length}))):(this.select(null),this.choose(-1),this.downat(-1)))}})},o=r,d=(n("0ab0"),n("2877")),l=Object(d["a"])(o,s,a,!1,null,null,null);t["a"]=l.exports},b4af:function(e,t,n){},bf75:function(e,t,n){},cccf:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"heroinfo"},[e.weapon?n("Character",{staticClass:"weapon",attrs:{pIndex:-2,mIndex:-2,card:e.weapon}}):e._e(),n("Character",{staticClass:"hero",attrs:{pIndex:e.pIndex,mIndex:-1,card:e.hero},on:{move:function(t){return e.$emit("move",t)},chooseone:function(t){return e.$emit("chooseone",t)}}}),e.skill?n("Card",{staticClass:"skill",attrs:{index:e.skillind,card:e.skill},on:{move:function(t){return e.$emit("move",t)},chooseone:function(t){return e.$emit("chooseone",t)}}}):e._e(),n("div",[n("div",[e._v("INFO")]),n("div",[e._v("coins:"+e._s(e.coins))]),n("div",[e._v("cards in hand:"+e._s(e.handlen))]),n("div",[e._v("cards in deck:"+e._s(e.decklen))])])],1),n("div",{staticClass:"minions"},e._l(e.minions,function(t,s){return n("Character",{key:s,staticClass:"minion",attrs:{pIndex:e.pIndex,mIndex:s,card:t},on:{move:function(t){return e.$emit("move",t)},chooseone:function(t){return e.$emit("chooseone",t)}}})}),1)])},a=[],i=n("cebc"),c=(n("c5f6"),n("2f62")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:{"ch-green":e.green,"ch-red":e.red,"ch-selected":e.thisSelected},on:{click:e.clickme}},[n("div",{staticClass:"id"},[e._v(e._s(e.id))]),n("div",{staticClass:"atk"},[e._v(e._s(e.atk))]),n("div",{staticClass:"hp"},[e._v(e._s(e.hp)+"/"+e._s(e.maxhp))])])},o=[],d=(n("6762"),n("2fdb"),n("7f7f"),{name:"character",props:{pIndex:Number,mIndex:Number,card:Object},computed:Object(i["a"])({},Object(c["b"])(["canPlay","self","hand","players","selected","choice","downpos"]),{id:function(){return null==this.card?"":this.card.name},atk:function(){return null==this.card?"":this.card.atk},hp:function(){return null==this.card?"":this.card.hp},maxhp:function(){return null==this.card?"":this.card.maxhp},green:function(){return null!=this.card&&this.canPlay&&null!=this.card.green&&this.card.green.length>0},red:function(){if(null==this.selected)return!1;if(this.selected.pIndex<0){var e=this.selected.mIndex<0?this.players[this.self].skill:this.hand[this.selected.mIndex];if(this.choice<0||"MINION"==e.type&&this.downpos<0||null==e.greens)return!1;var t=e.greens[this.choice];for(var n in t)if(null!=t[n]&&t[n].pIndex==this.pIndex&&t[n].mIndex==this.mIndex)return!0;return!1}var s=this.players[this.selected.pIndex];if(this.selected.mIndex<0){var a=s.hero.green;for(var n in a)if(a[n].pIndex==this.pIndex&&a[n].mIndex==this.mIndex)return!0;return!1}var i=s.minions[this.selected.mIndex].green;for(var n in i)if(i[n].pIndex==this.pIndex&&i[n].mIndex==this.mIndex)return!0;return!1},thisSelected:function(){return null!=this.selected&&this.pIndex==this.selected.pIndex&&this.mIndex==this.selected.mIndex}}),methods:Object(i["a"])({},Object(c["c"])(["choose","downat","select"]),{clickme:function(){if(null==this.selected)this.self==this.pIndex&&this.green&&this.select({pIndex:this.pIndex,mIndex:this.mIndex});else if(this.downpos<0&&this.selected.pIndex<0&&this.selected.mIndex>=0&&"MINION"==this.hand[this.selected.mIndex].type)if(this.self!=this.pIndex)this.select(null),this.choose(-1),this.downat(-1);else{this.downat(this.mIndex<0?this.players[this.pIndex].minions.length:this.mIndex);var e=this.hand[this.selected.mIndex];e.greens.length<=1?(this.choose(0),e.greens[this.choice].includes(null)&&this.$emit("move",null)):this.$emit("chooseone",{card:e,choices:e.greens.length})}else this.red?this.$emit("move",{pIndex:this.pIndex,mIndex:this.mIndex}):(this.select(null),this.choose(-1),this.downat(-1))}})}),l=d,h=(n("49c2"),n("2877")),u=Object(h["a"])(l,r,o,!1,null,null,null),_=u.exports,f=n("ae8d"),m={name:"player",components:{Character:_,Card:f["a"]},props:{pIndex:Number,player:Object},computed:Object(i["a"])({},Object(c["b"])(["self"]),{coins:function(){return this.player.coins},decklen:function(){return this.player.decklen},handlen:function(){return this.player.handlen},hero:function(){return this.player.hero},minions:function(){return this.player.minions},weapon:function(){return this.player.weapon},skill:function(){return this.player.skill},skillind:function(){return this.pIndex==this.self?-1:-2}})},p=m,b=(n("6131"),Object(h["a"])(p,s,a,!1,null,null,null));t["a"]=b.exports},f644:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n("386d"),n("28a5");function s(){for(var e={},t=location.search.substr(1).split("&"),n=0;n<t.length;n++){var s=t[n].indexOf("=");s<0||(e[t[n].substring(0,s)]=decodeURIComponent(t[n].substr(s+1)))}return e}}});
//# sourceMappingURL=app.f3c286e0.js.map