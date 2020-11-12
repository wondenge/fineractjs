

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
    instance = new ApacheFineract.GetUsersTemplateResponse();
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

  describe('GetUsersTemplateResponse', function() {
    it('should create an instance of GetUsersTemplateResponse', function() {
      // uncomment below and update the code to test GetUsersTemplateResponse
      //var instane = new ApacheFineract.GetUsersTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetUsersTemplateResponse);
    });

    it('should have the property allowedOffices (base name: "allowedOffices")', function() {
      // uncomment below and update the code to test the property allowedOffices
      //var instane = new ApacheFineract.GetUsersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property availableRoles (base name: "availableRoles")', function() {
      // uncomment below and update the code to test the property availableRoles
      //var instane = new ApacheFineract.GetUsersTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property selfServiceRoles (base name: "selfServiceRoles")', function() {
      // uncomment below and update the code to test the property selfServiceRoles
      //var instane = new ApacheFineract.GetUsersTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
