

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
    instance = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
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

  describe('GetAccountTransfersTemplateRefundByTransferFromClient', function() {
    it('should create an instance of GetAccountTransfersTemplateRefundByTransferFromClient', function() {
      // uncomment below and update the code to test GetAccountTransfersTemplateRefundByTransferFromClient
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be.a(ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property activationDate (base name: "activationDate")', function() {
      // uncomment below and update the code to test the property activationDate
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property clientType (base name: "clientType")', function() {
      // uncomment below and update the code to test the property clientType
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property clientClassification (base name: "clientClassification")', function() {
      // uncomment below and update the code to test the property clientClassification
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromClient();
      //expect(instance).to.be();
    });

  });

}));
