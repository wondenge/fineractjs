

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
    instance = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
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

  describe('PostSelfBeneficiariesTPTRequest', function() {
    it('should create an instance of PostSelfBeneficiariesTPTRequest', function() {
      // uncomment below and update the code to test PostSelfBeneficiariesTPTRequest
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be.a(ApacheFineract.PostSelfBeneficiariesTPTRequest);
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountNumber (base name: "accountNumber")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property transferLimit (base name: "transferLimit")', function() {
      // uncomment below and update the code to test the property transferLimit
      //var instane = new ApacheFineract.PostSelfBeneficiariesTPTRequest();
      //expect(instance).to.be();
    });

  });

}));
