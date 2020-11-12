

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
    instance = new ApacheFineract.JournalEntryCommand();
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

  describe('JournalEntryCommand', function() {
    it('should create an instance of JournalEntryCommand', function() {
      // uncomment below and update the code to test JournalEntryCommand
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be.a(ApacheFineract.JournalEntryCommand);
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property transactionDate (base name: "transactionDate")', function() {
      // uncomment below and update the code to test the property transactionDate
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property accountingRuleId (base name: "accountingRuleId")', function() {
      // uncomment below and update the code to test the property accountingRuleId
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property credits (base name: "credits")', function() {
      // uncomment below and update the code to test the property credits
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

    it('should have the property debits (base name: "debits")', function() {
      // uncomment below and update the code to test the property debits
      //var instane = new ApacheFineract.JournalEntryCommand();
      //expect(instance).to.be();
    });

  });

}));
