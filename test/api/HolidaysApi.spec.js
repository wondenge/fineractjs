  

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
    instance = new ApacheFineract.HolidaysApi();
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

  describe('HolidaysApi', function() {
    describe('createNewHoliday', function() {
      it('should call createNewHoliday successfully', function(done) {
        //uncomment below and update the code to test createNewHoliday
        //instance.createNewHoliday(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete7', function() {
      it('should call delete7 successfully', function(done) {
        //uncomment below and update the code to test delete7
        //instance.delete7(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands1', function() {
      it('should call handleCommands1 successfully', function(done) {
        //uncomment below and update the code to test handleCommands1
        //instance.handleCommands1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllHolidays', function() {
      it('should call retrieveAllHolidays successfully', function(done) {
        //uncomment below and update the code to test retrieveAllHolidays
        //instance.retrieveAllHolidays(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne7', function() {
      it('should call retrieveOne7 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne7
        //instance.retrieveOne7(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveRepaymentScheduleUpdationTyeOptions', function() {
      it('should call retrieveRepaymentScheduleUpdationTyeOptions successfully', function(done) {
        //uncomment below and update the code to test retrieveRepaymentScheduleUpdationTyeOptions
        //instance.retrieveRepaymentScheduleUpdationTyeOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update6', function() {
      it('should call update6 successfully', function(done) {
        //uncomment below and update the code to test update6
        //instance.update6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
