

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
    instance = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
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

  describe('GetEntityTypeEntityIdDocumentsResponse', function() {
    it('should create an instance of GetEntityTypeEntityIdDocumentsResponse', function() {
      // uncomment below and update the code to test GetEntityTypeEntityIdDocumentsResponse
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetEntityTypeEntityIdDocumentsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property parentEntityType (base name: "parentEntityType")', function() {
      // uncomment below and update the code to test the property parentEntityType
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property parentEntityId (base name: "parentEntityId")', function() {
      // uncomment below and update the code to test the property parentEntityId
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "fileName")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

    it('should have the property storageType (base name: "storageType")', function() {
      // uncomment below and update the code to test the property storageType
      //var instane = new ApacheFineract.GetEntityTypeEntityIdDocumentsResponse();
      //expect(instance).to.be();
    });

  });

}));
