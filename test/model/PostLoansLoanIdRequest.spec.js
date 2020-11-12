

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
    instance = new ApacheFineract.PostLoansLoanIdRequest();
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

  describe('PostLoansLoanIdRequest', function() {
    it('should create an instance of PostLoansLoanIdRequest', function() {
      // uncomment below and update the code to test PostLoansLoanIdRequest
      //var instane = new ApacheFineract.PostLoansLoanIdRequest();
      //expect(instance).to.be.a(ApacheFineract.PostLoansLoanIdRequest);
    });

    it('should have the property toLoanOfficerId (base name: "toLoanOfficerId")', function() {
      // uncomment below and update the code to test the property toLoanOfficerId
      //var instane = new ApacheFineract.PostLoansLoanIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property assignmentDate (base name: "assignmentDate")', function() {
      // uncomment below and update the code to test the property assignmentDate
      //var instane = new ApacheFineract.PostLoansLoanIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostLoansLoanIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostLoansLoanIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromLoanOfficerId (base name: "fromLoanOfficerId")', function() {
      // uncomment below and update the code to test the property fromLoanOfficerId
      //var instane = new ApacheFineract.PostLoansLoanIdRequest();
      //expect(instance).to.be();
    });

  });

}));
