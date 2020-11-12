

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
    instance = new ApacheFineract.CommandWrapper();
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

  describe('CommandWrapper', function() {
    it('should create an instance of CommandWrapper', function() {
      // uncomment below and update the code to test CommandWrapper
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be.a(ApacheFineract.CommandWrapper);
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property loanId (base name: "loanId")', function() {
      // uncomment below and update the code to test the property loanId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property savingsId (base name: "savingsId")', function() {
      // uncomment below and update the code to test the property savingsId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property entityName (base name: "entityName")', function() {
      // uncomment below and update the code to test the property entityName
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property taskPermissionName (base name: "taskPermissionName")', function() {
      // uncomment below and update the code to test the property taskPermissionName
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property subentityId (base name: "subentityId")', function() {
      // uncomment below and update the code to test the property subentityId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property json (base name: "json")', function() {
      // uncomment below and update the code to test the property json
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property creditBureauId (base name: "creditBureauId")', function() {
      // uncomment below and update the code to test the property creditBureauId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property organisationCreditBureauId (base name: "organisationCreditBureauId")', function() {
      // uncomment below and update the code to test the property organisationCreditBureauId
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property updateOperation (base name: "updateOperation")', function() {
      // uncomment below and update the code to test the property updateOperation
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property deleteOperation (base name: "deleteOperation")', function() {
      // uncomment below and update the code to test the property deleteOperation
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property surveyResource (base name: "surveyResource")', function() {
      // uncomment below and update the code to test the property surveyResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property registerSurvey (base name: "registerSurvey")', function() {
      // uncomment below and update the code to test the property registerSurvey
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property fullFilSurvey (base name: "fullFilSurvey")', function() {
      // uncomment below and update the code to test the property fullFilSurvey
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property workingDaysResource (base name: "workingDaysResource")', function() {
      // uncomment below and update the code to test the property workingDaysResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property passwordPreferencesResource (base name: "passwordPreferencesResource")', function() {
      // uncomment below and update the code to test the property passwordPreferencesResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property permissionResource (base name: "permissionResource")', function() {
      // uncomment below and update the code to test the property permissionResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property userResource (base name: "userResource")', function() {
      // uncomment below and update the code to test the property userResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property currencyResource (base name: "currencyResource")', function() {
      // uncomment below and update the code to test the property currencyResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property loanDisburseDetailResource (base name: "loanDisburseDetailResource")', function() {
      // uncomment below and update the code to test the property loanDisburseDetailResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property updateDisbursementDate (base name: "updateDisbursementDate")', function() {
      // uncomment below and update the code to test the property updateDisbursementDate
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property create (base name: "create")', function() {
      // uncomment below and update the code to test the property create
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property createDatatable (base name: "createDatatable")', function() {
      // uncomment below and update the code to test the property createDatatable
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property deleteDatatable (base name: "deleteDatatable")', function() {
      // uncomment below and update the code to test the property deleteDatatable
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property updateDatatable (base name: "updateDatatable")', function() {
      // uncomment below and update the code to test the property updateDatatable
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property datatableResource (base name: "datatableResource")', function() {
      // uncomment below and update the code to test the property datatableResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property deleteOneToOne (base name: "deleteOneToOne")', function() {
      // uncomment below and update the code to test the property deleteOneToOne
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property deleteMultiple (base name: "deleteMultiple")', function() {
      // uncomment below and update the code to test the property deleteMultiple
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property updateOneToOne (base name: "updateOneToOne")', function() {
      // uncomment below and update the code to test the property updateOneToOne
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property updateMultiple (base name: "updateMultiple")', function() {
      // uncomment below and update the code to test the property updateMultiple
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property registerDatatable (base name: "registerDatatable")', function() {
      // uncomment below and update the code to test the property registerDatatable
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property noteResource (base name: "noteResource")', function() {
      // uncomment below and update the code to test the property noteResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property cacheResource (base name: "cacheResource")', function() {
      // uncomment below and update the code to test the property cacheResource
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instane = new ApacheFineract.CommandWrapper();
      //expect(instance).to.be();
    });

  });

}));
