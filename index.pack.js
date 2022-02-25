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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unitCalculatorInput = document.getElementById('unit-calculator--input');

var metersSpan = document.getElementById('meters');
var metersToFeetSpan = document.getElementById('meters-to-feet');
var feetSpan = document.getElementById('feet');
var feetToMetersSpan = document.getElementById('feet-to-meters');

var litersSpan = document.getElementById('liters');
var litersToGallonsSpan = document.getElementById('liters-to-gallons');
var gallonsSpan = document.getElementById('gallons');
var gallonsToLitersSpan = document.getElementById('gallons-to-liters');

var kilosSpan = document.getElementById('kilos');
var kilosToPoundsSpan = document.getElementById('kilos-to-pounds');
var poundsSpan = document.getElementById('pounds');
var poundsToKilosSpan = document.getElementById('pounds-to-kilos');

var metersFeetConversion = 3.2808;
var litersGallonsConversion = 0.26417;
var kilosPoundsConversion = 2.2046;

var unitCalculatorInputValue = unitCalculatorInput.value;

// Units
var meters = unitCalculatorInputValue;
var metersToFeetValue = void 0;
var feet = unitCalculatorInputValue;
var feetToMetersValue = void 0;
var liters = unitCalculatorInputValue;
var litersToGallonsValue = void 0;
var gallons = unitCalculatorInputValue;
var gallonsToLitersValue = void 0;
var kilos = unitCalculatorInputValue;
var killosToPoundsValue = void 0;
var pounds = unitCalculatorInputValue;
var poundsToKilosValue = void 0;

function conversions() {
    metersToFeetValue = meters * metersFeetConversion;
    metersSpan.textContent = unitCalculatorInputValue;
    metersToFeetSpan.textContent = metersToFeetValue.toFixed(3);

    feetToMetersValue = feet / metersFeetConversion;
    feetSpan.textContent = unitCalculatorInputValue;
    feetToMetersSpan.textContent = feetToMetersValue.toFixed(3);

    litersToGallonsValue = liters * litersGallonsConversion;
    litersSpan.textContent = unitCalculatorInputValue;
    litersToGallonsSpan.textContent = litersToGallonsValue.toFixed(3);

    gallonsToLitersValue = gallons / litersGallonsConversion;
    gallonsSpan.textContent = unitCalculatorInputValue;
    gallonsToLitersSpan.textContent = gallonsToLitersValue.toFixed(3);

    killosToPoundsValue = kilos * kilosPoundsConversion;
    kilosSpan.textContent = unitCalculatorInputValue;
    kilosToPoundsSpan.textContent = killosToPoundsValue.toFixed(3);

    poundsToKilosValue = pounds / kilosPoundsConversion;
    poundsSpan.textContent = unitCalculatorInputValue;
    poundsToKilosSpan.textContent = poundsToKilosValue.toFixed(3);
}conversions();

document.getElementById('unit-calculator--input').addEventListener('keyup', function (e) {
    unitCalculatorInputValue = e.target.value;

    meters = unitCalculatorInputValue;
    feet = unitCalculatorInputValue;
    liters = unitCalculatorInputValue;
    gallons = unitCalculatorInputValue;
    kilos = unitCalculatorInputValue;
    pounds = unitCalculatorInputValue;

    conversions();
});

/***/ })
/******/ ]);