

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
    instance = new ApacheFineract.AuditsApi();
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

  describe('AuditsApi', function() {
    describe('retrieveAuditEntries', function() {
      it('should call retrieveAuditEntries successfully', function(done) {
        //uncomment below and update the code to test retrieveAuditEntries
        //instance.retrieveAuditEntries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAuditEntry', function() {
      it('should call retrieveAuditEntry successfully', function(done) {
        //uncomment below and update the code to test retrieveAuditEntry
        //instance.retrieveAuditEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAuditSearchTemplate', function() {
      it('should call retrieveAuditSearchTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveAuditSearchTemplate
        //instance.retrieveAuditSearchTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
