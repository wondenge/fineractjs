

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
    instance = new ApacheFineract.BodyPartMediaType();
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

  describe('BodyPartMediaType', function() {
    it('should create an instance of BodyPartMediaType', function() {
      // uncomment below and update the code to test BodyPartMediaType
      //var instane = new ApacheFineract.BodyPartMediaType();
      //expect(instance).to.be.a(ApacheFineract.BodyPartMediaType);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.BodyPartMediaType();
      //expect(instance).to.be();
    });

    it('should have the property subtype (base name: "subtype")', function() {
      // uncomment below and update the code to test the property subtype
      //var instane = new ApacheFineract.BodyPartMediaType();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new ApacheFineract.BodyPartMediaType();
      //expect(instance).to.be();
    });

    it('should have the property wildcardType (base name: "wildcardType")', function() {
      // uncomment below and update the code to test the property wildcardType
      //var instane = new ApacheFineract.BodyPartMediaType();
      //expect(instance).to.be();
    });

    it('should have the property wildcardSubtype (base name: "wildcardSubtype")', function() {
      // uncomment below and update the code to test the property wildcardSubtype
      //var instane = new ApacheFineract.BodyPartMediaType();
      //expect(instance).to.be();
    });

  });

}));
