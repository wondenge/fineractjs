  

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
    instance = new ApacheFineract.Group();
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

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be.a(ApacheFineract.Group);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property office (base name: "office")', function() {
      // uncomment below and update the code to test the property office
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property staff (base name: "staff")', function() {
      // uncomment below and update the code to test the property staff
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property groupLevel (base name: "groupLevel")', function() {
      // uncomment below and update the code to test the property groupLevel
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property groupMembers (base name: "groupMembers")', function() {
      // uncomment below and update the code to test the property groupMembers
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property clientMembers (base name: "clientMembers")', function() {
      // uncomment below and update the code to test the property clientMembers
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property accountNumberRequiresAutoGeneration (base name: "accountNumberRequiresAutoGeneration")', function() {
      // uncomment below and update the code to test the property accountNumberRequiresAutoGeneration
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function() {
      // uncomment below and update the code to test the property pending
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property notActive (base name: "notActive")', function() {
      // uncomment below and update the code to test the property notActive
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property center (base name: "center")', function() {
      // uncomment below and update the code to test the property center
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property transferInProgress (base name: "transferInProgress")', function() {
      // uncomment below and update the code to test the property transferInProgress
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property transferOnHold (base name: "transferOnHold")', function() {
      // uncomment below and update the code to test the property transferOnHold
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property notPending (base name: "notPending")', function() {
      // uncomment below and update the code to test the property notPending
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property activationLocalDate (base name: "activationLocalDate")', function() {
      // uncomment below and update the code to test the property activationLocalDate
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property transferInProgressOrOnHold (base name: "transferInProgressOrOnHold")', function() {
      // uncomment below and update the code to test the property transferInProgressOrOnHold
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property childGroup (base name: "childGroup")', function() {
      // uncomment below and update the code to test the property childGroup
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property activeClientMembers (base name: "activeClientMembers")', function() {
      // uncomment below and update the code to test the property activeClientMembers
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property closed (base name: "closed")', function() {
      // uncomment below and update the code to test the property closed
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.Group();
      //expect(instance).to.be();
    });

  });

}));
