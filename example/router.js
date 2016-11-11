"use strict";

var Mn = require('backbone.marionette');
var Radio = require('backbone.radio');
var Ctrl = require('./app-ctrl.js');

var Routers = {}

Routers.Base = Mn.AppRouter.extend({
  controller: Ctrl,

  onRoute: function(name, path, args) {
    Radio.channel('navigate').trigger('route', name)
  },

  appRoutes: {
    '': 'index',
    ':view': 'show'
  }
});

module.exports = Routers;
