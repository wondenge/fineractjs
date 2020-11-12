

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
    instance = new ApacheFineract.GroupsApi();
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

  describe('GroupsApi', function() {
    describe('activateOrGenerateCollectionSheet', function() {
      it('should call activateOrGenerateCollectionSheet successfully', function(done) {
        //uncomment below and update the code to test activateOrGenerateCollectionSheet
        //instance.activateOrGenerateCollectionSheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create7', function() {
      it('should call create7 successfully', function(done) {
        //uncomment below and update the code to test create7
        //instance.create7(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete11', function() {
      it('should call delete11 successfully', function(done) {
        //uncomment below and update the code to test delete11
        //instance.delete11(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupsTemplate', function() {
      it('should call getGroupsTemplate successfully', function(done) {
        //uncomment below and update the code to test getGroupsTemplate
        //instance.getGroupsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postGroupTemplate', function() {
      it('should call postGroupTemplate successfully', function(done) {
        //uncomment below and update the code to test postGroupTemplate
        //instance.postGroupTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAccounts', function() {
      it('should call retrieveAccounts successfully', function(done) {
        //uncomment below and update the code to test retrieveAccounts
        //instance.retrieveAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll23', function() {
      it('should call retrieveAll23 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll23
        //instance.retrieveAll23(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveGsimAccounts', function() {
      it('should call retrieveGsimAccounts successfully', function(done) {
        //uncomment below and update the code to test retrieveGsimAccounts
        //instance.retrieveGsimAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne13', function() {
      it('should call retrieveOne13 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne13
        //instance.retrieveOne13(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate7', function() {
      it('should call retrieveTemplate7 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate7
        //instance.retrieveTemplate7(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveglimAccounts', function() {
      it('should call retrieveglimAccounts successfully', function(done) {
        //uncomment below and update the code to test retrieveglimAccounts
        //instance.retrieveglimAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unassignLoanOfficer', function() {
      it('should call unassignLoanOfficer successfully', function(done) {
        //uncomment below and update the code to test unassignLoanOfficer
        //instance.unassignLoanOfficer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update11', function() {
      it('should call update11 successfully', function(done) {
        //uncomment below and update the code to test update11
        //instance.update11(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
