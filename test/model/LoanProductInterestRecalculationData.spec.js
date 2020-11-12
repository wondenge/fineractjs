

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
    instance = new ApacheFineract.LoanProductInterestRecalculationData();
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

  describe('LoanProductInterestRecalculationData', function() {
    it('should create an instance of LoanProductInterestRecalculationData', function() {
      // uncomment below and update the code to test LoanProductInterestRecalculationData
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be.a(ApacheFineract.LoanProductInterestRecalculationData);
    });

    it('should have the property interestRecalculationCompoundingType (base name: "interestRecalculationCompoundingType")', function() {
      // uncomment below and update the code to test the property interestRecalculationCompoundingType
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property rescheduleStrategyType (base name: "rescheduleStrategyType")', function() {
      // uncomment below and update the code to test the property rescheduleStrategyType
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationRestFrequencyType (base name: "recalculationRestFrequencyType")', function() {
      // uncomment below and update the code to test the property recalculationRestFrequencyType
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationRestFrequencyInterval (base name: "recalculationRestFrequencyInterval")', function() {
      // uncomment below and update the code to test the property recalculationRestFrequencyInterval
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationRestFrequencyNthDay (base name: "recalculationRestFrequencyNthDay")', function() {
      // uncomment below and update the code to test the property recalculationRestFrequencyNthDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationRestFrequencyWeekday (base name: "recalculationRestFrequencyWeekday")', function() {
      // uncomment below and update the code to test the property recalculationRestFrequencyWeekday
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationRestFrequencyOnDay (base name: "recalculationRestFrequencyOnDay")', function() {
      // uncomment below and update the code to test the property recalculationRestFrequencyOnDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationCompoundingFrequencyType (base name: "recalculationCompoundingFrequencyType")', function() {
      // uncomment below and update the code to test the property recalculationCompoundingFrequencyType
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationCompoundingFrequencyInterval (base name: "recalculationCompoundingFrequencyInterval")', function() {
      // uncomment below and update the code to test the property recalculationCompoundingFrequencyInterval
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationCompoundingFrequencyNthDay (base name: "recalculationCompoundingFrequencyNthDay")', function() {
      // uncomment below and update the code to test the property recalculationCompoundingFrequencyNthDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationCompoundingFrequencyWeekday (base name: "recalculationCompoundingFrequencyWeekday")', function() {
      // uncomment below and update the code to test the property recalculationCompoundingFrequencyWeekday
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationCompoundingFrequencyOnDay (base name: "recalculationCompoundingFrequencyOnDay")', function() {
      // uncomment below and update the code to test the property recalculationCompoundingFrequencyOnDay
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property compoundingToBePostedAsTransaction (base name: "compoundingToBePostedAsTransaction")', function() {
      // uncomment below and update the code to test the property compoundingToBePostedAsTransaction
      //var instane = new ApacheFineract.LoanProductInterestRecalculationData();
      //expect(instance).to.be();
    });

  });

}));
