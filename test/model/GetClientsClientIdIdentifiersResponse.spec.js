

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
    instance = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
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

  describe('GetClientsClientIdIdentifiersResponse', function() {
    it('should create an instance of GetClientsClientIdIdentifiersResponse', function() {
      // uncomment below and update the code to test GetClientsClientIdIdentifiersResponse
      //var instane = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
      //expect(instance).to.be.a(ApacheFineract.GetClientsClientIdIdentifiersResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
      //expect(instance).to.be();
    });

    it('should have the property documentType (base name: "documentType")', function() {
      // uncomment below and update the code to test the property documentType
      //var instane = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
      //expect(instance).to.be();
    });

    it('should have the property documentKey (base name: "documentKey")', function() {
      // uncomment below and update the code to test the property documentKey
      //var instane = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetClientsClientIdIdentifiersResponse();
      //expect(instance).to.be();
    });

  });

}));
