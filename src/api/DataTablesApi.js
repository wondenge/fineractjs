


import ApiClient from "../ApiClient";
import DeleteDataTablesDatatableAppTableIdDatatableIdResponse from '../model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse';
import DeleteDataTablesDatatableAppTableIdResponse from '../model/DeleteDataTablesDatatableAppTableIdResponse';
import DeleteDataTablesResponse from '../model/DeleteDataTablesResponse';
import GetDataTablesAppTableIdResponse from '../model/GetDataTablesAppTableIdResponse';
import GetDataTablesResponse from '../model/GetDataTablesResponse';
import PostDataTablesAppTableIdRequest from '../model/PostDataTablesAppTableIdRequest';
import PostDataTablesAppTableIdResponse from '../model/PostDataTablesAppTableIdResponse';
import PostDataTablesRequest from '../model/PostDataTablesRequest';
import PostDataTablesResponse from '../model/PostDataTablesResponse';
import PutDataTablesAppTableIdDatatableIdRequest from '../model/PutDataTablesAppTableIdDatatableIdRequest';
import PutDataTablesAppTableIdDatatableIdResponse from '../model/PutDataTablesAppTableIdDatatableIdResponse';
import PutDataTablesAppTableIdRequest from '../model/PutDataTablesAppTableIdRequest';
import PutDataTablesAppTableIdResponse from '../model/PutDataTablesAppTableIdResponse';
import PutDataTablesRequest from '../model/PutDataTablesRequest';
import PutDataTablesResponse from '../model/PutDataTablesResponse';

/**
* DataTables service.
* @module api/DataTablesApi
* @version 1.0
*/
export default class DataTablesApi {

    /**
    * Constructs a new DataTablesApi. 
    * @alias module:api/DataTablesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDatatable operation.
     * @callback module:api/DataTablesApi~createDatatableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostDataTablesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Data Table
     * Create a new data table and registers it with the Apache Fineract Core application table.  Field Descriptions  Mandatory - datatableName :   The name of the Data Table.  Mandatory - apptableName  Application table name. Must be one of the following:  m_client  m_group  m_loan  m_office  m_saving_account  m_product_loan  m_savings_product  Mandatory - columns   An array of columns in the new Data Table.  Optional - multiRow  Allows to create multiple entries in the Data Table. Optional, defaults to false. If this property is not provided Data Table will allow only one entry.  Field Descriptions - columns  Mandatory - name  Name of the created column. Can contain only alphanumeric characters, underscores and spaces, but cannot start with a number. Cannot start or end with an underscore or space.  Mandatory - type  Column type. Must be one of the following:  Boolean  Date  DateTime  Decimal  Dropdown   Number  String  Text  Mandatory [type = Dropdown] - code  Used in Code description fields. Column name becomes: code_cd_name. Mandatory if using type Dropdown, otherwise an error is returned.  Optional - mandatory  Determines whether this column must have a value in every entry. Optional, defaults to false.  Mandatory [type = String] - length  Length of the text field. Mandatory if type String is used, otherwise an error is returned.
     * @param {module:model/PostDataTablesRequest} postDataTablesRequest 
     * @param {module:api/DataTablesApi~createDatatableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostDataTablesResponse}
     */
    createDatatable(postDataTablesRequest, callback) {
      let postBody = postDataTablesRequest;
      // verify the required parameter 'postDataTablesRequest' is set
      if (postDataTablesRequest === undefined || postDataTablesRequest === null) {
        throw new Error("Missing the required parameter 'postDataTablesRequest' when calling createDatatable");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostDataTablesResponse;
      return this.apiClient.callApi(
        '/datatables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createDatatableEntry operation.
     * @callback module:api/DataTablesApi~createDatatableEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostDataTablesAppTableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Entry in Data Table
     * Adds a row to the data table.  Note that the default datatable UI functionality converts any field name containing spaces to underscores when using the API. This means the field name \"Business Description\" is considered the same as \"Business_Description\". So you shouldn't have both \"versions\" in any data table.
     * @param {String} datatable datatable
     * @param {Number} apptableId apptableId
     * @param {module:model/PostDataTablesAppTableIdRequest} postDataTablesAppTableIdRequest 
     * @param {module:api/DataTablesApi~createDatatableEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostDataTablesAppTableIdResponse}
     */
    createDatatableEntry(datatable, apptableId, postDataTablesAppTableIdRequest, callback) {
      let postBody = postDataTablesAppTableIdRequest;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling createDatatableEntry");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling createDatatableEntry");
      }
      // verify the required parameter 'postDataTablesAppTableIdRequest' is set
      if (postDataTablesAppTableIdRequest === undefined || postDataTablesAppTableIdRequest === null) {
        throw new Error("Missing the required parameter 'postDataTablesAppTableIdRequest' when calling createDatatableEntry");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostDataTablesAppTableIdResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDatatable operation.
     * @callback module:api/DataTablesApi~deleteDatatableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteDataTablesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Data Table
     * Deletes a data table and deregisters it from the Apache Fineract Core application table.
     * @param {String} datatableName datatableName
     * @param {module:api/DataTablesApi~deleteDatatableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteDataTablesResponse}
     */
    deleteDatatable(datatableName, callback) {
      let postBody = null;
      // verify the required parameter 'datatableName' is set
      if (datatableName === undefined || datatableName === null) {
        throw new Error("Missing the required parameter 'datatableName' when calling deleteDatatable");
      }

      let pathParams = {
        'datatableName': datatableName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteDataTablesResponse;
      return this.apiClient.callApi(
        '/datatables/{datatableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDatatableEntries operation.
     * @callback module:api/DataTablesApi~deleteDatatableEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteDataTablesDatatableAppTableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Entry(s) in Data Table
     * Deletes the entry (if it exists) for data tables that are one-to-one with the application table.  Deletes the entries (if they exist) for data tables that are one-to-many with the application table.
     * @param {String} datatable datatable
     * @param {Number} apptableId apptableId
     * @param {module:api/DataTablesApi~deleteDatatableEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteDataTablesDatatableAppTableIdResponse}
     */
    deleteDatatableEntries(datatable, apptableId, callback) {
      let postBody = null;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling deleteDatatableEntries");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling deleteDatatableEntries");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteDataTablesDatatableAppTableIdResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDatatableEntries1 operation.
     * @callback module:api/DataTablesApi~deleteDatatableEntries1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Entry in Datatable (One to Many)
     * Deletes the entry (if it exists) for data tables that are one to many with the application table.  
     * @param {String} datatable datatable
     * @param {Number} apptableId apptableId
     * @param {Number} datatableId datatableId
     * @param {module:api/DataTablesApi~deleteDatatableEntries1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse}
     */
    deleteDatatableEntries1(datatable, apptableId, datatableId, callback) {
      let postBody = null;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling deleteDatatableEntries1");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling deleteDatatableEntries1");
      }
      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw new Error("Missing the required parameter 'datatableId' when calling deleteDatatableEntries1");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId,
        'datatableId': datatableId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteDataTablesDatatableAppTableIdDatatableIdResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}/{datatableId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deregisterDatatable operation.
     * @callback module:api/DataTablesApi~deregisterDatatableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutDataTablesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deregister Data Table
     * Deregisters a data table. It will no longer be available through the API.
     * @param {String} datatable datatable
     * @param {module:api/DataTablesApi~deregisterDatatableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutDataTablesResponse}
     */
    deregisterDatatable(datatable, callback) {
      let postBody = null;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling deregisterDatatable");
      }

      let pathParams = {
        'datatable': datatable
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PutDataTablesResponse;
      return this.apiClient.callApi(
        '/datatables/deregister/{datatable}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatatable operation.
     * @callback module:api/DataTablesApi~getDatatableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDataTablesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Data Table Details
     * Lists a registered data table details and the Apache Fineract Core application table they are registered to.
     * @param {String} datatable datatable
     * @param {module:api/DataTablesApi~getDatatableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetDataTablesResponse}
     */
    getDatatable(datatable, callback) {
      let postBody = null;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling getDatatable");
      }

      let pathParams = {
        'datatable': datatable
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetDataTablesResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatatable1 operation.
     * @callback module:api/DataTablesApi~getDatatable1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDataTablesAppTableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Entry(s) from Data Table
     * Gets the entry (if it exists) for data tables that are one to one with the application table.  Gets the entries (if they exist) for data tables that are one to many with the application table.  Note: The 'fields' parameter is not available for datatables.  ARGUMENTS orderoptional Specifies the order in which data is returned.genericResultSetoptional, defaults to false If 'true' an optimised JSON format is returned suitable for tabular display of data. This format is used by the default data tables UI functionality. Example Requests:  datatables/extra_client_details/1   datatables/extra_family_details/1?order=`Date of Birth` desc   datatables/extra_client_details/1?genericResultSet=true
     * @param {String} datatable datatable
     * @param {Number} apptableId apptableId
     * @param {Object} opts Optional parameters
     * @param {String} opts.order order
     * @param {module:api/DataTablesApi~getDatatable1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetDataTablesAppTableIdResponse}
     */
    getDatatable1(datatable, apptableId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling getDatatable1");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling getDatatable1");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId
      };
      let queryParams = {
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetDataTablesAppTableIdResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatatableManyEntry operation.
     * @callback module:api/DataTablesApi~getDatatableManyEntryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} datatable 
     * @param {Number} apptableId 
     * @param {Number} datatableId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.order 
     * @param {module:api/DataTablesApi~getDatatableManyEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getDatatableManyEntry(datatable, apptableId, datatableId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling getDatatableManyEntry");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling getDatatableManyEntry");
      }
      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw new Error("Missing the required parameter 'datatableId' when calling getDatatableManyEntry");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId,
        'datatableId': datatableId
      };
      let queryParams = {
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}/{datatableId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDatatables operation.
     * @callback module:api/DataTablesApi~getDatatablesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetDataTablesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Data Tables
     * Lists registered data tables and the Apache Fineract Core application table they are registered to.  ARGUMENTS  apptable  - optional The Apache Fineract core application table.  Example Requests:  datatables?apptable=m_client   datatables
     * @param {Object} opts Optional parameters
     * @param {String} opts.apptable apptable
     * @param {module:api/DataTablesApi~getDatatablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetDataTablesResponse>}
     */
    getDatatables(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'apptable': opts['apptable']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetDataTablesResponse];
      return this.apiClient.callApi(
        '/datatables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerDatatable operation.
     * @callback module:api/DataTablesApi~registerDatatableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutDataTablesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register Data Table
     * Registers a data table with the Apache Fineract Core application table. This allows the data table to be maintained through the API. In case the datatable is a PPI (survey table), a parameter category should be pass along with the request. The API currently support one category (200)
     * @param {String} datatable datatable
     * @param {String} apptable apptable
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {module:api/DataTablesApi~registerDatatableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutDataTablesResponse}
     */
    registerDatatable(datatable, apptable, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling registerDatatable");
      }
      // verify the required parameter 'apptable' is set
      if (apptable === undefined || apptable === null) {
        throw new Error("Missing the required parameter 'apptable' when calling registerDatatable");
      }

      let pathParams = {
        'datatable': datatable,
        'apptable': apptable
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutDataTablesResponse;
      return this.apiClient.callApi(
        '/datatables/register/{datatable}/{apptable}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDatatable operation.
     * @callback module:api/DataTablesApi~updateDatatableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutDataTablesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Data Table
     * Modifies fields of a data table. If the apptableName parameter is passed, data table is deregistered and registered with the new application table.
     * @param {String} datatableName datatableName
     * @param {module:model/PutDataTablesRequest} putDataTablesRequest 
     * @param {module:api/DataTablesApi~updateDatatableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutDataTablesResponse}
     */
    updateDatatable(datatableName, putDataTablesRequest, callback) {
      let postBody = putDataTablesRequest;
      // verify the required parameter 'datatableName' is set
      if (datatableName === undefined || datatableName === null) {
        throw new Error("Missing the required parameter 'datatableName' when calling updateDatatable");
      }
      // verify the required parameter 'putDataTablesRequest' is set
      if (putDataTablesRequest === undefined || putDataTablesRequest === null) {
        throw new Error("Missing the required parameter 'putDataTablesRequest' when calling updateDatatable");
      }

      let pathParams = {
        'datatableName': datatableName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutDataTablesResponse;
      return this.apiClient.callApi(
        '/datatables/{datatableName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDatatableEntryOneToMany operation.
     * @callback module:api/DataTablesApi~updateDatatableEntryOneToManyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutDataTablesAppTableIdDatatableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Entry in Data Table (One to Many)
     * Updates the row (if it exists) of the data table.
     * @param {String} datatable datatable
     * @param {Number} apptableId apptableId
     * @param {Number} datatableId datatableId
     * @param {module:model/PutDataTablesAppTableIdDatatableIdRequest} putDataTablesAppTableIdDatatableIdRequest 
     * @param {module:api/DataTablesApi~updateDatatableEntryOneToManyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutDataTablesAppTableIdDatatableIdResponse}
     */
    updateDatatableEntryOneToMany(datatable, apptableId, datatableId, putDataTablesAppTableIdDatatableIdRequest, callback) {
      let postBody = putDataTablesAppTableIdDatatableIdRequest;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling updateDatatableEntryOneToMany");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling updateDatatableEntryOneToMany");
      }
      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw new Error("Missing the required parameter 'datatableId' when calling updateDatatableEntryOneToMany");
      }
      // verify the required parameter 'putDataTablesAppTableIdDatatableIdRequest' is set
      if (putDataTablesAppTableIdDatatableIdRequest === undefined || putDataTablesAppTableIdDatatableIdRequest === null) {
        throw new Error("Missing the required parameter 'putDataTablesAppTableIdDatatableIdRequest' when calling updateDatatableEntryOneToMany");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId,
        'datatableId': datatableId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutDataTablesAppTableIdDatatableIdResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}/{datatableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDatatableEntryOnetoOne operation.
     * @callback module:api/DataTablesApi~updateDatatableEntryOnetoOneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutDataTablesAppTableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Entry in Data Table (One to One)
     * Updates the row (if it exists) of the data table.
     * @param {String} datatable datatable
     * @param {Number} apptableId apptableId
     * @param {module:model/PutDataTablesAppTableIdRequest} putDataTablesAppTableIdRequest 
     * @param {module:api/DataTablesApi~updateDatatableEntryOnetoOneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutDataTablesAppTableIdResponse}
     */
    updateDatatableEntryOnetoOne(datatable, apptableId, putDataTablesAppTableIdRequest, callback) {
      let postBody = putDataTablesAppTableIdRequest;
      // verify the required parameter 'datatable' is set
      if (datatable === undefined || datatable === null) {
        throw new Error("Missing the required parameter 'datatable' when calling updateDatatableEntryOnetoOne");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling updateDatatableEntryOnetoOne");
      }
      // verify the required parameter 'putDataTablesAppTableIdRequest' is set
      if (putDataTablesAppTableIdRequest === undefined || putDataTablesAppTableIdRequest === null) {
        throw new Error("Missing the required parameter 'putDataTablesAppTableIdRequest' when calling updateDatatableEntryOnetoOne");
      }

      let pathParams = {
        'datatable': datatable,
        'apptableId': apptableId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutDataTablesAppTableIdResponse;
      return this.apiClient.callApi(
        '/datatables/{datatable}/{apptableId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
