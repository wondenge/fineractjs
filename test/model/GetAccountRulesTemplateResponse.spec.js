

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
    instance = new ApacheFineract.GetAccountRulesTemplateResponse();
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

  describe('GetAccountRulesTemplateResponse', function() {
    it('should create an instance of GetAccountRulesTemplateResponse', function() {
      // uncomment below and update the code to test GetAccountRulesTemplateResponse
      //var instane = new ApacheFineract.GetAccountRulesTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountRulesTemplateResponse);
    });

    it('should have the property systemDefined (base name: "systemDefined")', function() {
      // uncomment below and update the code to test the property systemDefined
      //var instane = new ApacheFineract.GetAccountRulesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedOffices (base name: "allowedOffices")', function() {
      // uncomment below and update the code to test the property allowedOffices
      //var instane = new ApacheFineract.GetAccountRulesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedAccounts (base name: "allowedAccounts")', function() {
      // uncomment below and update the code to test the property allowedAccounts
      //var instane = new ApacheFineract.GetAccountRulesTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
