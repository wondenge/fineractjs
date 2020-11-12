

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
    instance = new ApacheFineract.ProvisioningCategoryApi();
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

  describe('ProvisioningCategoryApi', function() {
    describe('createProvisioningCategory', function() {
      it('should call createProvisioningCategory successfully', function(done) {
        //uncomment below and update the code to test createProvisioningCategory
        //instance.createProvisioningCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProvisioningCategory', function() {
      it('should call deleteProvisioningCategory successfully', function(done) {
        //uncomment below and update the code to test deleteProvisioningCategory
        //instance.deleteProvisioningCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll15', function() {
      it('should call retrieveAll15 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll15
        //instance.retrieveAll15(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProvisioningCategory', function() {
      it('should call updateProvisioningCategory successfully', function(done) {
        //uncomment below and update the code to test updateProvisioningCategory
        //instance.updateProvisioningCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
