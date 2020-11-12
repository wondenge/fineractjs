

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
    instance = new ApacheFineract.JournalEntriesApi();
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

  describe('JournalEntriesApi', function() {
    describe('createGLJournalEntry', function() {
      it('should call createGLJournalEntry successfully', function(done) {
        //uncomment below and update the code to test createGLJournalEntry
        //instance.createGLJournalEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createReversalJournalEntry', function() {
      it('should call createReversalJournalEntry successfully', function(done) {
        //uncomment below and update the code to test createReversalJournalEntry
        //instance.createReversalJournalEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJournalEntriesTemplate', function() {
      it('should call getJournalEntriesTemplate successfully', function(done) {
        //uncomment below and update the code to test getJournalEntriesTemplate
        //instance.getJournalEntriesTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postJournalEntriesTemplate', function() {
      it('should call postJournalEntriesTemplate successfully', function(done) {
        //uncomment below and update the code to test postJournalEntriesTemplate
        //instance.postJournalEntriesTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveJournalEntryById', function() {
      it('should call retreiveJournalEntryById successfully', function(done) {
        //uncomment below and update the code to test retreiveJournalEntryById
        //instance.retreiveJournalEntryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll1', function() {
      it('should call retrieveAll1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll1
        //instance.retrieveAll1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveJournalEntries', function() {
      it('should call retrieveJournalEntries successfully', function(done) {
        //uncomment below and update the code to test retrieveJournalEntries
        //instance.retrieveJournalEntries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOpeningBalance', function() {
      it('should call retrieveOpeningBalance successfully', function(done) {
        //uncomment below and update the code to test retrieveOpeningBalance
        //instance.retrieveOpeningBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
