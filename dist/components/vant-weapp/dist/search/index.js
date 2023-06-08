"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/search/index"],{

/***/ "./src/components/vant-weapp/dist/search/index.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/search/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/dist/common/component.js");
/* harmony import */ var _common_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/version */ "./src/components/vant-weapp/dist/common/version.js");


(0,_common_component__WEBPACK_IMPORTED_MODULE_0__.VantComponent)({
  field: true,
  classes: ['field-class', 'input-class', 'cancel-class'],
  props: {
    value: {
      type: String,
      value: ''
    },
    label: String,
    focus: Boolean,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    inputAlign: String,
    showAction: Boolean,
    useActionSlot: Boolean,
    useLeftIconSlot: Boolean,
    useRightIconSlot: Boolean,
    leftIcon: {
      type: String,
      value: 'search'
    },
    rightIcon: String,
    placeholder: String,
    placeholderStyle: String,
    actionText: {
      type: String,
      value: '取消'
    },
    background: {
      type: String,
      value: '#ffffff'
    },
    maxlength: {
      type: Number,
      value: -1
    },
    shape: {
      type: String,
      value: 'square'
    },
    clearable: {
      type: Boolean,
      value: true
    },
    clearTrigger: {
      type: String,
      value: 'focus'
    },
    clearIcon: {
      type: String,
      value: 'clear'
    }
  },
  methods: {
    onChange: function onChange(event) {
      if ((0,_common_version__WEBPACK_IMPORTED_MODULE_1__.canIUseModel)()) {
        this.setData({
          value: event.detail
        });
      }
      this.$emit('change', event.detail);
    },
    onCancel: function onCancel() {
      var _this = this;
      /**
       * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
       * https://github.com/youzan/vant-weapp/issues/1768
       */
      setTimeout(function () {
        if ((0,_common_version__WEBPACK_IMPORTED_MODULE_1__.canIUseModel)()) {
          _this.setData({
            value: ''
          });
        }
        _this.$emit('cancel');
        _this.$emit('change', '');
      }, 200);
    },
    onSearch: function onSearch(event) {
      this.$emit('search', event.detail);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event.detail);
    },
    onBlur: function onBlur(event) {
      this.$emit('blur', event.detail);
    },
    onClear: function onClear(event) {
      this.$emit('clear', event.detail);
    },
    onClickInput: function onClickInput(event) {
      this.$emit('click-input', event.detail);
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/components/vant-weapp/dist/search/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map