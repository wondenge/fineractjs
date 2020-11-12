

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
    instance = new ApacheFineract.GLAccountData();
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

  describe('GLAccountData', function() {
    it('should create an instance of GLAccountData', function() {
      // uncomment below and update the code to test GLAccountData
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be.a(ApacheFineract.GLAccountData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

    it('should have the property glCode (base name: "glCode")', function() {
      // uncomment below and update the code to test the property glCode
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

    it('should have the property tagId (base name: "tagId")', function() {
      // uncomment below and update the code to test the property tagId
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

    it('should have the property rowIndex (base name: "rowIndex")', function() {
      // uncomment below and update the code to test the property rowIndex
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "typeId")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new ApacheFineract.GLAccountData();
      //expect(instance).to.be();
    });

  });

}));
