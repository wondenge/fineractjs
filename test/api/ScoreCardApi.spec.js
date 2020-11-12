

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
    instance = new ApacheFineract.ScoreCardApi();
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

  describe('ScoreCardApi', function() {
    describe('createScorecard1', function() {
      it('should call createScorecard1 successfully', function(done) {
        //uncomment below and update the code to test createScorecard1
        //instance.createScorecard1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findByClient1', function() {
      it('should call findByClient1 successfully', function(done) {
        //uncomment below and update the code to test findByClient1
        //instance.findByClient1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findBySurvey', function() {
      it('should call findBySurvey successfully', function(done) {
        //uncomment below and update the code to test findBySurvey
        //instance.findBySurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findBySurveyAndClient', function() {
      it('should call findBySurveyAndClient successfully', function(done) {
        //uncomment below and update the code to test findBySurveyAndClient
        //instance.findBySurveyAndClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
