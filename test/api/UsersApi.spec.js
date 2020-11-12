

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
    instance = new ApacheFineract.UsersApi();
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

  describe('UsersApi', function() {
    describe('create14', function() {
      it('should call create14 successfully', function(done) {
        //uncomment below and update the code to test create14
        //instance.create14(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete21', function() {
      it('should call delete21 successfully', function(done) {
        //uncomment below and update the code to test delete21
        //instance.delete21(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserTemplate', function() {
      it('should call getUserTemplate successfully', function(done) {
        //uncomment below and update the code to test getUserTemplate
        //instance.getUserTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUsersTemplate', function() {
      it('should call postUsersTemplate successfully', function(done) {
        //uncomment below and update the code to test postUsersTemplate
        //instance.postUsersTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll40', function() {
      it('should call retrieveAll40 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll40
        //instance.retrieveAll40(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne28', function() {
      it('should call retrieveOne28 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne28
        //instance.retrieveOne28(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template22', function() {
      it('should call template22 successfully', function(done) {
        //uncomment below and update the code to test template22
        //instance.template22(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update23', function() {
      it('should call update23 successfully', function(done) {
        //uncomment below and update the code to test update23
        //instance.update23(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
