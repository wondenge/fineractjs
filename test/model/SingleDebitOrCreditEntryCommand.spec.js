

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
    instance = new ApacheFineract.SingleDebitOrCreditEntryCommand();
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

  describe('SingleDebitOrCreditEntryCommand', function() {
    it('should create an instance of SingleDebitOrCreditEntryCommand', function() {
      // uncomment below and update the code to test SingleDebitOrCreditEntryCommand
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be.a(ApacheFineract.SingleDebitOrCreditEntryCommand);
    });

    it('should have the property glAccountId (base name: "glAccountId")', function() {
      // uncomment below and update the code to test the property glAccountId
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property parametersPassedInRequest (base name: "parametersPassedInRequest")', function() {
      // uncomment below and update the code to test the property parametersPassedInRequest
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property glAccountIdChanged (base name: "glAccountIdChanged")', function() {
      // uncomment below and update the code to test the property glAccountIdChanged
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property glAmountChanged (base name: "glAmountChanged")', function() {
      // uncomment below and update the code to test the property glAmountChanged
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property commentsChanged (base name: "commentsChanged")', function() {
      // uncomment below and update the code to test the property commentsChanged
      //var instane = new ApacheFineract.SingleDebitOrCreditEntryCommand();
      //expect(instance).to.be();
    });

  });

}));
