

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
    instance = new ApacheFineract.GetLoansTemplateResponse();
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

  describe('GetLoansTemplateResponse', function() {
    it('should create an instance of GetLoansTemplateResponse', function() {
      // uncomment below and update the code to test GetLoansTemplateResponse
      //var instane = new ApacheFineract.GetLoansTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetLoansTemplateResponse);
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetLoansTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ApacheFineract.GetLoansTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientOfficeId (base name: "clientOfficeId")', function() {
      // uncomment below and update the code to test the property clientOfficeId
      //var instane = new ApacheFineract.GetLoansTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.GetLoansTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property productOptions (base name: "productOptions")', function() {
      // uncomment below and update the code to test the property productOptions
      //var instane = new ApacheFineract.GetLoansTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
