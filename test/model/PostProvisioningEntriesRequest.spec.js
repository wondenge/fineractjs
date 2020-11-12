

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
    instance = new ApacheFineract.PostProvisioningEntriesRequest();
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

  describe('PostProvisioningEntriesRequest', function() {
    it('should create an instance of PostProvisioningEntriesRequest', function() {
      // uncomment below and update the code to test PostProvisioningEntriesRequest
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be.a(ApacheFineract.PostProvisioningEntriesRequest);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be();
    });

    it('should have the property createjournalentries (base name: "createjournalentries")', function() {
      // uncomment below and update the code to test the property createjournalentries
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be();
    });

    it('should have the property provisioningentry (base name: "provisioningentry")', function() {
      // uncomment below and update the code to test the property provisioningentry
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be();
    });

    it('should have the property entries (base name: "entries")', function() {
      // uncomment below and update the code to test the property entries
      //var instane = new ApacheFineract.PostProvisioningEntriesRequest();
      //expect(instance).to.be();
    });

  });

}));
