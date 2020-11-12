

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
    instance = new ApacheFineract.ProvisioningEntriesApi();
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

  describe('ProvisioningEntriesApi', function() {
    describe('createProvisioningEntries', function() {
      it('should call createProvisioningEntries successfully', function(done) {
        //uncomment below and update the code to test createProvisioningEntries
        //instance.createProvisioningEntries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyProvisioningEntry', function() {
      it('should call modifyProvisioningEntry successfully', function(done) {
        //uncomment below and update the code to test modifyProvisioningEntry
        //instance.modifyProvisioningEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllProvisioningEntries', function() {
      it('should call retrieveAllProvisioningEntries successfully', function(done) {
        //uncomment below and update the code to test retrieveAllProvisioningEntries
        //instance.retrieveAllProvisioningEntries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveProviioningEntries', function() {
      it('should call retrieveProviioningEntries successfully', function(done) {
        //uncomment below and update the code to test retrieveProviioningEntries
        //instance.retrieveProviioningEntries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveProvisioningEntry', function() {
      it('should call retrieveProvisioningEntry successfully', function(done) {
        //uncomment below and update the code to test retrieveProvisioningEntry
        //instance.retrieveProvisioningEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
