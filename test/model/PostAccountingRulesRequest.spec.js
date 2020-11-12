

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
    instance = new ApacheFineract.PostAccountingRulesRequest();
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

  describe('PostAccountingRulesRequest', function() {
    it('should create an instance of PostAccountingRulesRequest', function() {
      // uncomment below and update the code to test PostAccountingRulesRequest
      //var instane = new ApacheFineract.PostAccountingRulesRequest();
      //expect(instance).to.be.a(ApacheFineract.PostAccountingRulesRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostAccountingRulesRequest();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.PostAccountingRulesRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountToDebit (base name: "accountToDebit")', function() {
      // uncomment below and update the code to test the property accountToDebit
      //var instane = new ApacheFineract.PostAccountingRulesRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountToCredit (base name: "accountToCredit")', function() {
      // uncomment below and update the code to test the property accountToCredit
      //var instane = new ApacheFineract.PostAccountingRulesRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PostAccountingRulesRequest();
      //expect(instance).to.be();
    });

  });

}));
