

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
    instance = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
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

  describe('GetGroupsGroupIdAccountsMemberLoanStatus', function() {
    it('should create an instance of GetGroupsGroupIdAccountsMemberLoanStatus', function() {
      // uncomment below and update the code to test GetGroupsGroupIdAccountsMemberLoanStatus
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be.a(ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property pendingApproval (base name: "pendingApproval")', function() {
      // uncomment below and update the code to test the property pendingApproval
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property waitingForDisbursal (base name: "waitingForDisbursal")', function() {
      // uncomment below and update the code to test the property waitingForDisbursal
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property closedObligationsMet (base name: "closedObligationsMet")', function() {
      // uncomment below and update the code to test the property closedObligationsMet
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property closedWrittenOff (base name: "closedWrittenOff")', function() {
      // uncomment below and update the code to test the property closedWrittenOff
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property closedRescheduled (base name: "closedRescheduled")', function() {
      // uncomment below and update the code to test the property closedRescheduled
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property closed (base name: "closed")', function() {
      // uncomment below and update the code to test the property closed
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

    it('should have the property overpaid (base name: "overpaid")', function() {
      // uncomment below and update the code to test the property overpaid
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsMemberLoanStatus();
      //expect(instance).to.be();
    });

  });

}));
