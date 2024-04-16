"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* WeatherApp */
/* style.css */

*,
*::before,
*::after {
  font-family: inherit;
  box-sizing: border-box; 
  border: none;
  color: rgb(220, 234, 60);
}

html {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

img {
  display: block;
  /* max-width: 100%; */
}

input,
input:focus,
input:-webkit-autofill {
  border: 1px solid rgb(220, 234, 60);
  background-color: transparent;
  cursor: pointer;
}

/* form#temp-conversion input[type="radio"] {
  background-color: transparent;
  border: 1px solid rgb(220, 234, 60);
} */

.btn {
  cursor: pointer;
  background: 0;
  border: 1px solid rgb(220, 234, 60);
  padding: 0.15em 0.15em;
  color: inherit;
}

#background-container {
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
}

#welcome-header {
  text-align: center;
}

.current-display {
  margin-top: 2vh;
  align-self: flex-start;
}

.current-conditions {
  margin: 0;
}

#location-display {
  margin-left: 4vw;
}

#location-display > *:nth-child(-n+) {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

#search-location {
  margin-top: 2vh;
}

#search-location button {
  flex-shrink: 0;
  align-self: flex-start;
}

#location-input {
  color: rgb(220, 234, 60);
  width: 10vw;
}

.gif {
  margin-top: 1vh;
  width: auto; 
  height: auto; 
  max-width: 20vw;
  max-height: 30vh;
  margin-left: 18vw;
  border-radius: 1em;
}

.credits {
  display: flex;
  position: fixed;
  bottom: 1em;
  text-align: left;
  gap: 1em;
}

.credits a {
  color: blue;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,eAAe;AACf,cAAc;;AAEd;;;EAGE,oBAAoB;EACpB,sBAAsB;EACtB,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;;;EAGE,mCAAmC;EACnC,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;;GAGG;;AAEH;EACE,eAAe;EACf,aAAa;EACb,mCAAmC;EACnC,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,WAAW;AACb","sourcesContent":["/* WeatherApp */\n/* style.css */\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box; \n  border: none;\n  color: rgb(220, 234, 60);\n}\n\nhtml {\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\nimg {\n  display: block;\n  /* max-width: 100%; */\n}\n\ninput,\ninput:focus,\ninput:-webkit-autofill {\n  border: 1px solid rgb(220, 234, 60);\n  background-color: transparent;\n  cursor: pointer;\n}\n\n/* form#temp-conversion input[type=\"radio\"] {\n  background-color: transparent;\n  border: 1px solid rgb(220, 234, 60);\n} */\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 1px solid rgb(220, 234, 60);\n  padding: 0.15em 0.15em;\n  color: inherit;\n}\n\n#background-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n}\n\n.content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n#welcome-header {\n  text-align: center;\n}\n\n.current-display {\n  margin-top: 2vh;\n  align-self: flex-start;\n}\n\n.current-conditions {\n  margin: 0;\n}\n\n#location-display {\n  margin-left: 4vw;\n}\n\n#location-display > *:nth-child(-n+) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n#search-location {\n  margin-top: 2vh;\n}\n\n#search-location button {\n  flex-shrink: 0;\n  align-self: flex-start;\n}\n\n#location-input {\n  color: rgb(220, 234, 60);\n  width: 10vw;\n}\n\n.gif {\n  margin-top: 1vh;\n  width: auto; \n  height: auto; \n  max-width: 20vw;\n  max-height: 30vh;\n  margin-left: 18vw;\n  border-radius: 1em;\n}\n\n.credits {\n  display: flex;\n  position: fixed;\n  bottom: 1em;\n  text-align: left;\n  gap: 1em;\n}\n\n.credits a {\n  color: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
//Entry point file for webpack.

//webpack entry file
//index.js




(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.initializeSite)();

console.log('WP entry.js');


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachEventListeners: () => (/* binding */ attachEventListeners),
/* harmony export */   currentLocation: () => (/* binding */ currentLocation),
/* harmony export */   currentLocationUrl: () => (/* binding */ currentLocationUrl),
/* harmony export */   defaultLocation: () => (/* binding */ defaultLocation),
/* harmony export */   locationForm: () => (/* binding */ locationForm),
/* harmony export */   radioButtonC: () => (/* binding */ radioButtonC),
/* harmony export */   radioButtonF: () => (/* binding */ radioButtonF),
/* harmony export */   weatherApiKey: () => (/* binding */ weatherApiKey)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
//WeatherApp
//User Interface Module
//ui.js

//Imports


// //Declarations
const locationForm = document.getElementById("search-location");
const currentLocation = document.querySelector(".current-location");
const radioButtonF = document.getElementById("fahrenheit");
const radioButtonC = document.getElementById("celsius");
const weatherApiKey = "9a15cd9d2f10400dbc7152440242003";
const defaultLocation = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=84129`;
let currentLocationUrl = defaultLocation;

//Functions
function displayBackgroundImage() {
  const backgroundContainer = document.getElementById("background-container");
  const backgroundImageFiles = [
    "/STScI-01GTWBKT3FWYNTD3MGGVBHMGVQ.png",
    "/STScI-01H2TX76K5HBCEP0MCHDDWV28A.jpg",
    "/STScI-01H4491XZTYDDPRGBBNC2WRP99.png",
    "/STScI-01HGGZ5KSFGCS4EZ8SZCZM3AW3.png",
    "/STScI-01HMC1710YJ6YENBJ0PFTVTWJC.png",
    "/STScI-01HQ6CGZVBNNQWRMQ13F6ZVB4J.png",
    "/STScI-01HRD3BSQ4GNW2KN7J3G5BPBVR.png",
  ];
  const backgroundImageUrls = [`https://stsci-opo.org/STScI-01HMA4QVKMBJH0PM4YX6RSH532.png`,
  `https://stsci-opo.org/STScI-01HGGZ5KSFGCS4EZ8SZCZM3AW3.png`,
  `https://stsci-opo.org/STScI-01HBBME94CY086ZBKTRQ3PT4ZW.png`,
  `https://stsci-opo.org/STScI-01H82G26M4BDN8WRZY5MR3D21E.png`,
  `https://stsci-opo.org/STScI-01H4491XZTYDDPRGBBNC2WRP99.png`,
  `https://stsci-opo.org/STScI-01H2TX76K5HBCEP0MCHDDWV28A.jpg`,
  `https://stsci-opo.org/STScI-01GTWAT27H23RTMB84Y37KFRWJ.png`];
  // const randomIndex = Math.floor(Math.random() * backgroundImageFiles.length);
  // const randomImageUrl = "src/images" + backgroundImageFiles[randomIndex];
  // backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
  const randomImageUrl = backgroundImageUrls[randomIndex];
  backgroundContainer.style.backgroundImage = `url(${randomImageUrl})`;
  console.log('RandomUrl:', randomImageUrl);
}

//Event Listeners
function attachEventListeners() {
  radioButtonF.addEventListener("change", function () {
    if (this.checked) {
      (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(currentLocationUrl, "fahrenheit");
    }
  });

  radioButtonC.addEventListener("change", function () {
    if (this.checked) {
      (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(currentLocationUrl, "celsius");
    }
  });

  locationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let location = document.getElementById("location-input").value;
    currentLocationUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(
      location
    )}`;
    (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(currentLocationUrl, "fahrenheit");
    //loads a new random background
    displayBackgroundImage();
    document.getElementById("location-input").value = "";
  });
}

//Loads a random image upon page load/refresh
window.addEventListener("DOMContentLoaded", displayBackgroundImage);


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentCondition: () => (/* binding */ currentCondition),
/* harmony export */   currentTemp: () => (/* binding */ currentTemp),
/* harmony export */   defaultGifSearch: () => (/* binding */ defaultGifSearch),
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather),
/* harmony export */   gif: () => (/* binding */ gif),
/* harmony export */   gifyApiKey: () => (/* binding */ gifyApiKey)
/* harmony export */ });
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
//WeatherApp
//Weather Logic Module
//weather.js

//Imports


// //Declarations
const currentCondition = document.querySelector(".current-condition");
const currentTemp = document.querySelector(".current-temp");
const gif = document.querySelector(".gif");
const defaultGifSearch = "random weather";
const gifyApiKey = "OLRY4DR4fNBTQXbcI1NBFibXOW6q39k7";

//Functions
const fetchWeather = async (displayLocation, temperatureUnit) => {
  try {
    //fetch and display weather
    const response = await fetch(displayLocation, { mode: "cors" });
    const data = await response.json();
    const temperature =
      temperatureUnit === "fahrenheit"
        ? ((_ui_js__WEBPACK_IMPORTED_MODULE_0__.radioButtonF.checked = true), data.current.temp_f + " F")
        : data.current.temp_c + " C";
    _ui_js__WEBPACK_IMPORTED_MODULE_0__.currentLocation.innerHTML =
      data.location.name + ", " + data.location.region;
    currentCondition.innerHTML = data.current.condition.text;
    currentTemp.innerHTML = temperature;

    //fetch and display GIF
    const gifUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${gifyApiKey}&s=${encodeURIComponent(
      currentCondition.innerHTML
    )}`;
    const fetchGif = await fetch(gifUrl, { mode: "cors" });
    const returnedGif = await fetchGif.json();
    console.log("fetchGif:", fetchGif);
    gif.src = returnedGif.data.images.original.url;
  } catch (error) {
    console.error("this is an error", error);
  }
};


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeSite: () => (/* binding */ initializeSite),
/* harmony export */   myFooter: () => (/* binding */ myFooter)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
//WeatherApp

//TODO 
// fix gif width, its stretched out.
//radiobutton background doesnt want to go transparent. Does this require a custom 'check box' like in the toto app?
// search field changes to white if selected a 'browser saved search'
//Features to consider Adding
//a google map?
//forecast 3/5day, hourly
//misc details: humidity, sunrise/set,
//move away from using url's to JWST images once hosting is figured out.

//website.js

//Imports



function myFooter() {
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "LoptrSir";
}

function initializeSite() {
  (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(_ui_js__WEBPACK_IMPORTED_MODULE_1__.defaultLocation, "fahrenheit");
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.attachEventListeners)();
  myFooter();
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUN3RDs7QUFFeEQ7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBWTtBQUN4QjtBQUNBLElBQUksbURBQWU7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLFdBQVcsS0FBSztBQUN0RjtBQUNBLE1BQU07QUFDTiwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQzRDO0FBQ29COztBQUV6RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxFQUFFLHlEQUFZLENBQUMsbURBQWU7QUFDOUIsRUFBRSw0REFBb0I7QUFDdEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2Vic2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogV2VhdGhlckFwcCAqL1xuLyogc3R5bGUuY3NzICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDIyMCwgMjM0LCA2MCk7XG59XG5cbmh0bWwge1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXG59XG5cbmlucHV0LFxuaW5wdXQ6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjM0LCA2MCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGZvcm0jdGVtcC1jb252ZXJzaW9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMzQsIDYwKTtcbn0gKi9cblxuLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjM0LCA2MCk7XG4gIHBhZGRpbmc6IDAuMTVlbSAwLjE1ZW07XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4jYmFja2dyb3VuZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jd2VsY29tZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LWRpc3BsYXkge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5jdXJyZW50LWNvbmRpdGlvbnMge1xuICBtYXJnaW46IDA7XG59XG5cbiNsb2NhdGlvbi1kaXNwbGF5IHtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbn1cblxuI2xvY2F0aW9uLWRpc3BsYXkgPiAqOm50aC1jaGlsZCgtbispIHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4jc2VhcmNoLWxvY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4jc2VhcmNoLWxvY2F0aW9uIGJ1dHRvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4jbG9jYXRpb24taW5wdXQge1xuICBjb2xvcjogcmdiKDIyMCwgMjM0LCA2MCk7XG4gIHdpZHRoOiAxMHZ3O1xufVxuXG4uZ2lmIHtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICB3aWR0aDogYXV0bzsgXG4gIGhlaWdodDogYXV0bzsgXG4gIG1heC13aWR0aDogMjB2dztcbiAgbWF4LWhlaWdodDogMzB2aDtcbiAgbWFyZ2luLWxlZnQ6IDE4dnc7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxuLmNyZWRpdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBnYXA6IDFlbTtcbn1cblxuLmNyZWRpdHMgYSB7XG4gIGNvbG9yOiBibHVlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7QUFDZixjQUFjOztBQUVkOzs7RUFHRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFdlYXRoZXJBcHAgKi9cXG4vKiBzdHlsZS5jc3MgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYigyMjAsIDIzNCwgNjApO1xcbn1cXG5cXG5odG1sIHtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuaW5wdXQsXFxuaW5wdXQ6Zm9jdXMsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMzQsIDYwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBmb3JtI3RlbXAtY29udmVyc2lvbiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjM0LCA2MCk7XFxufSAqL1xcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjAsIDIzNCwgNjApO1xcbiAgcGFkZGluZzogMC4xNWVtIDAuMTVlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4jYmFja2dyb3VuZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN3ZWxjb21lLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LWRpc3BsYXkge1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmN1cnJlbnQtY29uZGl0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNsb2NhdGlvbi1kaXNwbGF5IHtcXG4gIG1hcmdpbi1sZWZ0OiA0dnc7XFxufVxcblxcbiNsb2NhdGlvbi1kaXNwbGF5ID4gKjpudGgtY2hpbGQoLW4rKSB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4jc2VhcmNoLWxvY2F0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuXFxuI3NlYXJjaC1sb2NhdGlvbiBidXR0b24ge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jbG9jYXRpb24taW5wdXQge1xcbiAgY29sb3I6IHJnYigyMjAsIDIzNCwgNjApO1xcbiAgd2lkdGg6IDEwdnc7XFxufVxcblxcbi5naWYge1xcbiAgbWFyZ2luLXRvcDogMXZoO1xcbiAgd2lkdGg6IGF1dG87IFxcbiAgaGVpZ2h0OiBhdXRvOyBcXG4gIG1heC13aWR0aDogMjB2dztcXG4gIG1heC1oZWlnaHQ6IDMwdmg7XFxuICBtYXJnaW4tbGVmdDogMTh2dztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMWVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uY3JlZGl0cyBhIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vRW50cnkgcG9pbnQgZmlsZSBmb3Igd2VicGFjay5cblxuLy93ZWJwYWNrIGVudHJ5IGZpbGVcbi8vaW5kZXguanNcblxuaW1wb3J0IHtpbml0aWFsaXplU2l0ZX0gZnJvbSAnLi93ZWJzaXRlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbml0aWFsaXplU2l0ZSgpO1xuXG5jb25zb2xlLmxvZygnV1AgZW50cnkuanMnKTtcbiIsIi8vV2VhdGhlckFwcFxuLy9Vc2VyIEludGVyZmFjZSBNb2R1bGVcbi8vdWkuanNcblxuLy9JbXBvcnRzXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVyLmpzXCI7XG5cbi8vIC8vRGVjbGFyYXRpb25zXG5leHBvcnQgY29uc3QgbG9jYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtbG9jYXRpb25cIik7XG5leHBvcnQgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWxvY2F0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IHJhZGlvQnV0dG9uRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFocmVuaGVpdFwiKTtcbmV4cG9ydCBjb25zdCByYWRpb0J1dHRvbkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbHNpdXNcIik7XG5leHBvcnQgY29uc3Qgd2VhdGhlckFwaUtleSA9IFwiOWExNWNkOWQyZjEwNDAwZGJjNzE1MjQ0MDI0MjAwM1wiO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhdGlvbiA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7d2VhdGhlckFwaUtleX0mcT04NDEyOWA7XG5leHBvcnQgbGV0IGN1cnJlbnRMb2NhdGlvblVybCA9IGRlZmF1bHRMb2NhdGlvbjtcblxuLy9GdW5jdGlvbnNcbmZ1bmN0aW9uIGRpc3BsYXlCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gIGNvbnN0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtY29udGFpbmVyXCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VGaWxlcyA9IFtcbiAgICBcIi9TVFNjSS0wMUdUV0JLVDNGV1lOVEQzTUdHVkJITUdWUS5wbmdcIixcbiAgICBcIi9TVFNjSS0wMUgyVFg3Nks1SEJDRVAwTUNIRERXVjI4QS5qcGdcIixcbiAgICBcIi9TVFNjSS0wMUg0NDkxWFpUWUREUFJHQkJOQzJXUlA5OS5wbmdcIixcbiAgICBcIi9TVFNjSS0wMUhHR1o1S1NGR0NTNEVaOFNaQ1pNM0FXMy5wbmdcIixcbiAgICBcIi9TVFNjSS0wMUhNQzE3MTBZSjZZRU5CSjBQRlRWVFdKQy5wbmdcIixcbiAgICBcIi9TVFNjSS0wMUhRNkNHWlZCTk5RV1JNUTEzRjZaVkI0Si5wbmdcIixcbiAgICBcIi9TVFNjSS0wMUhSRDNCU1E0R05XMktON0ozRzVCUEJWUi5wbmdcIixcbiAgXTtcbiAgY29uc3QgYmFja2dyb3VuZEltYWdlVXJscyA9IFtgaHR0cHM6Ly9zdHNjaS1vcG8ub3JnL1NUU2NJLTAxSE1BNFFWS01CSkgwUE00WVg2UlNINTMyLnBuZ2AsXG4gIGBodHRwczovL3N0c2NpLW9wby5vcmcvU1RTY0ktMDFIR0daNUtTRkdDUzRFWjhTWkNaTTNBVzMucG5nYCxcbiAgYGh0dHBzOi8vc3RzY2ktb3BvLm9yZy9TVFNjSS0wMUhCQk1FOTRDWTA4NlpCS1RSUTNQVDRaVy5wbmdgLFxuICBgaHR0cHM6Ly9zdHNjaS1vcG8ub3JnL1NUU2NJLTAxSDgyRzI2TTRCRE44V1JaWTVNUjNEMjFFLnBuZ2AsXG4gIGBodHRwczovL3N0c2NpLW9wby5vcmcvU1RTY0ktMDFINDQ5MVhaVFlERFBSR0JCTkMyV1JQOTkucG5nYCxcbiAgYGh0dHBzOi8vc3RzY2ktb3BvLm9yZy9TVFNjSS0wMUgyVFg3Nks1SEJDRVAwTUNIRERXVjI4QS5qcGdgLFxuICBgaHR0cHM6Ly9zdHNjaS1vcG8ub3JnL1NUU2NJLTAxR1RXQVQyN0gyM1JUTUI4NFkzN0tGUldKLnBuZ2BdO1xuICAvLyBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJhY2tncm91bmRJbWFnZUZpbGVzLmxlbmd0aCk7XG4gIC8vIGNvbnN0IHJhbmRvbUltYWdlVXJsID0gXCJzcmMvaW1hZ2VzXCIgKyBiYWNrZ3JvdW5kSW1hZ2VGaWxlc1tyYW5kb21JbmRleF07XG4gIC8vIGJhY2tncm91bmRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhbmRvbUltYWdlVXJsfSlgO1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJhY2tncm91bmRJbWFnZVVybHMubGVuZ3RoKTtcbiAgY29uc3QgcmFuZG9tSW1hZ2VVcmwgPSBiYWNrZ3JvdW5kSW1hZ2VVcmxzW3JhbmRvbUluZGV4XTtcbiAgYmFja2dyb3VuZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFuZG9tSW1hZ2VVcmx9KWA7XG4gIGNvbnNvbGUubG9nKCdSYW5kb21Vcmw6JywgcmFuZG9tSW1hZ2VVcmwpO1xufVxuXG4vL0V2ZW50IExpc3RlbmVyc1xuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xuICByYWRpb0J1dHRvbkYuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZmV0Y2hXZWF0aGVyKGN1cnJlbnRMb2NhdGlvblVybCwgXCJmYWhyZW5oZWl0XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmFkaW9CdXR0b25DLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGZldGNoV2VhdGhlcihjdXJyZW50TG9jYXRpb25VcmwsIFwiY2Vsc2l1c1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxvY2F0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24taW5wdXRcIikudmFsdWU7XG4gICAgY3VycmVudExvY2F0aW9uVXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHt3ZWF0aGVyQXBpS2V5fSZxPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgbG9jYXRpb25cbiAgICApfWA7XG4gICAgZmV0Y2hXZWF0aGVyKGN1cnJlbnRMb2NhdGlvblVybCwgXCJmYWhyZW5oZWl0XCIpO1xuICAgIC8vbG9hZHMgYSBuZXcgcmFuZG9tIGJhY2tncm91bmRcbiAgICBkaXNwbGF5QmFja2dyb3VuZEltYWdlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gIH0pO1xufVxuXG4vL0xvYWRzIGEgcmFuZG9tIGltYWdlIHVwb24gcGFnZSBsb2FkL3JlZnJlc2hcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBkaXNwbGF5QmFja2dyb3VuZEltYWdlKTtcbiIsIi8vV2VhdGhlckFwcFxuLy9XZWF0aGVyIExvZ2ljIE1vZHVsZVxuLy93ZWF0aGVyLmpzXG5cbi8vSW1wb3J0c1xuaW1wb3J0IHsgY3VycmVudExvY2F0aW9uLCByYWRpb0J1dHRvbkYgfSBmcm9tIFwiLi91aS5qc1wiO1xuXG4vLyAvL0RlY2xhcmF0aW9uc1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtY29uZGl0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRlbXBcIik7XG5leHBvcnQgY29uc3QgZ2lmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naWZcIik7XG5leHBvcnQgY29uc3QgZGVmYXVsdEdpZlNlYXJjaCA9IFwicmFuZG9tIHdlYXRoZXJcIjtcbmV4cG9ydCBjb25zdCBnaWZ5QXBpS2V5ID0gXCJPTFJZNERSNGZOQlRRWGJjSTFOQkZpYlhPVzZxMzlrN1wiO1xuXG4vL0Z1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIChkaXNwbGF5TG9jYXRpb24sIHRlbXBlcmF0dXJlVW5pdCkgPT4ge1xuICB0cnkge1xuICAgIC8vZmV0Y2ggYW5kIGRpc3BsYXkgd2VhdGhlclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGlzcGxheUxvY2F0aW9uLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPVxuICAgICAgdGVtcGVyYXR1cmVVbml0ID09PSBcImZhaHJlbmhlaXRcIlxuICAgICAgICA/ICgocmFkaW9CdXR0b25GLmNoZWNrZWQgPSB0cnVlKSwgZGF0YS5jdXJyZW50LnRlbXBfZiArIFwiIEZcIilcbiAgICAgICAgOiBkYXRhLmN1cnJlbnQudGVtcF9jICsgXCIgQ1wiO1xuICAgIGN1cnJlbnRMb2NhdGlvbi5pbm5lckhUTUwgPVxuICAgICAgZGF0YS5sb2NhdGlvbi5uYW1lICsgXCIsIFwiICsgZGF0YS5sb2NhdGlvbi5yZWdpb247XG4gICAgY3VycmVudENvbmRpdGlvbi5pbm5lckhUTUwgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gdGVtcGVyYXR1cmU7XG5cbiAgICAvL2ZldGNoIGFuZCBkaXNwbGF5IEdJRlxuICAgIGNvbnN0IGdpZlVybCA9IGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT0ke2dpZnlBcGlLZXl9JnM9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICBjdXJyZW50Q29uZGl0aW9uLmlubmVySFRNTFxuICAgICl9YDtcbiAgICBjb25zdCBmZXRjaEdpZiA9IGF3YWl0IGZldGNoKGdpZlVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCByZXR1cm5lZEdpZiA9IGF3YWl0IGZldGNoR2lmLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcImZldGNoR2lmOlwiLCBmZXRjaEdpZik7XG4gICAgZ2lmLnNyYyA9IHJldHVybmVkR2lmLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwidGhpcyBpcyBhbiBlcnJvclwiLCBlcnJvcik7XG4gIH1cbn07XG4iLCIvL1dlYXRoZXJBcHBcblxuLy9UT0RPIFxuLy8gZml4IGdpZiB3aWR0aCwgaXRzIHN0cmV0Y2hlZCBvdXQuXG4vL3JhZGlvYnV0dG9uIGJhY2tncm91bmQgZG9lc250IHdhbnQgdG8gZ28gdHJhbnNwYXJlbnQuIERvZXMgdGhpcyByZXF1aXJlIGEgY3VzdG9tICdjaGVjayBib3gnIGxpa2UgaW4gdGhlIHRvdG8gYXBwP1xuLy8gc2VhcmNoIGZpZWxkIGNoYW5nZXMgdG8gd2hpdGUgaWYgc2VsZWN0ZWQgYSAnYnJvd3NlciBzYXZlZCBzZWFyY2gnXG4vL0ZlYXR1cmVzIHRvIGNvbnNpZGVyIEFkZGluZ1xuLy9hIGdvb2dsZSBtYXA/XG4vL2ZvcmVjYXN0IDMvNWRheSwgaG91cmx5XG4vL21pc2MgZGV0YWlsczogaHVtaWRpdHksIHN1bnJpc2Uvc2V0LFxuLy9tb3ZlIGF3YXkgZnJvbSB1c2luZyB1cmwncyB0byBKV1NUIGltYWdlcyBvbmNlIGhvc3RpbmcgaXMgZmlndXJlZCBvdXQuXG5cbi8vd2Vic2l0ZS5qc1xuXG4vL0ltcG9ydHNcbmltcG9ydCB7IGZldGNoV2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXIuanNcIjtcbmltcG9ydCB7IGF0dGFjaEV2ZW50TGlzdGVuZXJzLCBkZWZhdWx0TG9jYXRpb24gfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbXlGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICBmb290ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzMzXCI7XG4gIGZvb3Rlci5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiO1xuICBmb290ZXIuc3R5bGUuY29sb3IgPSBcIiNmOGFmZTVcIjtcbiAgZm9vdGVyLnN0eWxlLnBhZGRpbmcgPSBcIjNweFwiO1xuICBmb290ZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgZm9vdGVyLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICBmb290ZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgZm9vdGVyLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICBmb290ZXIuaW5uZXJIVE1MID0gXCJMb3B0clNpclwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVNpdGUoKSB7XG4gIGZldGNoV2VhdGhlcihkZWZhdWx0TG9jYXRpb24sIFwiZmFocmVuaGVpdFwiKTtcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgbXlGb290ZXIoKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9