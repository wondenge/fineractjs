

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
    instance = new ApacheFineract.LoanProductInterestRecalculationDetails();
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

  describe('LoanProductInterestRecalculationDetails', function() {
    it('should create an instance of LoanProductInterestRecalculationDetails', function() {
      // uncomment below and update the code to test LoanProductInterestRecalculationDetails
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be.a(ApacheFineract.LoanProductInterestRecalculationDetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationCompoundingMethod (base name: "interestRecalculationCompoundingMethod")', function() {
      // uncomment below and update the code to test the property interestRecalculationCompoundingMethod
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property rescheduleStrategyMethod (base name: "rescheduleStrategyMethod")', function() {
      // uncomment below and update the code to test the property rescheduleStrategyMethod
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property restFrequencyType (base name: "restFrequencyType")', function() {
      // uncomment below and update the code to test the property restFrequencyType
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property restInterval (base name: "restInterval")', function() {
      // uncomment below and update the code to test the property restInterval
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property restFrequencyNthDay (base name: "restFrequencyNthDay")', function() {
      // uncomment below and update the code to test the property restFrequencyNthDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property restFrequencyWeekday (base name: "restFrequencyWeekday")', function() {
      // uncomment below and update the code to test the property restFrequencyWeekday
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property restFrequencyOnDay (base name: "restFrequencyOnDay")', function() {
      // uncomment below and update the code to test the property restFrequencyOnDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property compoundingFrequencyType (base name: "compoundingFrequencyType")', function() {
      // uncomment below and update the code to test the property compoundingFrequencyType
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property compoundingInterval (base name: "compoundingInterval")', function() {
      // uncomment below and update the code to test the property compoundingInterval
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property compoundingFrequencyNthDay (base name: "compoundingFrequencyNthDay")', function() {
      // uncomment below and update the code to test the property compoundingFrequencyNthDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property compoundingFrequencyWeekday (base name: "compoundingFrequencyWeekday")', function() {
      // uncomment below and update the code to test the property compoundingFrequencyWeekday
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property compoundingFrequencyOnDay (base name: "compoundingFrequencyOnDay")', function() {
      // uncomment below and update the code to test the property compoundingFrequencyOnDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property isCompoundingToBePostedAsTransaction (base name: "isCompoundingToBePostedAsTransaction")', function() {
      // uncomment below and update the code to test the property isCompoundingToBePostedAsTransaction
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property arrearsBasedOnOriginalSchedule (base name: "arrearsBasedOnOriginalSchedule")', function() {
      // uncomment below and update the code to test the property arrearsBasedOnOriginalSchedule
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.LoanProductInterestRecalculationDetails();
      //expect(instance).to.be();
    });

  });

}));
