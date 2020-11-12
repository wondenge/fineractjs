

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
    instance = new ApacheFineract.CentersApi();
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

  describe('CentersApi', function() {
    describe('activate2', function() {
      it('should call activate2 successfully', function(done) {
        //uncomment below and update the code to test activate2
        //instance.activate2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create6', function() {
      it('should call create6 successfully', function(done) {
        //uncomment below and update the code to test create6
        //instance.create6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete10', function() {
      it('should call delete10 successfully', function(done) {
        //uncomment below and update the code to test delete10
        //instance.delete10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCentersTemplate', function() {
      it('should call getCentersTemplate successfully', function(done) {
        //uncomment below and update the code to test getCentersTemplate
        //instance.getCentersTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCentersTemplate', function() {
      it('should call postCentersTemplate successfully', function(done) {
        //uncomment below and update the code to test postCentersTemplate
        //instance.postCentersTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll22', function() {
      it('should call retrieveAll22 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll22
        //instance.retrieveAll22(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveGroupAccount', function() {
      it('should call retrieveGroupAccount successfully', function(done) {
        //uncomment below and update the code to test retrieveGroupAccount
        //instance.retrieveGroupAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne12', function() {
      it('should call retrieveOne12 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne12
        //instance.retrieveOne12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate6', function() {
      it('should call retrieveTemplate6 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate6
        //instance.retrieveTemplate6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update10', function() {
      it('should call update10 successfully', function(done) {
        //uncomment below and update the code to test update10
        //instance.update10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
