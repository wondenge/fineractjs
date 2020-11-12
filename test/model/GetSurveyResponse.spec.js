  

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
    instance = new ApacheFineract.GetSurveyResponse();
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

  describe('GetSurveyResponse', function() {
    it('should create an instance of GetSurveyResponse', function() {
      // uncomment below and update the code to test GetSurveyResponse
      //var instane = new ApacheFineract.GetSurveyResponse();
      //expect(instance).to.be.a(ApacheFineract.GetSurveyResponse);
    });

    it('should have the property datatableData (base name: "datatableData")', function() {
      // uncomment below and update the code to test the property datatableData
      //var instane = new ApacheFineract.GetSurveyResponse();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new ApacheFineract.GetSurveyResponse();
      //expect(instance).to.be();
    });

  });

}));
