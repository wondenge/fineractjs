

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
    instance = new ApacheFineract.ClientsAddressApi();
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

  describe('ClientsAddressApi', function() {
    describe('addClientAddress', function() {
      it('should call addClientAddress successfully', function(done) {
        //uncomment below and update the code to test addClientAddress
        //instance.addClientAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddresses1', function() {
      it('should call getAddresses1 successfully', function(done) {
        //uncomment below and update the code to test getAddresses1
        //instance.getAddresses1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressesTemplate', function() {
      it('should call getAddressesTemplate successfully', function(done) {
        //uncomment below and update the code to test getAddressesTemplate
        //instance.getAddressesTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientAddress', function() {
      it('should call updateClientAddress successfully', function(done) {
        //uncomment below and update the code to test updateClientAddress
        //instance.updateClientAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
