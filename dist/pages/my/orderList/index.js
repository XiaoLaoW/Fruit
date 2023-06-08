"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/orderList/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/orderList/index.tsx":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/orderList/index.tsx ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/pages/my/orderList/list.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
}

/***/ }),

/***/ "./src/pages/my/orderList/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/my/orderList/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/orderList/index.tsx");


var config = {"navigationBarTitleText":"单据汇总"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/my/orderList/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages/my/orderList/list.jsx":
/*!*****************************************!*\
  !*** ./src/pages/my/orderList/list.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);








function List() {
  var result = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentInstance().preloadData.ResultList;
  //计算总金额
  var totalPrice = [];

  //遍历商品
  var firstArray = [];
  for (var i = 0; i < result.length; i++) {
    var Price = result[i].totalPrice;
    var clientName = result[i].clientName;
    var price = result[i].totalPrice;
    totalPrice.push(Price);
    var secondArray = result[i].array;
    for (var j = 0; j < secondArray.length; j++) {
      if (j === 0) {
        firstArray.push({
          name: clientName,
          count: 0,
          title: '购买人',
          price: price
        });
      } else {}
      firstArray.push(secondArray[j]);
    }
  }
  console.log(firstArray, totalPrice);
  var countSum = firstArray.reduce(function (prev, cur) {
    return cur.count + prev;
  }, 0);
  var priceSum = totalPrice.reduce(function (prev, cur) {
    return cur + prev;
  }, 0);
  console.log(countSum, priceSum);
  //数组去重,买了哪些商品
  var newArr = firstArray.reduce(function (pre, cur) {
    if (!pre.includes(cur.title)) {
      return pre.concat(cur.title);
    } else {
      return pre;
    }
  }, []);
  console.log(newArr);
  var productsCount = [];
  for (var i = 0; i < newArr.length; i++) {
    var title = newArr[i];
    var newFirst = firstArray.filter(function (item) {
      return item.title == title;
    });
    console.log(newFirst);
    var count = newFirst.reduce(function (prev, cur) {
      return cur.count + prev;
    }, 0);
    productsCount.push(count);
    console.log(productsCount);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
      className: "all",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
        className: "title",
        children: ["\u672C\u6B21\u56E2\u6C34\u679C\u603B\u4EF6\u6570:", Number(countSum).toFixed(1), "\u4EF6"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
        className: "title",
        children: ["\u672C\u6B21\u56E2\u6C34\u679C\u603B\u91D1\u989D:", Number(priceSum).toFixed(2), "\u5143"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("view", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("text", {
        className: "title",
        children: "\u4EE5\u4E0B\u662F\u5546\u54C1\u6570\u91CF\u6C47\u603B:"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "total",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        children: newArr.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
            style: item == '购买人' ? 'display:none' : 'display:flex',
            className: "totalTitle",
            children: ["\u54C1\u540D:", item]
          });
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        children: productsCount.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
            style: item === 0 ? 'display:none' : 'display:flex',
            className: "totalCount",
            children: ["\u603B\u4EF6\u6570:", item, "\u4EF6"]
          });
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "list",
      children: firstArray.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
            style: item.count != 0 ? 'display:flex' : 'display:none',
            className: "list-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("view", {
              className: "name",
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
              className: "count",
              children: ["\u6570\u91CF:", item.count]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
              className: "price",
              children: ["\u5355\u4EF7:", item.price]
            })]
          }, firstArray.index), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
            style: item.count === 0 ? 'display:flex' : 'display:none',
            className: "clientName",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
              className: "name",
              children: ["\u8D2D\u4E70\u4EBA:", item.name]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("view", {
              className: "price",
              children: ["\u672C\u6B21\u5E94\u4ED8:", item.price.toFixed(2), "\u5143"]
            })]
          })]
        });
      })
    })]
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/my/orderList/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map