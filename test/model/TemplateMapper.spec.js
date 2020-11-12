  

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
    instance = new ApacheFineract.TemplateMapper();
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

  describe('TemplateMapper', function() {
    it('should create an instance of TemplateMapper', function() {
      // uncomment below and update the code to test TemplateMapper
      //var instane = new ApacheFineract.TemplateMapper();
      //expect(instance).to.be.a(ApacheFineract.TemplateMapper);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.TemplateMapper();
      //expect(instance).to.be();
    });

    it('should have the property mapperorder (base name: "mapperorder")', function() {
      // uncomment below and update the code to test the property mapperorder
      //var instane = new ApacheFineract.TemplateMapper();
      //expect(instance).to.be();
    });

    it('should have the property mapperkey (base name: "mapperkey")', function() {
      // uncomment below and update the code to test the property mapperkey
      //var instane = new ApacheFineract.TemplateMapper();
      //expect(instance).to.be();
    });

    it('should have the property mappervalue (base name: "mappervalue")', function() {
      // uncomment below and update the code to test the property mappervalue
      //var instane = new ApacheFineract.TemplateMapper();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.TemplateMapper();
      //expect(instance).to.be();
    });

  });

}));
