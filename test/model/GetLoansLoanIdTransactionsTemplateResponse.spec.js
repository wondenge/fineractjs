

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
    instance = new ApacheFineract.GetLoansLoanIdTransactionsTemplateResponse();
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

  describe('GetLoansLoanIdTransactionsTemplateResponse', function() {
    it('should create an instance of GetLoansLoanIdTransactionsTemplateResponse', function() {
      // uncomment below and update the code to test GetLoansLoanIdTransactionsTemplateResponse
      //var instane = new ApacheFineract.GetLoansLoanIdTransactionsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetLoansLoanIdTransactionsTemplateResponse);
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instane = new ApacheFineract.GetLoansLoanIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApacheFineract.GetLoansLoanIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new ApacheFineract.GetLoansLoanIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
