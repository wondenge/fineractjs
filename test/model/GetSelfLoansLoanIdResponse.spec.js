

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
    instance = new ApacheFineract.GetSelfLoansLoanIdResponse();
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

  describe('GetSelfLoansLoanIdResponse', function() {
    it('should create an instance of GetSelfLoansLoanIdResponse', function() {
      // uncomment below and update the code to test GetSelfLoansLoanIdResponse
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetSelfLoansLoanIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientOfficeId (base name: "clientOfficeId")', function() {
      // uncomment below and update the code to test the property clientOfficeId
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanProductId (base name: "loanProductId")', function() {
      // uncomment below and update the code to test the property loanProductId
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanProductName (base name: "loanProductName")', function() {
      // uncomment below and update the code to test the property loanProductName
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanProductDescription (base name: "loanProductDescription")', function() {
      // uncomment below and update the code to test the property loanProductDescription
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanPurposeId (base name: "loanPurposeId")', function() {
      // uncomment below and update the code to test the property loanPurposeId
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanPurposeName (base name: "loanPurposeName")', function() {
      // uncomment below and update the code to test the property loanPurposeName
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanOfficerId (base name: "loanOfficerId")', function() {
      // uncomment below and update the code to test the property loanOfficerId
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanOfficerName (base name: "loanOfficerName")', function() {
      // uncomment below and update the code to test the property loanOfficerName
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanType (base name: "loanType")', function() {
      // uncomment below and update the code to test the property loanType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property termFrequency (base name: "termFrequency")', function() {
      // uncomment below and update the code to test the property termFrequency
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property termPeriodFrequencyType (base name: "termPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property termPeriodFrequencyType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRatePerPeriod (base name: "interestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property interestRatePerPeriod
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyType (base name: "interestRateFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property annualInterestRate (base name: "annualInterestRate")', function() {
      // uncomment below and update the code to test the property annualInterestRate
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new ApacheFineract.GetSelfLoansLoanIdResponse();
      //expect(instance).to.be();
    });

  });

}));
