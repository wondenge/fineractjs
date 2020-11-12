

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
    instance = new ApacheFineract.RolesApi();
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

  describe('RolesApi', function() {
    describe('actionsOnRoles', function() {
      it('should call actionsOnRoles successfully', function(done) {
        //uncomment below and update the code to test actionsOnRoles
        //instance.actionsOnRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRole', function() {
      it('should call createRole successfully', function(done) {
        //uncomment below and update the code to test createRole
        //instance.createRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRole', function() {
      it('should call deleteRole successfully', function(done) {
        //uncomment below and update the code to test deleteRole
        //instance.deleteRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllRoles', function() {
      it('should call retrieveAllRoles successfully', function(done) {
        //uncomment below and update the code to test retrieveAllRoles
        //instance.retrieveAllRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveRole', function() {
      it('should call retrieveRole successfully', function(done) {
        //uncomment below and update the code to test retrieveRole
        //instance.retrieveRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveRolePermissions', function() {
      it('should call retrieveRolePermissions successfully', function(done) {
        //uncomment below and update the code to test retrieveRolePermissions
        //instance.retrieveRolePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRole', function() {
      it('should call updateRole successfully', function(done) {
        //uncomment below and update the code to test updateRole
        //instance.updateRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRolePermissions', function() {
      it('should call updateRolePermissions successfully', function(done) {
        //uncomment below and update the code to test updateRolePermissions
        //instance.updateRolePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
