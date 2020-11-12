

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
    instance = new ApacheFineract.PostDataTablesAppTableIdRequest();
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

  describe('PostDataTablesAppTableIdRequest', function() {
    it('should create an instance of PostDataTablesAppTableIdRequest', function() {
      // uncomment below and update the code to test PostDataTablesAppTableIdRequest
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be.a(ApacheFineract.PostDataTablesAppTableIdRequest);
    });

    it('should have the property businessDescription (base name: "BusinessDescription")', function() {
      // uncomment below and update the code to test the property businessDescription
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "Comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property educationCv (base name: "Education_cv")', function() {
      // uncomment below and update the code to test the property educationCv
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property genderCd (base name: "Gender_cd")', function() {
      // uncomment below and update the code to test the property genderCd
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property highestRatePaid (base name: "HighestRatePaid")', function() {
      // uncomment below and update the code to test the property highestRatePaid
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property nextVisit (base name: "NextVisit")', function() {
      // uncomment below and update the code to test the property nextVisit
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property yearsinBusiness (base name: "YearsinBusiness")', function() {
      // uncomment below and update the code to test the property yearsinBusiness
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostDataTablesAppTableIdRequest();
      //expect(instance).to.be();
    });

  });

}));
