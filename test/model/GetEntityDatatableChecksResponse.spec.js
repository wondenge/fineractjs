

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
    instance = new ApacheFineract.GetEntityDatatableChecksResponse();
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

  describe('GetEntityDatatableChecksResponse', function() {
    it('should create an instance of GetEntityDatatableChecksResponse', function() {
      // uncomment below and update the code to test GetEntityDatatableChecksResponse
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be.a(ApacheFineract.GetEntityDatatableChecksResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property datatableName (base name: "datatableName")', function() {
      // uncomment below and update the code to test the property datatableName
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property systemDefined (base name: "systemDefined")', function() {
      // uncomment below and update the code to test the property systemDefined
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new ApacheFineract.GetEntityDatatableChecksResponse();
      //expect(instance).to.be();
    });

  });

}));
