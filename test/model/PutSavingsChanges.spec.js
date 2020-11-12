

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
    instance = new ApacheFineract.PutSavingsChanges();
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

  describe('PutSavingsChanges', function() {
    it('should create an instance of PutSavingsChanges', function() {
      // uncomment below and update the code to test PutSavingsChanges
      //var instane = new ApacheFineract.PutSavingsChanges();
      //expect(instance).to.be.a(ApacheFineract.PutSavingsChanges);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PutSavingsChanges();
      //expect(instance).to.be();
    });

    it('should have the property interestRate (base name: "interestRate")', function() {
      // uncomment below and update the code to test the property interestRate
      //var instane = new ApacheFineract.PutSavingsChanges();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PutSavingsChanges();
      //expect(instance).to.be();
    });

  });

}));
