

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
    instance = new ApacheFineract.GetOfficesTemplateResponse();
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

  describe('GetOfficesTemplateResponse', function() {
    it('should create an instance of GetOfficesTemplateResponse', function() {
      // uncomment below and update the code to test GetOfficesTemplateResponse
      //var instane = new ApacheFineract.GetOfficesTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetOfficesTemplateResponse);
    });

    it('should have the property openingDate (base name: "openingDate")', function() {
      // uncomment below and update the code to test the property openingDate
      //var instane = new ApacheFineract.GetOfficesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowedParents (base name: "allowedParents")', function() {
      // uncomment below and update the code to test the property allowedParents
      //var instane = new ApacheFineract.GetOfficesTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
