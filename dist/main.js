/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Node.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Node.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n\n.node-container {\n  position: relative;\n  width: 90%;\n  height: 70%;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.node {\n  width: 1.8%;\n  height: 4%;\n  margin: 1px;\n\n  border: 1px solid black;\n}\n\n.node-visited {\n  background-color: yellow;\n}\n\n.node-path {\n  background-color: blue;\n}\n\n.node-start {\n  background-color: green;\n}\n\n.node-end {\n  background-color: red;\n}\n\n.node-block {\n  background-color: black;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Pathfinder.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Pathfinder.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n* {\n  box-sizing: border-box; \n  margin: 0;\n  padding: 0;\n}\n\n.pathfinder {\n  position: relative;\n  width: 100vw;\n  height: 50vw;\n  border: 1px solid green;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Topbar.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Topbar.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.topbar {\n  position: absolute;\n  border: 1px solid red;\n  width: 100%;\n  height: 10%;\n  top: 0;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.active-button {\n  border: 1px solid blue;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/algos/bfs.tsx":
/*!***************************!*\
  !*** ./src/algos/bfs.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function bfs(nodes, start, end, update) {
    let output = [];
    const queue = [{ node: start, path: [] }];
    const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    let interval = setInterval(function () {
        let current = queue.shift();
        if (!current.node.isVisited) {
            if (current.node === end) {
                output = current.path;
                clearInterval(interval);
            }
            current.node.isVisited = true;
            for (let i = 0; i < dirs.length; i++) {
                let newRow = current.node.row + dirs[i][0];
                let newCol = current.node.col + dirs[i][1];
                if (newRow >= 0 && newRow < nodes.length && newCol >= 0 && newCol < nodes[0].length) {
                    if (!nodes[newRow][newCol].isVisited && !nodes[newRow][newCol].isBlocked) {
                        queue.push({ node: nodes[newRow][newCol], path: current.path.concat(current.node) });
                    }
                }
            }
            update(nodes);
        }
        if (queue.length === 0)
            clearInterval(interval);
    }, 25);
    return output;
}
exports.default = bfs;


/***/ }),

/***/ "./src/components/AlgoRunner.tsx":
/*!***************************************!*\
  !*** ./src/components/AlgoRunner.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bfs_tsx_1 = __webpack_require__(/*! ../algos/bfs.tsx */ "./src/algos/bfs.tsx");
function algoRunner(fetchNodes, update, getStart, getEnd) {
    bfs_tsx_1.default(fetchNodes(), getStart(), getEnd(), update);
}
exports.default = algoRunner;


/***/ }),

/***/ "./src/components/Node.tsx":
/*!*********************************!*\
  !*** ./src/components/Node.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./stylesheets/Node.css */ "./src/components/stylesheets/Node.css");
function Node(props) {
    let className = "node";
    if (props.node.isStart) {
        className += " node-start";
    }
    ;
    if (props.node.isEnd) {
        className += " node-end";
    }
    ;
    if (props.node.isVisited) {
        className += " node-visited";
    }
    ;
    if (props.node.isPath) {
        className += " node-path";
    }
    ;
    if (props.node.isBlocked) {
        className += " node-block";
    }
    ;
    return (React.createElement("div", { className: className, "data-row": props.node.row, "data-col": props.node.col }));
}
exports.default = Node;


/***/ }),

/***/ "./src/components/Pathfinder.tsx":
/*!***************************************!*\
  !*** ./src/components/Pathfinder.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./stylesheets/Pathfinder.css */ "./src/components/stylesheets/Pathfinder.css");
const Node_tsx_1 = __webpack_require__(/*! ./Node.tsx */ "./src/components/Node.tsx");
const Topbar_tsx_1 = __webpack_require__(/*! ./Topbar.tsx */ "./src/components/Topbar.tsx");
const AlgoRunner_tsx_1 = __webpack_require__(/*! ./AlgoRunner.tsx */ "./src/components/AlgoRunner.tsx");
class Pathfinder extends React.Component {
    constructor(props) {
        super(props);
        this.dummy = { row: -1, col: -1, isStart: false, isEnd: false,
            isBlocked: false, isVisited: false, isPath: false };
        this.state = {
            nodes: [[this.dummy]],
            startNode: this.dummy,
            endNode: this.dummy,
        };
        this.getNodes = this.getNodes.bind(this);
        this.getStart = this.getStart.bind(this);
        this.getEnd = this.getEnd.bind(this);
        this.changeNode = this.changeNode.bind(this);
        this.reset = this.reset.bind(this);
        this.update = this.update.bind(this);
        this.run = this.run.bind(this);
    }
    componentDidMount() {
        this.createNodes();
    }
    ;
    createNodes() {
        const nodes = [];
        for (let row = 0; row < 21; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                const currentNode = {
                    row,
                    col,
                    isStart: (row === 10 && col === 9) ? true : false,
                    isEnd: (row === 10 && col === 40) ? true : false,
                    isBlocked: false,
                    isVisited: false,
                    isPath: false,
                };
                if (currentNode.isStart)
                    this.setState({ startNode: currentNode });
                if (currentNode.isEnd)
                    this.setState({ endNode: currentNode });
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({ nodes: nodes });
    }
    getNodes() {
        return this.state.nodes;
    }
    getStart() {
        return this.state.startNode;
    }
    getEnd() {
        return this.state.endNode;
    }
    changeNode(row, col, selected) {
        if (selected === "changeStart" && !this.state.nodes[row][col].isBlocked) {
            let newNodes = Object.assign([], this.state.nodes);
            let prevStart = this.state.startNode;
            let prevEnd = this.state.endNode;
            if (newNodes[row][col] === prevEnd) {
                prevStart.isEnd = true;
                prevStart.isStart = false;
                this.setState({ endNode: prevStart });
            }
            else {
                prevStart.isStart = false;
            }
            newNodes[row][col].isEnd = false;
            newNodes[row][col].isStart = true;
            this.setState({ startNode: newNodes[row][col] });
            this.setState({ nodes: newNodes });
        }
        else if (selected === "changeEnd" && !this.state.nodes[row][col].isBlocked) {
            let newNodes = Object.assign([], this.state.nodes);
            let prevStart = this.state.startNode;
            let prevEnd = this.state.endNode;
            if (newNodes[row][col] === prevStart) {
                prevEnd.isEnd = false;
                prevEnd.isStart = true;
                this.setState({ startNode: prevEnd });
            }
            else {
                prevEnd.isEnd = false;
            }
            newNodes[row][col].isStart = false;
            newNodes[row][col].isEnd = true;
            this.setState({ endNode: newNodes[row][col] });
            this.setState({ nodes: newNodes });
        }
        else if (selected === "toggleBlock"
            && !this.state.nodes[row][col].isStart && !this.state.nodes[row][col].isEnd) {
            let newNodes = Object.assign([], this.state.nodes);
            let node = newNodes[row][col];
            if (node.isBlocked) {
                node.isBlocked = false;
            }
            else {
                node.isBlocked = true;
            }
            this.setState({ nodes: newNodes });
        }
    }
    reset() {
        this.createNodes();
    }
    run(algo) {
        AlgoRunner_tsx_1.default(this.getNodes, this.update, this.getStart, this.getEnd);
    }
    update(nodes) {
        this.setState({ nodes: nodes });
    }
    render() {
        return (React.createElement("div", { className: "pathfinder" },
            React.createElement(Topbar_tsx_1.default, { startNode: this.state.startNode, endNode: this.state.endNode, getNodes: this.getNodes, changeNode: this.changeNode, reset: this.reset, run: this.run }),
            React.createElement("div", { className: "node-container" }, this.state.nodes.map((row) => {
                return row.map((node) => {
                    return React.createElement(Node_tsx_1.default, { node: node, key: `${node.row},${node.col}` });
                });
            }))));
    }
}
exports.default = Pathfinder;
;


/***/ }),

/***/ "./src/components/Topbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Topbar.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./stylesheets/Topbar.css */ "./src/components/stylesheets/Topbar.css");
class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
        };
    }
    componentDidMount() {
        this.addSelectListener();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
        }
    }
    addSelectListener() {
        const nodes = document.querySelector(".node-container");
        nodes.addEventListener("click", (e) => {
            let node = e.target;
            if (node.classList.contains("node")) {
                let row = node.getAttribute("data-row");
                let col = node.getAttribute("data-col");
                if (this.state.selected === "changeStart") {
                    this.props.changeNode(row, col, "changeStart");
                }
                else if (this.state.selected === "changeEnd") {
                    this.props.changeNode(row, col, "changeEnd");
                }
                else if (this.state.selected === "toggleBlock") {
                    this.props.changeNode(row, col, "toggleBlock");
                }
            }
        });
    }
    addActive(target, input) {
        target.classList.add("active-button");
        this.setState({ selected: input });
    }
    removeActive() {
        let buttons = document.querySelectorAll(".toggle-button");
        buttons.forEach(button => {
            button.classList.remove("active-button");
        });
        this.setState({ selected: "" });
    }
    changeSelected(input, event) {
        let target = event.target;
        if (target.classList.contains("active-button")) {
            this.removeActive();
        }
        else {
            this.removeActive();
            this.addActive(target, input);
        }
    }
    render() {
        return (React.createElement("div", { className: "topbar" },
            React.createElement("div", { className: "run-button", onClick: (e) => this.props.run() }, "RUN"),
            React.createElement("div", { className: "toggle-button", onClick: (e) => this.changeSelected("changeStart", e) }, "Change Start"),
            React.createElement("div", { className: "toggle-button", onClick: (e) => this.changeSelected("changeEnd", e) }, "Change End"),
            React.createElement("div", { className: "toggle-button", onClick: (e) => this.changeSelected("toggleBlock", e) }, "Toggle Block"),
            React.createElement("div", { className: "algo-dropdown" }, "ALGODROPDOWN"),
            React.createElement("div", { className: "reset-button" }, "RESET")));
    }
}
exports.default = Topbar;


/***/ }),

/***/ "./src/components/stylesheets/Node.css":
/*!*********************************************!*\
  !*** ./src/components/stylesheets/Node.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Node.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Node.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/stylesheets/Pathfinder.css":
/*!***************************************************!*\
  !*** ./src/components/stylesheets/Pathfinder.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Pathfinder.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Pathfinder.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/stylesheets/Topbar.css":
/*!***********************************************!*\
  !*** ./src/components/stylesheets/Topbar.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Topbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/stylesheets/Topbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const Pathfinder_tsx_1 = __webpack_require__(/*! ./components/Pathfinder.tsx */ "./src/components/Pathfinder.tsx");
ReactDOM.render(React.createElement(Pathfinder_tsx_1.default, null), document.getElementById("root"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map