

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
    instance = new ApacheFineract.ClientApi();
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

  describe('ClientApi', function() {
    describe('activate1', function() {
      it('should call activate1 successfully', function(done) {
        //uncomment below and update the code to test activate1
        //instance.activate1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create5', function() {
      it('should call create5 successfully', function(done) {
        //uncomment below and update the code to test create5
        //instance.create5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete9', function() {
      it('should call delete9 successfully', function(done) {
        //uncomment below and update the code to test delete9
        //instance.delete9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientTemplate', function() {
      it('should call getClientTemplate successfully', function(done) {
        //uncomment below and update the code to test getClientTemplate
        //instance.getClientTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postClientTemplate', function() {
      it('should call postClientTemplate successfully', function(done) {
        //uncomment below and update the code to test postClientTemplate
        //instance.postClientTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll20', function() {
      it('should call retrieveAll20 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll20
        //instance.retrieveAll20(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAssociatedAccounts', function() {
      it('should call retrieveAssociatedAccounts successfully', function(done) {
        //uncomment below and update the code to test retrieveAssociatedAccounts
        //instance.retrieveAssociatedAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveObligeeDetails', function() {
      it('should call retrieveObligeeDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveObligeeDetails
        //instance.retrieveObligeeDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne10', function() {
      it('should call retrieveOne10 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne10
        //instance.retrieveOne10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate5', function() {
      it('should call retrieveTemplate5 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate5
        //instance.retrieveTemplate5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTransferTemplate', function() {
      it('should call retrieveTransferTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveTransferTemplate
        //instance.retrieveTransferTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update9', function() {
      it('should call update9 successfully', function(done) {
        //uncomment below and update the code to test update9
        //instance.update9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
