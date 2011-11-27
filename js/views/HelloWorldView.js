/**
 * HelloWorldView.js
 * 
 * The view to show a hello world message is defined here.
 */
define(
		// declare dependencies
		[ 'jquery', 'underscore', 'backbone',
		  // use require.js text plugin to load template as dependency
		  'text!../../templates/helloworld.html',
		  'models/Message',
		  'jquerymobile'],
		function($, _, Backbone, template){
			var HelloWorldView = Backbone.View.extend({
				// attach view to DOM element
				el: $('#content'),
				// create UI events
				events: {
					// attach sayHello method to button click
					'click #hellobtn' : 'sayHello'
		    },
		    /**
		     * Changes text of the model to 'Hello World'
		     * 
		     * @method
		     */
		    sayHello: function() {
		    	// using set method of model triggers change event
		    	this.model.set({'text':'Hello World'});
		    },
		    /**
		     * Renders the view
		     * 
		     * @method
		     */
		    render: function(){
		    	// create data to pass to template
		    	var data = {
		    			// get message text from model
		    			'text' : this.model.get('text')
		    	};
		    	// use underscore to compile the template with given data
		    	var compiledTemplate = _.template( template, data );
		    	// replace html of DOM element and trigger jquery mobile refresh
		    	this.el.html( compiledTemplate ).trigger('create');
		    },
		    /**
		     * Initialize the view
		     * 
		     * @method
		     */
		    initialize : function() {
		    	// ensure 'this' points to the view in methods
		    	_.bindAll(this, 'render', 'sayHello');
		    	// create a new message and use it as model
		    	this.model = new Message();
		    	// render view if change event of model fires
		    	this.model.bind('change:text', this.render);
		    }
		  });

  return new HelloWorldView;
});