

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
    instance = new ApacheFineract.GetPermissionsResponse();
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

  describe('GetPermissionsResponse', function() {
    it('should create an instance of GetPermissionsResponse', function() {
      // uncomment below and update the code to test GetPermissionsResponse
      //var instane = new ApacheFineract.GetPermissionsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetPermissionsResponse);
    });

    it('should have the property grouping (base name: "grouping")', function() {
      // uncomment below and update the code to test the property grouping
      //var instane = new ApacheFineract.GetPermissionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ApacheFineract.GetPermissionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityName (base name: "entityName")', function() {
      // uncomment below and update the code to test the property entityName
      //var instane = new ApacheFineract.GetPermissionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property actionName (base name: "actionName")', function() {
      // uncomment below and update the code to test the property actionName
      //var instane = new ApacheFineract.GetPermissionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property selected (base name: "selected")', function() {
      // uncomment below and update the code to test the property selected
      //var instane = new ApacheFineract.GetPermissionsResponse();
      //expect(instance).to.be();
    });

  });

}));
