

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
    instance = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
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

  describe('GetTellersTellerIdCashiersTemplateResponse', function() {
    it('should create an instance of GetTellersTellerIdCashiersTemplateResponse', function() {
      // uncomment below and update the code to test GetTellersTellerIdCashiersTemplateResponse
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetTellersTellerIdCashiersTemplateResponse);
    });

    it('should have the property tellerId (base name: "tellerId")', function() {
      // uncomment below and update the code to test the property tellerId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerName (base name: "tellerName")', function() {
      // uncomment below and update the code to test the property tellerName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property staffOptions (base name: "staffOptions")', function() {
      // uncomment below and update the code to test the property staffOptions
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
