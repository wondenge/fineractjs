

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
    instance = new ApacheFineract.GetAccountsTimeline();
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

  describe('GetAccountsTimeline', function() {
    it('should create an instance of GetAccountsTimeline', function() {
      // uncomment below and update the code to test GetAccountsTimeline
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be.a(ApacheFineract.GetAccountsTimeline);
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByUsername (base name: "submittedByUsername")', function() {
      // uncomment below and update the code to test the property submittedByUsername
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByFirstname (base name: "submittedByFirstname")', function() {
      // uncomment below and update the code to test the property submittedByFirstname
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByLastname (base name: "submittedByLastname")', function() {
      // uncomment below and update the code to test the property submittedByLastname
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property approvedDate (base name: "approvedDate")', function() {
      // uncomment below and update the code to test the property approvedDate
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property approvedByUsername (base name: "approvedByUsername")', function() {
      // uncomment below and update the code to test the property approvedByUsername
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property approvedByFirstname (base name: "approvedByFirstname")', function() {
      // uncomment below and update the code to test the property approvedByFirstname
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property approvedByLastname (base name: "approvedByLastname")', function() {
      // uncomment below and update the code to test the property approvedByLastname
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedDate (base name: "activatedDate")', function() {
      // uncomment below and update the code to test the property activatedDate
      //var instane = new ApacheFineract.GetAccountsTimeline();
      //expect(instance).to.be();
    });

  });

}));
