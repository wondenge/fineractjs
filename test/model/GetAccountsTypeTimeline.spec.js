

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApacheFineract);
  }
}(this, function(expect, ApacheFineract) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApacheFineract.GetAccountsTypeTimeline();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetAccountsTypeTimeline', function() {
    it('should create an instance of GetAccountsTypeTimeline', function() {
      // uncomment below and update the code to test GetAccountsTypeTimeline
      //var instane = new ApacheFineract.GetAccountsTypeTimeline();
      //expect(instance).to.be.a(ApacheFineract.GetAccountsTypeTimeline);
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.GetAccountsTypeTimeline();
      //expect(instance).to.be();
    });

  });

}));
