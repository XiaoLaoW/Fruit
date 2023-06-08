"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/vant-weapp/dist/common/component.js":
/*!************************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/component.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VantComponent": function() { return /* binding */ VantComponent; }
/* harmony export */ });
/* harmony import */ var _mixins_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/basic */ "./src/components/vant-weapp/dist/mixins/basic.js");

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}
function VantComponent(vantOptions) {
  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    watch: 'observers',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  // add default externalClasses
  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class');
  // add default behaviors
  options.behaviors = options.behaviors || [];
  options.behaviors.push(_mixins_basic__WEBPACK_IMPORTED_MODULE_0__.basic);
  // add relations
  var relation = vantOptions.relation;
  if (relation) {
    options.relations = relation.relations;
    options.behaviors.push(relation.mixin);
  }
  // map field to form-field behavior
  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  }
  // add default options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  Component(options);
}


/***/ }),

/***/ "./src/components/vant-weapp/dist/common/version.js":
/*!**********************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/version.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canIUseModel": function() { return /* binding */ canIUseModel; },
/* harmony export */   "canIUseGroupSetData": function() { return /* binding */ canIUseGroupSetData; },
/* harmony export */   "canIUseNextTick": function() { return /* binding */ canIUseNextTick; }
/* harmony export */ });
/* unused harmony exports getSystemInfoSync, canIUseFormFieldButton, canIUseAnimate, canIUseCanvas2d, canIUseGetUserProfile */
var systemInfo;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }
  return systemInfo;
}
function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);
    if (num1 > num2) {
      return 1;
    }
    if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
function gte(version) {
  var system = getSystemInfoSync();
  return compareVersion(system.SDKVersion, version) >= 0;
}
function canIUseModel() {
  return gte('2.9.3');
}
function canIUseFormFieldButton() {
  return gte('2.10.3');
}
function canIUseAnimate() {
  return gte('2.9.0');
}
function canIUseGroupSetData() {
  return gte('2.4.0');
}
function canIUseNextTick() {
  try {
    return wx.canIUse('nextTick');
  } catch (e) {
    return gte('2.7.1');
  }
}
function canIUseCanvas2d() {
  return gte('2.9.0');
}
function canIUseGetUserProfile() {
  return !!wx.getUserProfile;
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/basic.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/basic.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basic": function() { return /* binding */ basic; }
/* harmony export */ });
var basic = Behavior({
  methods: {
    $emit: function $emit(name, detail, options) {
      this.triggerEvent(name, detail, options);
    },
    set: function set(data) {
      this.setData(data);
      return new Promise(function (resolve) {
        return wx.nextTick(resolve);
      });
    }
  }
});

/***/ }),

/***/ "./src/utils/utils.jsx":
/*!*****************************!*\
  !*** ./src/utils/utils.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNowTime": function() { return /* binding */ getNowTime; },
/* harmony export */   "getArrayIndex": function() { return /* binding */ getArrayIndex; },
/* harmony export */   "getMaxIndex": function() { return /* binding */ getMaxIndex; }
/* harmony export */ });
/* unused harmony export dateToString */
//获取当前时间
function getNowTime() {
  var date = new Date();
  //年 getFullYear()：四位数字返回年份
  var year = date.getFullYear(); //getFullYear()代替getYear()
  //月 getMonth()：0 ~ 11
  var month = date.getMonth() + 1;
  //日 getDate()：(1 ~ 31)
  var day = date.getDate();
  //时 getHours()：(0 ~ 23)
  var hour = date.getHours();
  //分 getMinutes()： (0 ~ 59)
  var minute = date.getMinutes();
  //秒 getSeconds()：(0 ~ 59)
  var second = date.getSeconds();
  var time = year + "-" + addZero(month) + "-" + addZero(day) + " " + addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);
  return time;
}

//小于10的拼接上0字符串
function addZero(s) {
  return s < 10 ? "0" + s : s;
}
function dateToString(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var hours = date.getHours().toString();
  if (hours.length == 1) {
    hours = "0" + hours;
  }
  var mintus = date.getMinutes().toString();
  if (mintus.length == 1) {
    mintus = "0" + mintus;
  }
  var second = date.getSeconds().toString();
  if (second.length == 1) {
    second = "0" + second;
  }
  var dateTime = year + "-" + month + "-" + day + " " + hours + ":" + mintus + ":" + second;
  return dateTime;
}
//获取下标
function getArrayIndex(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i].title === obj.title) {
      return i;
    }
  }
  return -1;
}
//获取数组内最大的id
function getMaxIndex(arr) {
  var i = arr.length;
  var maxId = arr[0].id;
  while (i--) {
    if (arr[i].id > maxId) {
      maxId = arr[i].id;
    }
  }
  return maxId;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map