

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
    instance = new ApacheFineract.PostSelfLoansData();
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

  describe('PostSelfLoansData', function() {
    it('should create an instance of PostSelfLoansData', function() {
      // uncomment below and update the code to test PostSelfLoansData
      //var instane = new ApacheFineract.PostSelfLoansData();
      //expect(instance).to.be.a(ApacheFineract.PostSelfLoansData);
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostSelfLoansData();
      //expect(instance).to.be();
    });

    it('should have the property activationDate (base name: "Activation_Date")', function() {
      // uncomment below and update the code to test the property activationDate
      //var instane = new ApacheFineract.PostSelfLoansData();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostSelfLoansData();
      //expect(instance).to.be();
    });

  });

}));
