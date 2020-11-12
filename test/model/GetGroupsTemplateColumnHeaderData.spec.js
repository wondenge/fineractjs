

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
    instance = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
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

  describe('GetGroupsTemplateColumnHeaderData', function() {
    it('should create an instance of GetGroupsTemplateColumnHeaderData', function() {
      // uncomment below and update the code to test GetGroupsTemplateColumnHeaderData
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be.a(ApacheFineract.GetGroupsTemplateColumnHeaderData);
    });

    it('should have the property columnName (base name: "columnName")', function() {
      // uncomment below and update the code to test the property columnName
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnType (base name: "columnType")', function() {
      // uncomment below and update the code to test the property columnType
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnLength (base name: "columnLength")', function() {
      // uncomment below and update the code to test the property columnLength
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnDisplayType (base name: "columnDisplayType")', function() {
      // uncomment below and update the code to test the property columnDisplayType
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property isColumnNullable (base name: "isColumnNullable")', function() {
      // uncomment below and update the code to test the property isColumnNullable
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property isColumnPrimaryKey (base name: "isColumnPrimaryKey")', function() {
      // uncomment below and update the code to test the property isColumnPrimaryKey
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnValues (base name: "columnValues")', function() {
      // uncomment below and update the code to test the property columnValues
      //var instane = new ApacheFineract.GetGroupsTemplateColumnHeaderData();
      //expect(instance).to.be();
    });

  });

}));
