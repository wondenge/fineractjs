

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
    instance = new ApacheFineract.SpmSurveysApi();
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

  describe('SpmSurveysApi', function() {
    describe('activateOrDeactivateSurvey', function() {
      it('should call activateOrDeactivateSurvey successfully', function(done) {
        //uncomment below and update the code to test activateOrDeactivateSurvey
        //instance.activateOrDeactivateSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSurvey', function() {
      it('should call createSurvey successfully', function(done) {
        //uncomment below and update the code to test createSurvey
        //instance.createSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editSurvey', function() {
      it('should call editSurvey successfully', function(done) {
        //uncomment below and update the code to test editSurvey
        //instance.editSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAllSurveys1', function() {
      it('should call fetchAllSurveys1 successfully', function(done) {
        //uncomment below and update the code to test fetchAllSurveys1
        //instance.fetchAllSurveys1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findSurvey', function() {
      it('should call findSurvey successfully', function(done) {
        //uncomment below and update the code to test findSurvey
        //instance.findSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
