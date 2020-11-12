

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
    instance = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
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

  describe('PutDataTablesAppTableIdDatatableIdRequest', function() {
    it('should create an instance of PutDataTablesAppTableIdDatatableIdRequest', function() {
      // uncomment below and update the code to test PutDataTablesAppTableIdDatatableIdRequest
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be.a(ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest);
    });

    it('should have the property dateOfBirth (base name: "DateOfBirth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property educationCdHighest (base name: "Education_cdHighest")', function() {
      // uncomment below and update the code to test the property educationCdHighest
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property otherNotes (base name: "OtherNotes")', function() {
      // uncomment below and update the code to test the property otherNotes
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property pointsScore (base name: "PointsScore")', function() {
      // uncomment below and update the code to test the property pointsScore
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PutDataTablesAppTableIdDatatableIdRequest();
      //expect(instance).to.be();
    });

  });

}));
