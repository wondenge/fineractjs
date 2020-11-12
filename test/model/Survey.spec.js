

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
    instance = new ApacheFineract.Survey();
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

  describe('Survey', function() {
    it('should create an instance of Survey', function() {
      // uncomment below and update the code to test Survey
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be.a(ApacheFineract.Survey);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property components (base name: "components")', function() {
      // uncomment below and update the code to test the property components
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property questions (base name: "questions")', function() {
      // uncomment below and update the code to test the property questions
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property validFrom (base name: "validFrom")', function() {
      // uncomment below and update the code to test the property validFrom
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property validTo (base name: "validTo")', function() {
      // uncomment below and update the code to test the property validTo
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.Survey();
      //expect(instance).to.be();
    });

  });

}));
