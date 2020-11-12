

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
    instance = new ApacheFineract.OfficeData();
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

  describe('OfficeData', function() {
    it('should create an instance of OfficeData', function() {
      // uncomment below and update the code to test OfficeData
      //var instane = new ApacheFineract.OfficeData();
      //expect(instance).to.be.a(ApacheFineract.OfficeData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.OfficeData();
      //expect(instance).to.be();
    });

    it('should have the property openingDate (base name: "openingDate")', function() {
      // uncomment below and update the code to test the property openingDate
      //var instane = new ApacheFineract.OfficeData();
      //expect(instance).to.be();
    });

    it('should have the property hierarchy (base name: "hierarchy")', function() {
      // uncomment below and update the code to test the property hierarchy
      //var instane = new ApacheFineract.OfficeData();
      //expect(instance).to.be();
    });

    it('should have the property rowIndex (base name: "rowIndex")', function() {
      // uncomment below and update the code to test the property rowIndex
      //var instane = new ApacheFineract.OfficeData();
      //expect(instance).to.be();
    });

  });

}));
