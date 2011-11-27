/**
 * Message.js
 * 
 * The model which holds a message is defined here.
 */
define(
		// declare dependencies
		['backbone' ],
		function(Backbone) {
			Message = Backbone.Model.extend({
				// set default values
				defaults : {
					'text' : ''
				},
			});
		}
);