"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/index.tsx":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/index.tsx ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my */ "./src/pages/my/my.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_my__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
}

/***/ }),

/***/ "./src/pages/my/index.tsx":
/*!********************************!*\
  !*** ./src/pages/my/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/index.tsx");


var config = {"navigationBarTitleText":"菜单"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/my/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages/my/my.jsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






// import { dateToString } from '../../utils/utils'



function History() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
    _useState2 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    res = _useState2[0],
    setRes = _useState2[1];
  // const stamp1 = dateToString(new Date(new Date().setHours(0, 0, 0, 0))) //获取当天零点的时间
  //查看本端口历史单据
  function history() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: "./history/index"
    });
  }
  //查看所有人的商品汇总
  function orderList() {
    return _orderList.apply(this, arguments);
  } //清空数据库
  function _orderList() {
    _orderList = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2() {
      var c1;
      return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            c1 = new (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.Cloud)({
              resourceEnv: "test-taro1-4gdydbsi405487f2"
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
              title: "加载中"
            });
            setTimeout(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
            }, 2000);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.callFunction({
              // 要调用的云函数名称
              name: "orderList"
              // 传递给云函数的event参数
            }).then(function (res) {
              var ResultList = [];
              ResultList.value = res.result.data;
              console.log(res);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().preload({
                ResultList: res.result.data
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                url: "./orderList/index"
              });
              console.log("已更新");
            }).catch(function (err) {
              console.log(err);
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _orderList.apply(this, arguments);
  }
  function clearList() {
    return _clearList.apply(this, arguments);
  } //更新商品列表
  function _clearList() {
    _clearList = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee4() {
      return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            //判断权限
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
              editable: true,
              placeholderText: "请输入密码",
              success: function () {
                var _success2 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee3(res) {
                  var c1, db;
                  return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(res.confirm && res.content == 7423674)) {
                          _context3.next = 8;
                          break;
                        }
                        c1 = new (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.Cloud)({
                          resourceEnv: "test-taro1-4gdydbsi405487f2"
                        });
                        db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.database({});
                        _context3.next = 5;
                        return db.collection("orderList").where({
                          all: null
                        }).remove();
                      case 5:
                        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                          title: "删除成功",
                          icon: "success",
                          duration: 1000
                        });
                        _context3.next = 9;
                        break;
                      case 8:
                        if (res.cancel) {
                          console.log("用户取消");
                        } else {
                          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                            title: "密码错误",
                            icon: "error"
                          });
                        }
                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                function success(_x2) {
                  return _success2.apply(this, arguments);
                }
                return success;
              }()
            });
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _clearList.apply(this, arguments);
  }
  function upDate() {
    //判断权限
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
      editable: true,
      placeholderText: "请输入密码",
      success: function () {
        var _success = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee(res) {
          return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (res.confirm && res.content == 1) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                    url: "./upDate/index"
                  });
                } else if (res.cancel) {
                  console.log("用户取消");
                } else {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                    title: "密码错误",
                    icon: "error"
                  });
                }
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function success(_x) {
          return _success.apply(this, arguments);
        }
        return success;
      }()
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "history1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("text", {
        onClick: function onClick() {
          return history();
        },
        children: "\u6211\u7684\u8BA2\u5355"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "history1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("text", {
        onClick: function onClick() {
          return orderList();
        },
        children: "\u62FC\u56E2\u6C47\u603B"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "history",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("text", {
        onClick: function onClick() {
          return upDate();
        },
        children: "\u66F4\u65B0\u5546\u54C1"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "history",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("text", {
        onClick: function onClick() {
          return clearList();
        },
        children: "\u5220\u5E93"
      })
    })]
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/my/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map