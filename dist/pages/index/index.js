"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./src/pages/index/fruit.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fruit__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
}

/***/ }),

/***/ "./src/pages/index/fruit.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/fruit.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fruit; }
/* harmony export */ });
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_jiantou_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/jiantou.png */ "./src/image/jiantou.png");
/* harmony import */ var _image_add_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/add.png */ "./src/image/add.png");
/* harmony import */ var _image_reduce_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/reduce.png */ "./src/image/reduce.png");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);














function Fruit() {
  // const ListValue = Taro.getCurrentInstance().preloadData;
  var c1 = new (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.Cloud)({
    resourceEnv: 'test-taro1-4gdydbsi405487f2'
  });
  var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.database();
  var clientName = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('yourName'); // 获取本地缓存中的用户名
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    List = _useState2[0],
    setList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    totalPrice = _useState4[0],
    setTotalPrice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    totalCount = _useState6[0],
    setTotalCount = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, 2),
    searchArray = _useState8[0],
    setSearchArray = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState9, 2),
    searchIpt = _useState10[0],
    setSearchIpt = _useState10[1];
  //获取水果列表
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showNavigationBarLoading();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
      // 要调用的云函数名称
      name: 'fruitList'
      // 传递给云函数的event参数
    }).then(function (res) {
      setList(res.result.data);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideNavigationBarLoading();
    }).catch(function (err) {
      console.log(error);
    });
    // db.collection("fruitList")
    //   .get()
    //   .then((res) => {
    //     setList(res.data);
    //     Taro.hideNavigationBarLoading();
    //   });
  }, []); //页面加载时获取列表数据
  function FruitList1() {
    return _FruitList.apply(this, arguments);
  } //下拉刷新水果列表
  function _FruitList() {
    _FruitList = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee2() {
      return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
              // 要调用的云函数名称
              name: 'fruitList'
            }).then(function (res) {
              setList(res.result.data);
            }).catch(function (err) {});
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _FruitList.apply(this, arguments);
  }
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.usePullDownRefresh)( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee() {
    return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
            // 要调用的云函数名称
            name: 'fruitList'
          }).then(function (res) {
            setList(function () {
              var newList1 = [];
              var newList = res.result.data;
              console.log(1, newList1, newList);
              if (List.length < newList.length) {
                for (var i = 0; i < List.length; i++) {
                  newList1.push(List[i]);
                }
                for (var j = List.length; j < newList.length; j++) {
                  newList1.push(newList[j]);
                }
              } else if (List.length > newList.length) {
                for (var x = 0; x < List.length; x++) {
                  var obj = List[x];
                  for (var y = 0; y < newList.length; y++) {
                    var newObj = newList[y];
                    if (obj.title === newObj.title) {
                      newList1.push(obj);
                    }
                  }
                }
                var price = 0;
                var count = 0;
                for (var j = 0; j < newList1.length; j++) {
                  price = newList1[j].count * newList1[j].price + price;
                  count = newList1[j].count + count;
                }
                console.log(price, count);
                setTotalPrice(price);
                setTotalCount(count);
              } else {
                for (var i = 0; i < List.length; i++) {
                  newList1.push(List[i]);
                }
              }
              console.log(2, newList1);
              return newList1;
            });
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().stopPullDownRefresh();
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  //从数据获取最新列表后，再把原有的商品数量添加到新列表里

  function Less(item, id, text, title, price, count) {
    var newId = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(List, item);
    var newId1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(searchArray, item);
    var oldId = id;
    var oldText = text;
    var oldtitle = title;
    var oldPrice = price;
    var newCount = Number(count) - 1;
    var newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount
    };
    setList(function (List) {
      var ListA = JSON.parse(JSON.stringify(List));
      ListA.splice(newId, 1, newArray);
      return ListA;
    });
    setSearchArray(function (searchArray) {
      var ListA = JSON.parse(JSON.stringify(searchArray));
      ListA.splice(newId1, 1, newArray);
      return ListA;
    });
    //计算总价格
    var newPrice = -1 * oldPrice;
    setTotalPrice(totalPrice + newPrice);
    //计算总数量
    setTotalCount(totalCount - 1);
  }
  function Add(item, id, text, title, price, count) {
    var newId = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(List, item);
    var newId1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(searchArray, item);
    var oldId = id;
    var oldText = text;
    var oldtitle = title;
    var oldPrice = price;
    var newCount = Number(count) + 1;
    var newArray = {
      id: oldId,
      text: oldText,
      title: oldtitle,
      price: oldPrice,
      count: newCount
    };
    setList(function (List) {
      var ListA = JSON.parse(JSON.stringify(List));
      ListA.splice(newId, 1, newArray);
      return ListA;
    });
    setSearchArray(function (searchArray) {
      var ListA = JSON.parse(JSON.stringify(searchArray));
      ListA.splice(newId1, 1, newArray);
      return ListA;
    });
    //计算总价格
    var newPrice = 1 * oldPrice;
    setTotalPrice(totalPrice + newPrice);
    //计算总数量
    setTotalCount(totalCount + 1);
  }
  function order() {
    return _order.apply(this, arguments);
  } //手动清空清空购物车
  function _order() {
    _order = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee3() {
      var orderArray, i, id, count, title, price, newArray, Price, addRes;
      return (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            orderArray = [];
            for (i = 0; i < List.length; i++) {
              id = i;
              count = Number(List[i].count);
              title = List[i].title;
              price = List[i].price;
              if (count > 0 || count < 0) {
                orderArray.push({
                  id: id,
                  count: count,
                  title: title,
                  price: price
                });
              }
            }

            //如果购物车无商品，不跳转页面
            if (!(orderArray.length >= 1 & clientName != null)) {
              _context3.next = 20;
              break;
            }
            newArray = [];
            newArray.value = orderArray;
            Price = Number;
            Price.vaule = totalPrice;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().preload({
              newArray: orderArray,
              totalPrice: totalPrice
            });
            jumpClear();
            //跳转页面
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: '../order/index'
            });
            //上传订单、开单时间和总金额
            _context3.next = 12;
            return db.collection('orderList').add({
              data: {
                array: orderArray,
                totalPrice: totalPrice,
                clientName: clientName,
                time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getNowTime)()
              }
            }).then(function (res) {
              return res;
            }).catch(function (err) {
              return err;
            });
          case 12:
            addRes = _context3.sent;
            id = addRes._id;
            console.log(id);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('id', id);
            console.log(addRes);
            if (!addRes._id) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: '下单失败',
                icon: 'error',
                duration: 1000
              });
            } else {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: '下单成功',
                icon: 'success',
                duration: 1000
              });
            }
            _context3.next = 21;
            break;
          case 20:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请添加商品',
              icon: 'error',
              duration: 1000
            });
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _order.apply(this, arguments);
  }
  function clear() {
    setTotalCount(0);
    setTotalPrice(0);
    FruitList1();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
      title: '已清空购物车'
    });
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
    }, 2000);
  }
  //跳转页面时清空购物车
  function jumpClear() {
    setTotalCount(0);
    setTotalPrice(0);
    FruitList1();
  }
  //更新数量
  function updateCount(e, item) {
    var newId = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(List, item);
    var inputCount = e.detail.value.replace(',', '.');
    console.log(inputCount);
    if (inputCount.includes(',')) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请检查符号数量',
        icon: 'error'
      });
      var oldId = item.id;
      var oldText = item.text;
      var oldtitle = item.title;
      var oldPrice = item.price;
      var oldCount = item.count;
      var newArray = {
        id: oldId,
        text: oldText,
        title: oldtitle,
        price: oldPrice,
        count: oldCount
      };
      setList(function (List) {
        var ListA = JSON.parse(JSON.stringify(List));
        ListA.splice(newId, 1, newArray);
        return ListA;
      });
    } else {
      var _oldId = item.id;
      var _oldText = item.text;
      var _oldtitle = item.title;
      var _oldPrice = item.price;
      var _oldCount = item.count;
      var newCount = inputCount;
      var _newArray = {
        id: _oldId,
        text: _oldText,
        title: _oldtitle,
        price: _oldPrice,
        count: newCount
      };
      setList(function (List) {
        var ListA = JSON.parse(JSON.stringify(List));
        ListA.splice(newId, 1, _newArray);
        console.log(_newArray);
        return ListA;
      });
      //计算总价格 计算总数量

      var newPrice = inputCount * _oldPrice - _oldCount * Number(_oldPrice);
      setTotalPrice(totalPrice + Number(newPrice));
      var newTotalCount = totalCount - Number(_oldCount) + Number(inputCount);
      setTotalCount(newTotalCount);
    }
  }
  function updateSearchCount(event, item) {
    console.log(item);
    var newId = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(searchArray, item);
    var newId1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(List, item);
    var inputCount = event.detail.value.replace(',', '.');
    if (inputCount.includes(',')) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请检查符号数量',
        icon: 'error'
      });
      var oldId = item.id;
      var oldText = item.text;
      var oldtitle = item.title;
      var oldPrice = item.price;
      var oldCount = item.count;
      var newArray = {
        id: oldId,
        text: oldText,
        title: oldtitle,
        price: oldPrice,
        count: oldCount
      };
      setSearchArray(function (searchArray) {
        var ListA = JSON.parse(JSON.stringify(searchArray));
        ListA.splice(newId, 1, newArray);
        return ListA;
      });
    } else {
      var _oldId2 = item.id;
      var _oldText2 = item.text;
      var _oldtitle2 = item.title;
      var _oldPrice2 = item.price;
      var _oldCount2 = item.count;
      var newCount = inputCount;
      var _newArray2 = {
        id: _oldId2,
        text: _oldText2,
        title: _oldtitle2,
        price: _oldPrice2,
        count: newCount
      };
      setSearchArray(function (searchArray) {
        var ListA = JSON.parse(JSON.stringify(searchArray));
        ListA.splice(newId, 1, _newArray2);
        return ListA;
      });
      setList(function (List) {
        var ListA = JSON.parse(JSON.stringify(List));
        ListA.splice(newId1, 1, _newArray2);
        console.log(newId1, _newArray2, ListA);
        return ListA;
      });
      //计算总价格 计算总数量
      var newPrice = inputCount * _oldPrice2 - _oldCount2 * Number(_oldPrice2);
      setTotalPrice(totalPrice + Number(newPrice));
      var newTotalCount = totalCount - Number(_oldCount2) + Number(inputCount);
      setTotalCount(newTotalCount);
    }
  }
  function search(e) {
    if (e.detail) {
      var content = e.detail.value;
      var newSearchArray = List.filter(function (item) {
        return item.title.includes(content);
      });
      console.log(newSearchArray.length);
      setSearchArray(newSearchArray);
      if (newSearchArray.length === 0) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '未找到水果',
          icon: 'error',
          duration: 2000
        });
      }
    }
  }
  function hide() {
    setSearchIpt(false);
  }
  function back() {
    setSearchIpt(true);
    setSearchArray([]);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
      className: "search",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("van-search", {
        ConfirmType: "search",
        onFocus: function onFocus() {
          return hide();
        },
        onBlur: function onBlur(e) {
          return search(e);
        },
        placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        onClick: function onClick() {
          return back();
        },
        size: "mini",
        style: searchIpt == true ? 'display:none' : 'display:flex',
        children: "\u8FD4\u56DE\u5217\u8868"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
        className: "search-content",
        style: searchIpt == true ? 'display:none' : 'display:flex',
        children: searchArray.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
              className: "Number",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                src: _image_jiantou_png__WEBPACK_IMPORTED_MODULE_2__,
                className: "arrow"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "count",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("text", {
                children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(searchArray, item) + 1, ".", item.title]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Input, {
                className: "input",
                placeholder: "0",
                type: "digit",
                value: item.count,
                onBlur: function onBlur(event) {
                  return updateSearchCount(event, item);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("text", {
                className: "countText",
                children: "\u8D2D\u4E70\u6570\u91CF:"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "price",
              children: ["\u5355\u4EF7:", item.price]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "countBtn",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                src: _image_reduce_png__WEBPACK_IMPORTED_MODULE_4__,
                className: "btn",
                onClick: function onClick() {
                  return Less(item, item.id, item.text, item.title, item.price, item.count);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                src: _image_add_png__WEBPACK_IMPORTED_MODULE_3__,
                className: "btn",
                onClick: function onClick() {
                  return Add(item, item.id, item.text, item.title, item.price, item.count);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
              className: "content",
              children: item.text
            })]
          }, item.id);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
      className: "container",
      style: searchIpt == false ? 'display:none' : 'display:flex',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
        className: "list",
        children: List.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
              className: "Number",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                src: _image_jiantou_png__WEBPACK_IMPORTED_MODULE_2__,
                className: "arrow"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "count",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("text", {
                children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getArrayIndex)(List, item) + 1, ".", item.title]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Input, {
                className: "input",
                placeholder: "0",
                type: "digit",
                value: item.count,
                onBlur: function onBlur(event) {
                  return updateCount(event, item);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("text", {
                className: "countText",
                children: "\u8D2D\u4E70\u6570\u91CF:"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
              className: "price",
              children: ["\u5355\u4EF7:", item.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
                className: "countBtn",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                  src: _image_reduce_png__WEBPACK_IMPORTED_MODULE_4__,
                  className: "btn",
                  onClick: function onClick() {
                    return Less(item, item.id, item.text, item.title, item.price, item.count);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
                  src: _image_add_png__WEBPACK_IMPORTED_MODULE_3__,
                  className: "btn",
                  onClick: function onClick() {
                    return Add(item, item.id, item.text, item.title, item.price, item.count);
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
            children: ["\u5F53\u524D\u603B\u4EF7\u683C:", totalPrice.toFixed(2)]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
            className: "totalC",
            children: ["\u8D2D\u7269\u8F66\u5546\u54C1\u603B\u6570:", totalCount]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("view", {
          className: "totalBtn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
            className: "totalBtnOrder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
              size: "mini",
              type: "default",
              onClick: function onClick() {
                order();
              },
              children: "\u4E0B\u5355"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("view", {
            className: "totalBtnClear",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
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
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"拼果团","enablePullDownRefresh":true,"onReachBottomDistance":30,"backgroundTextStyle":"dark","usingComponents":{"van-search":"../../components/vant-weapp/dist/search/index"}};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


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

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map