"use strict";

var Mn = require('backbone.marionette');
var WithLoader = require('../behaviors/with-loader.js');

var Modules = Mn.Object.extend({
  buttons: Mn.View.extend({
    tagName: 'button',
    template: '#button',
    className: 'btn',
    ui: { label: '.label' },
    events: {
      'click': 'simulateLoader'
    },
    behaviors: [WithLoader],
    simulateLoader: function() {
      this.trigger('loader:toggle')
    }
  }),
  other: Mn.View.extend({})
});

module.exports = new Modules();
