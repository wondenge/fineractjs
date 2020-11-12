

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
    instance = new ApacheFineract.GetUserDetailsResponse();
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

  describe('GetUserDetailsResponse', function() {
    it('should create an instance of GetUserDetailsResponse', function() {
      // uncomment below and update the code to test GetUserDetailsResponse
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetUserDetailsResponse);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property accessToken (base name: "accessToken")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property authenticated (base name: "authenticated")', function() {
      // uncomment below and update the code to test the property authenticated
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property staffId (base name: "staffId")', function() {
      // uncomment below and update the code to test the property staffId
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property staffDisplayName (base name: "staffDisplayName")', function() {
      // uncomment below and update the code to test the property staffDisplayName
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property organisationalRole (base name: "organisationalRole")', function() {
      // uncomment below and update the code to test the property organisationalRole
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new ApacheFineract.GetUserDetailsResponse();
      //expect(instance).to.be();
    });

  });

}));
