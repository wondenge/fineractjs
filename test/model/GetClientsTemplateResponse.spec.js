

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
    instance = new ApacheFineract.GetClientsTemplateResponse();
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

  describe('GetClientsTemplateResponse', function() {
    it('should create an instance of GetClientsTemplateResponse', function() {
      // uncomment below and update the code to test GetClientsTemplateResponse
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetClientsTemplateResponse);
    });

    it('should have the property activationDate (base name: "activationDate")', function() {
      // uncomment below and update the code to test the property activationDate
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeOptions (base name: "officeOptions")', function() {
      // uncomment below and update the code to test the property officeOptions
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property staffOptions (base name: "staffOptions")', function() {
      // uncomment below and update the code to test the property staffOptions
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingProductOptions (base name: "savingProductOptions")', function() {
      // uncomment below and update the code to test the property savingProductOptions
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property datatables (base name: "datatables")', function() {
      // uncomment below and update the code to test the property datatables
      //var instane = new ApacheFineract.GetClientsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
