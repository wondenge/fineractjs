

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
    instance = new ApacheFineract.ClientIdentifierApi();
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

  describe('ClientIdentifierApi', function() {
    describe('createClientIdentifier', function() {
      it('should call createClientIdentifier successfully', function(done) {
        //uncomment below and update the code to test createClientIdentifier
        //instance.createClientIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClientIdentifier', function() {
      it('should call deleteClientIdentifier successfully', function(done) {
        //uncomment below and update the code to test deleteClientIdentifier
        //instance.deleteClientIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newClientIdentifierDetails', function() {
      it('should call newClientIdentifierDetails successfully', function(done) {
        //uncomment below and update the code to test newClientIdentifierDetails
        //instance.newClientIdentifierDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllClientIdentifiers', function() {
      it('should call retrieveAllClientIdentifiers successfully', function(done) {
        //uncomment below and update the code to test retrieveAllClientIdentifiers
        //instance.retrieveAllClientIdentifiers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveClientIdentifiers', function() {
      it('should call retrieveClientIdentifiers successfully', function(done) {
        //uncomment below and update the code to test retrieveClientIdentifiers
        //instance.retrieveClientIdentifiers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientIdentifer', function() {
      it('should call updateClientIdentifer successfully', function(done) {
        //uncomment below and update the code to test updateClientIdentifer
        //instance.updateClientIdentifer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
