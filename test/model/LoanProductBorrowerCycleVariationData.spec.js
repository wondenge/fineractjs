

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
    instance = new ApacheFineract.LoanProductBorrowerCycleVariationData();
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

  describe('LoanProductBorrowerCycleVariationData', function() {
    it('should create an instance of LoanProductBorrowerCycleVariationData', function() {
      // uncomment below and update the code to test LoanProductBorrowerCycleVariationData
      //var instane = new ApacheFineract.LoanProductBorrowerCycleVariationData();
      //expect(instance).to.be.a(ApacheFineract.LoanProductBorrowerCycleVariationData);
    });

    it('should have the property borrowerCycleNumber (base name: "borrowerCycleNumber")', function() {
      // uncomment below and update the code to test the property borrowerCycleNumber
      //var instane = new ApacheFineract.LoanProductBorrowerCycleVariationData();
      //expect(instance).to.be();
    });

    it('should have the property paramType (base name: "paramType")', function() {
      // uncomment below and update the code to test the property paramType
      //var instane = new ApacheFineract.LoanProductBorrowerCycleVariationData();
      //expect(instance).to.be();
    });

    it('should have the property valueConditionType (base name: "valueConditionType")', function() {
      // uncomment below and update the code to test the property valueConditionType
      //var instane = new ApacheFineract.LoanProductBorrowerCycleVariationData();
      //expect(instance).to.be();
    });

    it('should have the property defaultValue (base name: "defaultValue")', function() {
      // uncomment below and update the code to test the property defaultValue
      //var instane = new ApacheFineract.LoanProductBorrowerCycleVariationData();
      //expect(instance).to.be();
    });

  });

}));
