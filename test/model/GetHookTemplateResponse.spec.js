  

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
    instance = new ApacheFineract.GetHookTemplateResponse();
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

  describe('GetHookTemplateResponse', function() {
    it('should create an instance of GetHookTemplateResponse', function() {
      // uncomment below and update the code to test GetHookTemplateResponse
      //var instane = new ApacheFineract.GetHookTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetHookTemplateResponse);
    });

    it('should have the property templates (base name: "templates")', function() {
      // uncomment below and update the code to test the property templates
      //var instane = new ApacheFineract.GetHookTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property groupings (base name: "groupings")', function() {
      // uncomment below and update the code to test the property groupings
      //var instane = new ApacheFineract.GetHookTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
