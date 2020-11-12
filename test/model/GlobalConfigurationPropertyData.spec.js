

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
    instance = new ApacheFineract.GlobalConfigurationPropertyData();
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

  describe('GlobalConfigurationPropertyData', function() {
    it('should create an instance of GlobalConfigurationPropertyData', function() {
      // uncomment below and update the code to test GlobalConfigurationPropertyData
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be.a(ApacheFineract.GlobalConfigurationPropertyData);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

    it('should have the property dateValue (base name: "dateValue")', function() {
      // uncomment below and update the code to test the property dateValue
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

    it('should have the property trapDoor (base name: "trapDoor")', function() {
      // uncomment below and update the code to test the property trapDoor
      //var instane = new ApacheFineract.GlobalConfigurationPropertyData();
      //expect(instance).to.be();
    });

  });

}));
