/**
 * app.js
 * 
 * The main module of our application is defined here
 */
define(
		// declare dependencies
		[ 'views/HelloWorldView' ],
        function(HelloWorldView) {
			var initialize = function() {
				// render view on app start
				HelloWorldView.render();
			}
			return {
				initialize : initialize
			};
		}
);