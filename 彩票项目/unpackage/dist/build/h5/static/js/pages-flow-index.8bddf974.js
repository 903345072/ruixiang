(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-index","components-zaiui-common-basics-orderdetail"],{"0b22":function(t,e,i){"use strict";i.r(e);var a=i("c79a"),n=i("56b6");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5f32bab7",null,!1,a["a"],r);e["default"]=s.exports},"30b5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},"342d":function(t,e,i){"use strict";i.r(e);var a=i("cd02"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"4c91":function(t,e,i){"use strict";var a=i("f3f9"),n=i.n(a);n.a},"56b6":function(t,e,i){"use strict";i.r(e);var a=i("c919"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"5b3e4":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".zaiui-goods-details-box[data-v-6f3c0ac8]{position:relative;padding:%?27.27?% %?18.18?%;.cu-avatar{position:absolute;height:%?99.99?%;width:%?99.99?%;left:%?18.18?%}.goods-info-view{position:relative;padding-left:%?127.27?%;height:%?99.99?%;line-height:1.4;.text-price{position:absolute;bottom:%?-9.09?%;right:0}}}.zaiui-pay-view[data-v-6f3c0ac8]{position:relative;.zaiui-pay-bar{position:relative;padding:%?18.18?%;.cu-avatar{background-color:#fff;position:absolute;width:%?36.36?%;height:%?36.36?%;top:%?25.45?%}.content{position:relative;left:%?50.9?%;width:calc(100% - %?127.27?%);line-height:1.8;.cu-tag{position:relative;top:%?-3.63?%}}.action{position:absolute;right:%?21.81?%;top:%?40?%;.zaiui-radio{-webkit-transform:scale(.9);transform:scale(.9)}}}.zaiui-pay-bar + .zaiui-pay-bar{border-top:%?2?% solid rgba(0,0,0,.1)}}",""]),t.exports=e},"62c9":function(t,e,i){"use strict";i.r(e);var a=i("dfa3"),n=i("c9c4");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9baf");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6f3c0ac8",null,!1,a["a"],r);e["default"]=s.exports},"6bae":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("71ec")),o=a(i("0b22")),r={name:"flowindex",components:{barTitle:n.default,payorder:o.default},data:function(){return{radio:"0",desc:"没有华丽的宣言,只有最稳的红单",data:"",shop_money:0,is_order_open:!1}},onLoad:function(t){this.data=JSON.parse(decodeURIComponent(t.data))},onShow:function(){var t=this;this.$api.getUserInfo().then((function(e){var i=e.data.data;t.shop_money=i.total_money,t.$refs.orderpop_.$refs.orderpop.close("bottom"),t.is_order_open=!1}))},methods:{input:function(t){this.desc=t.detail.value},RadioChange:function(t){this.radio=t.detail.value},closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){0==this.is_order_open?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},getUserInfo:function(){var t=this,e={};this.$api.getUserInfo(e).then((function(e){var i=e.data.data;t.shop_money=i.total_money,t.$refs.orderpop_.$refs.orderpop.open("bottom"),t.is_order_open=!0}))}}};e.default=r},"71ec":function(t,e,i){"use strict";i.r(e);var a=i("c1fc"),n=i("342d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4c91");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"7f1a2e51",null,!1,a["a"],r);e["default"]=s.exports},"9baf":function(t,e,i){"use strict";var a=i("b860"),n=i.n(a);n.a},b860:function(t,e,i){var a=i("5b3e4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("50cd87b4",a,!0,{sourceMap:!1,shadowMode:!1})},c1fc:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},c79a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniPopup:i("97bf").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"orderpop",staticStyle:{"z-index":"9999",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticClass:"cuIcon-roundclose",staticStyle:{position:"absolute",top:"35rpx",right:"35rpx","font-size":"40rpx",color:"grey"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openorderpop()}}}),i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"40rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",color:"grey","padding-bottom":"20rpx","border-bottom":"1px solid #EEEEEE"}},[i("v-uni-view",{staticStyle:{color:"#000000"}},[t._v("支付给店主")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[i("v-uni-view",[t._v(t._s(t.arr[t.game_type]))]),i("v-uni-view",[t._v(t._s(t.amount)+".00元")])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",[t._v("店铺余额")]),i("v-uni-view",[t._v(t._s(this.shop_money>=t.amount?-1*t.amount+".00元":"预存不足"))])],1),this.shop_money<t.amount?i("v-uni-view",{staticStyle:{"background-color":"#007AFF",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRecharge()}}},[t._v("预存入口")]):t._e(),this.shop_money>=t.amount?i("v-uni-view",{staticStyle:{"background-color":"red",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doorder()}}},[t._v("立即支付")]):t._e()],1)],1)],1)},o=[]},c919:function(t,e,i){"use strict";i("4de4"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"payorder",data:function(){return{arr:{foot:"竞彩足球",bd:"北京单场",basket:"竞彩篮球",pl3:"排列三",pl5:"排列五",sfc:"胜负彩",renjiu:"任选九",gj:"冠军竞猜",gyj:"冠亚军竞猜"}}},props:{expect_min_award:{type:String,default:"0"},expect_max_award:{type:String,default:"0"},is_open:{type:String,default:"0"},shop_money:null,amount:null,check_game:null,game_type:{type:String,default:"foot"},mode:null,bei:null,chuan_arr:null,num_arr:null,plan_desc:{type:String,default:"没有华丽的宣言,只有最稳的红单"},pl_type:{type:String,default:"1"},num:null},methods:{goRecharge:function(){uni.navigateTo({url:"/pages/finace/recharge?money="+this.shop_money})},doorder:function(){var t=Object.assign([],this.check_game),e=this.chuan_arr;if(e=e.filter((function(t){return 1==t["checked"]})),"gj"!=this.game_type&&"gyj"!=this.game_type)if("pl3"!=this.game_type)for(var i in t)Array.isArray(t[i])||(t[i]=[t[i]]);else for(var a in t){var n=t[a],o=[];for(var r in n)o.push(n[r]["value"]);t[a]=o}var c=1;"pl3"==this.game_type?c=this.num:"gj"==this.game_type||"gyj"==this.game_type?c=Object.keys(t).length:t.length;var s={type:this.game_type,num:c,checkGame:JSON.stringify(t),bei:this.bei,mode:this.mode,chuan:JSON.stringify(e),num_arr:JSON.stringify(this.num_arr),plan_desc:this.plan_desc,is_open:this.is_open,expect_min_award:this.expect_min_award,expect_max_award:this.expect_max_award,pl_type:this.pl_type};this.$api.doorder_(s).then((function(t){var e=encodeURIComponent(JSON.stringify(t.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+e})}))},openorderpop:function(){this.$emit("closeopendoor")}}};e.default=a},c9c4:function(t,e,i){"use strict";i.r(e);var a=i("6bae"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},cd02:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=a},dfa3:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("发起跟单")])],2),t.data?i("v-uni-view",{staticStyle:{"background-color":"white",margin:"40rpx 30rpx",padding:"20rpx 20rpx","border-radius":"20rpx","line-height":"80rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","border-bottom":"1px solid #EEEEEE"}},[i("v-uni-text",[t._v("投注彩种")]),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.data.en_type))])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("v-uni-text",[t._v("订单金额")]),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.data.money)+"元")])],1)],1):t._e(),i("v-uni-view",{staticStyle:{"background-color":"white",margin:"0 30rpx",padding:"20rpx 20rpx","border-radius":"20rpx","line-height":"80rpx","margin-top":"-20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("v-uni-text",[t._v("是否公开")]),i("v-uni-radio-group",{staticClass:"block",staticStyle:{display:"flex"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.RadioChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{"margin-right":"30rpx"}},[i("v-uni-radio",{staticClass:"red zaiui-radio",class:"1"==t.radio?"checked":"",attrs:{checked:"1"==t.radio,value:"1"}}),i("v-uni-text",[t._v("公开")])],1),i("v-uni-view",[i("v-uni-radio",{staticClass:"red zaiui-radio",class:"0"==t.radio?"checked":"",attrs:{checked:"0"==t.radio,value:"0"}}),i("v-uni-text",[t._v("赛后可见")])],1)],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("v-uni-text",[t._v("跟单宣言")]),i("v-uni-text",[t._v("他人复制购彩，可获得奖金的5%佣金")])],1),i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-textarea",{staticStyle:{"background-color":"#f1f1f1",width:"100%","border-radius":"30rpx",padding:"10rpx 10rpx"},attrs:{placeholder:"没有华丽的宣言,只有最稳的红单","placeholder-style":"color:#dadada"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)}},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"20rpx",right:"5%",width:"90%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openorderpop()}}},[i("v-uni-view",{staticStyle:{background:"linear-gradient(93deg,#31ceff,#4e86ff 30%,#f72bfe)","text-align":"center",height:"80rpx","line-height":"80rpx",color:"white","border-radius":"20rpx"}},[t._v("确认发单")])],1),t.data?i("payorder",{ref:"orderpop_",attrs:{is_open:t.radio,amount:t.data.money,shop_money:t.shop_money,bei:t.data.bei,check_game:t.data.check_game,mode:2,chuan_arr:t.data.chuan_arr,game_type:t.data.type,plan_desc:t.desc},on:{closeopendoor:function(e){arguments[0]=e=t.$handleEvent(e),t.closeopendoor()}}}):t._e()],1)},o=[]},f3f9:function(t,e,i){var a=i("30b5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("76ed71d8",a,!0,{sourceMap:!1,shadowMode:!1})}}]);