

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
    instance = new ApacheFineract.GetMakerCheckersSearchTemplateResponse();
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

  describe('GetMakerCheckersSearchTemplateResponse', function() {
    it('should create an instance of GetMakerCheckersSearchTemplateResponse', function() {
      // uncomment below and update the code to test GetMakerCheckersSearchTemplateResponse
      //var instane = new ApacheFineract.GetMakerCheckersSearchTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetMakerCheckersSearchTemplateResponse);
    });

    it('should have the property appUsers (base name: "appUsers")', function() {
      // uncomment below and update the code to test the property appUsers
      //var instane = new ApacheFineract.GetMakerCheckersSearchTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property actionNames (base name: "actionNames")', function() {
      // uncomment below and update the code to test the property actionNames
      //var instane = new ApacheFineract.GetMakerCheckersSearchTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityNames (base name: "entityNames")', function() {
      // uncomment below and update the code to test the property entityNames
      //var instane = new ApacheFineract.GetMakerCheckersSearchTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property processingResults (base name: "processingResults")', function() {
      // uncomment below and update the code to test the property processingResults
      //var instane = new ApacheFineract.GetMakerCheckersSearchTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
