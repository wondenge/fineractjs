

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
    instance = new ApacheFineract.PutFixedDepositAccountsChanges();
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

  describe('PutFixedDepositAccountsChanges', function() {
    it('should create an instance of PutFixedDepositAccountsChanges', function() {
      // uncomment below and update the code to test PutFixedDepositAccountsChanges
      //var instane = new ApacheFineract.PutFixedDepositAccountsChanges();
      //expect(instance).to.be.a(ApacheFineract.PutFixedDepositAccountsChanges);
    });

    it('should have the property depositAmount (base name: "depositAmount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new ApacheFineract.PutFixedDepositAccountsChanges();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PutFixedDepositAccountsChanges();
      //expect(instance).to.be();
    });

  });

}));
