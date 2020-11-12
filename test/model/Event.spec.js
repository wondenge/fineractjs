

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
    instance = new ApacheFineract.Event();
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

  describe('Event', function() {
    it('should create an instance of Event', function() {
      // uncomment below and update the code to test Event
      //var instane = new ApacheFineract.Event();
      //expect(instance).to.be.a(ApacheFineract.Event);
    });

    it('should have the property actionName (base name: "actionName")', function() {
      // uncomment below and update the code to test the property actionName
      //var instane = new ApacheFineract.Event();
      //expect(instance).to.be();
    });

    it('should have the property entityName (base name: "entityName")', function() {
      // uncomment below and update the code to test the property entityName
      //var instane = new ApacheFineract.Event();
      //expect(instance).to.be();
    });

  });

}));
