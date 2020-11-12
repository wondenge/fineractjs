

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
    instance = new ApacheFineract.JobDetailHistoryDataSwagger();
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

  describe('JobDetailHistoryDataSwagger', function() {
    it('should create an instance of JobDetailHistoryDataSwagger', function() {
      // uncomment below and update the code to test JobDetailHistoryDataSwagger
      //var instane = new ApacheFineract.JobDetailHistoryDataSwagger();
      //expect(instance).to.be.a(ApacheFineract.JobDetailHistoryDataSwagger);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new ApacheFineract.JobDetailHistoryDataSwagger();
      //expect(instance).to.be();
    });

    it('should have the property jobRunStartTime (base name: "jobRunStartTime")', function() {
      // uncomment below and update the code to test the property jobRunStartTime
      //var instane = new ApacheFineract.JobDetailHistoryDataSwagger();
      //expect(instance).to.be();
    });

    it('should have the property jobRunEndTime (base name: "jobRunEndTime")', function() {
      // uncomment below and update the code to test the property jobRunEndTime
      //var instane = new ApacheFineract.JobDetailHistoryDataSwagger();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.JobDetailHistoryDataSwagger();
      //expect(instance).to.be();
    });

    it('should have the property triggerType (base name: "triggerType")', function() {
      // uncomment below and update the code to test the property triggerType
      //var instane = new ApacheFineract.JobDetailHistoryDataSwagger();
      //expect(instance).to.be();
    });

  });

}));
