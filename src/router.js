/**
 * @copyright Copyright (c) 2015, All Rights Reserved.
 * @licence [Apache-2.0]{http://www.apache.org/licenses/LICENSE-2.0}
 * @author Baris Yuksel <baris@onehundredyearsofcode.com
 *
 * @file Router module.
 */

// Define app if it is not defined yet in the global scope.
// More on namespacing at
// {@link http://codebeerstartups.com/2012/12/11-namespacing-in-backbone-js-learning-backbonejs/
var app = app || {};

// Define router
app.MainRouter = Backbone.Router.extend({
  routes: {
    '': 'root'  // Root goes first.
  },
  /**
   * Main router.
   */
  root: function() {
    // Let's instantiate a message model.
    this.messageModel = new app.models.MessageModel();
    // Let's now pass this to a newly instantiated MessageView.
    this.messageView = new app.views.MessageView(
      {model: this.messageModel, el: $('#messageview')});
    // Let's create a new buttons view and set message model as its model as
    // well. When our button is clicked, the buttons view will update the
    // message model with a message. Upon that update, the message view will
    // trigger to render the message to the screen.
    this.buttonsView = new app.views.ButtonsView(
      {model: this.messageModel, el: $('#buttons')});
  }
});

app.router = new app.MainRouter();
jQuery(document).ready(function() {
  // Start the router when jquery tells us that the document is loaded.
  Backbone.history.start();
});
