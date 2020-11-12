

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
    instance = new ApacheFineract.PostDataTablesRequest();
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

  describe('PostDataTablesRequest', function() {
    it('should create an instance of PostDataTablesRequest', function() {
      // uncomment below and update the code to test PostDataTablesRequest
      //var instane = new ApacheFineract.PostDataTablesRequest();
      //expect(instance).to.be.a(ApacheFineract.PostDataTablesRequest);
    });

    it('should have the property applicationTableName (base name: "applicationTableName")', function() {
      // uncomment below and update the code to test the property applicationTableName
      //var instane = new ApacheFineract.PostDataTablesRequest();
      //expect(instance).to.be();
    });

    it('should have the property registeredTableName (base name: "registeredTableName")', function() {
      // uncomment below and update the code to test the property registeredTableName
      //var instane = new ApacheFineract.PostDataTablesRequest();
      //expect(instance).to.be();
    });

    it('should have the property multiRow (base name: "multiRow")', function() {
      // uncomment below and update the code to test the property multiRow
      //var instane = new ApacheFineract.PostDataTablesRequest();
      //expect(instance).to.be();
    });

    it('should have the property columnHeaderData (base name: "columnHeaderData")', function() {
      // uncomment below and update the code to test the property columnHeaderData
      //var instane = new ApacheFineract.PostDataTablesRequest();
      //expect(instance).to.be();
    });

  });

}));
