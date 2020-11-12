  

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
    instance = new ApacheFineract.PostTaxesGroupTaxComponents();
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

  describe('PostTaxesGroupTaxComponents', function() {
    it('should create an instance of PostTaxesGroupTaxComponents', function() {
      // uncomment below and update the code to test PostTaxesGroupTaxComponents
      //var instane = new ApacheFineract.PostTaxesGroupTaxComponents();
      //expect(instance).to.be.a(ApacheFineract.PostTaxesGroupTaxComponents);
    });

    it('should have the property taxComponentId (base name: "taxComponentId")', function() {
      // uncomment below and update the code to test the property taxComponentId
      //var instane = new ApacheFineract.PostTaxesGroupTaxComponents();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.PostTaxesGroupTaxComponents();
      //expect(instance).to.be();
    });

  });

}));
