

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
    instance = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
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

  describe('GetProvisioningCriteriaCriteriaIdResponse', function() {
    it('should create an instance of GetProvisioningCriteriaCriteriaIdResponse', function() {
      // uncomment below and update the code to test GetProvisioningCriteriaCriteriaIdResponse
      //var instane = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse);
    });

    it('should have the property criteriaId (base name: "criteriaId")', function() {
      // uncomment below and update the code to test the property criteriaId
      //var instane = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property criteriaName (base name: "criteriaName")', function() {
      // uncomment below and update the code to test the property criteriaName
      //var instane = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanProducts (base name: "loanProducts")', function() {
      // uncomment below and update the code to test the property loanProducts
      //var instane = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property provisioningcriteria (base name: "provisioningcriteria")', function() {
      // uncomment below and update the code to test the property provisioningcriteria
      //var instane = new ApacheFineract.GetProvisioningCriteriaCriteriaIdResponse();
      //expect(instance).to.be();
    });

  });

}));
