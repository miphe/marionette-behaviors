"use strict";

var Radio = require('backbone.radio');
var modules = require('./modules.js');
var View, view;

var Ctrl = {

  index: function() {
    console.log('Index');
  },

  show: function(viewName) {
    console.info('Showing module:', viewName);

    View = modules.getOption(viewName);
    view = new View();

    // Updates header of page
    Radio.channel('app').trigger('update:text:header', 'With loader')

    // Shows button with loader
    Radio.channel('app').trigger('show:view:col1', view);
  }
};

module.exports = Ctrl;
