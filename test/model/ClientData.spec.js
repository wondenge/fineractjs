

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
    instance = new ApacheFineract.ClientData();
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

  describe('ClientData', function() {
    it('should create an instance of ClientData', function() {
      // uncomment below and update the code to test ClientData
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be.a(ApacheFineract.ClientData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property activationDate (base name: "activationDate")', function() {
      // uncomment below and update the code to test the property activationDate
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property imageId (base name: "imageId")', function() {
      // uncomment below and update the code to test the property imageId
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property imagePresent (base name: "imagePresent")', function() {
      // uncomment below and update the code to test the property imagePresent
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property savingsAccountId (base name: "savingsAccountId")', function() {
      // uncomment below and update the code to test the property savingsAccountId
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property isAddressEnabled (base name: "isAddressEnabled")', function() {
      // uncomment below and update the code to test the property isAddressEnabled
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

    it('should have the property rowIndex (base name: "rowIndex")', function() {
      // uncomment below and update the code to test the property rowIndex
      //var instane = new ApacheFineract.ClientData();
      //expect(instance).to.be();
    });

  });

}));
