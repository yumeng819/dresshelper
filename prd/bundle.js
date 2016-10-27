/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _commonUtil = __webpack_require__(5);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _mMainHot = __webpack_require__(6);
	
	var _mMainHot2 = _interopRequireDefault(_mMainHot);
	
	var _mMainAttention = __webpack_require__(10);
	
	var _mMainAttention2 = _interopRequireDefault(_mMainAttention);
	
	var _mMain = __webpack_require__(13);
	
	var _mMain2 = _interopRequireDefault(_mMain);
	
	var _index = __webpack_require__(17);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _my = __webpack_require__(21);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _main = __webpack_require__(24);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _community = __webpack_require__(27);
	
	var _community2 = _interopRequireDefault(_community);
	
	var _shopping = __webpack_require__(58);
	
	var _shopping2 = _interopRequireDefault(_shopping);
	
	var _login = __webpack_require__(61);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _register = __webpack_require__(64);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _find = __webpack_require__(67);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _block = __webpack_require__(46);
	
	var _block2 = _interopRequireDefault(_block);
	
	var _Hot = __webpack_require__(32);
	
	var _Hot2 = _interopRequireDefault(_Hot);
	
	var _list = __webpack_require__(41);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _swiper = __webpack_require__(36);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	var _search = __webpack_require__(69);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _store = __webpack_require__(72);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 自定义 scroll 指令
	_commonUtil2.default.dirScroll();
	// views
	
	// router
	// import Vue from "./libs/vue.js";
	// import VueRouter from "./libs/vue-router.js";
	// Vue.use(VueRouter);
	
	//mint-ui
	
	// 在根组件加入 store，让它的子组件和 store 连接
	
	
	var App = Vue.extend({
	  store: _store2.default
	});
	
	var router = new VueRouter();
	
	router.map({
	  '/': {
	    component: _index2.default,
	    subRoutes: {
	      '/': {
	        component: _mMain2.default,
	        subRoutes: {
	          '/': {
	            component: _mMainHot2.default,
	            subRoutes: {
	              '/': {
	                component: _mMainAttention2.default
	              }
	            }
	          }
	        }
	      },
	      '/my': {
	        component: _my2.default
	      },
	      '/community': {
	        component: _community2.default
	      },
	      '/shopping': {
	        component: _shopping2.default
	      }
	    }
	  },
	  '/mMain': {
	    component: _mMain2.default
	  },
	  '/login': {
	    component: _login2.default
	  },
	  '/register': {
	    component: _register2.default
	  },
	  '/find': {
	    component: _find2.default
	  },
	  '/search': {
	    component: _search2.default
	  }
	});
	
	router.start(App, 'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    dirScroll: function dirScroll() {
	        var that = this;
	        // 自定义指令
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded('#index-scroll', function () {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\m-main-hot.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-58d3aade/m-main-hot.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _waterfallUtil = __webpack_require__(8);
	
	var _waterfallUtil2 = _interopRequireDefault(_waterfallUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            bannerList: ['/images/CgAAGlgHR1sEAAAAAAAAAGlaEZk043.jpg', '/images/CgAAGlgHYCEEAAAAAAAAAGajc3w567.jpg', '/images/CgAAGlgIiR8EAAAAAAAAAEAaoSs393.jpg', '/images/CgAAGlgIdvcEAAAAAAAAAECL7XE874.png', '/images/CgAAGlgIWnEEAAAAAAAAALN9cvY289.jpg', '/images/CgAAGlgIO0YEAAAAAAAAANFqid0320.jpg'],
	            typeList: [{ url: '/images/CgAANVey4hEEAAAAAAAAAOEZ5Ek631.png', name: "明天穿什么" }, { url: '/images/CgAANVey4kgEAAAAAAAAAKevqgo279.png', name: "搭配测试" }, { url: '/images/CgAAGley4foEAAAAAAAAAA5aZsk592.png', name: "穿搭手册" }, { url: '/images/girl.png', name: "搭配师小丫" }],
	            fashionList: ['/images/CgAANVgI378EAAAAAAAAAJK_FcY577.jpg', '/images/CgAANFdOin0EAAAAAAAAAPSQLPY578.png'],
	            fashionMore: ['/images/CgAANVexe84EAAAAAAAAAGZrILU643.png', '/images/CgAAGlexe5oEAAAAAAAAAFdbfeE313.png', '/images/CgAAGlexe9MEAAAAAAAAAOPFhf8834.png'],
	            prefectList: ['/images/CgAAGlf_cdcEAAAAAAAAAJgGu1A995.jpg', '/images/CgAAGlgAkPsEAAAAAAAAAJKVJf8191.jpg', '/images/CgAAGlgAsYAEAAAAAAAAAIWPsMc052.jpg', '/images/CgAAGlgEr1sEAAAAAAAAAMlYFCg610.jpg', '/images/CgAAGlgEtwQEAAAAAAAAACf1zQw967.jpg', '/images/CgAAGlgEvDMEAAAAAAAAABiSUP8136.jpg', '/images/CgAAGlgF-K0EAAAAAAAAAHqQWJo168.jpg', '/images/CgAAGlgFl8AEAAAAAAAAALw0Mq8047.jpg', '/images/CgAAGlgG3PkEAAAAAAAAAEnZZyc026.jpg', '/images/CgAAGlgGAngEAAAAAAAAAMQ2KVs886.jpg', '/images/CgAAGlgILBUEAAAAAAAAAAHDBR0868.jpg', '/images/CgAAGlgJkKcEAAAAAAAAAO9VlJw581.jpg', 'images/CgAANVgApyUEAAAAAAAAANxLVoc445.jpg', 'images/CgAANVgEPTYEAAAAAAAAAK5hQ9A018.jpg', 'images/CgAANVgEy3cEAAAAAAAAAMbwthE484.jpg']
	        };
	    },
	    ready: function ready() {
	        var that = this;
	        var sw2 = new Swiper('#banner-swiper', {
	            loop: true,
	            speed: 1000,
	            autoplay: 3000,
	            paginationClickable: true,
	            pagination: '.swiper-pagination',
	            spaceBetween: 0
	        });
	        var sw3 = new Swiper('#info-swiper', {
	            spaceBetween: 0
	        });
	        var sw4 = new Swiper('#prefect-swiper', {
	            slidesPerView: 3,
	            spaceBetween: 10
	        });
	        var lifeScroll = new IScroll('#index-scroll', {
	            probeType: 3,
	            click: true,
	            bounce: false,
	            mouseWheel: true
	        });
	        (0, _waterfallUtil2.default)(lifeScroll);
	        var head = $('.reLoad img'),
	            reLoad = $('.reLoad'),
	            reloadNotice = $('.reLoad .reloadNotice'),
	            topImgHasClass = head.hasClass('up');
	        //lifeScroll.scrollTo(0, -100);
	        reLoad.css("display", "none");
	        console.log(lifeScroll.y);
	        lifeScroll.on('scroll', function () {
	            //console.log(this.y);
	            var y = this.y;
	            if (y >= 0) {
	                reLoad.css("display", "flex");
	                !topImgHasClass && head.addClass('up');
	                reloadNotice.html("松开即可刷新 . . .");
	                return '';
	            }
	        });
	        lifeScroll.on('scrollEnd', function () {
	            //console.log(this.y);
	            if (this.y > -100 && this.y < 0) {
	                lifeScroll.scrollTo(0, -100);
	                head.removeClass('up');
	            } else if (this.y >= 0) {
	                clearTimeout(clear);
	                // ajax下拉刷新数据
	                // that.$http.get('/rest/list')
	                //     .then((res) => {
	                //   that.list = res.data.data.concat(that.list);
	                //   lifeScroll.scrollTo(0, 0);
	                head.removeClass('up');
	                reloadNotice.html("正在奋力加载中 . . .");
	                var clear = setTimeout(function () {
	                    lifeScroll.scrollTo(0, -100);
	                    reloadNotice.html("下拉刷新 . . .");
	                }, 1500);
	                //   Vue.nextTick(function() {
	                //     lifeScroll.refresh();
	                //   });
	                // })
	            } else {
	                reloadNotice.html("下拉刷新 . . .");
	            }
	        });
	    }
	};
	// </script>
	
	/* generated by vue-loader */
	// <template>
	//     <div class="swiper-slide">
	//         <section id="index-scroll">
	//             <div class="htmleaf-content bgcolor-3">
	//                 <!-- 下拉刷新 -->
	//                 <div class="reLoad">
	//                     <img src="/images/reLoad.jpg"/>
	//                     <p class="reloadNotice">下拉刷新 . . .</p>
	//                 </div>
	//                 <!-- banner -->
	//                 <div class="swiper-container" id="banner-swiper">
	//                     <div class="swiper-wrapper">
	//                         <div class="swiper-slide" v-for="item in bannerList">
	//                             <img v-bind:src="item"/>
	//                         </div>
	//                     </div>
	//                     <!-- Add Pagination -->
	//                     <div class="swiper-pagination"></div>
	//                 </div>
	//
	//                 <!-- nav -->
	//                 <nav class="typeList" >
	//                     <div v-for="item in typeList" v-link="{path:'/share'}">
	//                         <img v-bind:src="item.url"/>
	//                         <p>{{item.name}}</p>
	//                     </div>
	//                 </nav>
	//
	//                 <!-- fashion -->
	//                 <section class="fashion">
	//                     <div class="fashion-title"></div>
	//                     <img v-bind:src = "item" v-for="item in fashionList"/>
	//                     <div class="fashion-footer"></div>
	//                     <div class="fashion-more">
	//                         <img v-bind:src = "item" v-for="item in fashionMore"/>
	//                     </div>
	//                 </section>
	//
	//                 <!-- perfect -->
	//                 <section class="prefect">
	//                     <div class="prefect-title"></div>
	//                     <div class="swiper-container" id="prefect-swiper">
	//                         <div class="swiper-wrapper" style="width:100%;height:100%;">
	//                             <div class="swiper-slide" v-for="item in prefectList">
	//                                 <img v-bind:src="item"/>
	//                             </div>
	//                         </div>
	//                     </div>
	//                 </section>
	//
	//                 <!-- show -->
	//                 <section class="show">
	//                     <div id="picList-title"></div>
	//                     <div id="div1">
	//                         <!-- <div class="box box-item" style="position: absolute; top: 30px; left: 0px;">
	//                             <div class="gap">
	//                                 <div class="img" style="height:0;padding-bottom:NaN%" data-src="/images/CgAAGlgIYwYEAAAAAAAAAC_7FTU012.jpg">
	//                                 </div>
	//                                 <div class="desc">aijshf</div>
	//                             </div>
	//                         </div> -->
	//                         <!-- <div class="box" v-for="item in waterList">
	//                             <img v-bind:src="item.url">
	//                             <p>
	//                                 <img v-bind:src="item.url"></img>
	//                                 <i>{{item.name}}</i>
	//                             </p>
	//                         </div> -->
	//                         <!-- <div class="box">
	//                             <img src="/images/CgAAGlgHLqIEAAAAAAAAANcFz7I503.jpg" alt="">
	//                             <P>
	//                                 <img src="/images/CgAAGlgHLqIEAAAAAAAAANcFz7I503.jpg"></img>
	//                                 <i>四大家</i>
	//                             </P>
	//                         </div> -->
	//                         <!-- <div class="box"><img src="/images/CgAAGlgHPT4EAAAAAAAAAD8nSgg769.jpg" alt=""></div>
	//                         <div class="box"><img src="/images/CgAAGlgIYwYEAAAAAAAAAC_7FTU012.jpg" alt=""></div>
	//                         <div class="box"><img src="/images/CgAANVf_Rm0EAAAAAAAAAAPpbNQ702.jpg" alt=""></div>
	//                         <div class="box"><img src="/images/CgAANVgEWLQEAAAAAAAAAFt7gDI932.jpg" alt=""></div>
	//                         <div class="box"><img src="/images/CgAANVgFxN4EAAAAAAAAAMTCARU021.jpg" alt=""></div>
	//                         <div class="box"><img src="/images/CgAANVgG-1oEAAAAAAAAAMCyUqU104.jpg" alt=""></div>
	//                         <div class="box"><img src="/images/CgAANVgGBTkEAAAAAAAAAJyH2I0935.png" alt=""></div>
	//                         <div class="box"><img src="/images/CgAANVgII0MEAAAAAAAAADkYlcg042.jpg" alt=""></div> -->
	//                     </div>
	//                 </section>
	//             </div>
	//         </section>
	//     </div>
	//     <div class="swiper-slide">
	//           <router-view></router-view>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	var _waterfall = function _waterfall(liveScroll) {
	    var dataArr = [];
	    function getData() {
	        $.ajax({
	            url: '/rest/list',
	            async: false,
	            success: function success(rs) {
	                dataArr = rs.data;
	            }
	        });
	    }
	
	    var boxArr, num, columnHeightArr;
	
	    function render() {
	        getData();
	        $.each(dataArr, function (index, item) {
	            //   console.log(item);
	            //   console.log(item.name);
	            if (item.head == "") {
	                var str = "";
	            } else {
	                var str = '<img src="' + item.head + '"></img><i>' + item.name + '</i>';
	            }
	            $('#div1').append('<div class="box box-item"><div class="gap">' + '<img class="img" style="padding-bottom:' + cRate(item) * 100 + "%" + '" data-src="' + item.url + '"></img>' + '<p class="desc">' + str + '</p></div></div>');
	        });
	
	        boxArr = $('.box');
	        num = Math.floor(document.body.clientWidth / boxArr.eq(0).width());
	        columnHeightArr = [];
	        columnHeightArr.length = num;
	        arrangement();
	        $('#div1').css('minHeight', Math.max.apply(null, columnHeightArr));
	        liveScroll.refresh();
	        lazyLoad();
	    }
	
	    function arrangement() {
	        boxArr.each(function (index, item) {
	            if (index < num) {
	                columnHeightArr[index] = $(item).height();
	            } else {
	                var minHeight = Math.min.apply(null, columnHeightArr),
	                    minHeightIndex = $.inArray(minHeight, columnHeightArr);
	                $(item).css({
	                    position: 'absolute',
	                    top: minHeight,
	                    left: boxArr.eq(minHeightIndex).position().left
	                });
	                columnHeightArr[minHeightIndex] += $(item).height();
	            }
	        });
	    }
	
	    function lazyLoad() {
	        var boxArr = $('.box-item');
	        boxArr.each(function (index, item) {
	            var viewTop = $(item).offset().top - $('#div1').scrollTop(),
	                imgObj = $(item).find('.img');
	            if (viewTop < $('#div1').height() && $(item).offset().top + $(item).height() > $('#div1').scrollTop()) {
	                imgObj.attr('src', imgObj.attr("data-src")).css("padding-bottom", "").removeClass('data-src');
	                $(item).removeClass('box-item');
	            }
	        });
	    }
	
	    function cRate(obj) {
	        //   console.log(obj.height / obj.width);
	        //   console.log(obj.height);
	        //   console.log(obj.width);
	        return obj.height / obj.width;
	    }
	
	    render();
	
	    liveScroll.on('scrollEnd', function () {
	        if (this.maxScrollY == this.y) {
	            getData();
	            render();
	        }
	    });
	};
	
	module.exports = _waterfall;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper-slide\">\n    <section id=\"index-scroll\">\n        <div class=\"htmleaf-content bgcolor-3\">\n            <!-- 下拉刷新 -->\n            <div class=\"reLoad\">\n                <img src=\"/images/reLoad.jpg\"/>\n                <p class=\"reloadNotice\">下拉刷新 . . .</p>\n            </div>\n            <!-- banner -->\n            <div class=\"swiper-container\" id=\"banner-swiper\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\" v-for=\"item in bannerList\">\n                        <img v-bind:src=\"item\"/>\n                    </div>\n                </div>\n                <!-- Add Pagination -->\n                <div class=\"swiper-pagination\"></div>\n            </div>\n\n            <!-- nav -->\n            <nav class=\"typeList\" >\n                <div v-for=\"item in typeList\" v-link=\"{path:'/share'}\">\n                    <img v-bind:src=\"item.url\"/>\n                    <p>{{item.name}}</p>\n                </div>\n            </nav>\n\n            <!-- fashion -->\n            <section class=\"fashion\">\n                <div class=\"fashion-title\"></div>\n                <img v-bind:src = \"item\" v-for=\"item in fashionList\"/>\n                <div class=\"fashion-footer\"></div>\n                <div class=\"fashion-more\">\n                    <img v-bind:src = \"item\" v-for=\"item in fashionMore\"/>\n                </div>\n            </section>\n\n            <!-- perfect -->\n            <section class=\"prefect\">\n                <div class=\"prefect-title\"></div>\n                <div class=\"swiper-container\" id=\"prefect-swiper\">\n                    <div class=\"swiper-wrapper\" style=\"width:100%;height:100%;\">\n                        <div class=\"swiper-slide\" v-for=\"item in prefectList\">\n                            <img v-bind:src=\"item\"/>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <!-- show -->\n            <section class=\"show\">\n                <div id=\"picList-title\"></div>\n                <div id=\"div1\">\n                    <!-- <div class=\"box box-item\" style=\"position: absolute; top: 30px; left: 0px;\">\n                        <div class=\"gap\">\n                            <div class=\"img\" style=\"height:0;padding-bottom:NaN%\" data-src=\"/images/CgAAGlgIYwYEAAAAAAAAAC_7FTU012.jpg\">\n                            </div>\n                            <div class=\"desc\">aijshf</div>\n                        </div>\n                    </div> -->\n                    <!-- <div class=\"box\" v-for=\"item in waterList\">\n                        <img v-bind:src=\"item.url\">\n                        <p>\n                            <img v-bind:src=\"item.url\"></img>\n                            <i>{{item.name}}</i>\n                        </p>\n                    </div> -->\n                    <!-- <div class=\"box\">\n                        <img src=\"/images/CgAAGlgHLqIEAAAAAAAAANcFz7I503.jpg\" alt=\"\">\n                        <P>\n                            <img src=\"/images/CgAAGlgHLqIEAAAAAAAAANcFz7I503.jpg\"></img>\n                            <i>四大家</i>\n                        </P>\n                    </div> -->\n                    <!-- <div class=\"box\"><img src=\"/images/CgAAGlgHPT4EAAAAAAAAAD8nSgg769.jpg\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAAGlgIYwYEAAAAAAAAAC_7FTU012.jpg\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAANVf_Rm0EAAAAAAAAAAPpbNQ702.jpg\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAANVgEWLQEAAAAAAAAAFt7gDI932.jpg\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAANVgFxN4EAAAAAAAAAMTCARU021.jpg\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAANVgG-1oEAAAAAAAAAMCyUqU104.jpg\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAANVgGBTkEAAAAAAAAAJyH2I0935.png\" alt=\"\"></div>\n                    <div class=\"box\"><img src=\"/images/CgAANVgII0MEAAAAAAAAADkYlcg042.jpg\" alt=\"\"></div> -->\n                </div>\n            </section>\n        </div>\n    </section>\n</div>\n<div class=\"swiper-slide\">\n      <router-view></router-view>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\m-main-attention.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c93e2f22/m-main-attention.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="m-main-attentive">
	//         <section v-if="isLoad" class="main-notice">
	//             <p class="notice">
	//                 好凄凉o(╯□╰)o姑娘，看到你感兴趣的人就关注吧~你可以点击下面的按钮去寻找你感兴趣的人
	//             </p>
	//             <button class="toGo">
	//                 寻找感兴趣的人
	//             </button>
	//         </section>
	//         <section v-else="isLoad" class="main">
	//
	//         </section>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            isLoad: true
	        };
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-main-attentive\">\n    <section v-if=\"isLoad\" class=\"main-notice\">\n        <p class=\"notice\">\n            好凄凉o(╯□╰)o姑娘，看到你感兴趣的人就关注吧~你可以点击下面的按钮去寻找你感兴趣的人\n        </p>\n        <button class=\"toGo\">\n            寻找感兴趣的人\n        </button>\n    </section>\n    <section v-else=\"isLoad\" class=\"main\">\n\n    </section>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\m-main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ac3e9644/m-main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(15);
	
	var sw1 = {}; // <template>
	//     <div class="m-container">
	//         <header class="header">
	//             <span class="search"></span>
	//             <nav>
	//                 <a class="hot {{cur == 0 ? 'active':''}}" v-on:click="greet(0)">热点</a>
	//                 <a class="attention {{cur == 1 ? 'active':''}}" v-on:click="greet(1)">关注</a>
	//             </nav>
	//             <span class="car"></span>
	//         </header>
	//         <div class="swiper-container content htmleaf-container" id="index-swiper">
	//           <div class="swiper-wrapper ">
	//               <router-view></router-view>
	//           </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        }
	    },
	    data: function data() {
	        return {
	            cur: 0
	        };
	    },
	
	    ready: function ready() {
	        this.change(0);
	        var _this = this;
	        setTimeout(function () {
	            new IScroll('#index-scroll');
	            sw1 = new Swiper('#index-swiper', {
	                paginationClickable: true,
	                spaceBetween: 0,
	                onSlideChangeStart: function onSlideChangeStart() {
	                    _this.cur = sw1.activeIndex;
	                }
	            });
	            //init();
	        }, 500);
	    },
	    methods: {
	        greet: function greet(index) {
	            this.cur = index;
	            sw1.slideTo(index);
	        }
	    }
	};
	
	// function init(){
	//     $("#div1").waterfall({
	//         itemClass: ".box",
	//         minColCount: 2,
	//         spacingHeight: 10,
	//         resizeable: true,
	//         ajaxCallback: function(success, end) {
	//             var data = {"data": [
	//                 { "src": "/images/img1.jpg" }, { "src": "/images/img1.jpg" }, { "src": "/images/img1.jpg" }, { "src": "/images/img1.jpg" }
	//             ]};
	//             var str = "";
	//             var templ = '<div class="box" style="opacity:0;filter:alpha(opacity=0);"><div class="pic"><img src="img/{{src}}" /></div></div>'
	//
	//             for(var i = 0; i < data.data.length; i++) {
	//                 str += templ.replace("{{src}}", data.data[i].src);
	//             }
	//             $(str).appendTo($("#div1"));
	//             success();
	//             end();
	//         }
	//     });
	// }

	// </script>
	// <style

	/* generated by vue-loader */

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tabChanger = exports.tabChanger = function tabChanger(_ref, tabIndex) {
	  var dispatch = _ref.dispatch,
	      state = _ref.state;
	
	  dispatch('CHANGETAB', tabIndex);
	};
	var staChanger = exports.staChanger = function staChanger(_ref2, loginState, phone) {
	  var dispatch = _ref2.dispatch,
	      state = _ref2.state;
	
	  dispatch('CHANGESTA', loginState, phone);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-container\">\n    <header class=\"header\">\n        <span class=\"search\"></span>\n        <nav>\n            <a class=\"hot {{cur == 0 ? 'active':''}}\" v-on:click=\"greet(0)\">热点</a>\n            <a class=\"attention {{cur == 1 ? 'active':''}}\" v-on:click=\"greet(1)\">关注</a>\n        </nav>\n        <span class=\"car\"></span>\n    </header>\n    <div class=\"swiper-container content htmleaf-container\" id=\"index-swiper\">\n      <div class=\"swiper-wrapper \">\n          <router-view></router-view>\n      </div>\n    </div>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0410b5c6/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(15);
	
	var _getters = __webpack_require__(19);
	
	// <template>
	//   <div>
	//     <div class="index-container">
	//         <router-view :transition="transitionName" transition-mode="out-in"></router-view>
	//     </div>
	//     <footer id="footer">
	//         <ul>
	//             <li v-for="tab in tablist" v-on:click="navigatorTo($index)" v-link="{path: tab.path}" v-bind:class="tabIndex == $index ? 'active' : ''">
	//                 <i class="iconfont"><img v-bind:src="tab.iconPath"/></i>
	//                 <em class="iconfont"><img v-bind:src="tab.selectedIconPath"/></em>
	//                 <b v-html="tab.name"></b>
	//             </li>
	//         </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    },
	    getters: {
	      tabIndex: _getters.getTabindex
	    }
	  },
	  data: function data() {
	    return {
	      cur: 0,
	      tablist: [{ path: '/', iconPath: '/images/tabitem0.png', selectedIconPath: "/images/tabitem_0.png", name: '首页' }, { path: '/shopping', iconPath: '/images/tabitem1.png', selectedIconPath: "/images/tabitem_1.png", name: '购物' }, { path: '/community', iconPath: '/images/tabitem3.png', selectedIconPath: "/images/tabitem_3.png", name: '社区' }, { path: '/my', iconPath: '/images/tabitem4.png', selectedIconPath: "/images/tabitem_4.png", name: '我的' }],
	      transitionName: 'fade'
	    };
	  },
	
	  methods: {
	    navigatorTo: function navigatorTo(index) {}
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getTabindex = exports.getTabindex = function getTabindex(state) {
	  return state.tabIndex;
	};
	var getStainedx = exports.getStainedx = function getStainedx(state) {
	  return { "loginState": state.loginState, "phone": state.phone };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"index-container\">\n      <router-view :transition=\"transitionName\" transition-mode=\"out-in\"></router-view>\n  </div>\n  <footer id=\"footer\">\n      <ul>\n          <li v-for=\"tab in tablist\" v-on:click=\"navigatorTo($index)\" v-link=\"{path: tab.path}\" v-bind:class=\"tabIndex == $index ? 'active' : ''\">\n              <i class=\"iconfont\"><img v-bind:src=\"tab.iconPath\"/></i>\n              <em class=\"iconfont\"><img v-bind:src=\"tab.selectedIconPath\"/></em>\n              <b v-html=\"tab.name\"></b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59d6871e/my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(15);
	
	var _getters = __webpack_require__(19);
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        },
	        getters: {
	            getStainedx: _getters.getStainedx
	        }
	    },
	    data: function data() {
	        return {
	            phone: '',
	            flag: true
	        };
	    },
	
	    ready: function ready() {
	        //console.log(this.getStainedx.loginState);
	        //console.log(this.getStainedx.phone);
	        this.phone = this.getStainedx.phone;
	        if (this.getStainedx.loginState) {
	            this.flag = false;
	        }
	        this.change(3);
	        var myScroll = new IScroll('#index-scroll', {
	            disableMouse: true,
	            disablePointer: true,
	            bounce: false,
	            mouseWheel: true,
	            click: true
	        });
	    }
	};
	
	// </script>
	
	/* generated by vue-loader */
	//
	// <template>
	//   <div class="my-container">
	//       <header>
	//           <span>我的主页</span>
	//           <div class="">
	//
	//           </div>
	//       </header>
	//       <section id="index-scroll">
	//           <div id="scroll-box">
	//               <div class="user">
	//                   <img src="/images/agent_pay_share_icon.png" />
	//                   <ul>
	//                       <li v-show="flag">匿名用户<span class="login" v-link="{ path: '/login' }">登录/注册</span></li>
	//                       <li v-show="!flag">{{phone}}</li>
	//                       <li><i>关注<span>0</span></i><b>粉丝<span>0</span></b></li>
	//                   </ul>
	//               </div>
	//               <div class="tabs">
	//                   <ul>
	//                       <li>我的喜欢</li>
	//                       <li>优惠券</li>
	//                       <li>推荐奖励</li>
	//                       <li>签到</li>
	//                   </ul>
	//               </div>
	//               <div class="others">
	//                   <ul>
	//                       <li>联系卖家</li>
	//                       <li>消息中心</li>
	//                   </ul>
	//               </div>
	//               <div class="order">
	//                   <p>我的订单</p>
	//                   <ul>
	//                       <li>代付款</li>
	//                       <li>代发货</li>
	//                       <li>代收货</li>
	//                       <li>代评价</li>
	//                       <li>退款\退货</li>
	//                   </ul>
	//               </div>
	//               <div class="others">
	//                   <ul>
	//                       <li>常见问题</li>
	//                       <li>在线问题</li>
	//                       <li class="kf">
	//                           客服电话
	//                         <span>
	//                             <b>400-060-6989</b>
	//                             <i>( 周一到周日 09:00-21:00 )</i>
	//                         </span>
	//                       </li>
	//                   </ul>
	//               </div>
	//               <div class="others">
	//                   <ul>
	//                       <li class="bd">绑定手机<span>请绑定手机号</span></li>
	//                       <li>收货地址</li>
	//                       <li>系统设置</li>
	//                   </ul>
	//               </div>
	//           </div>
	//       </section>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"my-container\">\n    <header>\n        <span>我的主页</span>\n        <div class=\"\">\n\n        </div>\n    </header>\n    <section id=\"index-scroll\">\n        <div id=\"scroll-box\">\n            <div class=\"user\">\n                <img src=\"/images/agent_pay_share_icon.png\" />\n                <ul>\n                    <li v-show=\"flag\">匿名用户<span class=\"login\" v-link=\"{ path: '/login' }\">登录/注册</span></li>\n                    <li v-show=\"!flag\">{{phone}}</li>\n                    <li><i>关注<span>0</span></i><b>粉丝<span>0</span></b></li>\n                </ul>\n            </div>\n            <div class=\"tabs\">\n                <ul>\n                    <li>我的喜欢</li>\n                    <li>优惠券</li>\n                    <li>推荐奖励</li>\n                    <li>签到</li>\n                </ul>\n            </div>\n            <div class=\"others\">\n                <ul>\n                    <li>联系卖家</li>\n                    <li>消息中心</li>\n                </ul>\n            </div>\n            <div class=\"order\">\n                <p>我的订单</p>\n                <ul>\n                    <li>代付款</li>\n                    <li>代发货</li>\n                    <li>代收货</li>\n                    <li>代评价</li>\n                    <li>退款\\退货</li>\n                </ul>\n            </div>\n            <div class=\"others\">\n                <ul>\n                    <li>常见问题</li>\n                    <li>在线问题</li>\n                    <li class=\"kf\">\n                        客服电话\n                      <span>\n                          <b>400-060-6989</b>\n                          <i>( 周一到周日 09:00-21:00 )</i>\n                      </span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"others\">\n                <ul>\n                    <li class=\"bd\">绑定手机<span>请绑定手机号</span></li>\n                    <li>收货地址</li>\n                    <li>系统设置</li>\n                </ul>\n            </div>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6141e284/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(15);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  ready: function ready() {
	    this.change(0);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div>
	//         main....
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    main....\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(28)
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\community.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(57)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1b73b734/community.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1b73b734&scoped=true!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./community.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1b73b734&scoped=true!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./community.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * lib中map使用“_”开头，本文件中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * 合并base和extra中的同类base map\r\n * 用以解决业务方升级Yo时需比base和extra的一致性\r\n * 当extra为空时，base map将以base文件里的定义作为默认值\r\n * 当extra不为空时，base map使用extra文件里的定义\r\n */\n/**\n * Yo框架全局Variables\n * Yo基础变量map，如果不想定义某属性，将其value设置为null；\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\n * variables中map使用“_”开头，本文件中不使用\"_\"\n * variables ⇌ config\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * 合并variables和config中的同类map\r\n * 用以解决业务方升级Yo时需比config和variables的一致性\r\n * 当config为空时，使用variables中的map作为默认值\r\n * 当config不为空时，使用config中的定义\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 功能\r\n * @description 给需要的属性加厂家前缀\r\n * @method _prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 功能\r\n * @description 定义字体图标\r\n * @method _yofont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 功能\r\n * @description 四则运算(iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example <div class=\"calc\">四则运算</div>\r\n * .calc { @include calc(width, \"100% - 100px\"); }\r\n */\n/**\r\n * @module 功能\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 功能\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 功能\r\n * @description 清除行内级元素间间隙方案\r\n * @method killspace\r\n * @version 1.0.0\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <2.0.0>\r\n * @example\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n * .demo {@include killspace;}\r\n */\n/**\r\n * @module 功能\r\n * @description 元素在包含块中的对齐方式，默认为水平垂直对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 指定包含块布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {String} $type 指定居中元素类型，可选值：image | text | other，默认值：text <2.0.0>\r\n * @param {Keywords} $justify-content 指定元素水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keywords} $align-items 指定元素垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * <div class=\"demo\">\r\n *      <img class=\"item\" alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n * .demo {@include align;}\r\n */\n/**\r\n * @module 功能\r\n * @description 定义文档根节点是否允许滚动\r\n * @method root-scroll\r\n * @version 1.4.0\r\n * @param {Boolean} $is-scroll 指定是否有滚动，默认值：false <1.8.6>\r\n */\n/**\r\n * @module 功能\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 功能\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(iOS7.0+,Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(iOS7.0+,Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*[_v-1b73b734],[_v-1b73b734]\n::before,[_v-1b73b734]\n::after {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml[_v-1b73b734],\nbody[_v-1b73b734] {\n  overflow: hidden;\n  height: 100%; }\n\n[_v-1b73b734]::-webkit-scrollbar {\n  display: none; }\n\nhtml[_v-1b73b734] {\n  background-color: #ebebeb;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none; }\n\nbody[_v-1b73b734] {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul[_v-1b73b734],\nol[_v-1b73b734],\ndl[_v-1b73b734],\ndd[_v-1b73b734],\nh1[_v-1b73b734],\nh2[_v-1b73b734],\nh3[_v-1b73b734],\nh4[_v-1b73b734],\nh5[_v-1b73b734],\nh6[_v-1b73b734],\nfigure[_v-1b73b734],\nform[_v-1b73b734],\nfieldset[_v-1b73b734],\nlegend[_v-1b73b734],\ninput[_v-1b73b734],\ntextarea[_v-1b73b734],\nbutton[_v-1b73b734],\np[_v-1b73b734],\nblockquote[_v-1b73b734],\nth[_v-1b73b734],\ntd[_v-1b73b734],\npre[_v-1b73b734],\nxmp[_v-1b73b734] {\n  margin: 0;\n  padding: 0; }\n\ninput[_v-1b73b734],\ntextarea[_v-1b73b734],\nbutton[_v-1b73b734],\nselect[_v-1b73b734],\npre[_v-1b73b734],\nxmp[_v-1b73b734],\ntt[_v-1b73b734],\ncode[_v-1b73b734],\nkbd[_v-1b73b734],\nsamp[_v-1b73b734] {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1[_v-1b73b734],\nh2[_v-1b73b734],\nh3[_v-1b73b734],\nh4[_v-1b73b734],\nh5[_v-1b73b734],\nh6[_v-1b73b734],\nsmall[_v-1b73b734],\nbig[_v-1b73b734],\ninput[_v-1b73b734],\ntextarea[_v-1b73b734],\nbutton[_v-1b73b734],\nselect[_v-1b73b734] {\n  font-size: inherit; }\n\naddress[_v-1b73b734],\ncite[_v-1b73b734],\ndfn[_v-1b73b734],\nem[_v-1b73b734],\ni[_v-1b73b734],\noptgroup[_v-1b73b734],\nvar[_v-1b73b734] {\n  font-style: normal; }\n\ntable[_v-1b73b734] {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul[_v-1b73b734],\nol[_v-1b73b734],\nmenu[_v-1b73b734] {\n  list-style: none; }\n\nfieldset[_v-1b73b734],\nimg[_v-1b73b734] {\n  border: 0;\n  vertical-align: middle; }\n\narticle[_v-1b73b734],\naside[_v-1b73b734],\ndetails[_v-1b73b734],\nfigcaption[_v-1b73b734],\nfigure[_v-1b73b734],\nfooter[_v-1b73b734],\nheader[_v-1b73b734],\nmain[_v-1b73b734],\nmenu[_v-1b73b734],\nnav[_v-1b73b734],\nsection[_v-1b73b734],\nsummary[_v-1b73b734] {\n  display: block; }\n\naudio[_v-1b73b734],\ncanvas[_v-1b73b734],\nvideo[_v-1b73b734] {\n  display: inline-block; }\n\nblockquote[_v-1b73b734]:before,\nblockquote[_v-1b73b734]:after,\nq[_v-1b73b734]:before,\nq[_v-1b73b734]:after {\n  content: \" \"; }\n\ntextarea[_v-1b73b734],\npre[_v-1b73b734],\nxmp[_v-1b73b734] {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea[_v-1b73b734] {\n  resize: vertical; }\n\ninput[_v-1b73b734],\ntextarea[_v-1b73b734],\nbutton[_v-1b73b734],\nselect\na[_v-1b73b734] {\n  outline: 0 none; }\n\ninput[_v-1b73b734],\ntextarea[_v-1b73b734],\nbutton[_v-1b73b734],\nselect[_v-1b73b734] {\n  color: inherit; }\n  input[_v-1b73b734]:disabled,\n  textarea[_v-1b73b734]:disabled,\n  button[_v-1b73b734]:disabled,\n  select[_v-1b73b734]:disabled {\n    opacity: 1; }\n\nbutton[_v-1b73b734]::-moz-focus-inner,\ninput[_v-1b73b734]::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"][_v-1b73b734],\ninput[type=\"submit\"][_v-1b73b734],\ninput[type=\"reset\"][_v-1b73b734],\ninput[type=\"file\"][_v-1b73b734]::-webkit-file-upload-button,\ninput[type=\"search\"][_v-1b73b734]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\nmark[_v-1b73b734] {\n  background-color: transparent; }\n\na[_v-1b73b734],\nins[_v-1b73b734],\ns[_v-1b73b734],\nu[_v-1b73b734],\ndel[_v-1b73b734] {\n  text-decoration: none; }\n\na[_v-1b73b734],\nimg[_v-1b73b734] {\n  -webkit-touch-callout: none; }\n\na[_v-1b73b734] {\n  color: #00afc7; }\n\n.g-clear[_v-1b73b734]::after,\n.g-mod[_v-1b73b734]::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico[_v-1b73b734] {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\n.community-container[_v-1b73b734] {\n  width: 100%;\n  height: 100%;\n  font-size: 16px; }\n  .community-container .com-container[_v-1b73b734] {\n    height: 100%; }\n  .community-container .swiper-container[_v-1b73b734] {\n    height: 100%; }\n  .community-container #index-scroll[_v-1b73b734] {\n    height: 100%; }\n  .community-container .nav[_v-1b73b734] {\n    width: 100%; }\n  .community-container #swiper-nav .active[_v-1b73b734] {\n    color: #8a5899;\n    border-bottom: 0.02rem solid #8a5899; }\n  .community-container #swiper-nav[_v-1b73b734] {\n    width: 800px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center; }\n    .community-container #swiper-nav li[_v-1b73b734] {\n      height: 0.44rem;\n      line-height: 0.44rem;\n      box-sizing: border-box;\n      color: #999; }\n    .community-container #swiper-nav span[_v-1b73b734] {\n      padding: 0 0.1rem;\n      position: relative; }\n      .community-container #swiper-nav span[_v-1b73b734]::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        overflow: hidden;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 1px 0 0;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.4895833333333333), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .community-container #swiper-nav span[_v-1b73b734]::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.4895833333333335), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .community-container #swiper-nav span[_v-1b73b734]::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .community-container #swiper-nav span[_v-1b73b734]::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n  .community-container .nav[_v-1b73b734] {\n    height: 44px; }\n\n.community-container header[_v-1b73b734] {\n  background: #fff;\n  height: .44rem;\n  border-bottom: solid 1px #ddd; }\n\n.community-container header span[_v-1b73b734] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  line-height: .44rem;\n  font-size: .18rem; }\n", "", {"version":3,"sources":["/./src/scripts/components/community.vue"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;GAKG;AACH;;;;;GAKG;AACH;;;;;GAKG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;GAKG;AACH;;;GAGG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;;;;;;;;GAQG;AACH;;;;;;;;;GASG;AACH;;;GAGG;AACH;;;;;;;;GAQG;AACH;;;;;;GAMG;AACH;;;;;;;;;GASG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;;;;;;;GAaG;AACH;;;;;;;;;;;;;;GAcG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;GAOG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;;GAQG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;;;GASG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;GAOG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;GAOG;AACH;;;;;;GAMG;AACH;;;;;;;GAOG;AACH;;;;;;GAMG;AACH;;;;;;GAMG;AACH;;;;;;;GAOG;AACH;;;;;;GAMG;AACH;;;GAGG;AACH;;;EAIE,uBAAuB;EACvB,yCAAyC,EAAE;;AAE7C;;EAEE,iBAAiB;EACjB,aAAa,EAAE;;AAEjB;EACE,cAAc,EAAE;;AAElB;EACE,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,uBAAkB;GAAlB,sBAAkB;OAAlB,kBAAkB,EAAE;;AAEtB;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,4DAA4D,EAAE;;AAEhE;;;;;;;;;;;;;;;;;;;;;;;EAuBE,UAAU;EACV,WAAW,EAAE;;AAEf;;;;;;;;;;EAUE,qBAAqB;EACrB,qBAAqB,EAAE;;AAEzB;;;;;;;;;;;;EAYE,mBAAmB,EAAE;;AAEvB;;;;;;;EAOE,mBAAmB,EAAE;;AAEvB;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB,EAAE;;AAErB;;;EAGE,iBAAiB,EAAE;;AAErB;;EAEE,UAAU;EACV,uBAAuB,EAAE;;AAE3B;;;;;;;;;;;;EAYE,eAAe,EAAE;;AAEnB;;;EAGE,sBAAsB,EAAE;;AAE1B;;;;EAIE,aAAiB,EAAE;;AAErB;;;EAGE,eAAe;EACf,kCAAkC,EAAE;;AAEtC;EACE,iBAAiB,EAAE;;AAErB;;;;;EAKE,gBAAgB,EAAE;;AAEpB;;;;EAIE,eAAe,EAAE;EACjB;;;;IAIE,WAAW,EAAE;;AAEjB;;EAEE,WAAW;EACX,UAAU,EAAE;;AAEd;;;;;EAKE,yBAAyB;EACzB,iBAAiB,EAAE;;AAErB;EACE,8BAA8B,EAAE;;AAElC;;;;;EAKE,sBAAsB,EAAE;;AAE1B;;EAEE,4BAA4B,EAAE;;AAEhC;EACE,eAAe,EAAE;;AAEnB;;EAEE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,UAAU;EACV,aAAiB,EAAE;;AAErB;EACE,oBAAoB;EACpB,uIAAuI,EAAE;;AAE3I;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,oCAAoC;EACpC,mCAAmC;EACnC,uBAAuB,EAAE;;AAE3B;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB,EAAE;EAClB;IACE,aAAa,EAAE;EACjB;IACE,aAAa,EAAE;EACjB;IACE,aAAa,EAAE;EACjB;IACE,YAAY,EAAE;EAChB;IACE,eAAe;IACf,qCAAqC,EAAE;EACzC;IACE,aAAa;IACb,qBAAqB;IAErB,qBAAc;IAAd,cAAc;IACd,+BAA+B;IAC/B,8BAA8B;IAE9B,wBAAoB;QAApB,oBAAoB;IACpB,0BAA0B;IAE1B,uBAAoB;QAApB,oBAAoB,EAAE;IACtB;MACE,gBAAgB;MAChB,qBAAqB;MACrB,uBAAuB;MACvB,YAAY,EAAE;IAChB;MACE,kBAAkB;MAClB,mBAAmB,EAAE;MACrB;QACE,qBAAqB;QACrB,mBAAmB;QACnB,aAAa;QACb,OAAO;QACP,QAAQ;QACR,iBAAiB;QACjB,aAAiB;QACjB,mBAAmB;QACnB,oBAAoB;QACpB,wBAAwB;QACxB,8BAA8B;QAC9B,sBAAsB,EAAE;QACxB;UACE;YACE,YAAY;YACZ,aAAa,EAAE,EAAE;QACrB;UACE;YACE,YAAY;YACZ,aAAa;YACb,8BAA8B;YAC9B,sBAAsB,EAAE,EAAE;QAC9B;UACE;YACE,YAAY;YACZ,aAAa;YACb,kCAAkC;YAClC,0BAA0B,EAAE,EAAE;EACxC;IACE,aAAa,EAAE;;AAEnB;EACE,iBAAiB;EACjB,eAAe;EACf,8BAA8B,EAAE;;AAElC;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB,EAAE","file":"community.vue","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * lib中map使用“_”开头，本文件中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * 合并base和extra中的同类base map\r\n * 用以解决业务方升级Yo时需比base和extra的一致性\r\n * 当extra为空时，base map将以base文件里的定义作为默认值\r\n * 当extra不为空时，base map使用extra文件里的定义\r\n */\n/**\n * Yo框架全局Variables\n * Yo基础变量map，如果不想定义某属性，将其value设置为null；\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\n * variables中map使用“_”开头，本文件中不使用\"_\"\n * variables ⇌ config\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * 合并variables和config中的同类map\r\n * 用以解决业务方升级Yo时需比config和variables的一致性\r\n * 当config为空时，使用variables中的map作为默认值\r\n * 当config不为空时，使用config中的定义\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 功能\r\n * @description 给需要的属性加厂家前缀\r\n * @method _prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 功能\r\n * @description 定义字体图标\r\n * @method _yofont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 功能\r\n * @description 四则运算(iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example <div class=\"calc\">四则运算</div>\r\n * .calc { @include calc(width, \"100% - 100px\"); }\r\n */\n/**\r\n * @module 功能\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 功能\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 功能\r\n * @description 清除行内级元素间间隙方案\r\n * @method killspace\r\n * @version 1.0.0\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <2.0.0>\r\n * @example\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n * .demo {@include killspace;}\r\n */\n/**\r\n * @module 功能\r\n * @description 元素在包含块中的对齐方式，默认为水平垂直对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 指定包含块布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {String} $type 指定居中元素类型，可选值：image | text | other，默认值：text <2.0.0>\r\n * @param {Keywords} $justify-content 指定元素水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keywords} $align-items 指定元素垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * <div class=\"demo\">\r\n *      <img class=\"item\" alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n * .demo {@include align;}\r\n */\n/**\r\n * @module 功能\r\n * @description 定义文档根节点是否允许滚动\r\n * @method root-scroll\r\n * @version 1.4.0\r\n * @param {Boolean} $is-scroll 指定是否有滚动，默认值：false <1.8.6>\r\n */\n/**\r\n * @module 功能\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 功能\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(iOS7.0+,Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(iOS7.0+,Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nhtml {\n  background-color: #ebebeb;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\\0020\"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \"\\0020\"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\n.community-container {\n  width: 100%;\n  height: 100%;\n  font-size: 16px; }\n  .community-container .com-container {\n    height: 100%; }\n  .community-container .swiper-container {\n    height: 100%; }\n  .community-container #index-scroll {\n    height: 100%; }\n  .community-container .nav {\n    width: 100%; }\n  .community-container #swiper-nav .active {\n    color: #8a5899;\n    border-bottom: 0.02rem solid #8a5899; }\n  .community-container #swiper-nav {\n    width: 800px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center; }\n    .community-container #swiper-nav li {\n      height: 0.44rem;\n      line-height: 0.44rem;\n      box-sizing: border-box;\n      color: #999; }\n    .community-container #swiper-nav span {\n      padding: 0 0.1rem;\n      position: relative; }\n      .community-container #swiper-nav span::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        overflow: hidden;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 1px 0 0;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .community-container #swiper-nav span::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .community-container #swiper-nav span::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .community-container #swiper-nav span::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n  .community-container .nav {\n    height: 44px; }\n\n.community-container header {\n  background: #fff;\n  height: .44rem;\n  border-bottom: solid 1px #ddd; }\n\n.community-container header span {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  line-height: .44rem;\n  font-size: .18rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _actions = __webpack_require__(15);
	
	var _commonUtil = __webpack_require__(5);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _Hot = __webpack_require__(32);
	
	var _Hot2 = _interopRequireDefault(_Hot);
	
	var _communityOthers = __webpack_require__(52);
	
	var _communityOthers2 = _interopRequireDefault(_communityOthers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mySwiper; // <template>
	//     <div class="community-container">
	//         <header>
	//             <span>社区</span>
	//             <div class="">
	//
	//             </div>
	//         </header>
	//         <nav class="nav">
	//             <ul id="swiper-nav">
	//                 <template v-for="nav in navList">
	//                     <li  v-on:click="switchSwiper($index)"  v-bind:class="curIndex == $index ? 'active': ''"><span>{{nav}}</span></li>
	//                 </template>
	//             </ul>
	//         </nav>
	//         <section class="com-container">
	//             <div class="swiper-container" id="index-swiper">
	//                 <div class="swiper-wrapper">
	//                     <div class="swiper-slide">
	//                         <section id="index-scroll" class="index-scroll">
	//                             <Hot></Hot>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
	//                         <section class="index-scroll">
	//                             <others></others>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
	//                         <section class="index-scroll">
	//                             <others></others>
	//                         </section>
	//                     </div>
	//                     <div class="swiper-slide">
	//                         <section class="index-scroll">
	//                             <others></others>
	//                         </section>
	//                     </div>
	//                 </div>
	//             </div>
	//         </section>
	//     </div>
	// </template>
	// <script>
	
	module.exports = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        }
	    },
	    data: function data() {
	        return {
	            curIndex: 0,
	            navList: ['热门', '搭配师', '穿衣茶话会', '潮流穿搭志']
	        };
	    },
	    ready: function ready() {
	        this.change(2);
	        Vue.nextTick(function () {
	            _commonUtil2.default.isAllLoaded('#index-scroll', function () {
	                var rolls = document.querySelectorAll('.index-scroll');
	                for (var i = 0; i < rolls.length; i++) {
	                    console.log(rolls);
	                    new IScroll(rolls[i], {
	                        probeType: 3,
	                        mouseWheel: true,
	                        click: true
	                    });
	                }
	            });
	            var that = this;
	            mySwiper = new Swiper("#index-swiper", {
	                onSlideChangeStart: function onSlideChangeStart() {
	                    this.curIndex = mySwiper.activeIndex;
	                    console.log(this.curIndex);
	                }
	            });
	        });
	    },
	    components: {
	        Hot: _Hot2.default,
	        others: _communityOthers2.default
	    },
	    methods: {
	        switchSwiper: function switchSwiper(index) {
	            this.curIndex = index;
	            mySwiper.slideTo(index);
	        }
	    }
	};
	// </script>
	// <style scoped lang='sass'>@import "../../styles/usage/core/reset.scss";
	// .community-container{
	//     width: 100%;
	//     height: 100%;
	//     font-size: 16px;
	//     .com-container {
	//         height: 100%;
	//     }
	//     .swiper-container {
	//         height: 100%;
	//     }
	//     #index-scroll {
	//         height: 100%;
	//     }
	//     .nav {
	//         width: 100%;
	//     }
	//     #swiper-nav .active {
	//         color: #8a5899;
	//         border-bottom: 0.02rem solid #8a5899;
	//     }
	//     #swiper-nav {
	//         width: 800px;
	//         @include flexbox();
	//         @include flex-direction(row);
	//         @include align-items(center);
	//         li {
	//             height: 0.44rem;
	//             line-height: 0.44rem;
	//             box-sizing: border-box;
	//             color: #999;
	//         }
	//         span {
	//             padding: 0 0.1rem;
	//             @include border(0 1px 0 0);
	//         }
	//     }
	//     .nav {
	//         height: 44px;
	//     }
	// }
	// .community-container header{
	//     background: #fff;
	//     height: .44rem;
	//     border-bottom: solid 1px #ddd;
	// }
	// .community-container header span{
	//     display: inline-block;
	//     width: 100%;
	//     text-align: center;
	//     line-height: .44rem;
	//     font-size: .18rem;
	// }
	//
	// </style>

	/* generated by vue-loader */

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\Hot.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4634f890/Hot.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Hot.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Hot.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Hot.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _swiper = __webpack_require__(36);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	var _list = __webpack_require__(41);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _block = __webpack_require__(46);
	
	var _block2 = _interopRequireDefault(_block);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function data() {
	        return {
	            lists: [{
	                type: "block",
	                title: "【i搭配31期】时尚搭配精心推荐！",
	                src: "/images/block.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "block",
	                title: "【i搭配32期】时尚搭配精心推荐！",
	                src: "/images/block.png"
	            }]
	        };
	    },
	
	    components: {
	        swiper: _swiper2.default,
	        list: _list2.default,
	        block: _block2.default
	    }
	};
	// </script>
	// <style>
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	// <div class="container">
	//     <swiper>
	//     </swiper>
	//     <template v-for="content in lists">
	//     <block v-if="content.type=='block'"  :info="content"></block>
	//     <list v-if="content.type=='list'"  :info="content"></list>
	// </template>
	// </template>
	// </div>
	// <script>

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(37)
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\swiper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9a819a86/swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".swiper-wrapper img {\n  width: 100%; }\n\n.swiper-pagination-bullet-active {\n  background: #8a5899 !important; }\n", "", {"version":3,"sources":["/./src/scripts/components/swiper.vue"],"names":[],"mappings":"AAAA;EACE,YAAY,EAAE;;AAEhB;EACE,+BAA+B,EAAE","file":"swiper.vue","sourcesContent":[".swiper-wrapper img {\n  width: 100%; }\n\n.swiper-pagination-bullet-active {\n  background: #8a5899 !important; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	// <template>
	// <div class="swiper-container" id="banner">
	//     <div class="swiper-wrapper">
	//         <div v-for="path in imgs" class="swiper-slide"><img v-bind:src="path"/></div>
	//     </div>
	//     <div class="swiper-pagination"></div>
	// </div>
	// </template>
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            imgs: ['https://image1.ichuanyi.cn/group1/M00/74/F0/CgAANFdOin0EAAAAAAAAAPSQLPY578.png?imageView2/1/w/640/h/325/q/60', 'https://image1.ichuanyi.cn/group3/M00/45/A3/CgAAGlgIdvcEAAAAAAAAAECL7XE874.png']
	        };
	    },
	
	    ready: function ready() {
	        // setTimeout(function() {
	        //     new IScroll('#index-scroll');
	        // }, 500);
	
	        var banerSwiper = new Swiper("#banner", {
	            pagination: '.swiper-pagination',
	            paginationClickable: true,
	            onSlideChangeStart: function onSlideChangeStart() {}
	        });
	    },
	    methods: {}
	};
	// </script>
	// <style lang="sass">
	// .swiper-wrapper {
	//     img {
	//         width: 100%;
	//
	//     }
	//
	// }
	// .swiper-pagination-bullet-active {
	//     background:#8a5899!important;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper-container\" id=\"banner\">\n    <div class=\"swiper-wrapper\">\n        <div v-for=\"path in imgs\" class=\"swiper-slide\"><img v-bind:src=\"path\"/></div>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(42)
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2014bf23/list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".list-container {\n  width: 100%;\n  margin-top: .1rem;\n  padding: .09rem;\n  background: white; }\n  .list-container img {\n    width: 23%; }\n  .list-container p {\n    width: 70%;\n    vertical-align: top;\n    margin-left: .1rem;\n    display: inline-block; }\n", "", {"version":3,"sources":["/./src/scripts/components/list.vue"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB,EAAE;EACpB;IACE,WAAW,EAAE;EACf;IACE,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB,EAAE","file":"list.vue","sourcesContent":[".list-container {\n  width: 100%;\n  margin-top: .1rem;\n  padding: .09rem;\n  background: white; }\n  .list-container img {\n    width: 23%; }\n  .list-container p {\n    width: 70%;\n    vertical-align: top;\n    margin-left: .1rem;\n    display: inline-block; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	// <template>
	// <div class=list-container>
	//     <img :src='info.src'}} />
	//     <p>{{info.title}}
	//     </p>
	// </div>
	// </template>
	// <script>
	module.exports = {
	    props: ['info']
	};
	// </script>
	// <style lang=sass>
	// .list-container {
	//     width: 100%;
	//     margin-top: .1rem;
	//     padding: .09rem;
	//     background: white;
	//     img {
	//         width: 23%;
	//     }
	//     p {
	//     width:70%;
	//         vertical-align: top;
	//         margin-left: .1rem;
	//         display: inline-block;
	//     }
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n<div class=list-container>\n    <img :src='info.src'}} />\n    <p>{{info.title}}\n    </p>\n</div>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(47)
	__vue_script__ = __webpack_require__(49)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\block.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6219eb58/block.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./block.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./block.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".block-container {\n  width: 100%;\n  margin-top: .1rem;\n  background: white; }\n  .block-container img {\n    width: 100%; }\n  .block-container p {\n    text-align: center;\n    padding: 10px 0; }\n", "", {"version":3,"sources":["/./src/scripts/components/block.vue"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB,EAAE;EACpB;IACE,YAAY,EAAE;EAChB;IACE,mBAAmB;IACnB,gBAAgB,EAAE","file":"block.vue","sourcesContent":[".block-container {\n  width: 100%;\n  margin-top: .1rem;\n  background: white; }\n  .block-container img {\n    width: 100%; }\n  .block-container p {\n    text-align: center;\n    padding: 10px 0; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	// <template>
	// <div class="block-container">
	//     <img :src="info.src" />
	//     <p class="detail">
	//         {{info.title}}
	//     </p>
	// </div>
	// </template>
	// <script>
	module.exports = {
	    props: ['info']
	};
	// </script>
	// <style lang=sass>
	// .block-container {
	//     width: 100%;
	//     margin-top: .1rem;
	//     background: white;
	//     img {
	//         width: 100%;
	//     }
	//     p {
	//         text-align: center;
	//         padding:10px 0;
	//
	//     }
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"block-container\">\n    <img :src=\"info.src\" />\n    <p class=\"detail\">\n        {{info.title}}\n    </p>\n</div>\n";

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n    <swiper>\n    </swiper>\n    <template v-for=\"content in lists\">\n    <block v-if=\"content.type=='block'\"  :info=\"content\"></block>\n    <list v-if=\"content.type=='list'\"  :info=\"content\"></list>\n</template>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(53)
	__vue_script__ = __webpack_require__(55)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\community-others.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-73822768/community-others.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./community-others.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./community-others.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"community-others.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _list = __webpack_require__(41);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _block = __webpack_require__(46);
	
	var _block2 = _interopRequireDefault(_block);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="container">
	//
	//     <template v-for="content in lists">
	//     <block v-if="content.type=='block'"  :info="content"></block>
	//     <list v-if="content.type=='list'"  :info="content"></list>
	// </template>
	// </template>
	// </div>
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            lists: [{
	                type: "block",
	                title: "【i搭配31期】时尚搭配精心推荐！",
	                src: "/images/block.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "list",
	                title: "搭配小助手 | 张雨绮同款上衣推荐",
	                src: "/images/list.png"
	            }, {
	                type: "block",
	                title: "【i搭配32期】时尚搭配精心推荐！",
	                src: "/images/block.png"
	            }]
	        };
	    },
	
	    components: {
	
	        list: _list2.default,
	        block: _block2.default
	    }
	};
	// </script>
	// <style>
	//
	// </style>

	/* generated by vue-loader */

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"container\">\r\n\r\n    <template v-for=\"content in lists\">\r\n    <block v-if=\"content.type=='block'\"  :info=\"content\"></block>\r\n    <list v-if=\"content.type=='list'\"  :info=\"content\"></list>\r\n</template>\r\n";

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"community-container\" _v-1b73b734=\"\">\n    <header _v-1b73b734=\"\">\n        <span _v-1b73b734=\"\">社区</span>\n        <div class=\"\" _v-1b73b734=\"\">\n\n        </div>\n    </header>\n    <nav class=\"nav\" _v-1b73b734=\"\">\n        <ul id=\"swiper-nav\" _v-1b73b734=\"\">\n            <template v-for=\"nav in navList\">\n                <li v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\" _v-1b73b734=\"\"><span _v-1b73b734=\"\">{{nav}}</span></li>\n            </template>\n        </ul>\n    </nav>\n    <section class=\"com-container\" _v-1b73b734=\"\">\n        <div class=\"swiper-container\" id=\"index-swiper\" _v-1b73b734=\"\">\n            <div class=\"swiper-wrapper\" _v-1b73b734=\"\">\n                <div class=\"swiper-slide\" _v-1b73b734=\"\">\n                    <section id=\"index-scroll\" class=\"index-scroll\" _v-1b73b734=\"\">\n                        <hot _v-1b73b734=\"\"></hot>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\" _v-1b73b734=\"\">\n                    <section class=\"index-scroll\" _v-1b73b734=\"\">\n                        <others _v-1b73b734=\"\"></others>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\" _v-1b73b734=\"\">\n                    <section class=\"index-scroll\" _v-1b73b734=\"\">\n                        <others _v-1b73b734=\"\"></others>\n                    </section>\n                </div>\n                <div class=\"swiper-slide\" _v-1b73b734=\"\">\n                    <section class=\"index-scroll\" _v-1b73b734=\"\">\n                        <others _v-1b73b734=\"\"></others>\n                    </section>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(59)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\shopping.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-06e74c6d/shopping.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(15);
	
	var _commonUtil = __webpack_require__(5);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// var Vue = require('../libs/vue.js');
	// var VueResource = require('../libs/vue-resource.js');
	// Vue.use(VueResource);
	var time; // <template>
	//   <div class="shopping_box">
	//       <header>
	//           <div class="header_left">
	//             <em></em>
	//             <input placeholder='暖心毛衣'  type="text"/>
	//           </div>
	//           <div class='header_right'></div>
	//       </header>
	//       <section  id='shopping_scroll-view'>
	//         <div class="conbox">
	//           <!-- 团购 -->
	//           <div class='header_nav'>
	//             <div class="nav_left">
	//               <img src="/images/shop6.jpg"  />
	//             </div>
	//             <div class="nav_right">
	//               <div>
	//                 <img src="/images/shop7.jpg"  />
	//               </div>
	//               <div>
	//                 <img src="/images/shop8.jpg"  />
	//               </div>
	//             </div>
	//           </div>
	//           <!--  抢购-->
	//           <div class="qianggou">
	//             <div class="qianggou_title">
	//                 <div class='title_left'>
	//                   <h4>限时抢购</h4>
	//                   <h5>每天早9点、晚9点更新</h5>
	//                 </div>
	//                 <div class='title_right'>
	//                    <span>据本场结束还剩</span>
	//                    <div class="data">
	//                      <i>{{hh}}</i> :
	//                      <i>{{mm}}</i> :
	//                      <i>{{ss}}</i>
	//                    </div>
	//                 </div>
	//             </div>
	//             <div id='qianggou_con' class="swiper-container">
	//               <div class="swiper-wrapper">
	//                 <div class="swiper-slide" v-for='l in qinggou'>
	//                     <dl>
	//                       <dt>
	//                         <img v-bind:src='l.imgsrc'/>
	//                       </dt>
	//                       <dd>
	//                         <h4>{{l.name}}</h4>
	//                         <i>￥{{l.newprice}}</i>
	//                         <em>￥{{l.oldprice}}</em>
	//                       </dd>
	//                     </dl>
	//                 </div>
	//               </div>
	//             </div>
	//           </div>
	//           <!-- 当季必备 -->
	//           <div class="bibei_box">
	//             <div class="title">
	//                 <h4><img src='/images/bg1.jpg' /></h4>
	//             </div>
	//             <div class="bibei_con">
	//               <dl v-link="{path:'/search'}" v-for='b in bibei'>
	//                   <dt><img v-bind:src='b.imgsrc' /></dt>
	//                   <dd>{{b.name}}</dd>
	//               </dl>
	//             </div>
	//           </div>
	//           <!-- 全部分类 -->
	//           <div class="feilei_box">
	//             <div class="title">
	//                 <h4><img src='/images/bg2.jpg' /></h4>
	//             </div>
	//             <ul class='fenlei_con' >
	//               <li>
	//                 <div class="fenlei_left">
	//                   <h3>上衣</h3>
	//                   <h4>TOPS</h4>
	//                 </div>
	//                 <div class="fenlei_right">
	//                   <img  src='/images/nav1.jpg'/>
	//                 </div>
	//               </li>
	//               <li>
	//                 <div class="fenlei_left">
	//                   <h3>裤子</h3>
	//                   <h4>PANTS</h4>
	//                 </div>
	//                 <div class="fenlei_right">
	//                   <img  src='/images/nav2.jpg'/>
	//                 </div>
	//               </li>
	//               <li>
	//                 <div class="fenlei_left">
	//                   <h3>裙装</h3>
	//                   <h4>DRESSES</h4>
	//                 </div>
	//                 <div class="fenlei_right">
	//                   <img  src='/images/nav3.jpg'/>
	//                 </div>
	//               </li>
	//               <li>
	//                 <div class="fenlei_left">
	//                   <h3>包包</h3>
	//                   <h4>BAGS</h4>
	//                 </div>
	//                 <div class="fenlei_right">
	//                   <img  src='/images/nav4.jpg'/>
	//                 </div>
	//               </li>
	//               <li>
	//                 <div class="fenlei_left">
	//                   <h3>鞋子</h3>
	//                   <h4>SHONES</h4>
	//                 </div>
	//                 <div class="fenlei_right">
	//                   <img  src='/images/nav5.jpg'/>
	//                 </div>
	//               </li>
	//               <li>
	//                 <div class="fenlei_left">
	//                   <h3>配饰</h3>
	//                   <h4>ACCESSORY</h4>
	//                 </div>
	//                 <div class="fenlei_right">
	//                   <img  src='/images/nav7.jpg'/>
	//                 </div>
	//               </li>
	//             </ul>
	//           </div>
	//           <!-- 推荐好店 -->
	//           <div class="tuijian">
	//             <div class="title">
	//                 <h4><img src='/images/bg3.jpg' /></h4>
	//             </div>
	//             <div class="seemore">
	//                 <img src="/images/good1.jpg"  />
	//             </div>
	//             <ul class="links">
	//                 <li><img src='/images/link1.jpg' /></li>
	//                 <li><img src='/images/link2.jpg' /></li>
	//                 <li><img src='/images/link3.jpg' /></li>
	//                 <li><img src='/images/link4.jpg' /></li>
	//                 <li><img src='/images/link5.jpg' /></li>
	//                 <li><img src='/images/link6.jpg' /></li>
	//                 <li><img src='/images/link7.jpg' /></li>
	//                 <li><img src='/images/link8.jpg' /></li>
	//             </ul>
	//           </div>
	//           <!-- 推荐好店 -->
	//           <div class="gouwu_box">
	//             <div class="title">
	//                 <h4><img src='/images/bg5.jpg' /></h4>
	//             </div>
	//             <ul class='gouwu_con'>
	//               <li v-for='gou in gouwu'>
	//                 <img  v-bind:src='gou.imgsrc'/>
	//                 <div class='gouwu_detail'>
	//                   <h4>{{gou.problem}}</h4>
	//                   <span>含<i>{{gou.count}}</i>件单品</span>
	//                 </div>
	//                 <div class="gouwu_bottom">
	//                   <span>{{gou.title}}</span>
	//                   <i>浏览 {{gou.seecount}}</i>
	//                 </div>
	//               </li>
	//             </ul>
	//           </div>
	//         </div>
	//       </section>
	//   </div>
	// </template>
	// <script>
	
	var mySwiper = null;
	var scroll;
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        }
	    },
	    data: function data() {
	        return {
	            qinggou: [],
	            bibei: [],
	            gouwu: [],
	            hh: '00',
	            mm: '00',
	            ss: '00',
	            transitionName: 'goto'
	        };
	    },
	
	    ready: function ready() {
	        var _this = this;
	
	        this.change(1);
	        scroll = new IScroll('#shopping_scroll-view', {
	            click: true
	        });
	        mySwiper = new Swiper("#qianggou_con", {
	            slidesPerView: 3
	        });
	        //倒计时
	        function checkTime(i) {
	            if (i < 10) {
	                i = "0" + i;
	            }
	            return i;
	        }
	        clearInterval(time);
	        var that = this;
	        time = setInterval(function () {
	            var ts = new Date(2016, 10, 29, 9, 0, 0) - new Date(); //计算剩余的毫秒数
	            if (ts == 0) {
	                clearInterval(time);
	                that.hh = '00';
	                that.mm = '00';
	                that.ss = '00';
	            } else {
	                var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10); //计算剩余的小时数
	                var mm = parseInt(ts / 1000 / 60 % 60, 10); //计算剩余的分钟数
	                var ss = parseInt(ts / 1000 % 60, 10); //计算剩余的秒数
	                that.hh = checkTime(hh);
	                that.mm = checkTime(mm);
	                that.ss = checkTime(ss);
	            }
	        }, 1000);
	        //抢购
	        that.$http.get('/rest/qianggou').then(function (res) {
	            that.qinggou = res.data;
	            _this.scrollRefresh();
	        });
	        //必备
	        that.$http.get('/rest/bibei').then(function (res) {
	            that.bibei = res.data;
	            _this.scrollRefresh();
	        });
	        //购物清单
	        that.$http.get('/rest/gouwu').then(function (res) {
	            that.gouwu = res.data;
	            _this.scrollRefresh();
	        });
	    },
	    methods: {
	        scrollRefresh: function scrollRefresh() {
	            Vue.nextTick(function () {
	                _commonUtil2.default.isAllLoaded('#shopping_scroll-view', function () {
	                    scroll.refresh();
	                });
	            });
	        }
	    }
	
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"shopping_box\">\n    <header>\n        <div class=\"header_left\">\n          <em></em>\n          <input placeholder='暖心毛衣'  type=\"text\"/>\n        </div>\n        <div class='header_right'></div>\n    </header>\n    <section  id='shopping_scroll-view'>\n      <div class=\"conbox\">\n        <!-- 团购 -->\n        <div class='header_nav'>\n          <div class=\"nav_left\">\n            <img src=\"/images/shop6.jpg\"  />\n          </div>\n          <div class=\"nav_right\">\n            <div>\n              <img src=\"/images/shop7.jpg\"  />\n            </div>\n            <div>\n              <img src=\"/images/shop8.jpg\"  />\n            </div>\n          </div>\n        </div>\n        <!--  抢购-->\n        <div class=\"qianggou\">\n          <div class=\"qianggou_title\">\n              <div class='title_left'>\n                <h4>限时抢购</h4>\n                <h5>每天早9点、晚9点更新</h5>\n              </div>\n              <div class='title_right'>\n                 <span>据本场结束还剩</span>\n                 <div class=\"data\">\n                   <i>{{hh}}</i> :\n                   <i>{{mm}}</i> :\n                   <i>{{ss}}</i>\n                 </div>\n              </div>\n          </div>\n          <div id='qianggou_con' class=\"swiper-container\">\n            <div class=\"swiper-wrapper\">\n              <div class=\"swiper-slide\" v-for='l in qinggou'>\n                  <dl>\n                    <dt>\n                      <img v-bind:src='l.imgsrc'/>\n                    </dt>\n                    <dd>\n                      <h4>{{l.name}}</h4>\n                      <i>￥{{l.newprice}}</i>\n                      <em>￥{{l.oldprice}}</em>\n                    </dd>\n                  </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- 当季必备 -->\n        <div class=\"bibei_box\">\n          <div class=\"title\">\n              <h4><img src='/images/bg1.jpg' /></h4>\n          </div>\n          <div class=\"bibei_con\">\n            <dl v-link=\"{path:'/search'}\" v-for='b in bibei'>\n                <dt><img v-bind:src='b.imgsrc' /></dt>\n                <dd>{{b.name}}</dd>\n            </dl>\n          </div>\n        </div>\n        <!-- 全部分类 -->\n        <div class=\"feilei_box\">\n          <div class=\"title\">\n              <h4><img src='/images/bg2.jpg' /></h4>\n          </div>\n          <ul class='fenlei_con' >\n            <li>\n              <div class=\"fenlei_left\">\n                <h3>上衣</h3>\n                <h4>TOPS</h4>\n              </div>\n              <div class=\"fenlei_right\">\n                <img  src='/images/nav1.jpg'/>\n              </div>\n            </li>\n            <li>\n              <div class=\"fenlei_left\">\n                <h3>裤子</h3>\n                <h4>PANTS</h4>\n              </div>\n              <div class=\"fenlei_right\">\n                <img  src='/images/nav2.jpg'/>\n              </div>\n            </li>\n            <li>\n              <div class=\"fenlei_left\">\n                <h3>裙装</h3>\n                <h4>DRESSES</h4>\n              </div>\n              <div class=\"fenlei_right\">\n                <img  src='/images/nav3.jpg'/>\n              </div>\n            </li>\n            <li>\n              <div class=\"fenlei_left\">\n                <h3>包包</h3>\n                <h4>BAGS</h4>\n              </div>\n              <div class=\"fenlei_right\">\n                <img  src='/images/nav4.jpg'/>\n              </div>\n            </li>\n            <li>\n              <div class=\"fenlei_left\">\n                <h3>鞋子</h3>\n                <h4>SHONES</h4>\n              </div>\n              <div class=\"fenlei_right\">\n                <img  src='/images/nav5.jpg'/>\n              </div>\n            </li>\n            <li>\n              <div class=\"fenlei_left\">\n                <h3>配饰</h3>\n                <h4>ACCESSORY</h4>\n              </div>\n              <div class=\"fenlei_right\">\n                <img  src='/images/nav7.jpg'/>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <!-- 推荐好店 -->\n        <div class=\"tuijian\">\n          <div class=\"title\">\n              <h4><img src='/images/bg3.jpg' /></h4>\n          </div>\n          <div class=\"seemore\">\n              <img src=\"/images/good1.jpg\"  />\n          </div>\n          <ul class=\"links\">\n              <li><img src='/images/link1.jpg' /></li>\n              <li><img src='/images/link2.jpg' /></li>\n              <li><img src='/images/link3.jpg' /></li>\n              <li><img src='/images/link4.jpg' /></li>\n              <li><img src='/images/link5.jpg' /></li>\n              <li><img src='/images/link6.jpg' /></li>\n              <li><img src='/images/link7.jpg' /></li>\n              <li><img src='/images/link8.jpg' /></li>\n          </ul>\n        </div>\n        <!-- 推荐好店 -->\n        <div class=\"gouwu_box\">\n          <div class=\"title\">\n              <h4><img src='/images/bg5.jpg' /></h4>\n          </div>\n          <ul class='gouwu_con'>\n            <li v-for='gou in gouwu'>\n              <img  v-bind:src='gou.imgsrc'/>\n              <div class='gouwu_detail'>\n                <h4>{{gou.problem}}</h4>\n                <span>含<i>{{gou.count}}</i>件单品</span>\n              </div>\n              <div class=\"gouwu_bottom\">\n                <span>{{gou.title}}</span>\n                <i>浏览 {{gou.seecount}}</i>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </section>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\login.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-70c16f98/login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(15);
	
	var _getters = __webpack_require__(19);
	
	// <template>
	//     <div class="login-container">
	//         <header>
	//             <i class="back" onclick="window.history.go(-1)"></i>
	//             <span>登录</span>
	//         </header>
	//         <section id="main">
	//             <p v-show="show" class="ts" transition="bounce">
	//                 用户名不能为空
	//             </p>
	//             <div class="user">
	//                 <span></span>
	//                 <input type="text" id="user_name" name="name" v-model="user_name" value="" placeholder="手机号/用户名/邮箱">
	//             </div>
	//             <div class="password">
	//                 <span></span>
	//                 <input type="text" id="password" name="name" v-model="password" value="" placeholder="密码">
	//                 <i v-link="{ path: '/find' }">忘记密码？</i>
	//             </div>
	//             <button class="login" type="button" name="button" v-on:click="logining">登录</button>
	//             <button class="register" type="button" name="button" v-link="{ path: '/register' }">新用户注册</button>
	//         </section>
	//         <section id="share">
	//             <div class="border"></div>
	//             <p>使用以下方式直接登录</p>
	//             <div class="others">
	//                 <i class="sina"></i>
	//                 <i class="qq"></i>
	//                 <i class="wechat"></i>
	//             </div>
	//         </section>
	//     </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.staChanger
	        },
	        getters: {
	            getStainedx: _getters.getStainedx
	        }
	    },
	    data: function data() {
	        return {
	            show: false,
	            flag: true,
	            photo: '',
	            user_name: '',
	            password: '',
	            userlist: []
	        };
	    },
	
	    methods: {
	        logining: function logining() {
	            var site = localStorage.getItem("user");
	            var userArr = JSON.parse(site);
	            var p = 0;
	            var findflag = false;
	            if (userArr) {
	                if (this.user_name == "") {
	                    this.judge();
	                } else if (!/^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(this.user_name)) {
	                    $(".ts").html("用户名有误，请重填");
	                    this.judge();
	                    //return false;
	                } else {
	                    for (var i = 0; i < userArr.length; i++) {
	                        //console.log(userArr.length);
	                        console.log(!(userArr[i].phone == this.user_name));
	                        if (userArr[i].phone == this.user_name) {
	                            p = i;
	                            findflag = true;
	                            break;
	                        }
	                        if (findflag == false && i == userArr.length - 1) {
	                            $(".ts").html("该手机号还没有被注册过");
	                            this.judge();
	                        }
	                    }
	                }
	            } else {
	                userArr = [];
	            }
	            if (this.password == "") {
	                $(".ts").html("密码不能为空");
	                this.judge();
	            } else if (!(userArr[p].password == this.password)) {
	                $(".ts").html("密码错误");
	                this.judge();
	            }
	            console.log(this.flag);
	            if (this.flag) {
	
	                var that = this;
	                setTimeout(function () {
	                    that.$route.router.go({
	                        path: "/my"
	                    });
	                }, 4000);
	                $(".ts").html("登录成功！");
	                this.judge();
	                this.change(true, this.user_name);
	            }
	        },
	        judge: function judge() {
	            var that = this;
	            this.show = true;
	            this.flag = false;
	            setTimeout(function () {
	                that.show = false;
	            }, 4000);
	        }
	    },
	    ready: function ready() {
	        console.log(this.getStainedx.loginState);
	        console.log(this.getStainedx.phone);
	        this.user_name = this.getStainedx.phone;
	        //  if(this.getStainedx.loginState){
	        //      this.flag = false;
	        //  }
	    }
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"login-container\">\n    <header>\n        <i class=\"back\" onclick=\"window.history.go(-1)\"></i>\n        <span>登录</span>\n    </header>\n    <section id=\"main\">\n        <p v-show=\"show\" class=\"ts\" transition=\"bounce\">\n            用户名不能为空\n        </p>\n        <div class=\"user\">\n            <span></span>\n            <input type=\"text\" id=\"user_name\" name=\"name\" v-model=\"user_name\" value=\"\" placeholder=\"手机号/用户名/邮箱\">\n        </div>\n        <div class=\"password\">\n            <span></span>\n            <input type=\"text\" id=\"password\" name=\"name\" v-model=\"password\" value=\"\" placeholder=\"密码\">\n            <i v-link=\"{ path: '/find' }\">忘记密码？</i>\n        </div>\n        <button class=\"login\" type=\"button\" name=\"button\" v-on:click=\"logining\">登录</button>\n        <button class=\"register\" type=\"button\" name=\"button\" v-link=\"{ path: '/register' }\">新用户注册</button>\n    </section>\n    <section id=\"share\">\n        <div class=\"border\"></div>\n        <p>使用以下方式直接登录</p>\n        <div class=\"others\">\n            <i class=\"sina\"></i>\n            <i class=\"qq\"></i>\n            <i class=\"wechat\"></i>\n        </div>\n    </section>\n</div>\n\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-01b717b0/register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(15);
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.staChanger
	        }
	    },
	    data: function data() {
	        return {
	            show: false,
	            flag: true,
	            phone: '',
	            password: '',
	            userlist: []
	        };
	    },
	
	    methods: {
	        save: function save() {
	            var site = localStorage.getItem("user");
	            var userArr = JSON.parse(site);
	            if (userArr) {
	                for (var i = 0; i < userArr.length; i++) {
	                    console.log(userArr[i].phone == this.phone);
	                    if (userArr[i].phone == this.phone) {
	                        $(".ts").html("该手机号已经注册过啦");
	                        this.judge();
	                    }
	                }
	            } else {
	                userArr = [];
	            }
	
	            if (this.phone == "") {
	                this.judge();
	            } else {
	                if (!/^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)) {
	                    $(".ts").html("手机号码有误，请重填");
	                    this.judge();
	                    return false;
	                } else {
	                    if (password == "") {
	                        $(".ts").html("密码不能为空");
	                        this.judge();
	                    }
	                }
	            }
	            if (this.flag) {
	                userArr.push({
	                    "phone": this.phone,
	                    "password": this.password
	                });
	                console.log(userArr);
	                var userStorage = JSON.stringify(userArr);
	                localStorage.setItem("user", userStorage);
	                var that = this;
	                setTimeout(function () {
	                    that.$route.router.go({
	                        path: "/login"
	                    });
	                }, 4000);
	                $(".ts").html("注册成功！");
	                this.judge();
	                this.change(true, this.phone);
	            }
	        },
	        judge: function judge() {
	            var that = this;
	            this.show = true;
	            this.flag = false;
	            setTimeout(function () {
	                that.show = false;
	            }, 4000);
	        }
	    }
	};
	
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="register-container">
	//         <header>
	//             <i class="back" onclick="window.history.go(-1)"></i>
	//             <span>注册</span>
	//         </header>
	//         <section id="main">
	//             <p v-show="show" class="ts" transition="bounce">
	//                 手机号不能为空
	//             </p>
	//             <div class="phone">
	//                 <span></span>
	//                 <input type="text" id="phone" v-model="phone" name="name" value="" placeholder="手机号">
	//             </div>
	//             <div class="password">
	//                 <span></span>
	//                 <input type="password" id="password" v-model="password" name="name" value="" placeholder="密码">
	//             </div>
	//             <div class="code">
	//                 <span></span>
	//                 <input type="text"  name="name" value="" placeholder="验证码">
	//                 <i>获取验证码</i>
	//             </div>
	//             <i class="yxtk">隐私条款>></i>
	//             <button class="submit" type="button" v-on:click="save" name="button">注册</button>
	//         </section>
	//         <section id="share">
	//             <div class="border"></div>
	//             <p>使用以下方式直接登录</p>
	//             <div class="others">
	//                 <i class="sina"></i>
	//                 <i class="qq"></i>
	//                 <i class="wechat"></i>
	//             </div>
	//         </section>
	//     </div>
	// </template>
	// <script>

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"register-container\">\n    <header>\n        <i class=\"back\" onclick=\"window.history.go(-1)\"></i>\n        <span>注册</span>\n    </header>\n    <section id=\"main\">\n        <p v-show=\"show\" class=\"ts\" transition=\"bounce\">\n            手机号不能为空\n        </p>\n        <div class=\"phone\">\n            <span></span>\n            <input type=\"text\" id=\"phone\" v-model=\"phone\" name=\"name\" value=\"\" placeholder=\"手机号\">\n        </div>\n        <div class=\"password\">\n            <span></span>\n            <input type=\"password\" id=\"password\" v-model=\"password\" name=\"name\" value=\"\" placeholder=\"密码\">\n        </div>\n        <div class=\"code\">\n            <span></span>\n            <input type=\"text\"  name=\"name\" value=\"\" placeholder=\"验证码\">\n            <i>获取验证码</i>\n        </div>\n        <i class=\"yxtk\">隐私条款>></i>\n        <button class=\"submit\" type=\"button\" v-on:click=\"save\" name=\"button\">注册</button>\n    </section>\n    <section id=\"share\">\n        <div class=\"border\"></div>\n        <p>使用以下方式直接登录</p>\n        <div class=\"others\">\n            <i class=\"sina\"></i>\n            <i class=\"qq\"></i>\n            <i class=\"wechat\"></i>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b1380284/find.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"find-container\">\n    <header>\n        <i class=\"back\" onclick=\"window.history.go(-1)\"></i>\n        <span>找回密码</span>\n    </header>\n    <section id=\"main\">\n        <div class=\"phone\">\n            <span></span>\n            <input type=\"text\" name=\"name\" value=\"\" placeholder=\"手机号\">\n        </div>\n        <div class=\"code\">\n            <span></span>\n            <input type=\"text\" name=\"name\" value=\"\" placeholder=\"验证码\">\n            <i>获取验证码</i>\n        </div>\n        <div class=\"password\">\n            <span></span>\n            <input type=\"text\" name=\"name\" value=\"\" placeholder=\"新密码\">\n        </div>\n        <button class=\"reset\" type=\"button\" name=\"button\">重置密码</button>\n    </section>\n</div>\n";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(70)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(71)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6cbbd7ed/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonUtil = __webpack_require__(5);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div class="search_box">
	//       <header>
	//           <i v-link="{path:'/'}"></i>
	//           <div class="search">
	//               <input type="text" v-model.trim="msg" />
	//           </div>
	//           <button v-on:click='searchContent'>搜索</button>
	//       </header>
	//       <nav class='menu'>
	//         <ul>
	//           <li class='liactive' v-on:click='moren'>默认</li>
	//           <li v-on:click='saleCount' >销量</li>
	//           <li v-on:click='price' >价格<i></i><em></em></li>
	//           <li v-on:click='shuaixuan' >筛选<b></b></li>
	//         </ul>
	//       </nav>
	//       <div v-if='selected' class='priceselect'>
	//         <span>价格区间(元)</span>
	//         <div>
	//           <input type="text" number v-model='startprice' />
	//           <span>--</span>
	//           <input type="text" number  v-model='endprice' />
	//         </div>
	//         <button v-on:click='selectprice'>确定</button>
	//       </div>
	//       <section id='search_scroll-view'>
	//         <div class="conbox">
	//           <div v-show='topshow' class="head">
	//             <img v-bind:src='imgArrow' />
	//             <span>努力刷新中...</span>
	//           </div>
	//           <ul>
	//             <li v-for='list in productList' v-link="{name: 'shoppingdetail', params: {id: list.id}}">
	//               <div class='imgbox'>
	//                 <img v-bind:src='list.imgsrc' />
	//               </div>
	//               <h4>{{list.name}}</h4>
	//               <span>￥{{list.price}}</span>
	//             </li>
	//           </ul>
	//           <div v-show='bottomshow' class="foot">
	//             <img v-bind:src='imgArrow' />
	//             <span>努力加载中...</span>
	//           </div>
	//         </div>
	//       </section>
	//     </div>
	// </template>
	// <script>
	var myScroll;
	exports.default = {
	    data: function data() {
	        return {
	            msg: '',
	            curIndex: 0,
	            priceClickCount: 0,
	            selectClickCount: 0,
	            selected: false,
	            productList: [],
	            startprice: 0,
	            endprice: 999,
	            productbeifen: [],
	            imgArrow: '/images/arrow.png',
	            saleselected: false,
	            priceSelected: false,
	            transitionName: 'goto',
	            bottomshow: false,
	            topshow: false
	        };
	    },
	
	    ready: function ready() {
	
	        myScroll = new IScroll('#search_scroll-view', {
	            probeType: 3,
	            mouseWheel: true,
	            click: true
	        });
	        var that = this;
	        that.loadData(that);
	        // that.topshow=true;
	        // that.bottomshow=true;
	        myScroll.scrollTo(0, -35);
	        var head = $('.head img');
	        var topImgHasClass = head.hasClass('up');
	        var foot = $('.foot img');
	        var bottomImgHasClass = head.hasClass('down');
	        myScroll.on('scroll', function () {
	            var y = this.y;
	            var maxY = this.maxScrollY - y;
	            if (y >= 0) {
	                !topImgHasClass && head.addClass('up');
	                return '';
	            }
	            if (maxY >= 0) {
	                !bottomImgHasClass && foot.addClass('down');
	                return '';
	            }
	        });
	        myScroll.on('scrollEnd', function () {
	            if (this.y >= -35 && this.y < 0) {
	                myScroll.scrollTo(0, -35);
	                head.removeClass('up');
	            } else if (this.y >= 0) {
	                head.attr('src', '/images/ajax-loader.gif');
	
	                // ajax下拉刷新数据
	                that.$http.get('/rest/listrefresh').then(function (res) {
	                    that.productList = res.data.concat(that.productList);
	                    that.productbeifen = res.data.concat(that.productbeifen);
	                    that.judgeState(that);
	                    myScroll.scrollTo(0, -35);
	                    head.removeClass('up');
	                    head.attr('src', '/images/arrow.png');
	                    Vue.nextTick(function () {
	                        myScroll.refresh();
	                    });
	                });
	            }
	
	            var self = this;
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -35 && maxY < 0) {
	                myScroll.scrollTo(0, self.maxScrollY + 35);
	                foot.removeClass('down');
	            } else if (maxY >= 0) {
	                foot.attr('src', '/images/ajax-loader.gif');
	                //ajax上拉加载数据
	                that.$http.get('/rest/listmore').then(function (res) {
	                    that.productList = that.productList.concat(res.data);
	                    that.productbeifen = that.productbeifen.concat(res.data);
	                    that.judgeState(that);
	                    foot.removeClass('down');
	                    foot.attr('src', '/images/arrow.png');
	                    Vue.nextTick(function () {
	                        myScroll.refresh();
	                        myScroll.scrollTo(0, self.maxScrollY + 35);
	                    });
	                });
	            }
	        });
	    },
	    methods: {
	        judgeState: function judgeState(that) {
	            //console.log(that.saleselected);
	            console.log(that.priceSelected);
	            if (that.saleselected) {
	                that.productList.sort(that.sortBySale);
	            }
	            if (that.priceSelected) {
	                if (that.priceClickCount == 1) {
	                    this.productList.sort(that.sortbypriceAscending);
	                } else {
	                    //降序
	                    that.productList.sort(that.sortbypriceReduce);
	                }
	            }
	        },
	        loadData: function loadData(that) {
	            that.$http.get('/rest/products').then(function (res) {
	                that.topshow = true;
	                that.bottomshow = true;
	                that.productList = res.data;
	                that.productbeifen = res.data;
	                Vue.nextTick(function () {
	                    _commonUtil2.default.isAllLoaded('#search_scroll-view', function () {
	                        myScroll.refresh();
	                    });
	                });
	            });
	        },
	        searchContent: function searchContent() {
	            var pro = this.productbeifen;
	            console.log(pro);
	            this.productList = [];
	            for (var i = 0; i < pro.length; i++) {
	                var str = pro[i].name;
	                //console.log(this.msg.length);
	                //for (let j = 0; j < this.msg.length; j++) {
	                //console.log(this.msg[j]);
	                if (str.indexOf(this.msg) != -1) {
	                    this.productList.push(pro[i]);
	                }
	                //}
	            }
	        },
	
	        //按照价格区间排序
	        selectprice: function selectprice() {
	            var pro = this.productList;
	            pro.sort(this.sortbypriceReduce);
	            this.productList = [];
	            for (var i = 0.; i < pro.length; i++) {
	                if (pro[i].price >= this.startprice && pro[i].price < this.endprice) {
	                    this.productList.push(pro[i]);
	                }
	            }
	        },
	        init: function init(parent) {
	            this.saleselected = false;
	            this.priceSelected = false;
	            for (var i = 0; i < parent.children.length - 1; i++) {
	                parent.children[i].className = '';
	                if (i == 2) {
	                    for (var j = 0; j < parent.children[i].children.length; j++) {
	                        parent.children[i].children[j].className = '';
	                    }
	                }
	            }
	        },
	
	        //默认
	        moren: function moren(event) {
	            var that = this;
	            that.priceClickCount == 0;
	            var targetName = event.target;
	            var parent = targetName.parentNode;
	            this.init(parent);
	            targetName.className = 'liactive';
	            that.loadData(that);
	        },
	
	        //升序排序规则
	        sortbypriceAscending: function sortbypriceAscending(a, b) {
	            return a.price - b.price;
	        },
	
	        //降序排序规则
	        sortbypriceReduce: function sortbypriceReduce(a, b) {
	            return b.price - a.price;
	        },
	
	        //按照销量排序规则
	        sortBySale: function sortBySale(a, b) {
	            return a.saleCount - b.saleCount;
	        },
	
	        //销售
	        saleCount: function saleCount(event) {
	            this.priceClickCount == 0;
	            var targetName = event.target;
	            var parent = targetName.parentNode;
	            this.init(parent);
	            targetName.className = 'liactive';
	            this.productList.sort(this.sortBySale);
	            this.saleselected = true;
	            console.log(this.saleselected);
	        },
	
	        //价格
	        price: function price(event) {
	            var targetName = event.target;
	            var parent = void 0;
	            if (targetName.nodeName == 'LI') {
	                parent = targetName.parentNode;
	            } else {
	                parent = targetName.parentNode.parentNode;
	                targetName = targetName.parentNode;
	            }
	            this.init(parent);
	            targetName.className = 'liactive';
	            //升序
	            if (this.priceClickCount == 0) {
	                targetName.children[0].className = 'iactive';
	                targetName.children[1].className = '';
	                this.priceClickCount = 1;
	                this.productList.sort(this.sortbypriceAscending);
	            } else {
	                //降序
	                targetName.children[0].className = '';
	                targetName.children[1].className = 'emactive';
	                this.priceClickCount = 0;
	                this.productList.sort(this.sortbypriceReduce);
	            }
	            this.priceSelected = true;
	        },
	
	        //筛选
	        shuaixuan: function shuaixuan(event) {
	            this.priceClickCount == 0;
	            var targetName = event.target;
	            if (targetName.nodeName != 'LI') {
	                targetName = targetName.parentNode;
	            }
	            if (this.selectClickCount == 0) {
	                targetName.children[0].className = 'bactive';
	                this.selectClickCount = 1;
	                this.selected = true;
	            } else {
	                targetName.children[0].className = '';
	                this.selectClickCount = 0;
	                this.selected = false;
	            }
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search_box\">\n  <header>\n      <i v-link=\"{path:'/'}\"></i>\n      <div class=\"search\">\n          <input type=\"text\" v-model.trim=\"msg\" />\n      </div>\n      <button v-on:click='searchContent'>搜索</button>\n  </header>\n  <nav class='menu'>\n    <ul>\n      <li class='liactive' v-on:click='moren'>默认</li>\n      <li v-on:click='saleCount' >销量</li>\n      <li v-on:click='price' >价格<i></i><em></em></li>\n      <li v-on:click='shuaixuan' >筛选<b></b></li>\n    </ul>\n  </nav>\n  <div v-if='selected' class='priceselect'>\n    <span>价格区间(元)</span>\n    <div>\n      <input type=\"text\" number v-model='startprice' />\n      <span>--</span>\n      <input type=\"text\" number  v-model='endprice' />\n    </div>\n    <button v-on:click='selectprice'>确定</button>\n  </div>\n  <section id='search_scroll-view'>\n    <div class=\"conbox\">\n      <div v-show='topshow' class=\"head\">\n        <img v-bind:src='imgArrow' />\n        <span>努力刷新中...</span>\n      </div>\n      <ul>\n        <li v-for='list in productList' v-link=\"{name: 'shoppingdetail', params: {id: list.id}}\">\n          <div class='imgbox'>\n            <img v-bind:src='list.imgsrc' />\n          </div>\n          <h4>{{list.name}}</h4>\n          <span>￥{{list.price}}</span>\n        </li>\n      </ul>\n      <div v-show='bottomshow' class=\"foot\">\n        <img v-bind:src='imgArrow' />\n        <span>努力加载中...</span>\n      </div>\n    </div>\n  </section>\n</div>\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = {
	  tabIndex: 0,
	  loginState: false,
	  phone: ''
	};
	
	var mutations = {
	  CHANGETAB: function CHANGETAB(state, currentTabindex) {
	    state.tabIndex = currentTabindex;
	  },
	  CHANGESTA: function CHANGESTA(state, currentTabindex, phone) {
	    state.loginState = currentTabindex;
	    state.phone = phone;
	  }
	};
	
	exports.default = new Vuex.Store({
	  state: state,
	  mutations: mutations
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map