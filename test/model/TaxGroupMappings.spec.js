

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
    instance = new ApacheFineract.TaxGroupMappings();
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

  describe('TaxGroupMappings', function() {
    it('should create an instance of TaxGroupMappings', function() {
      // uncomment below and update the code to test TaxGroupMappings
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be.a(ApacheFineract.TaxGroupMappings);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedBy (base name: "lastModifiedBy")', function() {
      // uncomment below and update the code to test the property lastModifiedBy
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property taxComponent (base name: "taxComponent")', function() {
      // uncomment below and update the code to test the property taxComponent
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.TaxGroupMappings();
      //expect(instance).to.be();
    });

  });

}));
