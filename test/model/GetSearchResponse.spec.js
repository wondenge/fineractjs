

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
    instance = new ApacheFineract.GetSearchResponse();
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

  describe('GetSearchResponse', function() {
    it('should create an instance of GetSearchResponse', function() {
      // uncomment below and update the code to test GetSearchResponse
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be.a(ApacheFineract.GetSearchResponse);
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityAccountNo (base name: "entityAccountNo")', function() {
      // uncomment below and update the code to test the property entityAccountNo
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityExternalId (base name: "entityExternalId")', function() {
      // uncomment below and update the code to test the property entityExternalId
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityName (base name: "entityName")', function() {
      // uncomment below and update the code to test the property entityName
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property parentName (base name: "parentName")', function() {
      // uncomment below and update the code to test the property parentName
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityStatus (base name: "entityStatus")', function() {
      // uncomment below and update the code to test the property entityStatus
      //var instane = new ApacheFineract.GetSearchResponse();
      //expect(instance).to.be();
    });

  });

}));
