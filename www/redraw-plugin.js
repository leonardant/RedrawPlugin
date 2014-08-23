/*
implementation demo from
https://github.com/phonegap/phonegap-plugins/wiki/Defining-Your-Cordova-Plugin-As-A-Cordova-Module
*/

//cordova.define("cordova/plugin/redraw", function(require, exports, module) {
	var exec = require("cordova/exec");

	var Redraw = function() {};

	Redraw.invalidateWebView = function (successCallback, errorCallback) {
    		exec(successCallback, errorCallback, "Redraw", "invalidateWebView", []);
	};

	Redraw.invalidateWebViewDelayed = function (delay, successCallback, errorCallback) {
    		exec(successCallback, errorCallback, "Redraw", "invalidateWebView", [delay]);
	};

	//var myRedraw = new Redraw ();

	module.exports = Redraw;
//});

