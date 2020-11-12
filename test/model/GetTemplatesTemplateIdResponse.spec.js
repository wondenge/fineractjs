

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
    instance = new ApacheFineract.GetTemplatesTemplateIdResponse();
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

  describe('GetTemplatesTemplateIdResponse', function() {
    it('should create an instance of GetTemplatesTemplateIdResponse', function() {
      // uncomment below and update the code to test GetTemplatesTemplateIdResponse
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetTemplatesTemplateIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property mappers (base name: "mappers")', function() {
      // uncomment below and update the code to test the property mappers
      //var instane = new ApacheFineract.GetTemplatesTemplateIdResponse();
      //expect(instance).to.be();
    });

  });

}));
