

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
    instance = new ApacheFineract.FormDataContentDisposition();
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

  describe('FormDataContentDisposition', function() {
    it('should create an instance of FormDataContentDisposition', function() {
      // uncomment below and update the code to test FormDataContentDisposition
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be.a(ApacheFineract.FormDataContentDisposition);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "fileName")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property modificationDate (base name: "modificationDate")', function() {
      // uncomment below and update the code to test the property modificationDate
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property readDate (base name: "readDate")', function() {
      // uncomment below and update the code to test the property readDate
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.FormDataContentDisposition();
      //expect(instance).to.be();
    });

  });

}));
