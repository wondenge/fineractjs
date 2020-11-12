


import ApiClient from "../ApiClient";
import DeleteFinancialActivityAccountsResponse from '../model/DeleteFinancialActivityAccountsResponse';
import GetFinancialActivityAccountsResponse from '../model/GetFinancialActivityAccountsResponse';
import PostFinancialActivityAccountsRequest from '../model/PostFinancialActivityAccountsRequest';
import PostFinancialActivityAccountsResponse from '../model/PostFinancialActivityAccountsResponse';
import PutFinancialActivityAccountsResponse from '../model/PutFinancialActivityAccountsResponse';

/**
* MappingFinancialActivitiesToAccounts service.
* @module api/MappingFinancialActivitiesToAccountsApi
* @version 1.0
*/
export default class MappingFinancialActivitiesToAccountsApi {

    /**
    * Constructs a new MappingFinancialActivitiesToAccountsApi. 
    * @alias module:api/MappingFinancialActivitiesToAccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createGLAccount operation.
     * @callback module:api/MappingFinancialActivitiesToAccountsApi~createGLAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostFinancialActivityAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Financial Activity to Accounts Mapping
     * Mandatory Fields financialActivityId, glAccountId
     * @param {Object} opts Optional parameters
     * @param {module:model/PostFinancialActivityAccountsRequest} opts.postFinancialActivityAccountsRequest 
     * @param {module:api/MappingFinancialActivitiesToAccountsApi~createGLAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostFinancialActivityAccountsResponse}
     */
    createGLAccount(opts, callback) {
      opts = opts || {};
      let postBody = opts['postFinancialActivityAccountsRequest'];

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
      let returnType = PostFinancialActivityAccountsResponse;
      return this.apiClient.callApi(
        '/financialactivityaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGLAccount operation.
     * @callback module:api/MappingFinancialActivitiesToAccountsApi~deleteGLAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteFinancialActivityAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Financial Activity to Account Mapping
     * @param {Number} mappingId mappingId
     * @param {module:api/MappingFinancialActivitiesToAccountsApi~deleteGLAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteFinancialActivityAccountsResponse}
     */
    deleteGLAccount(mappingId, callback) {
      let postBody = null;
      // verify the required parameter 'mappingId' is set
      if (mappingId === undefined || mappingId === null) {
        throw new Error("Missing the required parameter 'mappingId' when calling deleteGLAccount");
      }

      let pathParams = {
        'mappingId': mappingId
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
      let returnType = DeleteFinancialActivityAccountsResponse;
      return this.apiClient.callApi(
        '/financialactivityaccounts/{mappingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreive operation.
     * @callback module:api/MappingFinancialActivitiesToAccountsApi~retreiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFinancialActivityAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Financial Activity to Account Mapping 
     * Example Requests:  financialactivityaccounts/1
     * @param {Number} mappingId mappingId
     * @param {module:api/MappingFinancialActivitiesToAccountsApi~retreiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFinancialActivityAccountsResponse}
     */
    retreive(mappingId, callback) {
      let postBody = null;
      // verify the required parameter 'mappingId' is set
      if (mappingId === undefined || mappingId === null) {
        throw new Error("Missing the required parameter 'mappingId' when calling retreive");
      }

      let pathParams = {
        'mappingId': mappingId
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
      let returnType = GetFinancialActivityAccountsResponse;
      return this.apiClient.callApi(
        '/financialactivityaccounts/{mappingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll operation.
     * @callback module:api/MappingFinancialActivitiesToAccountsApi~retrieveAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFinancialActivityAccountsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Financial Activities to Accounts Mappings
     * Example Requests:  financialactivityaccounts
     * @param {module:api/MappingFinancialActivitiesToAccountsApi~retrieveAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFinancialActivityAccountsResponse>}
     */
    retrieveAll(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = [GetFinancialActivityAccountsResponse];
      return this.apiClient.callApi(
        '/financialactivityaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate operation.
     * @callback module:api/MappingFinancialActivitiesToAccountsApi~retrieveTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/MappingFinancialActivitiesToAccountsApi~retrieveTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/financialactivityaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGLAccount operation.
     * @callback module:api/MappingFinancialActivitiesToAccountsApi~updateGLAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutFinancialActivityAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Financial Activity to Account Mapping
     * the API updates the Ledger account linked to a Financial Activity  
     * @param {Number} mappingId mappingId
     * @param {Object} opts Optional parameters
     * @param {module:model/PostFinancialActivityAccountsRequest} opts.postFinancialActivityAccountsRequest 
     * @param {module:api/MappingFinancialActivitiesToAccountsApi~updateGLAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutFinancialActivityAccountsResponse}
     */
    updateGLAccount(mappingId, opts, callback) {
      opts = opts || {};
      let postBody = opts['postFinancialActivityAccountsRequest'];
      // verify the required parameter 'mappingId' is set
      if (mappingId === undefined || mappingId === null) {
        throw new Error("Missing the required parameter 'mappingId' when calling updateGLAccount");
      }

      let pathParams = {
        'mappingId': mappingId
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
      let returnType = PutFinancialActivityAccountsResponse;
      return this.apiClient.callApi(
        '/financialactivityaccounts/{mappingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
