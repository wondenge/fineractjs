

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
    instance = new ApacheFineract.GetClientClientIdAddressesResponse();
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

  describe('GetClientClientIdAddressesResponse', function() {
    it('should create an instance of GetClientClientIdAddressesResponse', function() {
      // uncomment below and update the code to test GetClientClientIdAddressesResponse
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be.a(ApacheFineract.GetClientClientIdAddressesResponse);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressType (base name: "addressType")', function() {
      // uncomment below and update the code to test the property addressType
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressId (base name: "addressId")', function() {
      // uncomment below and update the code to test the property addressId
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressTypeId (base name: "addressTypeId")', function() {
      // uncomment below and update the code to test the property addressTypeId
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressLine3 (base name: "addressLine3")', function() {
      // uncomment below and update the code to test the property addressLine3
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property townVillage (base name: "townVillage")', function() {
      // uncomment below and update the code to test the property townVillage
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property countyDistrict (base name: "countyDistrict")', function() {
      // uncomment below and update the code to test the property countyDistrict
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property stateProvinceId (base name: "stateProvinceId")', function() {
      // uncomment below and update the code to test the property stateProvinceId
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property countryName (base name: "countryName")', function() {
      // uncomment below and update the code to test the property countryName
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property stateName (base name: "stateName")', function() {
      // uncomment below and update the code to test the property stateName
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property countryId (base name: "countryId")', function() {
      // uncomment below and update the code to test the property countryId
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new ApacheFineract.GetClientClientIdAddressesResponse();
      //expect(instance).to.be();
    });

  });

}));
