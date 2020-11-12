

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
    instance = new ApacheFineract.PutSelfBeneficiariesChanges();
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

  describe('PutSelfBeneficiariesChanges', function() {
    it('should create an instance of PutSelfBeneficiariesChanges', function() {
      // uncomment below and update the code to test PutSelfBeneficiariesChanges
      //var instane = new ApacheFineract.PutSelfBeneficiariesChanges();
      //expect(instance).to.be.a(ApacheFineract.PutSelfBeneficiariesChanges);
    });

    it('should have the property transferLimit (base name: "transferLimit")', function() {
      // uncomment below and update the code to test the property transferLimit
      //var instane = new ApacheFineract.PutSelfBeneficiariesChanges();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PutSelfBeneficiariesChanges();
      //expect(instance).to.be();
    });

  });

}));
