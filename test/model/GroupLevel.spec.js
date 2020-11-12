

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
    instance = new ApacheFineract.GroupLevel();
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

  describe('GroupLevel', function() {
    it('should create an instance of GroupLevel', function() {
      // uncomment below and update the code to test GroupLevel
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be.a(ApacheFineract.GroupLevel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property superParent (base name: "superParent")', function() {
      // uncomment below and update the code to test the property superParent
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property levelName (base name: "levelName")', function() {
      // uncomment below and update the code to test the property levelName
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property recursable (base name: "recursable")', function() {
      // uncomment below and update the code to test the property recursable
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property center (base name: "center")', function() {
      // uncomment below and update the code to test the property center
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.GroupLevel();
      //expect(instance).to.be();
    });

  });

}));
