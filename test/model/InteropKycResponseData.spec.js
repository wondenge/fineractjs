

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
    instance = new ApacheFineract.InteropKycResponseData();
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

  describe('InteropKycResponseData', function() {
    it('should create an instance of InteropKycResponseData', function() {
      // uncomment below and update the code to test InteropKycResponseData
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be.a(ApacheFineract.InteropKycResponseData);
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property loanId (base name: "loanId")', function() {
      // uncomment below and update the code to test the property loanId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property savingsId (base name: "savingsId")', function() {
      // uncomment below and update the code to test the property savingsId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property subResourceId (base name: "subResourceId")', function() {
      // uncomment below and update the code to test the property subResourceId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function() {
      // uncomment below and update the code to test the property changes
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property gsimId (base name: "gsimId")', function() {
      // uncomment below and update the code to test the property gsimId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property glimId (base name: "glimId")', function() {
      // uncomment below and update the code to test the property glimId
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property rollbackTransaction (base name: "rollbackTransaction")', function() {
      // uncomment below and update the code to test the property rollbackTransaction
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property nationality (base name: "nationality")', function() {
      // uncomment below and update the code to test the property nationality
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactPhone (base name: "contactPhone")', function() {
      // uncomment below and update the code to test the property contactPhone
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property idDocument (base name: "idDocument")', function() {
      // uncomment below and update the code to test the property idDocument
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property postalAddress (base name: "postalAddress")', function() {
      // uncomment below and update the code to test the property postalAddress
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property subjectName (base name: "subjectName")', function() {
      // uncomment below and update the code to test the property subjectName
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

    it('should have the property birthCountry (base name: "birthCountry")', function() {
      // uncomment below and update the code to test the property birthCountry
      //var instane = new ApacheFineract.InteropKycResponseData();
      //expect(instance).to.be();
    });

  });

}));
