

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
    instance = new ApacheFineract.UserGeneratedDocumentsApi();
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

  describe('UserGeneratedDocumentsApi', function() {
    describe('createTemplate', function() {
      it('should call createTemplate successfully', function(done) {
        //uncomment below and update the code to test createTemplate
        //instance.createTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTemplate', function() {
      it('should call deleteTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteTemplate
        //instance.deleteTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTemplateByTemplate', function() {
      it('should call getTemplateByTemplate successfully', function(done) {
        //uncomment below and update the code to test getTemplateByTemplate
        //instance.getTemplateByTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeTemplate', function() {
      it('should call mergeTemplate successfully', function(done) {
        //uncomment below and update the code to test mergeTemplate
        //instance.mergeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll39', function() {
      it('should call retrieveAll39 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll39
        //instance.retrieveAll39(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne27', function() {
      it('should call retrieveOne27 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne27
        //instance.retrieveOne27(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveTemplate', function() {
      it('should call saveTemplate successfully', function(done) {
        //uncomment below and update the code to test saveTemplate
        //instance.saveTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template20', function() {
      it('should call template20 successfully', function(done) {
        //uncomment below and update the code to test template20
        //instance.template20(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
