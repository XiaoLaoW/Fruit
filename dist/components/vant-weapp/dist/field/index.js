"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/field/index"],{

/***/ "./src/components/vant-weapp/dist/common/utils.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/utils.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextTick": function() { return /* binding */ nextTick; }
/* harmony export */ });
/* unused harmony exports range, addUnit, requestAnimationFrame, pickExclude, getRect, getAllRect, groupSetData, toPromise, getCurrentPage */
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/components/vant-weapp/dist/common/validator.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./src/components/vant-weapp/dist/common/version.js");




function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function nextTick(cb) {
  if ((0,_version__WEBPACK_IMPORTED_MODULE_0__.canIUseNextTick)()) {
    wx.nextTick(cb);
  } else {
    setTimeout(function () {
      cb();
    }, 1000 / 30);
  }
}
function addUnit(value) {
  if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isDef)(value)) {
    return undefined;
  }
  value = String(value);
  return (0,_validator__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value) ? "".concat(value, "px") : value;
}
function requestAnimationFrame(cb) {
  return setTimeout(function () {
    cb();
  }, 1000 / 30);
}
function pickExclude(obj, keys) {
  if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(obj)) {
    return {};
  }
  return Object.keys(obj).reduce(function (prev, key) {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
}
function getRect(context, selector) {
  return new Promise(function (resolve) {
    wx.createSelectorQuery().in(context).select(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}
function getAllRect(context, selector) {
  return new Promise(function (resolve) {
    wx.createSelectorQuery().in(context).selectAll(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}
function groupSetData(context, cb) {
  if ((0,_version__WEBPACK_IMPORTED_MODULE_0__.canIUseGroupSetData)()) {
    context.groupSetData(cb);
  } else {
    cb();
  }
}
function toPromise(promiseLike) {
  if ((0,_validator__WEBPACK_IMPORTED_MODULE_1__.isPromise)(promiseLike)) {
    return promiseLike;
  }
  return Promise.resolve(promiseLike);
}
function getCurrentPage() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/common/validator.js":
/*!************************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/validator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isPromise": function() { return /* binding */ isPromise; },
/* harmony export */   "isDef": function() { return /* binding */ isDef; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; }
/* harmony export */ });
/* unused harmony exports isFunction, isObj, isBoolean, isImageUrl, isVideoUrl */
/* harmony import */ var _Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(val) {
  return typeof val === 'function';
}
function isPlainObject(val) {
  return val !== null && (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === 'object' && !Array.isArray(val);
}
function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = (0,_Users_admin_Desktop_Taro_Fruit_Fruit_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x);
  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url);
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/field/index.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/dist/field/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/dist/common/utils.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/dist/common/component.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./src/components/vant-weapp/dist/field/props.js");



(0,_common_component__WEBPACK_IMPORTED_MODULE_0__.VantComponent)({
  field: true,
  classes: ['input-class', 'right-icon-class', 'label-class'],
  props: Object.assign(Object.assign(Object.assign(Object.assign({}, _props__WEBPACK_IMPORTED_MODULE_1__.commonProps), _props__WEBPACK_IMPORTED_MODULE_1__.inputProps), _props__WEBPACK_IMPORTED_MODULE_1__.textareaProps), {
    size: String,
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    rightIcon: String,
    autosize: null,
    required: Boolean,
    iconClass: String,
    clickable: Boolean,
    inputAlign: String,
    customStyle: String,
    errorMessage: String,
    arrowDirection: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    readonly: {
      type: Boolean,
      observer: 'setShowClear'
    },
    clearable: {
      type: Boolean,
      observer: 'setShowClear'
    },
    clearTrigger: {
      type: String,
      value: 'focus'
    },
    border: {
      type: Boolean,
      value: true
    },
    titleWidth: {
      type: String,
      value: '6.2em'
    },
    clearIcon: {
      type: String,
      value: 'clear'
    },
    extraEventParams: {
      type: Boolean,
      value: false
    }
  }),
  data: {
    focused: false,
    innerValue: '',
    showClear: false
  },
  created: function created() {
    this.value = this.data.value;
    this.setData({
      innerValue: this.value
    });
  },
  methods: {
    formatValue: function formatValue(value) {
      var maxlength = this.data.maxlength;
      if (maxlength !== -1 && value.length > maxlength) {
        return value.slice(0, maxlength);
      }
      return value;
    },
    onInput: function onInput(event) {
      var _ref = event.detail || {},
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
      var formatValue = this.formatValue(value);
      this.value = formatValue;
      this.setShowClear();
      return this.emitChange(Object.assign(Object.assign({}, event.detail), {
        value: formatValue
      }));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.setShowClear();
      this.$emit('focus', event.detail);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.setShowClear();
      this.$emit('blur', event.detail);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
    },
    onClickInput: function onClickInput(event) {
      this.$emit('click-input', event.detail);
    },
    onClear: function onClear() {
      var _this = this;
      this.setData({
        innerValue: ''
      });
      this.value = '';
      this.setShowClear();
      (0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        _this.emitChange({
          value: ''
        });
        _this.$emit('clear', '');
      });
    },
    onConfirm: function onConfirm(event) {
      var _ref2 = event.detail || {},
        _ref2$value = _ref2.value,
        value = _ref2$value === void 0 ? '' : _ref2$value;
      this.value = value;
      this.setShowClear();
      this.$emit('confirm', value);
    },
    setValue: function setValue(value) {
      this.value = value;
      this.setShowClear();
      if (value === '') {
        this.setData({
          innerValue: ''
        });
      }
      this.emitChange({
        value: value
      });
    },
    onLineChange: function onLineChange(event) {
      this.$emit('linechange', event.detail);
    },
    onKeyboardHeightChange: function onKeyboardHeightChange(event) {
      this.$emit('keyboardheightchange', event.detail);
    },
    emitChange: function emitChange(detail) {
      var extraEventParams = this.data.extraEventParams;
      this.setData({
        value: detail.value
      });
      var result;
      var data = extraEventParams ? Object.assign(Object.assign({}, detail), {
        callback: function callback(data) {
          result = data;
        }
      }) : detail.value;
      this.$emit('input', data);
      this.$emit('change', data);
      return result;
    },
    setShowClear: function setShowClear() {
      var _this$data = this.data,
        clearable = _this$data.clearable,
        readonly = _this$data.readonly,
        clearTrigger = _this$data.clearTrigger;
      var focused = this.focused,
        value = this.value;
      var showClear = false;
      if (clearable && !readonly) {
        var hasValue = !!value;
        var trigger = clearTrigger === 'always' || clearTrigger === 'focus' && focused;
        showClear = hasValue && trigger;
      }
      this.setData({
        showClear: showClear
      });
    },
    noop: function noop() {}
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/dist/field/props.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/dist/field/props.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonProps": function() { return /* binding */ commonProps; },
/* harmony export */   "inputProps": function() { return /* binding */ inputProps; },
/* harmony export */   "textareaProps": function() { return /* binding */ textareaProps; }
/* harmony export */ });
var commonProps = {
  value: {
    type: String,
    observer: function observer(value) {
      if (value !== this.value) {
        this.setData({
          innerValue: value
        });
        this.value = value;
      }
    }
  },
  placeholder: String,
  placeholderStyle: String,
  placeholderClass: String,
  disabled: Boolean,
  maxlength: {
    type: Number,
    value: -1
  },
  cursorSpacing: {
    type: Number,
    value: 50
  },
  autoFocus: Boolean,
  focus: Boolean,
  cursor: {
    type: Number,
    value: -1
  },
  selectionStart: {
    type: Number,
    value: -1
  },
  selectionEnd: {
    type: Number,
    value: -1
  },
  adjustPosition: {
    type: Boolean,
    value: true
  },
  holdKeyboard: Boolean
};
var inputProps = {
  type: {
    type: String,
    value: 'text'
  },
  password: Boolean,
  confirmType: String,
  confirmHold: Boolean,
  alwaysEmbed: Boolean
};
var textareaProps = {
  autoHeight: Boolean,
  fixed: Boolean,
  showConfirmBar: {
    type: Boolean,
    value: true
  },
  disableDefaultPadding: {
    type: Boolean,
    value: true
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/components/vant-weapp/dist/field/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map