

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
    instance = new ApacheFineract.FormDataBodyPart();
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

  describe('FormDataBodyPart', function() {
    it('should create an instance of FormDataBodyPart', function() {
      // uncomment below and update the code to test FormDataBodyPart
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be.a(ApacheFineract.FormDataBodyPart);
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "mediaType")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property providers (base name: "providers")', function() {
      // uncomment below and update the code to test the property providers
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property simple (base name: "simple")', function() {
      // uncomment below and update the code to test the property simple
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property formDataContentDisposition (base name: "formDataContentDisposition")', function() {
      // uncomment below and update the code to test the property formDataContentDisposition
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property contentDisposition (base name: "contentDisposition")', function() {
      // uncomment below and update the code to test the property contentDisposition
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

    it('should have the property parameterizedHeaders (base name: "parameterizedHeaders")', function() {
      // uncomment below and update the code to test the property parameterizedHeaders
      //var instane = new ApacheFineract.FormDataBodyPart();
      //expect(instance).to.be();
    });

  });

}));
