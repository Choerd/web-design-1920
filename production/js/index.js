(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var audits = _interopRequireWildcard(require("./modules/module"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var margin = {
  top: 20,
  right: 0,
  bottom: 30,
  left: 40
},
    width = 1000,
    height = 500;
var data = audits.get();
var x = d3.scaleBand().domain(data.map(function (d) {
  return d.name;
})).range([margin.left, width - margin.right]).padding(0.2);
var y = d3.scaleLinear().domain([0, d3.max(data, function (d) {
  return d.value;
})]).nice().range([height - margin.bottom, margin.top]);

var xAxis = function xAxis(g) {
  return g.attr("transform", "translate(0,".concat(height - margin.bottom, ")")).call(d3.axisBottom(x).tickSizeOuter(0));
};

var yAxis = function yAxis(g) {
  return g.attr("transform", "translate(".concat(margin.left, ",0)")).call(d3.axisLeft(y)).call(function (g) {
    return g.select(".domain").remove();
  });
};

function render() {
  var svg = d3.select("svg").attr("viewBox", [0, 0, width, height]).call(zoom);
  svg.append("g").attr("class", "bars").attr("fill", "red").selectAll("rect").data(data).join("rect").attr("x", function (d) {
    return x(d.name);
  }).attr("y", function (d) {
    return y(d.value);
  }) // Added accessibility
  .attr("tabindex", '0').on('focus', function (d) {
    var message = "".concat(d.name, " heeft een waarde van ").concat(d.value);
    speak(message);
    console.log(d);
  }).attr("height", function (d) {
    return y(0) - y(d.value);
  }).attr("width", x.bandwidth());
  svg.append("g").attr("class", "x-axis").call(xAxis);
  svg.append("g").attr("class", "y-axis").call(yAxis);
}

function zoom(svg) {
  var extent = [[margin.left, margin.top], [width - margin.right, height - margin.top]];
  svg.call(d3.zoom().scaleExtent([1, 4]).translateExtent(extent).extent(extent).on("zoom", zoomed));

  function zoomed() {
    x.range([margin.left, width - margin.right].map(function (d) {
      return d3.event.transform.applyX(d);
    }));
    svg.selectAll(".bars rect").attr("x", function (d) {
      return x(d.name);
    }).attr("width", x.bandwidth());
    svg.selectAll(".x-axis").call(xAxis);
  }
}

render();
var synth = window.speechSynthesis;

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
exports.get = get;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function get() {
  var auditData = document.querySelector('#audit-data');

  if (auditData) {
    return getData();
  }

  function getData() {
    var audits = _toConsumableArray(auditData.querySelectorAll('input'));

    return audits.map(function (audit) {
      return {
        name: audit.name,
        value: parseInt(audit.value)
      };
    });
  }
}

},{}]},{},[1])

//# sourceMappingURL=index.js.map
