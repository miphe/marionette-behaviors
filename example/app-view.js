
"use strict";

// http://purecss.io/start/

var Mn    = require('backbone.marionette');
var Radio = require('backbone.radio');
var _     = require('underscore');

var AppView = Mn.View.extend({
  template: '#app-view',
  className: 'app-view-inner',

  ui: { header: 'header' },

  initialize: function() {
    this.listenTo(Radio.channel('app'), 'show:view:col1', this.showInCol1)
    this.listenTo(Radio.channel('app'), 'show:view:col2', this.showInCol2)
    this.listenTo(Radio.channel('app'), 'show:view:col3', this.showInCol3)

    this.listenTo(Radio.channel('app'), 'show:view:header', this.showInHeader)

    this.listenTo(Radio.channel('app'), 'update:text:header', this.setHeaderTitle)
  },

  showInCol1: function(view) {
    this.showChildView('col1', view)
  },

  showInCol2: function(view) {
    this.showChildView('col2', view)
  },

  showInCol3: function(view) {
    this.showChildView('col3', view)
  },

  showInHeader: function(view) {
    this.showChildView('header', view)
  },

  setHeaderTitle: function(str) {
    this.ui.header.html(str);
  },

  regions: {
    col1: '.col-1',
    col2: '.col-2',
    col3: '.col-3'
  }
});

module.exports = AppView;
