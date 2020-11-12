

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
    instance = new ApacheFineract.PostBatchesRequest();
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

  describe('PostBatchesRequest', function() {
    it('should create an instance of PostBatchesRequest', function() {
      // uncomment below and update the code to test PostBatchesRequest
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be.a(ApacheFineract.PostBatchesRequest);
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be();
    });

    it('should have the property relativeUrl (base name: "relativeUrl")', function() {
      // uncomment below and update the code to test the property relativeUrl
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new ApacheFineract.PostBatchesRequest();
      //expect(instance).to.be();
    });

  });

}));
