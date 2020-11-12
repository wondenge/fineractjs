

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
    instance = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
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

  describe('GetEntityDatatableChecksTemplateResponse', function() {
    it('should create an instance of GetEntityDatatableChecksTemplateResponse', function() {
      // uncomment below and update the code to test GetEntityDatatableChecksTemplateResponse
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetEntityDatatableChecksTemplateResponse);
    });

    it('should have the property entities (base name: "entities")', function() {
      // uncomment below and update the code to test the property entities
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusClient (base name: "statusClient")', function() {
      // uncomment below and update the code to test the property statusClient
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusGroup (base name: "statusGroup")', function() {
      // uncomment below and update the code to test the property statusGroup
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusSavings (base name: "statusSavings")', function() {
      // uncomment below and update the code to test the property statusSavings
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusLoans (base name: "statusLoans")', function() {
      // uncomment below and update the code to test the property statusLoans
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property datatables (base name: "datatables")', function() {
      // uncomment below and update the code to test the property datatables
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanProductDatas (base name: "loanProductDatas")', function() {
      // uncomment below and update the code to test the property loanProductDatas
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsProductDatas (base name: "savingsProductDatas")', function() {
      // uncomment below and update the code to test the property savingsProductDatas
      //var instane = new ApacheFineract.GetEntityDatatableChecksTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
