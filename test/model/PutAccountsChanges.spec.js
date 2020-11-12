

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
    instance = new ApacheFineract.PutAccountsChanges();
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

  describe('PutAccountsChanges', function() {
    it('should create an instance of PutAccountsChanges', function() {
      // uncomment below and update the code to test PutAccountsChanges
      //var instane = new ApacheFineract.PutAccountsChanges();
      //expect(instance).to.be.a(ApacheFineract.PutAccountsChanges);
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PutAccountsChanges();
      //expect(instance).to.be();
    });

    it('should have the property applicationDate (base name: "applicationDate")', function() {
      // uncomment below and update the code to test the property applicationDate
      //var instane = new ApacheFineract.PutAccountsChanges();
      //expect(instance).to.be();
    });

    it('should have the property requestedShares (base name: "requestedShares")', function() {
      // uncomment below and update the code to test the property requestedShares
      //var instane = new ApacheFineract.PutAccountsChanges();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PutAccountsChanges();
      //expect(instance).to.be();
    });

  });

}));
