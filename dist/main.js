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
class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            col: props.col,
            isStart: props.isStart,
            isEnd: props.isEnd,
            distance: Infinity,
            isVisited: false,
            isPath: false,
        };
        this.className = "node";
        if (this.state.isStart) {
            this.className += " node-start";
        }
        ;
        if (this.state.isEnd) {
            this.className += " node-end";
        }
        ;
        if (this.state.isVisited) {
            this.className += " node-visited";
        }
        ;
        if (this.state.isPath) {
            this.className += " node-path";
        }
        ;
    }
    render() {
        return (React.createElement("div", { className: this.className }));
    }
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
class Pathfinder extends React.Component {
    constructor(props) {
        super(props);
        this.dummy = { row: -1, col: -1, isStart: false, isEnd: false };
        this.state = {
            nodes: [[this.dummy]],
            startNode: this.dummy,
            endNode: this.dummy,
        };
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
                    isEnd: (row === 10 && col === 40) ? true : false
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
    render() {
        return (React.createElement("div", { className: "pathfinder" }, this.state.nodes.map((row) => {
            return row.map((node) => {
                return React.createElement(Node_tsx_1.default, { node: node });
            });
        })));
    }
}
exports.default = Pathfinder;
;


/***/ }),

/***/ "./src/components/stylesheets/Node.css":
/*!*********************************************!*\
  !*** ./src/components/stylesheets/Node.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/stylesheets/Pathfinder.css":
/*!***************************************************!*\
  !*** ./src/components/stylesheets/Pathfinder.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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