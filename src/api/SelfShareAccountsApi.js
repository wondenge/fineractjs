


import ApiClient from "../ApiClient";
import GetShareAccountsClientIdProductIdResponse from '../model/GetShareAccountsClientIdProductIdResponse';
import PostNewShareApplicationResponse from '../model/PostNewShareApplicationResponse';

/**
* SelfShareAccounts service.
* @module api/SelfShareAccountsApi
* @version 1.0
*/
export default class SelfShareAccountsApi {

    /**
    * Constructs a new SelfShareAccountsApi. 
    * @alias module:api/SelfShareAccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAccount1 operation.
     * @callback module:api/SelfShareAccountsApi~createAccount1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostNewShareApplicationResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit new share application
     * Mandatory fields:  clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate   Optional Fields  accountNo, externalId   Inherited from Product (if not provided)  minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType.
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SelfShareAccountsApi~createAccount1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostNewShareApplicationResponse>}
     */
    createAccount1(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = [PostNewShareApplicationResponse];
      return this.apiClient.callApi(
        '/self/shareaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveShareAccount operation.
     * @callback module:api/SelfShareAccountsApi~retrieveShareAccountCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a share application/account
     *    Example Requests:  self/shareaccounts/12 
     * @param {Number} accountId 
     * @param {module:api/SelfShareAccountsApi~retrieveShareAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveShareAccount(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveShareAccount");
      }

      let pathParams = {
        'accountId': accountId
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
        '/self/shareaccounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template19 operation.
     * @callback module:api/SelfShareAccountsApi~template19Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetShareAccountsClientIdProductIdResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Share Account Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of: Field Defaults  Allowed Value Lists   Arguments  clientId:Integer mandatory productId:Integer optionalIf entered, productId, productName and selectedProduct fields are returned. Example Requests:  self/shareaccounts/template?clientId=14  self/shareaccounts/template?clientId=14&productId=3 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {Number} opts.productId 
     * @param {module:api/SelfShareAccountsApi~template19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetShareAccountsClientIdProductIdResponse>}
     */
    template19(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId'],
        'productId': opts['productId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetShareAccountsClientIdProductIdResponse];
      return this.apiClient.callApi(
        '/self/shareaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
