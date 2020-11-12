

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
    instance = new ApacheFineract.GetCentersTimeline();
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

  describe('GetCentersTimeline', function() {
    it('should create an instance of GetCentersTimeline', function() {
      // uncomment below and update the code to test GetCentersTimeline
      //var instane = new ApacheFineract.GetCentersTimeline();
      //expect(instance).to.be.a(ApacheFineract.GetCentersTimeline);
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.GetCentersTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByUsername (base name: "submittedByUsername")', function() {
      // uncomment below and update the code to test the property submittedByUsername
      //var instane = new ApacheFineract.GetCentersTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByFirstname (base name: "submittedByFirstname")', function() {
      // uncomment below and update the code to test the property submittedByFirstname
      //var instane = new ApacheFineract.GetCentersTimeline();
      //expect(instance).to.be();
    });

    it('should have the property submittedByLastname (base name: "submittedByLastname")', function() {
      // uncomment below and update the code to test the property submittedByLastname
      //var instane = new ApacheFineract.GetCentersTimeline();
      //expect(instance).to.be();
    });

  });

}));
