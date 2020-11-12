

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
    instance = new ApacheFineract.LoanProductGuaranteeDetails();
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

  describe('LoanProductGuaranteeDetails', function() {
    it('should create an instance of LoanProductGuaranteeDetails', function() {
      // uncomment below and update the code to test LoanProductGuaranteeDetails
      //var instane = new ApacheFineract.LoanProductGuaranteeDetails();
      //expect(instance).to.be.a(ApacheFineract.LoanProductGuaranteeDetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanProductGuaranteeDetails();
      //expect(instance).to.be();
    });

    it('should have the property mandatoryGuarantee (base name: "mandatoryGuarantee")', function() {
      // uncomment below and update the code to test the property mandatoryGuarantee
      //var instane = new ApacheFineract.LoanProductGuaranteeDetails();
      //expect(instance).to.be();
    });

    it('should have the property minimumGuaranteeFromOwnFunds (base name: "minimumGuaranteeFromOwnFunds")', function() {
      // uncomment below and update the code to test the property minimumGuaranteeFromOwnFunds
      //var instane = new ApacheFineract.LoanProductGuaranteeDetails();
      //expect(instance).to.be();
    });

    it('should have the property minimumGuaranteeFromGuarantor (base name: "minimumGuaranteeFromGuarantor")', function() {
      // uncomment below and update the code to test the property minimumGuaranteeFromGuarantor
      //var instane = new ApacheFineract.LoanProductGuaranteeDetails();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.LoanProductGuaranteeDetails();
      //expect(instance).to.be();
    });

  });

}));
