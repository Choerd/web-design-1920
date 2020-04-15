(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _module = _interopRequireWildcard(require("./modules/module"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var synth = window.speechSynthesis;
var table = document.querySelector('table');
var thead = table.querySelector('thead tr');
var tbody = table.querySelector('tbody'); // const intro = document.querySelector('section > p')
// intro.addEventListener('focus', () => {
//     speak('Deze website is gemaakt met een custom screen reader. Op dit moment kun je voor de optimale ervaring je screen reader uitzetten en door tabben naar de volgende sectie.')
// })

thead.children[0].addEventListener('focus', function () {
  speak('In deze kolom vind je alle landen');
});
thead.children[1].addEventListener('focus', function () {
  speak('In deze kolom vind je het totaal aantal mensen dat is besmet met het corona virus');
});
thead.children[2].addEventListener('focus', function () {
  speak('In deze kolom vind je het totaal aantal mensen dat is overleden aan het corona virus');
});
thead.children[3].addEventListener('focus', function () {
  speak('In deze kolom vind je de hoeveelheid nieuwe besmettingen');
});
thead.children[4].addEventListener('focus', function () {
  speak('In deze kolom vind je de hoeveelheid mensen in kritieke toestand');
});
thead.children[5].addEventListener('focus', function () {
  speak('In deze kolom vind je de herstelde mensen van het corona virus');
});
tbody.children[0].children[0].addEventListener('focus', function () {
  speak('Alle volgende gegevens gaan over het land: China');
});
tbody.children[0].children[1].addEventListener('focus', function () {
  speak('In China zijn er totaal 82295 besmet');
});
tbody.children[0].children[2].addEventListener('focus', function () {
  speak('In China zijn er totaal 3342 mensen overleden');
});
tbody.children[0].children[3].addEventListener('focus', function () {
  speak('In China zijn er vandaag 46 nieuwe besmettingen');
});
tbody.children[0].children[4].addEventListener('focus', function () {
  speak('In China liggen er vandaag 113 mense in kritieke toestand');
});
tbody.children[0].children[5].addEventListener('focus', function () {
  speak('In China zijn er in totaal 77816 mensen hersteld');
});

function speak(message) {
  synth.cancel();
  var utter = new SpeechSynthesisUtterance();
  utter.text = message;
  synth.speak(utter);
}

},{"./modules/module":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = void 0;
var test = 'Javascript is working - modules/module.js';
exports.test = test;

},{}]},{},[1])

//# sourceMappingURL=index.js.map
