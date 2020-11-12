

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
    instance = new ApacheFineract.DataTablesApi();
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

  describe('DataTablesApi', function() {
    describe('createDatatable', function() {
      it('should call createDatatable successfully', function(done) {
        //uncomment below and update the code to test createDatatable
        //instance.createDatatable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDatatableEntry', function() {
      it('should call createDatatableEntry successfully', function(done) {
        //uncomment below and update the code to test createDatatableEntry
        //instance.createDatatableEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDatatable', function() {
      it('should call deleteDatatable successfully', function(done) {
        //uncomment below and update the code to test deleteDatatable
        //instance.deleteDatatable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDatatableEntries', function() {
      it('should call deleteDatatableEntries successfully', function(done) {
        //uncomment below and update the code to test deleteDatatableEntries
        //instance.deleteDatatableEntries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDatatableEntries1', function() {
      it('should call deleteDatatableEntries1 successfully', function(done) {
        //uncomment below and update the code to test deleteDatatableEntries1
        //instance.deleteDatatableEntries1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deregisterDatatable', function() {
      it('should call deregisterDatatable successfully', function(done) {
        //uncomment below and update the code to test deregisterDatatable
        //instance.deregisterDatatable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatatable', function() {
      it('should call getDatatable successfully', function(done) {
        //uncomment below and update the code to test getDatatable
        //instance.getDatatable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatatable1', function() {
      it('should call getDatatable1 successfully', function(done) {
        //uncomment below and update the code to test getDatatable1
        //instance.getDatatable1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatatableManyEntry', function() {
      it('should call getDatatableManyEntry successfully', function(done) {
        //uncomment below and update the code to test getDatatableManyEntry
        //instance.getDatatableManyEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatatables', function() {
      it('should call getDatatables successfully', function(done) {
        //uncomment below and update the code to test getDatatables
        //instance.getDatatables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerDatatable', function() {
      it('should call registerDatatable successfully', function(done) {
        //uncomment below and update the code to test registerDatatable
        //instance.registerDatatable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDatatable', function() {
      it('should call updateDatatable successfully', function(done) {
        //uncomment below and update the code to test updateDatatable
        //instance.updateDatatable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDatatableEntryOneToMany', function() {
      it('should call updateDatatableEntryOneToMany successfully', function(done) {
        //uncomment below and update the code to test updateDatatableEntryOneToMany
        //instance.updateDatatableEntryOneToMany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDatatableEntryOnetoOne', function() {
      it('should call updateDatatableEntryOnetoOne successfully', function(done) {
        //uncomment below and update the code to test updateDatatableEntryOnetoOne
        //instance.updateDatatableEntryOnetoOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
