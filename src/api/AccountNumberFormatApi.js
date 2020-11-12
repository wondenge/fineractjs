  


import ApiClient from "../ApiClient";
import DeleteAccountNumberFormatsResponse from '../model/DeleteAccountNumberFormatsResponse';
import GetAccountNumberFormatsIdResponse from '../model/GetAccountNumberFormatsIdResponse';
import GetAccountNumberFormatsResponseTemplate from '../model/GetAccountNumberFormatsResponseTemplate';
import PostAccountNumberFormatsRequest from '../model/PostAccountNumberFormatsRequest';
import PostAccountNumberFormatsResponse from '../model/PostAccountNumberFormatsResponse';
import PutAccountNumberFormatsRequest from '../model/PutAccountNumberFormatsRequest';
import PutAccountNumberFormatsResponse from '../model/PutAccountNumberFormatsResponse';

/**
* AccountNumberFormat service.
* @module api/AccountNumberFormatApi
* @version 1.0
*/
export default class AccountNumberFormatApi {

    /**
    * Constructs a new AccountNumberFormatApi. 
    * @alias module:api/AccountNumberFormatApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/AccountNumberFormatApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAccountNumberFormatsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Account number format
     * Note: Account numbers created while this format was active would remain unchanged.
     * @param {Number} accountNumberFormatId accountNumberFormatId
     * @param {module:api/AccountNumberFormatApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAccountNumberFormatsResponse}
     */
    callDelete(accountNumberFormatId, callback) {
      let postBody = null;
      // verify the required parameter 'accountNumberFormatId' is set
      if (accountNumberFormatId === undefined || accountNumberFormatId === null) {
        throw new Error("Missing the required parameter 'accountNumberFormatId' when calling callDelete");
      }

      let pathParams = {
        'accountNumberFormatId': accountNumberFormatId
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
      let returnType = DeleteAccountNumberFormatsResponse;
      return this.apiClient.callApi(
        '/accountnumberformats/{accountNumberFormatId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/AccountNumberFormatApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAccountNumberFormatsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Account number format
     * Note: You may associate a single Account number format for a given account type Mandatory Fields for Account number formats accountType
     * @param {Object} opts Optional parameters
     * @param {module:model/PostAccountNumberFormatsRequest} opts.postAccountNumberFormatsRequest 
     * @param {module:api/AccountNumberFormatApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAccountNumberFormatsResponse}
     */
    create(opts, callback) {
      opts = opts || {};
      let postBody = opts['postAccountNumberFormatsRequest'];

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
      let returnType = PostAccountNumberFormatsResponse;
      return this.apiClient.callApi(
        '/accountnumberformats', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll3 operation.
     * @callback module:api/AccountNumberFormatApi~retrieveAll3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAccountNumberFormatsIdResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Account number formats
     * Example Requests:  accountnumberformats   accountnumberformats?fields=accountType,prefixType
     * @param {module:api/AccountNumberFormatApi~retrieveAll3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAccountNumberFormatsIdResponse>}
     */
    retrieveAll3(callback) {
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
      let returnType = [GetAccountNumberFormatsIdResponse];
      return this.apiClient.callApi(
        '/accountnumberformats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne operation.
     * @callback module:api/AccountNumberFormatApi~retrieveOneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountNumberFormatsIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Account number format
     * Example Requests:  accountnumberformats/1   accountnumberformats/1?template=true   accountnumberformats/1?fields=accountType,prefixType
     * @param {Number} accountNumberFormatId accountNumberFormatId
     * @param {module:api/AccountNumberFormatApi~retrieveOneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountNumberFormatsIdResponse}
     */
    retrieveOne(accountNumberFormatId, callback) {
      let postBody = null;
      // verify the required parameter 'accountNumberFormatId' is set
      if (accountNumberFormatId === undefined || accountNumberFormatId === null) {
        throw new Error("Missing the required parameter 'accountNumberFormatId' when calling retrieveOne");
      }

      let pathParams = {
        'accountNumberFormatId': accountNumberFormatId
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
      let returnType = GetAccountNumberFormatsIdResponse;
      return this.apiClient.callApi(
        '/accountnumberformats/{accountNumberFormatId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate2 operation.
     * @callback module:api/AccountNumberFormatApi~retrieveTemplate2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountNumberFormatsResponseTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Account number format Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  accountnumberformats/template
     * @param {module:api/AccountNumberFormatApi~retrieveTemplate2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountNumberFormatsResponseTemplate}
     */
    retrieveTemplate2(callback) {
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
      let returnType = GetAccountNumberFormatsResponseTemplate;
      return this.apiClient.callApi(
        '/accountnumberformats/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update1 operation.
     * @callback module:api/AccountNumberFormatApi~update1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutAccountNumberFormatsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Account number format
     * @param {Number} accountNumberFormatId accountNumberFormatId
     * @param {module:model/PutAccountNumberFormatsRequest} putAccountNumberFormatsRequest 
     * @param {module:api/AccountNumberFormatApi~update1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutAccountNumberFormatsResponse}
     */
    update1(accountNumberFormatId, putAccountNumberFormatsRequest, callback) {
      let postBody = putAccountNumberFormatsRequest;
      // verify the required parameter 'accountNumberFormatId' is set
      if (accountNumberFormatId === undefined || accountNumberFormatId === null) {
        throw new Error("Missing the required parameter 'accountNumberFormatId' when calling update1");
      }
      // verify the required parameter 'putAccountNumberFormatsRequest' is set
      if (putAccountNumberFormatsRequest === undefined || putAccountNumberFormatsRequest === null) {
        throw new Error("Missing the required parameter 'putAccountNumberFormatsRequest' when calling update1");
      }

      let pathParams = {
        'accountNumberFormatId': accountNumberFormatId
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
      let returnType = PutAccountNumberFormatsResponse;
      return this.apiClient.callApi(
        '/accountnumberformats/{accountNumberFormatId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
