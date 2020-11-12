

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
    instance = new ApacheFineract.GetRecurringDepositAccountsResponse();
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

  describe('GetRecurringDepositAccountsResponse', function() {
    it('should create an instance of GetRecurringDepositAccountsResponse', function() {
      // uncomment below and update the code to test GetRecurringDepositAccountsResponse
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetRecurringDepositAccountsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsProductId (base name: "savingsProductId")', function() {
      // uncomment below and update the code to test the property savingsProductId
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsProductName (base name: "savingsProductName")', function() {
      // uncomment below and update the code to test the property savingsProductName
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property fieldOfficerId (base name: "fieldOfficerId")', function() {
      // uncomment below and update the code to test the property fieldOfficerId
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodType (base name: "interestCompoundingPeriodType")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodType (base name: "interestPostingPeriodType")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationType (base name: "interestCalculationType")', function() {
      // uncomment below and update the code to test the property interestCalculationType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearType (base name: "interestCalculationDaysInYearType")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property depositAmount (base name: "depositAmount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maturityAmount (base name: "maturityAmount")', function() {
      // uncomment below and update the code to test the property maturityAmount
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maturityDate (base name: "maturityDate")', function() {
      // uncomment below and update the code to test the property maturityDate
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositAmount (base name: "recurringDepositAmount")', function() {
      // uncomment below and update the code to test the property recurringDepositAmount
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositFrequency (base name: "recurringDepositFrequency")', function() {
      // uncomment below and update the code to test the property recurringDepositFrequency
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositFrequencyType (base name: "recurringDepositFrequencyType")', function() {
      // uncomment below and update the code to test the property recurringDepositFrequencyType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalApplicable (base name: "preClosurePenalApplicable")', function() {
      // uncomment below and update the code to test the property preClosurePenalApplicable
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTerm (base name: "minDepositTerm")', function() {
      // uncomment below and update the code to test the property minDepositTerm
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTerm (base name: "maxDepositTerm")', function() {
      // uncomment below and update the code to test the property maxDepositTerm
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTermType (base name: "minDepositTermType")', function() {
      // uncomment below and update the code to test the property minDepositTermType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTermType (base name: "maxDepositTermType")', function() {
      // uncomment below and update the code to test the property maxDepositTermType
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property depositPeriod (base name: "depositPeriod")', function() {
      // uncomment below and update the code to test the property depositPeriod
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property depositPeriodFrequency (base name: "depositPeriodFrequency")', function() {
      // uncomment below and update the code to test the property depositPeriodFrequency
      //var instane = new ApacheFineract.GetRecurringDepositAccountsResponse();
      //expect(instance).to.be();
    });

  });

}));
