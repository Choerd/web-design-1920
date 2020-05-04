(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var graph = _interopRequireWildcard(require("./modules/graph"));

var utter = _interopRequireWildcard(require("./modules/speaker"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var submit = document.querySelector('section form input[type="submit"]'),
    input = document.querySelector('section form input[type="text"]'),
    loading = document.querySelector('[loading]'),
    usetool = document.querySelector('#intro button'),
    introcontainer = document.querySelector('#intro'),
    focuscontainer = document.querySelector('#focus'),
    audio = document.querySelector('.audio'),
    introtext = document.querySelector('#intro-text');
usetool.addEventListener('click', function () {
  introcontainer.style.display = "none";
  focuscontainer.style.display = "block";
});
introtext.addEventListener('focus', function (event) {
  utter.speak(event.target.textContent);
});
introtext.addEventListener('blur', function () {
  utter.stop();
});
submit.addEventListener('click', function (event) {
  event.preventDefault();

  var html = _toConsumableArray(document.querySelector('section').children);

  html.shift();
  console.log('fetching data started');
  loading.className = 'block';
  audio.play();
  fetch('/', {
    method: 'POST',
    body: JSON.stringify({
      url: input.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    title(data.url);
    graph.render(data.audits);
    info(data.accessibility);
    loading.className = 'hide';
    audio.pause();
  });
  input.value = '';
});

function title(data) {
  document.querySelector('[title]').textContent = "Deze data is afkomstig van: ".concat(data);
}

function info(data) {
  var array = ["Good", "Decent", "Bad"];
  var container = document.querySelector('[buttons]');
  container.innerHTML = '';

  if (document.querySelector('.more-info')) {
    document.querySelector('.more-info').remove();
  }

  var div = document.createElement('div');
  div.className = 'more-info';
  document.querySelector('#focus').insertAdjacentElement('beforeend', div);
  array.forEach(function (string) {
    var div = document.createElement('div');
    div.textContent = string;
    container.insertAdjacentElement('afterbegin', div);
    div.addEventListener('click', function (event) {
      var buttons = _toConsumableArray(document.querySelectorAll('[buttons] div'));

      buttons.forEach(function (button) {
        button.className = '';
      });
      event.target.className = 'active';
      appendDetails(event.target.textContent, data);
    });
  });
}

function appendDetails(button, data) {
  var seperate = seperatedData(button, data);
  var container = document.querySelector('.more-info');
  container.innerHTML = '';
  seperate.map(function (entry) {
    container.append(article(entry));
  });

  var articles = _toConsumableArray(container.children);

  articles.forEach(function (article) {
    article.addEventListener('focus', function (event) {
      var children = event.target.children;
      var title = children[0].textContent;
      var text = children[1].textContent;
      var score = children[2].textContent;
      var message = "Title: ".concat(title, ", which means: ").concat(text, ", and has a ").concat(score);
      utter.speak(message);
    });
    article.addEventListener('blur', function () {
      utter.stop();
    });
  });
}

function seperatedData(button, data) {
  if (button === 'Bad') {
    return data.filter(function (entry) {
      return entry.score < 50;
    });
  } else if (button === 'Decent') {
    return data.filter(function (entry) {
      return entry.score >= 50 && entry.score < 75;
    });
  } else if (button === 'Good') {
    return data.filter(function (entry) {
      return entry.score >= 75;
    });
  }
}

function article(data) {
  var article = document.createElement('article');
  var title = document.createElement('p');
  var description = document.createElement('p');
  var score = document.createElement('p');
  title.textContent = data.title;
  description.textContent = data.description;
  score.textContent = "Score: ".concat(data.score);
  article.append(title);
  article.append(description);
  article.append(score);
  article.tabIndex = 1;
  return article;
}

},{"./modules/graph":2,"./modules/speaker":3}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var utter = _interopRequireWildcard(require("./speaker"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var used = 0;

function render(data) {
  var margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 40
  },
      width = 1500,
      height = 500;
  var x = d3.scaleBand().domain(data.map(function (d) {
    return d.name;
  })).range([margin.left, width - margin.right]).padding(0.2);
  var y = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);

  var xAxis = function xAxis(g) {
    return g.attr("transform", "translate(0,".concat(height - margin.bottom, ")")).call(d3.axisBottom(x).tickSizeOuter(0));
  };

  var yAxis = function yAxis(g) {
    return g.attr("transform", "translate(".concat(margin.left, ",0)")).call(d3.axisLeft(y)).call(function (g) {
      return g.select(".domain").remove();
    });
  };

  var element = document.querySelectorAll('section svg')[1];
  var svg = d3.select(element).attr("viewBox", [0, 0, width, height]);

  if (used === 0) {
    svg.append("g").call(xAxis).attr('class', 'xAxis');
    svg.append("g").call(yAxis).attr('class', 'yAxis');
    svg.append("g").attr('class', 'bars-container');
  }

  var bars = d3.select('.bars-container').selectAll('rect').data(data);
  bars.enter().append("rect") // Interaction
  .attr("tabindex", '0').on('focus', function (d) {
    var message = "".concat(d.name, " heeft een waarde van ").concat(d.score);
    utter.speak(message);
    console.log(d);
  }) // Style
  .merge(bars).transition().duration(1000).attr("x", function (d) {
    return x(d.name);
  }).attr("y", function (d) {
    return y(d.score);
  }).attr("height", function (d) {
    return y(0) - y(d.score);
  }).attr("width", x.bandwidth());
  used++;
}

},{"./speaker":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speak = speak;
exports.stop = stop;
var synth = window.speechSynthesis;

function speak(message) {
  synth.cancel();
  var utter = new SpeechSynthesisUtterance();
  utter.text = message;
  utter.lang = 'en-US';
  synth.speak(utter);
}

function stop() {
  synth.cancel();
}

},{}]},{},[1])

//# sourceMappingURL=index.js.map
