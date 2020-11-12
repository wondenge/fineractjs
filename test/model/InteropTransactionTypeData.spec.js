

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
    instance = new ApacheFineract.InteropTransactionTypeData();
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

  describe('InteropTransactionTypeData', function() {
    it('should create an instance of InteropTransactionTypeData', function() {
      // uncomment below and update the code to test InteropTransactionTypeData
      //var instane = new ApacheFineract.InteropTransactionTypeData();
      //expect(instance).to.be.a(ApacheFineract.InteropTransactionTypeData);
    });

    it('should have the property scenario (base name: "scenario")', function() {
      // uncomment below and update the code to test the property scenario
      //var instane = new ApacheFineract.InteropTransactionTypeData();
      //expect(instance).to.be();
    });

    it('should have the property subScenario (base name: "subScenario")', function() {
      // uncomment below and update the code to test the property subScenario
      //var instane = new ApacheFineract.InteropTransactionTypeData();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instane = new ApacheFineract.InteropTransactionTypeData();
      //expect(instance).to.be();
    });

    it('should have the property initiatorType (base name: "initiatorType")', function() {
      // uncomment below and update the code to test the property initiatorType
      //var instane = new ApacheFineract.InteropTransactionTypeData();
      //expect(instance).to.be();
    });

  });

}));
