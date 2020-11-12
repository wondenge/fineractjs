

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
    instance = new ApacheFineract.NotesApi();
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

  describe('NotesApi', function() {
    describe('addNewNote', function() {
      it('should call addNewNote successfully', function(done) {
        //uncomment below and update the code to test addNewNote
        //instance.addNewNote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNote', function() {
      it('should call deleteNote successfully', function(done) {
        //uncomment below and update the code to test deleteNote
        //instance.deleteNote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveNote', function() {
      it('should call retrieveNote successfully', function(done) {
        //uncomment below and update the code to test retrieveNote
        //instance.retrieveNote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveNotesByResource', function() {
      it('should call retrieveNotesByResource successfully', function(done) {
        //uncomment below and update the code to test retrieveNotesByResource
        //instance.retrieveNotesByResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNote', function() {
      it('should call updateNote successfully', function(done) {
        //uncomment below and update the code to test updateNote
        //instance.updateNote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
