

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
    instance = new ApacheFineract.GetClientsTimeline();
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

  describe('GetClientsTimeline', function() {
    it('should create an instance of GetClientsTimeline', function() {
      // uncomment below and update the code to test GetClientsTimeline
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be.a(ApacheFineract.GetClientsTimeline);
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByUsername (base name: "submittedByUsername")', function() {
      // uncomment below and update the code to test the property submittedByUsername
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByFirstname (base name: "submittedByFirstname")', function() {
      // uncomment below and update the code to test the property submittedByFirstname
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByLastname (base name: "submittedByLastname")', function() {
      // uncomment below and update the code to test the property submittedByLastname
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedOnDate (base name: "activatedOnDate")', function() {
      // uncomment below and update the code to test the property activatedOnDate
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedByUsername (base name: "activatedByUsername")', function() {
      // uncomment below and update the code to test the property activatedByUsername
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedByFirstname (base name: "activatedByFirstname")', function() {
      // uncomment below and update the code to test the property activatedByFirstname
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedByLastname (base name: "activatedByLastname")', function() {
      // uncomment below and update the code to test the property activatedByLastname
      //var instane = new ApacheFineract.GetClientsTimeline();
      //expect(instance).to.be();
    });

  });

}));
