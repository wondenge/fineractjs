

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
    instance = new ApacheFineract.PostEntityDatatableChecksTemplateRequest();
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

  describe('PostEntityDatatableChecksTemplateRequest', function() {
    it('should create an instance of PostEntityDatatableChecksTemplateRequest', function() {
      // uncomment below and update the code to test PostEntityDatatableChecksTemplateRequest
      //var instane = new ApacheFineract.PostEntityDatatableChecksTemplateRequest();
      //expect(instance).to.be.a(ApacheFineract.PostEntityDatatableChecksTemplateRequest);
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new ApacheFineract.PostEntityDatatableChecksTemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.PostEntityDatatableChecksTemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property datatableName (base name: "datatableName")', function() {
      // uncomment below and update the code to test the property datatableName
      //var instane = new ApacheFineract.PostEntityDatatableChecksTemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.PostEntityDatatableChecksTemplateRequest();
      //expect(instance).to.be();
    });

  });

}));
