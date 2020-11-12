

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
    instance = new ApacheFineract.AccountTransfersApi();
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

  describe('AccountTransfersApi', function() {
    describe('create3', function() {
      it('should call create3 successfully', function(done) {
        //uncomment below and update the code to test create3
        //instance.create3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll17', function() {
      it('should call retrieveAll17 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll17
        //instance.retrieveAll17(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne8', function() {
      it('should call retrieveOne8 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne8
        //instance.retrieveOne8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template5', function() {
      it('should call template5 successfully', function(done) {
        //uncomment below and update the code to test template5
        //instance.template5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateRefundByTransfer', function() {
      it('should call templateRefundByTransfer successfully', function(done) {
        //uncomment below and update the code to test templateRefundByTransfer
        //instance.templateRefundByTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateRefundByTransferPost', function() {
      it('should call templateRefundByTransferPost successfully', function(done) {
        //uncomment below and update the code to test templateRefundByTransferPost
        //instance.templateRefundByTransferPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
