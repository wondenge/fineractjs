

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
    instance = new ApacheFineract.GetAccountTransfersTemplateResponse();
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

  describe('GetAccountTransfersTemplateResponse', function() {
    it('should create an instance of GetAccountTransfersTemplateResponse', function() {
      // uncomment below and update the code to test GetAccountTransfersTemplateResponse
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountTransfersTemplateResponse);
    });

    it('should have the property transferAmount (base name: "transferAmount")', function() {
      // uncomment below and update the code to test the property transferAmount
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property transferDate (base name: "transferDate")', function() {
      // uncomment below and update the code to test the property transferDate
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromOffice (base name: "fromOffice")', function() {
      // uncomment below and update the code to test the property fromOffice
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromOfficeOptions (base name: "fromOfficeOptions")', function() {
      // uncomment below and update the code to test the property fromOfficeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromClientOptions (base name: "fromClientOptions")', function() {
      // uncomment below and update the code to test the property fromClientOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountTypeOptions (base name: "fromAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property fromAccountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property toOfficeOptions (base name: "toOfficeOptions")', function() {
      // uncomment below and update the code to test the property toOfficeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountTypeOptions (base name: "toAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property toAccountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
