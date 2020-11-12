

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
    instance = new ApacheFineract.GetClientIdProductIdAccountingMappings();
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

  describe('GetClientIdProductIdAccountingMappings', function() {
    it('should create an instance of GetClientIdProductIdAccountingMappings', function() {
      // uncomment below and update the code to test GetClientIdProductIdAccountingMappings
      //var instane = new ApacheFineract.GetClientIdProductIdAccountingMappings();
      //expect(instance).to.be.a(ApacheFineract.GetClientIdProductIdAccountingMappings);
    });

    it('should have the property shareReferenceId (base name: "shareReferenceId")', function() {
      // uncomment below and update the code to test the property shareReferenceId
      //var instane = new ApacheFineract.GetClientIdProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property incomeFromFeeAccountId (base name: "incomeFromFeeAccountId")', function() {
      // uncomment below and update the code to test the property incomeFromFeeAccountId
      //var instane = new ApacheFineract.GetClientIdProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property shareEquityId (base name: "ShareEquityId")', function() {
      // uncomment below and update the code to test the property shareEquityId
      //var instane = new ApacheFineract.GetClientIdProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property shareSuspenseId (base name: "shareSuspenseId")', function() {
      // uncomment below and update the code to test the property shareSuspenseId
      //var instane = new ApacheFineract.GetClientIdProductIdAccountingMappings();
      //expect(instance).to.be();
    });

  });

}));
