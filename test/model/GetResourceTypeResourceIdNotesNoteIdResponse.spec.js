

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
    instance = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
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

  describe('GetResourceTypeResourceIdNotesNoteIdResponse', function() {
    it('should create an instance of GetResourceTypeResourceIdNotesNoteIdResponse', function() {
      // uncomment below and update the code to test GetResourceTypeResourceIdNotesNoteIdResponse
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property noteType (base name: "noteType")', function() {
      // uncomment below and update the code to test the property noteType
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdById (base name: "createdById")', function() {
      // uncomment below and update the code to test the property createdById
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdByUsername (base name: "createdByUsername")', function() {
      // uncomment below and update the code to test the property createdByUsername
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedById (base name: "updatedById")', function() {
      // uncomment below and update the code to test the property updatedById
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedByUsername (base name: "updatedByUsername")', function() {
      // uncomment below and update the code to test the property updatedByUsername
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new ApacheFineract.GetResourceTypeResourceIdNotesNoteIdResponse();
      //expect(instance).to.be();
    });

  });

}));
