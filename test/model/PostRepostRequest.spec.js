

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
    instance = new ApacheFineract.PostRepostRequest();
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

  describe('PostRepostRequest', function() {
    it('should create an instance of PostRepostRequest', function() {
      // uncomment below and update the code to test PostRepostRequest
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be.a(ApacheFineract.PostRepostRequest);
    });

    it('should have the property reportName (base name: "reportName")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportType (base name: "reportType")', function() {
      // uncomment below and update the code to test the property reportType
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportSubType (base name: "reportSubType")', function() {
      // uncomment below and update the code to test the property reportSubType
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportCategory (base name: "reportCategory")', function() {
      // uncomment below and update the code to test the property reportCategory
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportSql (base name: "reportSql")', function() {
      // uncomment below and update the code to test the property reportSql
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportParameters (base name: "reportParameters")', function() {
      // uncomment below and update the code to test the property reportParameters
      //var instane = new ApacheFineract.PostRepostRequest();
      //expect(instance).to.be();
    });

  });

}));
