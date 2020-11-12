  

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
    instance = new ApacheFineract.Scorecard();
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

  describe('Scorecard', function() {
    it('should create an instance of Scorecard', function() {
      // uncomment below and update the code to test Scorecard
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be.a(ApacheFineract.Scorecard);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property survey (base name: "survey")', function() {
      // uncomment below and update the code to test the property survey
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property question (base name: "question")', function() {
      // uncomment below and update the code to test the property question
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property appUser (base name: "appUser")', function() {
      // uncomment below and update the code to test the property appUser
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.Scorecard();
      //expect(instance).to.be();
    });

  });

}));
