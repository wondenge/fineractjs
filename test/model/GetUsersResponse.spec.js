

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
    instance = new ApacheFineract.GetUsersResponse();
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

  describe('GetUsersResponse', function() {
    it('should create an instance of GetUsersResponse', function() {
      // uncomment below and update the code to test GetUsersResponse
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be.a(ApacheFineract.GetUsersResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property passwordNeverExpires (base name: "passwordNeverExpires")', function() {
      // uncomment below and update the code to test the property passwordNeverExpires
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property staff (base name: "staff")', function() {
      // uncomment below and update the code to test the property staff
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

    it('should have the property selectedRoles (base name: "selectedRoles")', function() {
      // uncomment below and update the code to test the property selectedRoles
      //var instane = new ApacheFineract.GetUsersResponse();
      //expect(instance).to.be();
    });

  });

}));
