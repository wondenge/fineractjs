

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
    instance = new ApacheFineract.GetGlClosureResponse();
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

  describe('GetGlClosureResponse', function() {
    it('should create an instance of GetGlClosureResponse', function() {
      // uncomment below and update the code to test GetGlClosureResponse
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be.a(ApacheFineract.GetGlClosureResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property closingDate (base name: "closingDate")', function() {
      // uncomment below and update the code to test the property closingDate
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedDate (base name: "lastUpdatedDate")', function() {
      // uncomment below and update the code to test the property lastUpdatedDate
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdByUserId (base name: "createdByUserId")', function() {
      // uncomment below and update the code to test the property createdByUserId
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdByUsername (base name: "createdByUsername")', function() {
      // uncomment below and update the code to test the property createdByUsername
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedByUserId (base name: "lastUpdatedByUserId")', function() {
      // uncomment below and update the code to test the property lastUpdatedByUserId
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedByUsername (base name: "lastUpdatedByUsername")', function() {
      // uncomment below and update the code to test the property lastUpdatedByUsername
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new ApacheFineract.GetGlClosureResponse();
      //expect(instance).to.be();
    });

  });

}));
