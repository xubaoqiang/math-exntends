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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * @class 数字精度\r\n * @author MR.X\r\n * @constructor {Number} decimal全局保留位数\r\n * @api\r\n *\r\n */\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MathExtends = /** @class */ (function () {\r\n    function MathExtends(decimal) {\r\n        this.decimal = decimal;\r\n    }\r\n    /**\r\n     * @method 判断数据是否超过js最大值\r\n     * @param {Number} num\r\n     * @returns {Boolean}\r\n     */\r\n    MathExtends.prototype.judgeJSMathMax = function (num) {\r\n        var result = num > Math.pow(2, 53);\r\n        result ? (console.warn(\"The calculation length has exceeded the JS maximum security integer, suggest to find another higher, otherwise there will be an error in the calculation results\"),\r\n            console.warn(\"计算长度已超过JS最大的安全整数，建议另谋高就，否则计算结果将有错误\")) : null;\r\n        return result;\r\n    };\r\n    /**\r\n     * @method 获取整数值\r\n     * @param {Number} num1\r\n     * @param {Number} num2\r\n     * @return {Number} pow\r\n     */\r\n    MathExtends.prototype.getInteger = function (num1, num2) {\r\n        var numDecimal1 = num1.toString().split('.').length > 1 ? num1.toString().split('.')[1].length : 0;\r\n        var numDecimal2 = num2.toString().split('.').length > 1 ? num2.toString().split('.')[1].length : 0;\r\n        return Math.pow(10, Math.max(numDecimal1, numDecimal2));\r\n    };\r\n    /**\r\n     * @method 加法函数\r\n     * @param {Number} num1\r\n     * @param {Number} num2\r\n     * @param {Number} decimal\r\n     */\r\n    MathExtends.prototype.$add = function (num1, num2, decimal) {\r\n        var pow = this.getInteger(num1, num2);\r\n        var resultPow = num1 * pow + num2 * pow;\r\n        this.judgeJSMathMax(resultPow);\r\n        var result = resultPow / pow;\r\n        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result;\r\n        return Number(result);\r\n    };\r\n    /**\r\n     * @method 减法函数\r\n     * @param {Number} num1\r\n     * @param {Number} num2\r\n     * @param {Number} decimal\r\n     */\r\n    MathExtends.prototype.$sub = function (num1, num2, decimal) {\r\n        var pow = this.getInteger(num1, num2);\r\n        var resultPow = num1 * pow - num2 * pow;\r\n        this.judgeJSMathMax(resultPow);\r\n        var result = resultPow / pow;\r\n        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result;\r\n        return Number(result);\r\n    };\r\n    /**\r\n     * @method 乘法函数\r\n     * @param {Number} num1\r\n     * @param {Number} num2\r\n     * @param {Number} decimal\r\n     */\r\n    MathExtends.prototype.$mul = function (num1, num2, decimal) {\r\n        var pow = this.getInteger(num1, num2);\r\n        var resultPow = (num1 * pow) * (num2 * pow);\r\n        this.judgeJSMathMax(resultPow);\r\n        var result = resultPow / (pow * pow);\r\n        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result;\r\n        return Number(result);\r\n    };\r\n    /**\r\n     * @method 除法函数\r\n     * @param {Number} num1\r\n     * @param {Number} num2\r\n     * @param {Number} decimal\r\n     */\r\n    MathExtends.prototype.$dev = function (num1, num2, decimal) {\r\n        var pow = this.getInteger(num1, num2);\r\n        var result = (num1 * pow) / (num2 * pow);\r\n        this.judgeJSMathMax(result);\r\n        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result;\r\n        return Number(result);\r\n    };\r\n    return MathExtends;\r\n}());\r\nexports.default = MathExtends;\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });