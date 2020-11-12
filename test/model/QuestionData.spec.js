

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
    instance = new ApacheFineract.QuestionData();
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

  describe('QuestionData', function() {
    it('should create an instance of QuestionData', function() {
      // uncomment below and update the code to test QuestionData
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be.a(ApacheFineract.QuestionData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

    it('should have the property responseDatas (base name: "responseDatas")', function() {
      // uncomment below and update the code to test the property responseDatas
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

    it('should have the property componentKey (base name: "componentKey")', function() {
      // uncomment below and update the code to test the property componentKey
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

    it('should have the property sequenceNo (base name: "sequenceNo")', function() {
      // uncomment below and update the code to test the property sequenceNo
      //var instane = new ApacheFineract.QuestionData();
      //expect(instance).to.be();
    });

  });

}));
