  

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
    instance = new ApacheFineract.PutTaxesGroupChanges();
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

  describe('PutTaxesGroupChanges', function() {
    it('should create an instance of PutTaxesGroupChanges', function() {
      // uncomment below and update the code to test PutTaxesGroupChanges
      //var instane = new ApacheFineract.PutTaxesGroupChanges();
      //expect(instance).to.be.a(ApacheFineract.PutTaxesGroupChanges);
    });

    it('should have the property addComponents (base name: "addComponents")', function() {
      // uncomment below and update the code to test the property addComponents
      //var instane = new ApacheFineract.PutTaxesGroupChanges();
      //expect(instance).to.be();
    });

    it('should have the property modifiedComponents (base name: "modifiedComponents")', function() {
      // uncomment below and update the code to test the property modifiedComponents
      //var instane = new ApacheFineract.PutTaxesGroupChanges();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PutTaxesGroupChanges();
      //expect(instance).to.be();
    });

  });

}));
