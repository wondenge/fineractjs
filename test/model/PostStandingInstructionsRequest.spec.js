

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
    instance = new ApacheFineract.PostStandingInstructionsRequest();
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

  describe('PostStandingInstructionsRequest', function() {
    it('should create an instance of PostStandingInstructionsRequest', function() {
      // uncomment below and update the code to test PostStandingInstructionsRequest
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be.a(ApacheFineract.PostStandingInstructionsRequest);
    });

    it('should have the property fromOfficeId (base name: "fromOfficeId")', function() {
      // uncomment below and update the code to test the property fromOfficeId
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromClientId (base name: "fromClientId")', function() {
      // uncomment below and update the code to test the property fromClientId
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property transferType (base name: "transferType")', function() {
      // uncomment below and update the code to test the property transferType
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountId (base name: "fromAccountId")', function() {
      // uncomment below and update the code to test the property fromAccountId
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property toOfficeId (base name: "toOfficeId")', function() {
      // uncomment below and update the code to test the property toOfficeId
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property toClientId (base name: "toClientId")', function() {
      // uncomment below and update the code to test the property toClientId
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property toAccountType (base name: "toAccountType")', function() {
      // uncomment below and update the code to test the property toAccountType
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property toAccountId (base name: "toAccountId")', function() {
      // uncomment below and update the code to test the property toAccountId
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property instructionType (base name: "instructionType")', function() {
      // uncomment below and update the code to test the property instructionType
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property validFrom (base name: "validFrom")', function() {
      // uncomment below and update the code to test the property validFrom
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceType (base name: "recurrenceType")', function() {
      // uncomment below and update the code to test the property recurrenceType
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceInterval (base name: "recurrenceInterval")', function() {
      // uncomment below and update the code to test the property recurrenceInterval
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceFrequency (base name: "recurrenceFrequency")', function() {
      // uncomment below and update the code to test the property recurrenceFrequency
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceOnMonthDay (base name: "recurrenceOnMonthDay")', function() {
      // uncomment below and update the code to test the property recurrenceOnMonthDay
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property monthDayFormat (base name: "monthDayFormat")', function() {
      // uncomment below and update the code to test the property monthDayFormat
      //var instane = new ApacheFineract.PostStandingInstructionsRequest();
      //expect(instance).to.be();
    });

  });

}));
