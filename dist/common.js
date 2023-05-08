"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/pages/index/fruit.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/fruit.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fruit; }
/* harmony export */ });
/* harmony import */ var C_Users_63048_Desktop_wx_code_Fruit_taro_wx_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_jiantou_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/jiantou.png */ "./src/image/jiantou.png");
/* harmony import */ var _image_add_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/add.png */ "./src/image/add.png");
/* harmony import */ var _image_reduce_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/reduce.png */ "./src/image/reduce.png");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











function Fruit() {
  var fruitList = [{
    id: 1,
    text: "蓝莓到货‼️‼️高品质蓝莓🫐诱人的蓝色小浆果，皮薄、肉脆、味甜！营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "蓝莓",
    price: "10",
    count: 0
  }, {
    id: 2,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "草莓",
    price: "100",
    count: 0
  }, {
    id: 3,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "banana",
    price: "10",
    count: 0
  }, {
    id: 4,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "宁夏大西瓜",
    price: "10",
    count: 0
  }, {
    id: 5,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "仙人球",
    price: "10",
    count: 0
  }, {
    id: 6,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "玛卡巴卡",
    price: "10",
    count: 0
  }, {
    id: 7,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "无锡底细",
    price: "10",
    count: 0
  }, {
    id: 8,
    text: "营养丰富，“浆果之王”美誉可不是盖的口感鲜甜，大果（16➕）：3盒55，6盒100",
    title: "banan",
    price: "10",
    count: 0
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fruitList),
    _useState2 = (0,C_Users_63048_Desktop_wx_code_Fruit_taro_wx_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    List = _useState2[0],
    setList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = (0,C_Users_63048_Desktop_wx_code_Fruit_taro_wx_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    totalPrice = _useState4[0],
    setTotalPrice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = (0,C_Users_63048_Desktop_wx_code_Fruit_taro_wx_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    totalCount = _useState6[0],
    setTotalCount = _useState6[1];
  function Less(id, text, title, price, count) {
    var oldId = id;
    var oldText = text;
    var oldtitle = title;
    var oldPrice = price;
    var newCount = count - 1;
    var newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount
    };
    setList(function (List) {
      var ListA = JSON.parse(JSON.stringify(List));
      ListA.splice(id - 1, 1, newArray);
      return ListA;
    });
    //计算总价格
    var newPrice = -1 * oldPrice;
    setTotalPrice(totalPrice + newPrice);
    //计算总数量
    setTotalCount(totalCount - 1);
  }
  function Add(id, text, title, price, count) {
    var oldId = id;
    var oldText = text;
    var oldtitle = title;
    var oldPrice = price;
    var newCount = count + 1;
    var newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount
    };
    setList(function (List) {
      var ListA = JSON.parse(JSON.stringify(List));
      ListA.splice(id - 1, 1, newArray);
      return ListA;
    });
    //计算总价格
    var newPrice = 1 * oldPrice;
    setTotalPrice(totalPrice + newPrice);
    //计算总数量
    setTotalCount(totalCount + 1);
  }
  function order() {
    var orderArray = [];
    for (var i = 0; i < List.length; i++) {
      var count = List[i].count;
      var title = List[i].title;
      var price = List[i].price;
      if (count) {
        orderArray.push({
          count: count,
          title: title,
          price: price
        });
      }
    }
    //如果购物车无商品，不跳转页面
    if (orderArray.length >= 1) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "../order/index",
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function acceptDataFromOpenedPage(data) {
            console.log(data);
          },
          someEvent: function someEvent(data) {
            console.log("--->", data);
          }
        },
        success: function success(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit("acceptDataFromOpenerPage", {
            data: {
              orderArray: orderArray,
              totalPrice: totalPrice
            }
          });
        }
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "请添加商品",
        icon: "error",
        duration: 2000
      });
    }
  }
  function clear() {
    setTotalCount(0);
    setTotalPrice(0);
    setList(fruitList);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
      title: "已清空购物车"
    });
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
    }, 2000);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
        className: "list",
        children: List.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
              className: "Number",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                src: _image_jiantou_png__WEBPACK_IMPORTED_MODULE_2__,
                className: "arrow"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "count",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("text", {
                children: [item.id, ".", item.title]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("text", {
                className: "countText",
                children: ["\u8D2D\u4E70\u6570\u91CF:", item.count]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "price",
              children: ["\u5355\u4EF7:", item.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
                className: "countBtn",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                  src: _image_reduce_png__WEBPACK_IMPORTED_MODULE_4__,
                  className: "btn",
                  onClick: function onClick() {
                    return Less(item.id, item.text, item.title, item.price, item.count);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                  src: _image_add_png__WEBPACK_IMPORTED_MODULE_3__,
                  className: "btn",
                  onClick: function onClick() {
                    return Add(item.id, item.text, item.title, item.price, item.count);
                  }
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
              className: "content",
              children: item.text
            })]
          }, item.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
        className: "total",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
            className: "totalP",
            children: ["\u5F53\u524D\u603B\u4EF7\u683C:", totalPrice]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
            className: "totalC",
            children: ["\u8D2D\u7269\u8F66\u5546\u54C1\u603B\u6570:", totalCount]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
          className: "totalBtn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
            className: "totalBtnOrder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
              size: "mini",
              type: "default",
              onClick: function onClick() {
                order();
              },
              children: "\u4E0B\u5355"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
            className: "totalBtnClear",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
              size: "mini",
              type: "warn",
              onClick: function onClick() {
                clear();
              },
              children: "\u6E05\u7A7A"
            })
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/image/add.png":
/*!***************************!*\
  !*** ./src/image/add.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/add.png";

/***/ }),

/***/ "./src/image/jiantou.png":
/*!*******************************!*\
  !*** ./src/image/jiantou.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/jiantou.png";

/***/ }),

/***/ "./src/image/reduce.png":
/*!******************************!*\
  !*** ./src/image/reduce.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/reduce.png";

/***/ })

}]);
//# sourceMappingURL=common.js.map