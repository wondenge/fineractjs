

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
    instance = new ApacheFineract.PostTaxesComponentsRequest();
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

  describe('PostTaxesComponentsRequest', function() {
    it('should create an instance of PostTaxesComponentsRequest', function() {
      // uncomment below and update the code to test PostTaxesComponentsRequest
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be.a(ApacheFineract.PostTaxesComponentsRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

    it('should have the property percentage (base name: "percentage")', function() {
      // uncomment below and update the code to test the property percentage
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

    it('should have the property creditAccountType (base name: "creditAccountType")', function() {
      // uncomment below and update the code to test the property creditAccountType
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

    it('should have the property creditAcountId (base name: "creditAcountId")', function() {
      // uncomment below and update the code to test the property creditAcountId
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.PostTaxesComponentsRequest();
      //expect(instance).to.be();
    });

  });

}));
