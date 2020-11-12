

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
    instance = new ApacheFineract.SurveyData();
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

  describe('SurveyData', function() {
    it('should create an instance of SurveyData', function() {
      // uncomment below and update the code to test SurveyData
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be.a(ApacheFineract.SurveyData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property componentDatas (base name: "componentDatas")', function() {
      // uncomment below and update the code to test the property componentDatas
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property questionDatas (base name: "questionDatas")', function() {
      // uncomment below and update the code to test the property questionDatas
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property validFrom (base name: "validFrom")', function() {
      // uncomment below and update the code to test the property validFrom
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

    it('should have the property validTo (base name: "validTo")', function() {
      // uncomment below and update the code to test the property validTo
      //var instane = new ApacheFineract.SurveyData();
      //expect(instance).to.be();
    });

  });

}));
