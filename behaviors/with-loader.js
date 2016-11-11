'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'marionette',
      'underscore'
    ], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('backbone.marionette'),
      require('underscore')
    );
  }
})(this, function (Marionette, _) {

  /**
   * WithLoader behavior

   * The WithLoader behavior triggers a show/hide sequence in the view.
   * The loader is triggered by a view event on the view, it is also
   * stopped by a similar event. You may toggle the loader by triggering
   * a toggle event as documented in the behavior class. The loader is
   * manifested by the font-awesome icon fa-spinner.

   * This behavior was built with usage of buttons in mind.

   * Dependencies:
   * @ui.label element
   * Template with loader element, like example shows:

   * @example:
   *  <button class="btn">
   *    <label>Press me!</label>
   *    <i class="is-hidden fa fa-spinner"></i>
   *  </button>
   */
  var Behavior = Marionette.Behavior.extend({

    /**
     * Initialize
     * Applies listeners for loader events.
     */
    initialize: function() {
      this.listenTo(this.view, 'loader:start', this.startLoader)
      this.listenTo(this.view, 'loader:end', this.endLoader)
      this.listenTo(this.view, 'loader:toggle', this.toggleLoader)
    },

    ui: { loader: '.fa-spinner' },

    /**
     * Loading
     * Find out whether view is currently loading or not.
     * @returns: boolean
     */
    loading: function() {
      return Boolean(!this.ui.loader.hasClass('is-hidden'))
    },

    /**
     * Start Loader
     * Updates UI with classes, indicating loading.
     */
    startLoader: function() {
      this.ui.label.addClass('is-hidden')
      this.ui.loader.removeClass('is-hidden')
    },

    /**
     * End Loader
     * Updates UI with classes, indicating NOT loading.
     */
    endLoader: function() {
      this.ui.label.removeClass('is-hidden')
      this.ui.loader.addClass('is-hidden')
    },

    /**
     * Toggle Loader
     * Updates UI with classes, switching state from one to the other in view.
     */
    toggleLoader: function() {
      this.ui.label.toggleClass('is-hidden')
      this.ui.loader.toggleClass('is-hidden')
    }
  });

  return Behavior;

});
