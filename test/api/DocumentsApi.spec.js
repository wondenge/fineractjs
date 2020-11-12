  

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
    instance = new ApacheFineract.DocumentsApi();
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

  describe('DocumentsApi', function() {
    describe('createDocument', function() {
      it('should call createDocument successfully', function(done) {
        //uncomment below and update the code to test createDocument
        //instance.createDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDocument', function() {
      it('should call deleteDocument successfully', function(done) {
        //uncomment below and update the code to test deleteDocument
        //instance.deleteDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadFile', function() {
      it('should call downloadFile successfully', function(done) {
        //uncomment below and update the code to test downloadFile
        //instance.downloadFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocument', function() {
      it('should call getDocument successfully', function(done) {
        //uncomment below and update the code to test getDocument
        //instance.getDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllDocuments', function() {
      it('should call retrieveAllDocuments successfully', function(done) {
        //uncomment below and update the code to test retrieveAllDocuments
        //instance.retrieveAllDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDocument', function() {
      it('should call updateDocument successfully', function(done) {
        //uncomment below and update the code to test updateDocument
        //instance.updateDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
