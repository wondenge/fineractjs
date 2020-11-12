

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
    instance = new ApacheFineract.GetGroupsGroupIdTimeline();
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

  describe('GetGroupsGroupIdTimeline', function() {
    it('should create an instance of GetGroupsGroupIdTimeline', function() {
      // uncomment below and update the code to test GetGroupsGroupIdTimeline
      //var instane = new ApacheFineract.GetGroupsGroupIdTimeline();
      //expect(instance).to.be.a(ApacheFineract.GetGroupsGroupIdTimeline);
    });

    it('should have the property activatedOnDate (base name: "activatedOnDate")', function() {
      // uncomment below and update the code to test the property activatedOnDate
      //var instane = new ApacheFineract.GetGroupsGroupIdTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedByUsername (base name: "activatedByUsername")', function() {
      // uncomment below and update the code to test the property activatedByUsername
      //var instane = new ApacheFineract.GetGroupsGroupIdTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedByFirstname (base name: "activatedByFirstname")', function() {
      // uncomment below and update the code to test the property activatedByFirstname
      //var instane = new ApacheFineract.GetGroupsGroupIdTimeline();
      //expect(instance).to.be();
    });

    it('should have the property activatedByLastname (base name: "activatedByLastname")', function() {
      // uncomment below and update the code to test the property activatedByLastname
      //var instane = new ApacheFineract.GetGroupsGroupIdTimeline();
      //expect(instance).to.be();
    });

  });

}));
