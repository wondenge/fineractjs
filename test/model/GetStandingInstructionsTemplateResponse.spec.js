

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
    instance = new ApacheFineract.GetStandingInstructionsTemplateResponse();
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

  describe('GetStandingInstructionsTemplateResponse', function() {
    it('should create an instance of GetStandingInstructionsTemplateResponse', function() {
      // uncomment below and update the code to test GetStandingInstructionsTemplateResponse
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetStandingInstructionsTemplateResponse);
    });

    it('should have the property fromOffice (base name: "fromOffice")', function() {
      // uncomment below and update the code to test the property fromOffice
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromOfficeOptions (base name: "fromOfficeOptions")', function() {
      // uncomment below and update the code to test the property fromOfficeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromClientOptions (base name: "fromClientOptions")', function() {
      // uncomment below and update the code to test the property fromClientOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountTypeOptions (base name: "fromAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property fromAccountTypeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property toOfficeOptions (base name: "toOfficeOptions")', function() {
      // uncomment below and update the code to test the property toOfficeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountTypeOptions (base name: "toAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property toAccountTypeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property transferTypeOptions (base name: "transferTypeOptions")', function() {
      // uncomment below and update the code to test the property transferTypeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusOptions (base name: "statusOptions")', function() {
      // uncomment below and update the code to test the property statusOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property instructionTypeOptions (base name: "instructionTypeOptions")', function() {
      // uncomment below and update the code to test the property instructionTypeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property priorityOptions (base name: "priorityOptions")', function() {
      // uncomment below and update the code to test the property priorityOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceTypeOptions (base name: "recurrenceTypeOptions")', function() {
      // uncomment below and update the code to test the property recurrenceTypeOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceFrequencyOptions (base name: "recurrenceFrequencyOptions")', function() {
      // uncomment below and update the code to test the property recurrenceFrequencyOptions
      //var instane = new ApacheFineract.GetStandingInstructionsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
