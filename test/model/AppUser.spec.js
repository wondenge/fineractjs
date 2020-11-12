

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
    instance = new ApacheFineract.AppUser();
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

  describe('AppUser', function() {
    it('should create an instance of AppUser', function() {
      // uncomment below and update the code to test AppUser
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be.a(ApacheFineract.AppUser);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property accountNonExpired (base name: "accountNonExpired")', function() {
      // uncomment below and update the code to test the property accountNonExpired
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property accountNonLocked (base name: "accountNonLocked")', function() {
      // uncomment below and update the code to test the property accountNonLocked
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property credentialsNonExpired (base name: "credentialsNonExpired")', function() {
      // uncomment below and update the code to test the property credentialsNonExpired
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property office (base name: "office")', function() {
      // uncomment below and update the code to test the property office
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property staff (base name: "staff")', function() {
      // uncomment below and update the code to test the property staff
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property lastTimePasswordUpdated (base name: "lastTimePasswordUpdated")', function() {
      // uncomment below and update the code to test the property lastTimePasswordUpdated
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property passwordNeverExpires (base name: "passwordNeverExpires")', function() {
      // uncomment below and update the code to test the property passwordNeverExpires
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property appUserClientMappings (base name: "appUserClientMappings")', function() {
      // uncomment below and update the code to test the property appUserClientMappings
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property selfServiceUser (base name: "selfServiceUser")', function() {
      // uncomment below and update the code to test the property selfServiceUser
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property systemUser (base name: "systemUser")', function() {
      // uncomment below and update the code to test the property systemUser
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property staffId (base name: "staffId")', function() {
      // uncomment below and update the code to test the property staffId
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property staffDisplayName (base name: "staffDisplayName")', function() {
      // uncomment below and update the code to test the property staffDisplayName
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property notEnabled (base name: "notEnabled")', function() {
      // uncomment below and update the code to test the property notEnabled
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property authorities (base name: "authorities")', function() {
      // uncomment below and update the code to test the property authorities
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.AppUser();
      //expect(instance).to.be();
    });

  });

}));
