  

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
    instance = new ApacheFineract.PostRecurringChanges();
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

  describe('PostRecurringChanges', function() {
    it('should create an instance of PostRecurringChanges', function() {
      // uncomment below and update the code to test PostRecurringChanges
      //var instane = new ApacheFineract.PostRecurringChanges();
      //expect(instance).to.be.a(ApacheFineract.PostRecurringChanges);
    });

    it('should have the property accountNumber (base name: "accountNumber")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instane = new ApacheFineract.PostRecurringChanges();
      //expect(instance).to.be();
    });

    it('should have the property checkNumber (base name: "checkNumber")', function() {
      // uncomment below and update the code to test the property checkNumber
      //var instane = new ApacheFineract.PostRecurringChanges();
      //expect(instance).to.be();
    });

    it('should have the property routingCode (base name: "routingCode")', function() {
      // uncomment below and update the code to test the property routingCode
      //var instane = new ApacheFineract.PostRecurringChanges();
      //expect(instance).to.be();
    });

    it('should have the property receiptNumber (base name: "receiptNumber")', function() {
      // uncomment below and update the code to test the property receiptNumber
      //var instane = new ApacheFineract.PostRecurringChanges();
      //expect(instance).to.be();
    });

    it('should have the property bankNumber (base name: "bankNumber")', function() {
      // uncomment below and update the code to test the property bankNumber
      //var instane = new ApacheFineract.PostRecurringChanges();
      //expect(instance).to.be();
    });

  });

}));
