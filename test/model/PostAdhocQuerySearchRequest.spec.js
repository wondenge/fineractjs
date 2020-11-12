

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
    instance = new ApacheFineract.PostAdhocQuerySearchRequest();
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

  describe('PostAdhocQuerySearchRequest', function() {
    it('should create an instance of PostAdhocQuerySearchRequest', function() {
      // uncomment below and update the code to test PostAdhocQuerySearchRequest
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be.a(ApacheFineract.PostAdhocQuerySearchRequest);
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanDateOption (base name: "loanDateOption")', function() {
      // uncomment below and update the code to test the property loanDateOption
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanFromDate (base name: "loanFromDate")', function() {
      // uncomment below and update the code to test the property loanFromDate
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanToDate (base name: "loanToDate")', function() {
      // uncomment below and update the code to test the property loanToDate
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeOutStandingAmountPercentage (base name: "includeOutStandingAmountPercentage")', function() {
      // uncomment below and update the code to test the property includeOutStandingAmountPercentage
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property outStandingAmountPercentageCondition (base name: "outStandingAmountPercentageCondition")', function() {
      // uncomment below and update the code to test the property outStandingAmountPercentageCondition
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property outStandingAmountPercentage (base name: "outStandingAmountPercentage")', function() {
      // uncomment below and update the code to test the property outStandingAmountPercentage
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeOutstandingAmount (base name: "includeOutstandingAmount")', function() {
      // uncomment below and update the code to test the property includeOutstandingAmount
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property outstandingAmountCondition (base name: "outstandingAmountCondition")', function() {
      // uncomment below and update the code to test the property outstandingAmountCondition
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property minOutstandingAmount (base name: "minOutstandingAmount")', function() {
      // uncomment below and update the code to test the property minOutstandingAmount
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxOutstandingAmount (base name: "maxOutstandingAmount")', function() {
      // uncomment below and update the code to test the property maxOutstandingAmount
      //var instane = new ApacheFineract.PostAdhocQuerySearchRequest();
      //expect(instance).to.be();
    });

  });

}));
