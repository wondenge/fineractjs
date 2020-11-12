

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
    instance = new ApacheFineract.Client();
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

  describe('Client', function() {
    it('should create an instance of Client', function() {
      // uncomment below and update the code to test Client
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be.a(ApacheFineract.Client);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property office (base name: "office")', function() {
      // uncomment below and update the code to test the property office
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property transferToOffice (base name: "transferToOffice")', function() {
      // uncomment below and update the code to test the property transferToOffice
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property middlename (base name: "middlename")', function() {
      // uncomment below and update the code to test the property middlename
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property mobileNo (base name: "mobileNo")', function() {
      // uncomment below and update the code to test the property mobileNo
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property staff (base name: "staff")', function() {
      // uncomment below and update the code to test the property staff
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property accountNumberRequiresAutoGeneration (base name: "accountNumberRequiresAutoGeneration")', function() {
      // uncomment below and update the code to test the property accountNumberRequiresAutoGeneration
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property closureDate (base name: "closureDate")', function() {
      // uncomment below and update the code to test the property closureDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property withdrawalDate (base name: "withdrawalDate")', function() {
      // uncomment below and update the code to test the property withdrawalDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property legalForm (base name: "legalForm")', function() {
      // uncomment below and update the code to test the property legalForm
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property reopenedDate (base name: "reopenedDate")', function() {
      // uncomment below and update the code to test the property reopenedDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property proposedTransferDate (base name: "proposedTransferDate")', function() {
      // uncomment below and update the code to test the property proposedTransferDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property rejected (base name: "rejected")', function() {
      // uncomment below and update the code to test the property rejected
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function() {
      // uncomment below and update the code to test the property pending
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property notActive (base name: "notActive")', function() {
      // uncomment below and update the code to test the property notActive
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property transferInProgress (base name: "transferInProgress")', function() {
      // uncomment below and update the code to test the property transferInProgress
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property transferOnHold (base name: "transferOnHold")', function() {
      // uncomment below and update the code to test the property transferOnHold
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property notPending (base name: "notPending")', function() {
      // uncomment below and update the code to test the property notPending
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property activationLocalDate (base name: "activationLocalDate")', function() {
      // uncomment below and update the code to test the property activationLocalDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property transferInProgressOrOnHold (base name: "transferInProgressOrOnHold")', function() {
      // uncomment below and update the code to test the property transferInProgressOrOnHold
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property officeJoiningLocalDate (base name: "officeJoiningLocalDate")', function() {
      // uncomment below and update the code to test the property officeJoiningLocalDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property withdrawn (base name: "withdrawn")', function() {
      // uncomment below and update the code to test the property withdrawn
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property notStaff (base name: "notStaff")', function() {
      // uncomment below and update the code to test the property notStaff
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property rejectedDate (base name: "rejectedDate")', function() {
      // uncomment below and update the code to test the property rejectedDate
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property closed (base name: "closed")', function() {
      // uncomment below and update the code to test the property closed
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.Client();
      //expect(instance).to.be();
    });

  });

}));
