

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
    instance = new ApacheFineract.Staff();
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

  describe('Staff', function() {
    it('should create an instance of Staff', function() {
      // uncomment below and update the code to test Staff
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be.a(ApacheFineract.Staff);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

    it('should have the property loanOfficer (base name: "loanOfficer")', function() {
      // uncomment below and update the code to test the property loanOfficer
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

    it('should have the property notLoanOfficer (base name: "notLoanOfficer")', function() {
      // uncomment below and update the code to test the property notLoanOfficer
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

    it('should have the property notActive (base name: "notActive")', function() {
      // uncomment below and update the code to test the property notActive
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.Staff();
      //expect(instance).to.be();
    });

  });

}));
