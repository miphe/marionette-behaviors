"use strict";

var Bb = require('backbone');
var Mn = require('backbone.marionette');
var Router  = require('./router.js');
var AppView = require('./app-view.js');

var App = Mn.Application.extend({

  region: '#app-outer',

  onBeforeStart: function() {
    this.rootRegion = this.getRegion();
    this.rootView = new AppView();
    this.rtr = new Router.Base();
  },

  onStart: function(options) {
    this.rootRegion.show(this.rootView);
    if(Bb.history) {
      Bb.history.start({ pushState: false })
    }
  }

});

// Requirements for the Marionette browser extension
if(window.__agent) {
  window.__agent.start(Bb, Mn)
}

// Application instantiation and boot
var app = new App();
app.start()

// Exports the application instance
module.exports = app;
