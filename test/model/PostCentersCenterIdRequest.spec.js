

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
    instance = new ApacheFineract.PostCentersCenterIdRequest();
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

  describe('PostCentersCenterIdRequest', function() {
    it('should create an instance of PostCentersCenterIdRequest', function() {
      // uncomment below and update the code to test PostCentersCenterIdRequest
      //var instane = new ApacheFineract.PostCentersCenterIdRequest();
      //expect(instance).to.be.a(ApacheFineract.PostCentersCenterIdRequest);
    });

    it('should have the property closureReasonId (base name: "closureReasonId")', function() {
      // uncomment below and update the code to test the property closureReasonId
      //var instane = new ApacheFineract.PostCentersCenterIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property closureDate (base name: "closureDate")', function() {
      // uncomment below and update the code to test the property closureDate
      //var instane = new ApacheFineract.PostCentersCenterIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostCentersCenterIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostCentersCenterIdRequest();
      //expect(instance).to.be();
    });

  });

}));
