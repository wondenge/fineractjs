

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
    instance = new ApacheFineract.GetGLAccountsTemplateResponse();
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

  describe('GetGLAccountsTemplateResponse', function() {
    it('should create an instance of GetGLAccountsTemplateResponse', function() {
      // uncomment below and update the code to test GetGLAccountsTemplateResponse
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetGLAccountsTemplateResponse);
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property manualEntriesAllowed (base name: "manualEntriesAllowed")', function() {
      // uncomment below and update the code to test the property manualEntriesAllowed
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property usage (base name: "usage")', function() {
      // uncomment below and update the code to test the property usage
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountTypeOptions (base name: "accountTypeOptions")', function() {
      // uncomment below and update the code to test the property accountTypeOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property usageOptions (base name: "usageOptions")', function() {
      // uncomment below and update the code to test the property usageOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property assetHeaderAccountOptions (base name: "assetHeaderAccountOptions")', function() {
      // uncomment below and update the code to test the property assetHeaderAccountOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property liabilityHeaderAccountOptions (base name: "liabilityHeaderAccountOptions")', function() {
      // uncomment below and update the code to test the property liabilityHeaderAccountOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property equityHeaderAccountOptions (base name: "equityHeaderAccountOptions")', function() {
      // uncomment below and update the code to test the property equityHeaderAccountOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property expenseHeaderAccountOptions (base name: "expenseHeaderAccountOptions")', function() {
      // uncomment below and update the code to test the property expenseHeaderAccountOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedAssetsTagOptions (base name: "allowedAssetsTagOptions")', function() {
      // uncomment below and update the code to test the property allowedAssetsTagOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedLiabilitiesTagOptions (base name: "allowedLiabilitiesTagOptions")', function() {
      // uncomment below and update the code to test the property allowedLiabilitiesTagOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedEquityTagOptions (base name: "allowedEquityTagOptions")', function() {
      // uncomment below and update the code to test the property allowedEquityTagOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedIncomeTagOptions (base name: "allowedIncomeTagOptions")', function() {
      // uncomment below and update the code to test the property allowedIncomeTagOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedExpensesTagOptions (base name: "allowedExpensesTagOptions")', function() {
      // uncomment below and update the code to test the property allowedExpensesTagOptions
      //var instane = new ApacheFineract.GetGLAccountsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
