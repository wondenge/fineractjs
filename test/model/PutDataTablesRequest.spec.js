

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
    instance = new ApacheFineract.PutDataTablesRequest();
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

  describe('PutDataTablesRequest', function() {
    it('should create an instance of PutDataTablesRequest', function() {
      // uncomment below and update the code to test PutDataTablesRequest
      //var instane = new ApacheFineract.PutDataTablesRequest();
      //expect(instance).to.be.a(ApacheFineract.PutDataTablesRequest);
    });

    it('should have the property appTableName (base name: "appTableName")', function() {
      // uncomment below and update the code to test the property appTableName
      //var instane = new ApacheFineract.PutDataTablesRequest();
      //expect(instance).to.be();
    });

    it('should have the property dropColumns (base name: "dropColumns")', function() {
      // uncomment below and update the code to test the property dropColumns
      //var instane = new ApacheFineract.PutDataTablesRequest();
      //expect(instance).to.be();
    });

    it('should have the property addColumns (base name: "addColumns")', function() {
      // uncomment below and update the code to test the property addColumns
      //var instane = new ApacheFineract.PutDataTablesRequest();
      //expect(instance).to.be();
    });

    it('should have the property changeColumns (base name: "ChangeColumns")', function() {
      // uncomment below and update the code to test the property changeColumns
      //var instane = new ApacheFineract.PutDataTablesRequest();
      //expect(instance).to.be();
    });

  });

}));
