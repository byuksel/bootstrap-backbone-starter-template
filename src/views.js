/**
 * @copyright Copyright (c) 2015, All Rights Reserved.
 * @licence [Apache-2.0]{http://www.apache.org/licenses/LICENSE-2.0}
 * @author Baris Yuksel <baris@onehundredyearsofcode.com
 *
 * @file Views module.
 *
 * Views are the bridges between models and the visible DOM elements.
 * They are responsible for the interaction between the user if any and
 * the data that the model is encapsulating. Views can listen to changes
 * to the models and update the DOM element when change occurs (for example
 * when the model fetches data from the server). Views can also set the
 * data of the model (for example when the user enters data to input fields
 * of a DOM element that the view is rendering).
 *
 * You can read more about views on
 * [BackboneJS website]{@link http://backbonejs.org/#View}.
 */

// Define app if it is not defined yet in the global scope.
// More on namespacing at
// {@link http://codebeerstartups.com/2012/12/11-namespacing-in-backbone-js-learning-backbonejs/
var app = app || {};

app.views = {};

// This is the view that renders the message to the screen when
// message model is changed.
app.views.MessageView = Backbone.View.extend({
  /**
   * Initializes the view.
   *
   * This is called as soon as the view is instantiated. It calls
   * this.render(). It sets a listenTo() event for changes to the model.
   */
  initialize: function() {
    // Listen to the changes to our model.
    this.listenTo(this.model, 'change', this.render);
    // Render as soon as we are initialized.
    this.render();
  },
  /**
   * Renders the view.
   *
   * @returns {Object} - this.
   */
  render: function() {
    // Get our model's message attribute and show it in our view.
    // You should use this.model.escape('message') to prevent mishaps.
    this.$el.html('<b>' + this.model.get('message') + '</b>');
    // You should return this so that you can chain other methods.
    return this;
  }
});

// This view is attached to the buttons. It handles what happens when buttons
// are pressed. It also renders the buttons view from a template on index.html.
app.views.ButtonsView = Backbone.View.extend({
  // Events hash is where we can assign methods to events on the el attribute.
  events: {
    'click .btn-info': 'infoButtonClicked',
  },
  /**
   * This method will fire when click event happen on .btn-info of $el.
   *
   * It sets a new message on our model.
   */
  infoButtonClicked: function() {
    // Set our model to have a certain message.
    this.model.set('message', 'Button clicked on ' + (new Date()).toString());
  },
  /**
   * Initializes the view.
   *
   * This is called as soon as the view is instantiated. It calls
   * this.render().
   */
  initialize: function() {
    this.render();
  },
  /**
   * Renders the view.
   *
   * @returns {Object} - this.
   */
  render: function() {
    // Templates are embedded in index.html. This gives us clear seperation
    // between javascript and html. We are using Underscore's templating
    // mechanism.
    var template = _.template($('#buttons_template').html(), {});
    this.$el.html(template);
    return this;
  }
});
