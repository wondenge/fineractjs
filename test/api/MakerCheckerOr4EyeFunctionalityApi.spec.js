

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
    instance = new ApacheFineract.MakerCheckerOr4EyeFunctionalityApi();
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

  describe('MakerCheckerOr4EyeFunctionalityApi', function() {
    describe('approveMakerCheckerEntry', function() {
      it('should call approveMakerCheckerEntry successfully', function(done) {
        //uncomment below and update the code to test approveMakerCheckerEntry
        //instance.approveMakerCheckerEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMakerCheckerEntry', function() {
      it('should call deleteMakerCheckerEntry successfully', function(done) {
        //uncomment below and update the code to test deleteMakerCheckerEntry
        //instance.deleteMakerCheckerEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAuditSearchTemplate1', function() {
      it('should call retrieveAuditSearchTemplate1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAuditSearchTemplate1
        //instance.retrieveAuditSearchTemplate1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCommands', function() {
      it('should call retrieveCommands successfully', function(done) {
        //uncomment below and update the code to test retrieveCommands
        //instance.retrieveCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
