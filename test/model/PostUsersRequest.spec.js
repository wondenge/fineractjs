

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
    instance = new ApacheFineract.PostUsersRequest();
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

  describe('PostUsersRequest', function() {
    it('should create an instance of PostUsersRequest', function() {
      // uncomment below and update the code to test PostUsersRequest
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be.a(ApacheFineract.PostUsersRequest);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property staffId (base name: "staffId")', function() {
      // uncomment below and update the code to test the property staffId
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendPasswordToEmail (base name: "sendPasswordToEmail")', function() {
      // uncomment below and update the code to test the property sendPasswordToEmail
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

    it('should have the property isSelfServiceUser (base name: "isSelfServiceUser")', function() {
      // uncomment below and update the code to test the property isSelfServiceUser
      //var instane = new ApacheFineract.PostUsersRequest();
      //expect(instance).to.be();
    });

  });

}));
