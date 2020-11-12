

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
    instance = new ApacheFineract.GetMakerCheckerResponse();
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

  describe('GetMakerCheckerResponse', function() {
    it('should create an instance of GetMakerCheckerResponse', function() {
      // uncomment below and update the code to test GetMakerCheckerResponse
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be.a(ApacheFineract.GetMakerCheckerResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property actionName (base name: "actionName")', function() {
      // uncomment below and update the code to test the property actionName
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityName (base name: "entityName")', function() {
      // uncomment below and update the code to test the property entityName
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property resourceId (base name: "resourceId")', function() {
      // uncomment below and update the code to test the property resourceId
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property subresourceId (base name: "subresourceId")', function() {
      // uncomment below and update the code to test the property subresourceId
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property maker (base name: "maker")', function() {
      // uncomment below and update the code to test the property maker
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property madeOnDate (base name: "madeOnDate")', function() {
      // uncomment below and update the code to test the property madeOnDate
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property checker (base name: "checker")', function() {
      // uncomment below and update the code to test the property checker
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property checkedOnDate (base name: "checkedOnDate")', function() {
      // uncomment below and update the code to test the property checkedOnDate
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property processingResult (base name: "processingResult")', function() {
      // uncomment below and update the code to test the property processingResult
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property commandAsJson (base name: "commandAsJson")', function() {
      // uncomment below and update the code to test the property commandAsJson
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property groupLevelName (base name: "groupLevelName")', function() {
      // uncomment below and update the code to test the property groupLevelName
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "groupName")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanAccountNo (base name: "loanAccountNo")', function() {
      // uncomment below and update the code to test the property loanAccountNo
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsAccountNo (base name: "savingsAccountNo")', function() {
      // uncomment below and update the code to test the property savingsAccountNo
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanId (base name: "loanId")', function() {
      // uncomment below and update the code to test the property loanId
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ApacheFineract.GetMakerCheckerResponse();
      //expect(instance).to.be();
    });

  });

}));
