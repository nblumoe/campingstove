/**
 * main.js
 * 
 * This is the entry point of the app, called from require.js
 */

// set some paths to import them in our modules
require.config({
	paths : {
		'jquery' : 'libs/jquery/jquery-1.6.4.min',
		'jquerymobile' : 'libs/jquery.mobile/jquery.mobile-1.0.min',
		'underscore' : 'libs/underscore/underscore',
		// important: use backbone with AMD loading support
		'backbone' : 'libs/backbone/backbone-optamd3',
		'phonegap' : '../phonegap-1.2.0'
	}
});

// start application module
require(
		// ensure phonegap is loaded before we load the app module
		[ 'order!phonegap', 'order!app', 'order!jquery' ],
		function(phonegap, App, $) {
			$(document).bind("deviceReady", function() {
				App.initialize();
			});
		}
)