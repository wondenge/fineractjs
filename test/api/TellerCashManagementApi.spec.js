

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
    instance = new ApacheFineract.TellerCashManagementApi();
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

  describe('TellerCashManagementApi', function() {
    describe('allocateCashToCashier', function() {
      it('should call allocateCashToCashier successfully', function(done) {
        //uncomment below and update the code to test allocateCashToCashier
        //instance.allocateCashToCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCashier', function() {
      it('should call createCashier successfully', function(done) {
        //uncomment below and update the code to test createCashier
        //instance.createCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTeller', function() {
      it('should call createTeller successfully', function(done) {
        //uncomment below and update the code to test createTeller
        //instance.createTeller(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCashier', function() {
      it('should call deleteCashier successfully', function(done) {
        //uncomment below and update the code to test deleteCashier
        //instance.deleteCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTeller', function() {
      it('should call deleteTeller successfully', function(done) {
        //uncomment below and update the code to test deleteTeller
        //instance.deleteTeller(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findCashierData', function() {
      it('should call findCashierData successfully', function(done) {
        //uncomment below and update the code to test findCashierData
        //instance.findCashierData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTeller', function() {
      it('should call findTeller successfully', function(done) {
        //uncomment below and update the code to test findTeller
        //instance.findTeller(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTransactionData', function() {
      it('should call findTransactionData successfully', function(done) {
        //uncomment below and update the code to test findTransactionData
        //instance.findTransactionData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCashierData1', function() {
      it('should call getCashierData1 successfully', function(done) {
        //uncomment below and update the code to test getCashierData1
        //instance.getCashierData1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCashierTemplate', function() {
      it('should call getCashierTemplate successfully', function(done) {
        //uncomment below and update the code to test getCashierTemplate
        //instance.getCashierTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCashierTxnTemplate', function() {
      it('should call getCashierTxnTemplate successfully', function(done) {
        //uncomment below and update the code to test getCashierTxnTemplate
        //instance.getCashierTxnTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJournalData', function() {
      it('should call getJournalData successfully', function(done) {
        //uncomment below and update the code to test getJournalData
        //instance.getJournalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTellerData', function() {
      it('should call getTellerData successfully', function(done) {
        //uncomment below and update the code to test getTellerData
        //instance.getTellerData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionData', function() {
      it('should call getTransactionData successfully', function(done) {
        //uncomment below and update the code to test getTransactionData
        //instance.getTransactionData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionsForCashier', function() {
      it('should call getTransactionsForCashier successfully', function(done) {
        //uncomment below and update the code to test getTransactionsForCashier
        //instance.getTransactionsForCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionsWtihSummaryForCashier', function() {
      it('should call getTransactionsWtihSummaryForCashier successfully', function(done) {
        //uncomment below and update the code to test getTransactionsWtihSummaryForCashier
        //instance.getTransactionsWtihSummaryForCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('settleCashFromCashier', function() {
      it('should call settleCashFromCashier successfully', function(done) {
        //uncomment below and update the code to test settleCashFromCashier
        //instance.settleCashFromCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCashier', function() {
      it('should call updateCashier successfully', function(done) {
        //uncomment below and update the code to test updateCashier
        //instance.updateCashier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTeller', function() {
      it('should call updateTeller successfully', function(done) {
        //uncomment below and update the code to test updateTeller
        //instance.updateTeller(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
