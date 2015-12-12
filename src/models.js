/**
 * @copyright Copyright (c) 2015, All Rights Reserved.
 * @licence [Apache-2.0]{http://www.apache.org/licenses/LICENSE-2.0}
 * @author Baris Yuksel <baris@onehundredyearsofcode.com
 *
 * @file Models module.
 *
 * Models provides us a clean way to encapsulate data shown on the page.
 * Views can listen for changes on models, and update themselves when change
 * occurs. Models, on the other hand, can fetch data/content from the server
 * via fetch() and save its data/content to the server via save() methods.
 * In a clean design, models do not know anything about the views that use
 * them. So, it is a one way relation. This helps to modularize the webapp.
 * Models can also validate the data.
 *
 * You can read more about models on
 * [BackboneJS website]{@link http://backbonejs.org/#Model}.
 */

// Define app if it is not defined yet in the global scope.
// More on namespacing at
// {@link http://codebeerstartups.com/2012/12/11-namespacing-in-backbone-js-learning-backbonejs/
var app = app || {};

// Define models
app.models = {};

// A simple model that holds a message.
app.models.MessageModel = Backbone.Model.extend({
  // defaults provides us a way to initialize model attributes.
  defaults: {
    message: 'My default message'
  }
});
