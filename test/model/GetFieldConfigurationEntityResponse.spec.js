

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
    instance = new ApacheFineract.GetFieldConfigurationEntityResponse();
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

  describe('GetFieldConfigurationEntityResponse', function() {
    it('should create an instance of GetFieldConfigurationEntityResponse', function() {
      // uncomment below and update the code to test GetFieldConfigurationEntityResponse
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be.a(ApacheFineract.GetFieldConfigurationEntityResponse);
    });

    it('should have the property fieldConfigurationId (base name: "fieldConfigurationId")', function() {
      // uncomment below and update the code to test the property fieldConfigurationId
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

    it('should have the property subentity (base name: "subentity")', function() {
      // uncomment below and update the code to test the property subentity
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "is_enabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

    it('should have the property isMandatory (base name: "is_mandatory")', function() {
      // uncomment below and update the code to test the property isMandatory
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

    it('should have the property validationRegex (base name: "validation_regex")', function() {
      // uncomment below and update the code to test the property validationRegex
      //var instane = new ApacheFineract.GetFieldConfigurationEntityResponse();
      //expect(instance).to.be();
    });

  });

}));
