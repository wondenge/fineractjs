

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
    instance = new ApacheFineract.PostStaffRequest();
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

  describe('PostStaffRequest', function() {
    it('should create an instance of PostStaffRequest', function() {
      // uncomment below and update the code to test PostStaffRequest
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be.a(ApacheFineract.PostStaffRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property isLoanOfficer (base name: "isLoanOfficer")', function() {
      // uncomment below and update the code to test the property isLoanOfficer
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property mobileNo (base name: "mobileNo")', function() {
      // uncomment below and update the code to test the property mobileNo
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property joiningDate (base name: "joiningDate")', function() {
      // uncomment below and update the code to test the property joiningDate
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostStaffRequest();
      //expect(instance).to.be();
    });

  });

}));
