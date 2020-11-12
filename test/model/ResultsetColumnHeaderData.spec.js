

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
    instance = new ApacheFineract.ResultsetColumnHeaderData();
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

  describe('ResultsetColumnHeaderData', function() {
    it('should create an instance of ResultsetColumnHeaderData', function() {
      // uncomment below and update the code to test ResultsetColumnHeaderData
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be.a(ApacheFineract.ResultsetColumnHeaderData);
    });

    it('should have the property columnName (base name: "columnName")', function() {
      // uncomment below and update the code to test the property columnName
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnType (base name: "columnType")', function() {
      // uncomment below and update the code to test the property columnType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnLength (base name: "columnLength")', function() {
      // uncomment below and update the code to test the property columnLength
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnDisplayType (base name: "columnDisplayType")', function() {
      // uncomment below and update the code to test the property columnDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property columnCode (base name: "columnCode")', function() {
      // uncomment below and update the code to test the property columnCode
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property optional (base name: "optional")', function() {
      // uncomment below and update the code to test the property optional
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property _string (base name: "string")', function() {
      // uncomment below and update the code to test the property _string
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property dateDisplayType (base name: "dateDisplayType")', function() {
      // uncomment below and update the code to test the property dateDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeDisplayType (base name: "dateTimeDisplayType")', function() {
      // uncomment below and update the code to test the property dateTimeDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property integerDisplayType (base name: "integerDisplayType")', function() {
      // uncomment below and update the code to test the property integerDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property decimalDisplayType (base name: "decimalDisplayType")', function() {
      // uncomment below and update the code to test the property decimalDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property booleanDisplayType (base name: "booleanDisplayType")', function() {
      // uncomment below and update the code to test the property booleanDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property codeValueDisplayType (base name: "codeValueDisplayType")', function() {
      // uncomment below and update the code to test the property codeValueDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property codeLookupDisplayType (base name: "codeLookupDisplayType")', function() {
      // uncomment below and update the code to test the property codeLookupDisplayType
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

    it('should have the property mandatory (base name: "mandatory")', function() {
      // uncomment below and update the code to test the property mandatory
      //var instane = new ApacheFineract.ResultsetColumnHeaderData();
      //expect(instance).to.be();
    });

  });

}));
