

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
    instance = new ApacheFineract.GetAccountTransferTemplateResponse();
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

  describe('GetAccountTransferTemplateResponse', function() {
    it('should create an instance of GetAccountTransferTemplateResponse', function() {
      // uncomment below and update the code to test GetAccountTransferTemplateResponse
      //var instane = new ApacheFineract.GetAccountTransferTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountTransferTemplateResponse);
    });

    it('should have the property accountTypeOptions (base name: "accountTypeOptions")', function() {
      // uncomment below and update the code to test the property accountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransferTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountTypeOptions (base name: "fromAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property fromAccountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransferTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountTypeOptions (base name: "toAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property toAccountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransferTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
