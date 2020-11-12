

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
    instance = new ApacheFineract.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('accountsTemplate', function() {
      it('should call accountsTemplate successfully', function(done) {
        //uncomment below and update the code to test accountsTemplate
        //instance.accountsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('activate', function() {
      it('should call activate successfully', function(done) {
        //uncomment below and update the code to test activate
        //instance.activate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addAndDeleteDisbursementDetail', function() {
      it('should call addAndDeleteDisbursementDetail successfully', function(done) {
        //uncomment below and update the code to test addAndDeleteDisbursementDetail
        //instance.addAndDeleteDisbursementDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addClientFamilyMembers', function() {
      it('should call addClientFamilyMembers successfully', function(done) {
        //uncomment below and update the code to test addClientFamilyMembers
        //instance.addClientFamilyMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNewClientImage1', function() {
      it('should call addNewClientImage1 successfully', function(done) {
        //uncomment below and update the code to test addNewClientImage1
        //instance.addNewClientImage1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrganisationCreditBureau', function() {
      it('should call addOrganisationCreditBureau successfully', function(done) {
        //uncomment below and update the code to test addOrganisationCreditBureau
        //instance.addOrganisationCreditBureau(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adjustTransaction', function() {
      it('should call adjustTransaction successfully', function(done) {
        //uncomment below and update the code to test adjustTransaction
        //instance.adjustTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adjustTransaction1', function() {
      it('should call adjustTransaction1 successfully', function(done) {
        //uncomment below and update the code to test adjustTransaction1
        //instance.adjustTransaction1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create1', function() {
      it('should call create1 successfully', function(done) {
        //uncomment below and update the code to test create1
        //instance.create1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create2', function() {
      it('should call create2 successfully', function(done) {
        //uncomment below and update the code to test create2
        //instance.create2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCalendar', function() {
      it('should call createCalendar successfully', function(done) {
        //uncomment below and update the code to test createCalendar
        //instance.createCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCampaign', function() {
      it('should call createCampaign successfully', function(done) {
        //uncomment below and update the code to test createCampaign
        //instance.createCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCampaign1', function() {
      it('should call createCampaign1 successfully', function(done) {
        //uncomment below and update the code to test createCampaign1
        //instance.createCampaign1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCreditBureauLoanProductMapping', function() {
      it('should call createCreditBureauLoanProductMapping successfully', function(done) {
        //uncomment below and update the code to test createCreditBureauLoanProductMapping
        //instance.createCreditBureauLoanProductMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDatatableEntry1', function() {
      it('should call createDatatableEntry1 successfully', function(done) {
        //uncomment below and update the code to test createDatatableEntry1
        //instance.createDatatableEntry1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFund', function() {
      it('should call createFund successfully', function(done) {
        //uncomment below and update the code to test createFund
        //instance.createFund(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGuarantor', function() {
      it('should call createGuarantor successfully', function(done) {
        //uncomment below and update the code to test createGuarantor
        //instance.createGuarantor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createLoanRescheduleRequest', function() {
      it('should call createLoanRescheduleRequest successfully', function(done) {
        //uncomment below and update the code to test createLoanRescheduleRequest
        //instance.createLoanRescheduleRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMap', function() {
      it('should call createMap successfully', function(done) {
        //uncomment below and update the code to test createMap
        //instance.createMap(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMeeting', function() {
      it('should call createMeeting successfully', function(done) {
        //uncomment below and update the code to test createMeeting
        //instance.createMeeting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProduct', function() {
      it('should call createProduct successfully', function(done) {
        //uncomment below and update the code to test createProduct
        //instance.createProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProductMix', function() {
      it('should call createProductMix successfully', function(done) {
        //uncomment below and update the code to test createProductMix
        //instance.createProductMix(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createQuote', function() {
      it('should call createQuote successfully', function(done) {
        //uncomment below and update the code to test createQuote
        //instance.createQuote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRate', function() {
      it('should call createRate successfully', function(done) {
        //uncomment below and update the code to test createRate
        //instance.createRate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTransactionRequest', function() {
      it('should call createTransactionRequest successfully', function(done) {
        //uncomment below and update the code to test createTransactionRequest
        //instance.createTransactionRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete1', function() {
      it('should call delete1 successfully', function(done) {
        //uncomment below and update the code to test delete1
        //instance.delete1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete2', function() {
      it('should call delete2 successfully', function(done) {
        //uncomment below and update the code to test delete2
        //instance.delete2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete3', function() {
      it('should call delete3 successfully', function(done) {
        //uncomment below and update the code to test delete3
        //instance.delete3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete4', function() {
      it('should call delete4 successfully', function(done) {
        //uncomment below and update the code to test delete4
        //instance.delete4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete5', function() {
      it('should call delete5 successfully', function(done) {
        //uncomment below and update the code to test delete5
        //instance.delete5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete6', function() {
      it('should call delete6 successfully', function(done) {
        //uncomment below and update the code to test delete6
        //instance.delete6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete8', function() {
      it('should call delete8 successfully', function(done) {
        //uncomment below and update the code to test delete8
        //instance.delete8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountIdentifier', function() {
      it('should call deleteAccountIdentifier successfully', function(done) {
        //uncomment below and update the code to test deleteAccountIdentifier
        //instance.deleteAccountIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountIdentifier1', function() {
      it('should call deleteAccountIdentifier1 successfully', function(done) {
        //uncomment below and update the code to test deleteAccountIdentifier1
        //instance.deleteAccountIdentifier1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCalendar', function() {
      it('should call deleteCalendar successfully', function(done) {
        //uncomment below and update the code to test deleteCalendar
        //instance.deleteCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClientFamilyMembers', function() {
      it('should call deleteClientFamilyMembers successfully', function(done) {
        //uncomment below and update the code to test deleteClientFamilyMembers
        //instance.deleteClientFamilyMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClientImage', function() {
      it('should call deleteClientImage successfully', function(done) {
        //uncomment below and update the code to test deleteClientImage
        //instance.deleteClientImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDatatableEntries2', function() {
      it('should call deleteDatatableEntries2 successfully', function(done) {
        //uncomment below and update the code to test deleteDatatableEntries2
        //instance.deleteDatatableEntries2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGuarantor', function() {
      it('should call deleteGuarantor successfully', function(done) {
        //uncomment below and update the code to test deleteGuarantor
        //instance.deleteGuarantor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMeeting', function() {
      it('should call deleteMeeting successfully', function(done) {
        //uncomment below and update the code to test deleteMeeting
        //instance.deleteMeeting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductMix', function() {
      it('should call deleteProductMix successfully', function(done) {
        //uncomment below and update the code to test deleteProductMix
        //instance.deleteProductMix(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('disburseLoan', function() {
      it('should call disburseLoan successfully', function(done) {
        //uncomment below and update the code to test disburseLoan
        //instance.disburseLoan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadClientImage', function() {
      it('should call downloadClientImage successfully', function(done) {
        //uncomment below and update the code to test downloadClientImage
        //instance.downloadClientImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchLoanProducts', function() {
      it('should call fetchLoanProducts successfully', function(done) {
        //uncomment below and update the code to test fetchLoanProducts
        //instance.fetchLoanProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateCollectionSheet', function() {
      it('should call generateCollectionSheet successfully', function(done) {
        //uncomment below and update the code to test generateCollectionSheet
        //instance.generateCollectionSheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('get', function() {
      it('should call get successfully', function(done) {
        //uncomment below and update the code to test get
        //instance.get(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountByIdentifier', function() {
      it('should call getAccountByIdentifier successfully', function(done) {
        //uncomment below and update the code to test getAccountByIdentifier
        //instance.getAccountByIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountByIdentifier1', function() {
      it('should call getAccountByIdentifier1 successfully', function(done) {
        //uncomment below and update the code to test getAccountByIdentifier1
        //instance.getAccountByIdentifier1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountDetails', function() {
      it('should call getAccountDetails successfully', function(done) {
        //uncomment below and update the code to test getAccountDetails
        //instance.getAccountDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountIdentifiers', function() {
      it('should call getAccountIdentifiers successfully', function(done) {
        //uncomment below and update the code to test getAccountIdentifiers
        //instance.getAccountIdentifiers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountTransactions', function() {
      it('should call getAccountTransactions successfully', function(done) {
        //uncomment below and update the code to test getAccountTransactions
        //instance.getAccountTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllRates', function() {
      it('should call getAllRates successfully', function(done) {
        //uncomment below and update the code to test getAllRates
        //instance.getAllRates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientKyc', function() {
      it('should call getClientKyc successfully', function(done) {
        //uncomment below and update the code to test getClientKyc
        //instance.getClientKyc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientSurveyOverview', function() {
      it('should call getClientSurveyOverview successfully', function(done) {
        //uncomment below and update the code to test getClientSurveyOverview
        //instance.getClientSurveyOverview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfiguration', function() {
      it('should call getConfiguration successfully', function(done) {
        //uncomment below and update the code to test getConfiguration
        //instance.getConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCreditBureau', function() {
      it('should call getCreditBureau successfully', function(done) {
        //uncomment below and update the code to test getCreditBureau
        //instance.getCreditBureau(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCreditBureauLoanProductMapping', function() {
      it('should call getCreditBureauLoanProductMapping successfully', function(done) {
        //uncomment below and update the code to test getCreditBureauLoanProductMapping
        //instance.getCreditBureauLoanProductMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntityToEntityMappings', function() {
      it('should call getEntityToEntityMappings successfully', function(done) {
        //uncomment below and update the code to test getEntityToEntityMappings
        //instance.getEntityToEntityMappings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFamilyMember', function() {
      it('should call getFamilyMember successfully', function(done) {
        //uncomment below and update the code to test getFamilyMember
        //instance.getFamilyMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFamilyMembers', function() {
      it('should call getFamilyMembers successfully', function(done) {
        //uncomment below and update the code to test getFamilyMembers
        //instance.getFamilyMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGuarantorTemplate', function() {
      it('should call getGuarantorTemplate successfully', function(done) {
        //uncomment below and update the code to test getGuarantorTemplate
        //instance.getGuarantorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOTPDeliveryMethods', function() {
      it('should call getOTPDeliveryMethods successfully', function(done) {
        //uncomment below and update the code to test getOTPDeliveryMethods
        //instance.getOTPDeliveryMethods(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganisationCreditBureau', function() {
      it('should call getOrganisationCreditBureau successfully', function(done) {
        //uncomment below and update the code to test getOrganisationCreditBureau
        //instance.getOrganisationCreditBureau(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOutputTemplate', function() {
      it('should call getOutputTemplate successfully', function(done) {
        //uncomment below and update the code to test getOutputTemplate
        //instance.getOutputTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuote', function() {
      it('should call getQuote successfully', function(done) {
        //uncomment below and update the code to test getQuote
        //instance.getQuote(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSurveyEntry', function() {
      it('should call getSurveyEntry successfully', function(done) {
        //uncomment below and update the code to test getSurveyEntry
        //instance.getSurveyEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTemplate1', function() {
      it('should call getTemplate1 successfully', function(done) {
        //uncomment below and update the code to test getTemplate1
        //instance.getTemplate1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionRequest', function() {
      it('should call getTransactionRequest successfully', function(done) {
        //uncomment below and update the code to test getTransactionRequest
        //instance.getTransactionRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransfer', function() {
      it('should call getTransfer successfully', function(done) {
        //uncomment below and update the code to test getTransfer
        //instance.getTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands', function() {
      it('should call handleCommands successfully', function(done) {
        //uncomment below and update the code to test handleCommands
        //instance.handleCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands3', function() {
      it('should call handleCommands3 successfully', function(done) {
        //uncomment below and update the code to test handleCommands3
        //instance.handleCommands3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('health', function() {
      it('should call health successfully', function(done) {
        //uncomment below and update the code to test health
        //instance.health(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loanReassignment', function() {
      it('should call loanReassignment successfully', function(done) {
        //uncomment below and update the code to test loanReassignment
        //instance.loanReassignment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loanReassignmentTemplate', function() {
      it('should call loanReassignmentTemplate successfully', function(done) {
        //uncomment below and update the code to test loanReassignmentTemplate
        //instance.loanReassignmentTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newGuarantorTemplate', function() {
      it('should call newGuarantorTemplate successfully', function(done) {
        //uncomment below and update the code to test newGuarantorTemplate
        //instance.newGuarantorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newOfficeTransactionDetails', function() {
      it('should call newOfficeTransactionDetails successfully', function(done) {
        //uncomment below and update the code to test newOfficeTransactionDetails
        //instance.newOfficeTransactionDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performMeetingCommands', function() {
      it('should call performMeetingCommands successfully', function(done) {
        //uncomment below and update the code to test performMeetingCommands
        //instance.performMeetingCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performTransfer', function() {
      it('should call performTransfer successfully', function(done) {
        //uncomment below and update the code to test performTransfer
        //instance.performTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postGuarantorTemplate', function() {
      it('should call postGuarantorTemplate successfully', function(done) {
        //uncomment below and update the code to test postGuarantorTemplate
        //instance.postGuarantorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('preview', function() {
      it('should call preview successfully', function(done) {
        //uncomment below and update the code to test preview
        //instance.preview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('preview1', function() {
      it('should call preview1 successfully', function(done) {
        //uncomment below and update the code to test preview1
        //instance.preview1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readLoanRescheduleRequest', function() {
      it('should call readLoanRescheduleRequest successfully', function(done) {
        //uncomment below and update the code to test readLoanRescheduleRequest
        //instance.readLoanRescheduleRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('register', function() {
      it('should call register successfully', function(done) {
        //uncomment below and update the code to test register
        //instance.register(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerAccountIdentifier', function() {
      it('should call registerAccountIdentifier successfully', function(done) {
        //uncomment below and update the code to test registerAccountIdentifier
        //instance.registerAccountIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerAccountIdentifier1', function() {
      it('should call registerAccountIdentifier1 successfully', function(done) {
        //uncomment below and update the code to test registerAccountIdentifier1
        //instance.registerAccountIdentifier1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerDevice', function() {
      it('should call registerDevice successfully', function(done) {
        //uncomment below and update the code to test registerDevice
        //instance.registerDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('requestToken', function() {
      it('should call requestToken successfully', function(done) {
        //uncomment below and update the code to test requestToken
        //instance.requestToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveFund', function() {
      it('should call retreiveFund successfully', function(done) {
        //uncomment below and update the code to test retreiveFund
        //instance.retreiveFund(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieve', function() {
      it('should call retrieve successfully', function(done) {
        //uncomment below and update the code to test retrieve
        //instance.retrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll10', function() {
      it('should call retrieveAll10 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll10
        //instance.retrieveAll10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll11', function() {
      it('should call retrieveAll11 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll11
        //instance.retrieveAll11(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll12', function() {
      it('should call retrieveAll12 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll12
        //instance.retrieveAll12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll13', function() {
      it('should call retrieveAll13 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll13
        //instance.retrieveAll13(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll27', function() {
      it('should call retrieveAll27 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll27
        //instance.retrieveAll27(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll37', function() {
      it('should call retrieveAll37 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll37
        //instance.retrieveAll37(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll5', function() {
      it('should call retrieveAll5 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll5
        //instance.retrieveAll5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll7', function() {
      it('should call retrieveAll7 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll7
        //instance.retrieveAll7(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll9', function() {
      it('should call retrieveAll9 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll9
        //instance.retrieveAll9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllCampaign', function() {
      it('should call retrieveAllCampaign successfully', function(done) {
        //uncomment below and update the code to test retrieveAllCampaign
        //instance.retrieveAllCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllDeviceRegistrations', function() {
      it('should call retrieveAllDeviceRegistrations successfully', function(done) {
        //uncomment below and update the code to test retrieveAllDeviceRegistrations
        //instance.retrieveAllDeviceRegistrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllEmailByStatus', function() {
      it('should call retrieveAllEmailByStatus successfully', function(done) {
        //uncomment below and update the code to test retrieveAllEmailByStatus
        //instance.retrieveAllEmailByStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllEmails', function() {
      it('should call retrieveAllEmails successfully', function(done) {
        //uncomment below and update the code to test retrieveAllEmails
        //instance.retrieveAllEmails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllEmails1', function() {
      it('should call retrieveAllEmails1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllEmails1
        //instance.retrieveAllEmails1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllGroups', function() {
      it('should call retrieveAllGroups successfully', function(done) {
        //uncomment below and update the code to test retrieveAllGroups
        //instance.retrieveAllGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllProducts', function() {
      it('should call retrieveAllProducts successfully', function(done) {
        //uncomment below and update the code to test retrieveAllProducts
        //instance.retrieveAllProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllProducts1', function() {
      it('should call retrieveAllProducts1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllProducts1
        //instance.retrieveAllProducts1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllRescheduleRequest', function() {
      it('should call retrieveAllRescheduleRequest successfully', function(done) {
        //uncomment below and update the code to test retrieveAllRescheduleRequest
        //instance.retrieveAllRescheduleRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllSmsByStatus', function() {
      it('should call retrieveAllSmsByStatus successfully', function(done) {
        //uncomment below and update the code to test retrieveAllSmsByStatus
        //instance.retrieveAllSmsByStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCalendar', function() {
      it('should call retrieveCalendar successfully', function(done) {
        //uncomment below and update the code to test retrieveCalendar
        //instance.retrieveCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCalendarsByEntity', function() {
      it('should call retrieveCalendarsByEntity successfully', function(done) {
        //uncomment below and update the code to test retrieveCalendarsByEntity
        //instance.retrieveCalendarsByEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCampaign', function() {
      it('should call retrieveCampaign successfully', function(done) {
        //uncomment below and update the code to test retrieveCampaign
        //instance.retrieveCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveDeviceRegiistration', function() {
      it('should call retrieveDeviceRegiistration successfully', function(done) {
        //uncomment below and update the code to test retrieveDeviceRegiistration
        //instance.retrieveDeviceRegiistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveDeviceRegistrationByClientId', function() {
      it('should call retrieveDeviceRegistrationByClientId successfully', function(done) {
        //uncomment below and update the code to test retrieveDeviceRegistrationByClientId
        //instance.retrieveDeviceRegistrationByClientId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveFailedEmail', function() {
      it('should call retrieveFailedEmail successfully', function(done) {
        //uncomment below and update the code to test retrieveFailedEmail
        //instance.retrieveFailedEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveFunds', function() {
      it('should call retrieveFunds successfully', function(done) {
        //uncomment below and update the code to test retrieveFunds
        //instance.retrieveFunds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveGuarantorDetails', function() {
      it('should call retrieveGuarantorDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveGuarantorDetails
        //instance.retrieveGuarantorDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveGuarantorDetails1', function() {
      it('should call retrieveGuarantorDetails1 successfully', function(done) {
        //uncomment below and update the code to test retrieveGuarantorDetails1
        //instance.retrieveGuarantorDetails1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveImportDocuments', function() {
      it('should call retrieveImportDocuments successfully', function(done) {
        //uncomment below and update the code to test retrieveImportDocuments
        //instance.retrieveImportDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveMeeting', function() {
      it('should call retrieveMeeting successfully', function(done) {
        //uncomment below and update the code to test retrieveMeeting
        //instance.retrieveMeeting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveMeetings', function() {
      it('should call retrieveMeetings successfully', function(done) {
        //uncomment below and update the code to test retrieveMeetings
        //instance.retrieveMeetings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveNewCalendarDetails', function() {
      it('should call retrieveNewCalendarDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveNewCalendarDetails
        //instance.retrieveNewCalendarDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOfficeTransactions', function() {
      it('should call retrieveOfficeTransactions successfully', function(done) {
        //uncomment below and update the code to test retrieveOfficeTransactions
        //instance.retrieveOfficeTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne1', function() {
      it('should call retrieveOne1 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne1
        //instance.retrieveOne1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne16', function() {
      it('should call retrieveOne16 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne16
        //instance.retrieveOne16(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne22', function() {
      it('should call retrieveOne22 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne22
        //instance.retrieveOne22(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne26', function() {
      it('should call retrieveOne26 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne26
        //instance.retrieveOne26(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne4', function() {
      it('should call retrieveOne4 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne4
        //instance.retrieveOne4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne6', function() {
      it('should call retrieveOne6 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne6
        //instance.retrieveOne6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOneCampaign', function() {
      it('should call retrieveOneCampaign successfully', function(done) {
        //uncomment below and update the code to test retrieveOneCampaign
        //instance.retrieveOneCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOneTemplate', function() {
      it('should call retrieveOneTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveOneTemplate
        //instance.retrieveOneTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrievePendingEmail', function() {
      it('should call retrievePendingEmail successfully', function(done) {
        //uncomment below and update the code to test retrievePendingEmail
        //instance.retrievePendingEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveProduct', function() {
      it('should call retrieveProduct successfully', function(done) {
        //uncomment below and update the code to test retrieveProduct
        //instance.retrieveProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveProduct1', function() {
      it('should call retrieveProduct1 successfully', function(done) {
        //uncomment below and update the code to test retrieveProduct1
        //instance.retrieveProduct1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveRate', function() {
      it('should call retrieveRate successfully', function(done) {
        //uncomment below and update the code to test retrieveRate
        //instance.retrieveRate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSentEmail', function() {
      it('should call retrieveSentEmail successfully', function(done) {
        //uncomment below and update the code to test retrieveSentEmail
        //instance.retrieveSentEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSurvey', function() {
      it('should call retrieveSurvey successfully', function(done) {
        //uncomment below and update the code to test retrieveSurvey
        //instance.retrieveSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSurveys', function() {
      it('should call retrieveSurveys successfully', function(done) {
        //uncomment below and update the code to test retrieveSurveys
        //instance.retrieveSurveys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate11', function() {
      it('should call retrieveTemplate11 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate11
        //instance.retrieveTemplate11(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate12', function() {
      it('should call retrieveTemplate12 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate12
        //instance.retrieveTemplate12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate13', function() {
      it('should call retrieveTemplate13 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate13
        //instance.retrieveTemplate13(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate18', function() {
      it('should call retrieveTemplate18 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate18
        //instance.retrieveTemplate18(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate9', function() {
      it('should call retrieveTemplate9 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate9
        //instance.retrieveTemplate9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retriveDetail', function() {
      it('should call retriveDetail successfully', function(done) {
        //uncomment below and update the code to test retriveDetail
        //instance.retriveDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retriveOutputTemplateLocation', function() {
      it('should call retriveOutputTemplateLocation successfully', function(done) {
        //uncomment below and update the code to test retriveOutputTemplateLocation
        //instance.retriveOutputTemplateLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template1', function() {
      it('should call template1 successfully', function(done) {
        //uncomment below and update the code to test template1
        //instance.template1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template11', function() {
      it('should call template11 successfully', function(done) {
        //uncomment below and update the code to test template11
        //instance.template11(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template2', function() {
      it('should call template2 successfully', function(done) {
        //uncomment below and update the code to test template2
        //instance.template2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transaction', function() {
      it('should call transaction successfully', function(done) {
        //uncomment below and update the code to test transaction
        //instance.transaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transaction2', function() {
      it('should call transaction2 successfully', function(done) {
        //uncomment below and update the code to test transaction2
        //instance.transaction2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transferMoneyFrom', function() {
      it('should call transferMoneyFrom successfully', function(done) {
        //uncomment below and update the code to test transferMoneyFrom
        //instance.transferMoneyFrom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update2', function() {
      it('should call update2 successfully', function(done) {
        //uncomment below and update the code to test update2
        //instance.update2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update3', function() {
      it('should call update3 successfully', function(done) {
        //uncomment below and update the code to test update3
        //instance.update3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update4', function() {
      it('should call update4 successfully', function(done) {
        //uncomment below and update the code to test update4
        //instance.update4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCalendar', function() {
      it('should call updateCalendar successfully', function(done) {
        //uncomment below and update the code to test updateCalendar
        //instance.updateCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaign', function() {
      it('should call updateCampaign successfully', function(done) {
        //uncomment below and update the code to test updateCampaign
        //instance.updateCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaign1', function() {
      it('should call updateCampaign1 successfully', function(done) {
        //uncomment below and update the code to test updateCampaign1
        //instance.updateCampaign1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientFamilyMembers', function() {
      it('should call updateClientFamilyMembers successfully', function(done) {
        //uncomment below and update the code to test updateClientFamilyMembers
        //instance.updateClientFamilyMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientImage1', function() {
      it('should call updateClientImage1 successfully', function(done) {
        //uncomment below and update the code to test updateClientImage1
        //instance.updateClientImage1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConfiguration', function() {
      it('should call updateConfiguration successfully', function(done) {
        //uncomment below and update the code to test updateConfiguration
        //instance.updateConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConfiguration2', function() {
      it('should call updateConfiguration2 successfully', function(done) {
        //uncomment below and update the code to test updateConfiguration2
        //instance.updateConfiguration2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConfiguration3', function() {
      it('should call updateConfiguration3 successfully', function(done) {
        //uncomment below and update the code to test updateConfiguration3
        //instance.updateConfiguration3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCreditBureau', function() {
      it('should call updateCreditBureau successfully', function(done) {
        //uncomment below and update the code to test updateCreditBureau
        //instance.updateCreditBureau(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCreditBureauLoanProductMapping', function() {
      it('should call updateCreditBureauLoanProductMapping successfully', function(done) {
        //uncomment below and update the code to test updateCreditBureauLoanProductMapping
        //instance.updateCreditBureauLoanProductMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeviceRegistration', function() {
      it('should call updateDeviceRegistration successfully', function(done) {
        //uncomment below and update the code to test updateDeviceRegistration
        //instance.updateDeviceRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDisbursementDate', function() {
      it('should call updateDisbursementDate successfully', function(done) {
        //uncomment below and update the code to test updateDisbursementDate
        //instance.updateDisbursementDate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFund', function() {
      it('should call updateFund successfully', function(done) {
        //uncomment below and update the code to test updateFund
        //instance.updateFund(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGuarantor', function() {
      it('should call updateGuarantor successfully', function(done) {
        //uncomment below and update the code to test updateGuarantor
        //instance.updateGuarantor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLoanRescheduleRequest', function() {
      it('should call updateLoanRescheduleRequest successfully', function(done) {
        //uncomment below and update the code to test updateLoanRescheduleRequest
        //instance.updateLoanRescheduleRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMap', function() {
      it('should call updateMap successfully', function(done) {
        //uncomment below and update the code to test updateMap
        //instance.updateMap(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMeeting', function() {
      it('should call updateMeeting successfully', function(done) {
        //uncomment below and update the code to test updateMeeting
        //instance.updateMeeting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProduct', function() {
      it('should call updateProduct successfully', function(done) {
        //uncomment below and update the code to test updateProduct
        //instance.updateProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductMix', function() {
      it('should call updateProductMix successfully', function(done) {
        //uncomment below and update the code to test updateProductMix
        //instance.updateProductMix(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRate', function() {
      it('should call updateRate successfully', function(done) {
        //uncomment below and update the code to test updateRate
        //instance.updateRate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validate', function() {
      it('should call validate successfully', function(done) {
        //uncomment below and update the code to test validate
        //instance.validate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
