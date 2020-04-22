(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var submit = document.querySelector('section form input[type="submit"]'),
    input = document.querySelector('section form input[type="text"]');
submit.addEventListener('click', function (event) {
  event.preventDefault();
  var url = {
    url: input.value
  };
  fetch('/', {
    method: 'POST',
    body: JSON.stringify(url),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    createTitle(data.url);
    render(data.audit);
  });
  input.value = '';
});

function createTitle(data) {
  document.querySelector('[title]').textContent = "Deze data is afkomstig van: ".concat(data);
}

var margin = {
  top: 20,
  right: 0,
  bottom: 30,
  left: 40
},
    width = 1000,
    height = 500;
var used = 0;

function render(data) {
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

  var svg = d3.select("svg").attr("viewBox", [0, 0, width, height]);

  if (used === 0) {
    svg.append("g").call(xAxis).attr('class', 'xAxis');
    svg.append("g").call(yAxis).attr('class', 'yAxis');
    svg.append("g").attr('class', 'bars-container');
  }

  var bars = d3.select('.bars-container').selectAll('rect').data(data);
  bars.enter().append("rect") // Interaction
  .attr("tabindex", '0').on('focus', function (d) {
    var message = "".concat(d.name, " heeft een waarde van ").concat(d.value);
    speak(message);
    console.log(d);
  }) // Style
  .attr("fill", "red") // css
  .merge(bars).transition().duration(1000).attr("x", function (d) {
    return x(d.name);
  }).attr("y", function (d) {
    return y(d.value);
  }).attr("height", function (d) {
    return y(0) - y(d.value);
  }).attr("width", x.bandwidth());
  used++;
}

var synth = window.speechSynthesis;

function speak(message) {
  synth.cancel();
  var utter = new SpeechSynthesisUtterance();
  utter.text = message;
  synth.speak(utter);
}

},{}]},{},[1])

//# sourceMappingURL=index.js.map
