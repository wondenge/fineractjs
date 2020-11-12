

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
    instance = new ApacheFineract.ScorecardData();
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

  describe('ScorecardData', function() {
    it('should create an instance of ScorecardData', function() {
      // uncomment below and update the code to test ScorecardData
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be.a(ApacheFineract.ScorecardData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

    it('should have the property surveyId (base name: "surveyId")', function() {
      // uncomment below and update the code to test the property surveyId
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

    it('should have the property surveyName (base name: "surveyName")', function() {
      // uncomment below and update the code to test the property surveyName
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

    it('should have the property scorecardValues (base name: "scorecardValues")', function() {
      // uncomment below and update the code to test the property scorecardValues
      //var instane = new ApacheFineract.ScorecardData();
      //expect(instance).to.be();
    });

  });

}));
