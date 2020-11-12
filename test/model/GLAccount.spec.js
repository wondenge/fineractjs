

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
    instance = new ApacheFineract.GLAccount();
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

  describe('GLAccount', function() {
    it('should create an instance of GLAccount', function() {
      // uncomment below and update the code to test GLAccount
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be.a(ApacheFineract.GLAccount);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property glCode (base name: "glCode")', function() {
      // uncomment below and update the code to test the property glCode
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property manualEntriesAllowed (base name: "manualEntriesAllowed")', function() {
      // uncomment below and update the code to test the property manualEntriesAllowed
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property usage (base name: "usage")', function() {
      // uncomment below and update the code to test the property usage
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property headerAccount (base name: "headerAccount")', function() {
      // uncomment below and update the code to test the property headerAccount
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property detailAccount (base name: "detailAccount")', function() {
      // uncomment below and update the code to test the property detailAccount
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.GLAccount();
      //expect(instance).to.be();
    });

  });

}));
