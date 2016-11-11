'use strict';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      './with-loader'
    ], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(
      require('./with-loader.js')
    );
  }

})(this, function(withLoaderBehavior) {
  return {
    withLoaderBehavior: withLoaderBehavior
  };
});
