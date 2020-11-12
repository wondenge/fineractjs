

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
    instance = new ApacheFineract.LoanTransactionProcessingStrategy();
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

  describe('LoanTransactionProcessingStrategy', function() {
    it('should create an instance of LoanTransactionProcessingStrategy', function() {
      // uncomment below and update the code to test LoanTransactionProcessingStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be.a(ApacheFineract.LoanTransactionProcessingStrategy);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property standardStrategy (base name: "standardStrategy")', function() {
      // uncomment below and update the code to test the property standardStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property heavensfamilyStrategy (base name: "heavensfamilyStrategy")', function() {
      // uncomment below and update the code to test the property heavensfamilyStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property earlyPaymentStrategy (base name: "earlyPaymentStrategy")', function() {
      // uncomment below and update the code to test the property earlyPaymentStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property creocoreStrategy (base name: "creocoreStrategy")', function() {
      // uncomment below and update the code to test the property creocoreStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property indianRBIStrategy (base name: "indianRBIStrategy")', function() {
      // uncomment below and update the code to test the property indianRBIStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property principalInterestPenaltiesFeesOrderStrategy (base name: "principalInterestPenaltiesFeesOrderStrategy")', function() {
      // uncomment below and update the code to test the property principalInterestPenaltiesFeesOrderStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property interestPrincipalPenaltiesFeesOrderStrategy (base name: "interestPrincipalPenaltiesFeesOrderStrategy")', function() {
      // uncomment below and update the code to test the property interestPrincipalPenaltiesFeesOrderStrategy
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.LoanTransactionProcessingStrategy();
      //expect(instance).to.be();
    });

  });

}));
