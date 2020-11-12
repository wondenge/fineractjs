

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
    instance = new ApacheFineract.SavingsAccountApi();
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

  describe('SavingsAccountApi', function() {
    describe('delete18', function() {
      it('should call delete18 successfully', function(done) {
        //uncomment below and update the code to test delete18
        //instance.delete18(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSavingsTemplate', function() {
      it('should call getSavingsTemplate successfully', function(done) {
        //uncomment below and update the code to test getSavingsTemplate
        //instance.getSavingsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSavingsTransactionTemplate', function() {
      it('should call getSavingsTransactionTemplate successfully', function(done) {
        //uncomment below and update the code to test getSavingsTransactionTemplate
        //instance.getSavingsTransactionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands6', function() {
      it('should call handleCommands6 successfully', function(done) {
        //uncomment below and update the code to test handleCommands6
        //instance.handleCommands6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleGSIMCommands', function() {
      it('should call handleGSIMCommands successfully', function(done) {
        //uncomment below and update the code to test handleGSIMCommands
        //instance.handleGSIMCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postSavingsTemplate', function() {
      it('should call postSavingsTemplate successfully', function(done) {
        //uncomment below and update the code to test postSavingsTemplate
        //instance.postSavingsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postSavingsTransactionTemplate', function() {
      it('should call postSavingsTransactionTemplate successfully', function(done) {
        //uncomment below and update the code to test postSavingsTransactionTemplate
        //instance.postSavingsTransactionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll32', function() {
      it('should call retrieveAll32 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll32
        //instance.retrieveAll32(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne23', function() {
      it('should call retrieveOne23 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne23
        //instance.retrieveOne23(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitApplication2', function() {
      it('should call submitApplication2 successfully', function(done) {
        //uncomment below and update the code to test submitApplication2
        //instance.submitApplication2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitGSIMApplication', function() {
      it('should call submitGSIMApplication successfully', function(done) {
        //uncomment below and update the code to test submitGSIMApplication
        //instance.submitGSIMApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template14', function() {
      it('should call template14 successfully', function(done) {
        //uncomment below and update the code to test template14
        //instance.template14(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update18', function() {
      it('should call update18 successfully', function(done) {
        //uncomment below and update the code to test update18
        //instance.update18(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGsim', function() {
      it('should call updateGsim successfully', function(done) {
        //uncomment below and update the code to test updateGsim
        //instance.updateGsim(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
