


import ApiClient from "../ApiClient";
import DeleteGLAccountsRequest from '../model/DeleteGLAccountsRequest';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetGLAccountsResponse from '../model/GetGLAccountsResponse';
import GetGLAccountsTemplateResponse from '../model/GetGLAccountsTemplateResponse';
import PostGLAccountsRequest from '../model/PostGLAccountsRequest';
import PostGLAccountsResponse from '../model/PostGLAccountsResponse';
import PutGLAccountsRequest from '../model/PutGLAccountsRequest';
import PutGLAccountsResponse from '../model/PutGLAccountsResponse';

/**
* GeneralLedgerAccount service.
* @module api/GeneralLedgerAccountApi
* @version 1.0
*/
export default class GeneralLedgerAccountApi {

    /**
    * Constructs a new GeneralLedgerAccountApi. 
    * @alias module:api/GeneralLedgerAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createGLAccount1 operation.
     * @callback module:api/GeneralLedgerAccountApi~createGLAccount1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostGLAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a General Ledger Account
     * Note: You may optionally create Hierarchical Chart of Accounts by using the \"parentId\" property of an Account Mandatory Fields:  name, glCode, type, usage and manualEntriesAllowed
     * @param {Object} opts Optional parameters
     * @param {module:model/PostGLAccountsRequest} opts.postGLAccountsRequest 
     * @param {module:api/GeneralLedgerAccountApi~createGLAccount1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostGLAccountsResponse}
     */
    createGLAccount1(opts, callback) {
      opts = opts || {};
      let postBody = opts['postGLAccountsRequest'];

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
      let returnType = PostGLAccountsResponse;
      return this.apiClient.callApi(
        '/glaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGLAccount1 operation.
     * @callback module:api/GeneralLedgerAccountApi~deleteGLAccount1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteGLAccountsRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an accounting closure
     * Note: Only the latest accounting closure associated with a branch may be deleted.
     * @param {Number} glAccountId glAccountId
     * @param {module:api/GeneralLedgerAccountApi~deleteGLAccount1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteGLAccountsRequest}
     */
    deleteGLAccount1(glAccountId, callback) {
      let postBody = null;
      // verify the required parameter 'glAccountId' is set
      if (glAccountId === undefined || glAccountId === null) {
        throw new Error("Missing the required parameter 'glAccountId' when calling deleteGLAccount1");
      }

      let pathParams = {
        'glAccountId': glAccountId
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
      let returnType = DeleteGLAccountsRequest;
      return this.apiClient.callApi(
        '/glaccounts/{glAccountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGlAccountsTemplate operation.
     * @callback module:api/GeneralLedgerAccountApi~getGlAccountsTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateFormat 
     * @param {module:api/GeneralLedgerAccountApi~getGlAccountsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getGlAccountsTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/vnd.ms-excel'];
      let returnType = null;
      return this.apiClient.callApi(
        '/glaccounts/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postGlAccountsTemplate operation.
     * @callback module:api/GeneralLedgerAccountApi~postGlAccountsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/GeneralLedgerAccountApi~postGlAccountsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postGlAccountsTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/glaccounts/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreiveAccount operation.
     * @callback module:api/GeneralLedgerAccountApi~retreiveAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGLAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a General Ledger Account
     * Example Requests:  glaccounts/1   glaccounts/1?template=true   glaccounts/1?fields=name,glCode   glaccounts/1?fetchRunningBalance=true
     * @param {Number} glAccountId glAccountId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.fetchRunningBalance fetchRunningBalance
     * @param {module:api/GeneralLedgerAccountApi~retreiveAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGLAccountsResponse}
     */
    retreiveAccount(glAccountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'glAccountId' is set
      if (glAccountId === undefined || glAccountId === null) {
        throw new Error("Missing the required parameter 'glAccountId' when calling retreiveAccount");
      }

      let pathParams = {
        'glAccountId': glAccountId
      };
      let queryParams = {
        'fetchRunningBalance': opts['fetchRunningBalance']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGLAccountsResponse;
      return this.apiClient.callApi(
        '/glaccounts/{glAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllAccounts operation.
     * @callback module:api/GeneralLedgerAccountApi~retrieveAllAccountsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetGLAccountsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List General Ledger Accounts
     * ARGUMENTS type Integer optional manualEntriesAllowed boolean optional usage Integer optional disabled boolean optional parentId Long optional tagId Long optional Example Requests:  glaccounts   glaccounts?type=1&manualEntriesAllowed=true&usage=1&disabled=false  glaccounts?fetchRunningBalance=true
     * @param {Object} opts Optional parameters
     * @param {Number} opts.type type
     * @param {String} opts.searchParam searchParam
     * @param {Number} opts.usage usage
     * @param {Boolean} opts.manualEntriesAllowed manualEntriesAllowed
     * @param {Boolean} opts.disabled disabled
     * @param {Boolean} opts.fetchRunningBalance fetchRunningBalance
     * @param {module:api/GeneralLedgerAccountApi~retrieveAllAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetGLAccountsResponse>}
     */
    retrieveAllAccounts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type'],
        'searchParam': opts['searchParam'],
        'usage': opts['usage'],
        'manualEntriesAllowed': opts['manualEntriesAllowed'],
        'disabled': opts['disabled'],
        'fetchRunningBalance': opts['fetchRunningBalance']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetGLAccountsResponse];
      return this.apiClient.callApi(
        '/glaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveNewAccountDetails operation.
     * @callback module:api/GeneralLedgerAccountApi~retrieveNewAccountDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGLAccountsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve GL Accounts Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  glaccounts/template glaccounts/template?type=1  type is optional and integer value from 1 to 5.  1.Assets  2.Liabilities  3.Equity  4.Income  5.Expenses
     * @param {Object} opts Optional parameters
     * @param {Number} opts.type type
     * @param {module:api/GeneralLedgerAccountApi~retrieveNewAccountDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGLAccountsTemplateResponse}
     */
    retrieveNewAccountDetails(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGLAccountsTemplateResponse;
      return this.apiClient.callApi(
        '/glaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGLAccount1 operation.
     * @callback module:api/GeneralLedgerAccountApi~updateGLAccount1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutGLAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Accounting closure
     * Once an accounting closure is created, only the comments associated with it may be edited  
     * @param {Number} glAccountId glAccountId
     * @param {Object} opts Optional parameters
     * @param {module:model/PutGLAccountsRequest} opts.putGLAccountsRequest 
     * @param {module:api/GeneralLedgerAccountApi~updateGLAccount1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutGLAccountsResponse}
     */
    updateGLAccount1(glAccountId, opts, callback) {
      opts = opts || {};
      let postBody = opts['putGLAccountsRequest'];
      // verify the required parameter 'glAccountId' is set
      if (glAccountId === undefined || glAccountId === null) {
        throw new Error("Missing the required parameter 'glAccountId' when calling updateGLAccount1");
      }

      let pathParams = {
        'glAccountId': glAccountId
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
      let returnType = PutGLAccountsResponse;
      return this.apiClient.callApi(
        '/glaccounts/{glAccountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
