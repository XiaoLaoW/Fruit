"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/cell/index"],{

/***/ "./src/components/vant-weapp/dist/cell/index.js":
/*!******************************************************!*\
  !*** ./src/components/vant-weapp/dist/cell/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _mixins_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/link */ "./src/components/vant-weapp/dist/mixins/link.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/dist/common/component.js");


(0,_common_component__WEBPACK_IMPORTED_MODULE_1__.VantComponent)({
  classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
  mixins: [_mixins_link__WEBPACK_IMPORTED_MODULE_0__.link],
  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    titleStyle: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/link.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/link.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "link": function() { return /* binding */ link; }
/* harmony export */ });
var link = Behavior({
  properties: {
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    }
  },
  methods: {
    jumpLink: function jumpLink() {
      var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this.data[urlKey];
      if (url) {
        if (this.data.linkType === 'navigateTo' && getCurrentPages().length > 9) {
          wx.redirectTo({
            url: url
          });
        } else {
          wx[this.data.linkType]({
            url: url
          });
        }
      }
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/components/vant-weapp/dist/cell/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map