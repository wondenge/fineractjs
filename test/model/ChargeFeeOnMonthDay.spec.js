

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
    instance = new ApacheFineract.ChargeFeeOnMonthDay();
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

  describe('ChargeFeeOnMonthDay', function() {
    it('should create an instance of ChargeFeeOnMonthDay', function() {
      // uncomment below and update the code to test ChargeFeeOnMonthDay
      //var instane = new ApacheFineract.ChargeFeeOnMonthDay();
      //expect(instance).to.be.a(ApacheFineract.ChargeFeeOnMonthDay);
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instane = new ApacheFineract.ChargeFeeOnMonthDay();
      //expect(instance).to.be();
    });

    it('should have the property monthValue (base name: "monthValue")', function() {
      // uncomment below and update the code to test the property monthValue
      //var instane = new ApacheFineract.ChargeFeeOnMonthDay();
      //expect(instance).to.be();
    });

    it('should have the property dayOfMonth (base name: "dayOfMonth")', function() {
      // uncomment below and update the code to test the property dayOfMonth
      //var instane = new ApacheFineract.ChargeFeeOnMonthDay();
      //expect(instance).to.be();
    });

  });

}));
