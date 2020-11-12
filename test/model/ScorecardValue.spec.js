

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
    instance = new ApacheFineract.ScorecardValue();
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

  describe('ScorecardValue', function() {
    it('should create an instance of ScorecardValue', function() {
      // uncomment below and update the code to test ScorecardValue
      //var instane = new ApacheFineract.ScorecardValue();
      //expect(instance).to.be.a(ApacheFineract.ScorecardValue);
    });

    it('should have the property questionId (base name: "questionId")', function() {
      // uncomment below and update the code to test the property questionId
      //var instane = new ApacheFineract.ScorecardValue();
      //expect(instance).to.be();
    });

    it('should have the property responseId (base name: "responseId")', function() {
      // uncomment below and update the code to test the property responseId
      //var instane = new ApacheFineract.ScorecardValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new ApacheFineract.ScorecardValue();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new ApacheFineract.ScorecardValue();
      //expect(instance).to.be();
    });

  });

}));
