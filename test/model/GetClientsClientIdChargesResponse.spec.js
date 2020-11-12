

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
    instance = new ApacheFineract.GetClientsClientIdChargesResponse();
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

  describe('GetClientsClientIdChargesResponse', function() {
    it('should create an instance of GetClientsClientIdChargesResponse', function() {
      // uncomment below and update the code to test GetClientsClientIdChargesResponse
      //var instane = new ApacheFineract.GetClientsClientIdChargesResponse();
      //expect(instance).to.be.a(ApacheFineract.GetClientsClientIdChargesResponse);
    });

    it('should have the property totalFilteredRecords (base name: "totalFilteredRecords")', function() {
      // uncomment below and update the code to test the property totalFilteredRecords
      //var instane = new ApacheFineract.GetClientsClientIdChargesResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageItems (base name: "pageItems")', function() {
      // uncomment below and update the code to test the property pageItems
      //var instane = new ApacheFineract.GetClientsClientIdChargesResponse();
      //expect(instance).to.be();
    });

  });

}));
