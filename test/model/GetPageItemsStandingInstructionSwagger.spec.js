

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
    instance = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
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

  describe('GetPageItemsStandingInstructionSwagger', function() {
    it('should create an instance of GetPageItemsStandingInstructionSwagger', function() {
      // uncomment below and update the code to test GetPageItemsStandingInstructionSwagger
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be.a(ApacheFineract.GetPageItemsStandingInstructionSwagger);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property accountDetailId (base name: "accountDetailId")', function() {
      // uncomment below and update the code to test the property accountDetailId
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property fromOffice (base name: "fromOffice")', function() {
      // uncomment below and update the code to test the property fromOffice
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property fromClient (base name: "fromClient")', function() {
      // uncomment below and update the code to test the property fromClient
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property fromAccount (base name: "fromAccount")', function() {
      // uncomment below and update the code to test the property fromAccount
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property toOffice (base name: "toOffice")', function() {
      // uncomment below and update the code to test the property toOffice
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property toClient (base name: "toClient")', function() {
      // uncomment below and update the code to test the property toClient
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property toAccountType (base name: "toAccountType")', function() {
      // uncomment below and update the code to test the property toAccountType
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property toAccount (base name: "toAccount")', function() {
      // uncomment below and update the code to test the property toAccount
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property transferType (base name: "transferType")', function() {
      // uncomment below and update the code to test the property transferType
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property instructionType (base name: "instructionType")', function() {
      // uncomment below and update the code to test the property instructionType
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property validFrom (base name: "validFrom")', function() {
      // uncomment below and update the code to test the property validFrom
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceType (base name: "recurrenceType")', function() {
      // uncomment below and update the code to test the property recurrenceType
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceFrequency (base name: "recurrenceFrequency")', function() {
      // uncomment below and update the code to test the property recurrenceFrequency
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceInterval (base name: "recurrenceInterval")', function() {
      // uncomment below and update the code to test the property recurrenceInterval
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceOnMonthDay (base name: "recurrenceOnMonthDay")', function() {
      // uncomment below and update the code to test the property recurrenceOnMonthDay
      //var instane = new ApacheFineract.GetPageItemsStandingInstructionSwagger();
      //expect(instance).to.be();
    });

  });

}));
