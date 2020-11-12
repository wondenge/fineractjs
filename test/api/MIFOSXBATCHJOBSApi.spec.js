

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
    instance = new ApacheFineract.MIFOSXBATCHJOBSApi();
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

  describe('MIFOSXBATCHJOBSApi', function() {
    describe('executeJob', function() {
      it('should call executeJob successfully', function(done) {
        //uncomment below and update the code to test executeJob
        //instance.executeJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll8', function() {
      it('should call retrieveAll8 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll8
        //instance.retrieveAll8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveHistory', function() {
      it('should call retrieveHistory successfully', function(done) {
        //uncomment below and update the code to test retrieveHistory
        //instance.retrieveHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne5', function() {
      it('should call retrieveOne5 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne5
        //instance.retrieveOne5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJobDetail', function() {
      it('should call updateJobDetail successfully', function(done) {
        //uncomment below and update the code to test updateJobDetail
        //instance.updateJobDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
