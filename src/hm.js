/*
 * @file A simple DOM manipulation Javascript library with the goal of being lightweight and modular
 * @author <a href="mailto:matt@hokiematt.com">Matt Skinner</a>
 * HM Javascript Library 
 * @version 0.0.1
 * https://hokiematt.com
 * @copyright 2018
 * @license MIT
 */

var domElement = {};

domElement.init = require('./modules/core/init');

domElement.argToArr   = require('./modules/core/argToArr');
domElement.forEach    = require('./modules/core/forEach');
domElement.map        = require('./modules/core/map');
domElement.mapOne     = require('./modules/core/mapOne');

domElement.addClass     = require('./modules/dom/addClass');
domElement.attr         = require('./modules/dom/attr');
domElement.changeClass  = require('./modules/dom/changeClass');
domElement.hasClass     = require('./modules/dom/hasClass');
domElement.html         = require('./modules/dom/html');
domElement.removeClass  = require('./modules/dom/removeClass');
domElement.text         = require('./modules/dom/text');
domElement.toggleClass  = require('./modules/dom/toggleClass');

domElement.click  = require('./modules/handler/click');
domElement.focus  = require('./modules/handler/focus');
domElement.off    = require('./modules/handler/off');
domElement.on     = require('./modules/handler/on');


var HMLib = window.hm || function(selector){
  var el = Object.create(domElement);
  el.init(selector);
  return el;
};

window.hm = HMLib;
