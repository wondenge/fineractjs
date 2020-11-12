


import ApiClient from "../ApiClient";
import GetAccountsLinkedToPocketResponse from '../model/GetAccountsLinkedToPocketResponse';
import PostLinkDelinkAccountsToFromPocketResponse from '../model/PostLinkDelinkAccountsToFromPocketResponse';

/**
* Pocket service.
* @module api/PocketApi
* @version 1.0
*/
export default class PocketApi {

    /**
    * Constructs a new PocketApi. 
    * @alias module:api/PocketApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the handleCommands7 operation.
     * @callback module:api/PocketApi~handleCommands7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLinkDelinkAccountsToFromPocketResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Link/delink accounts to/from pocket
     * Pockets behave as favourites. An user can link his/her Loan, Savings and Share accounts to pocket for faster access. In a similar way linked accounts can be delinked from the pocket.  Example Requests:  self/pockets?command=linkAccounts  self/pockets?command=delinkAccounts
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {String} opts.body 
     * @param {module:api/PocketApi~handleCommands7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLinkDelinkAccountsToFromPocketResponse}
     */
    handleCommands7(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostLinkDelinkAccountsToFromPocketResponse;
      return this.apiClient.callApi(
        '/self/pockets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll36 operation.
     * @callback module:api/PocketApi~retrieveAll36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountsLinkedToPocketResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve accounts linked to pocket
     * All linked loan  Example Requests:   self/pockets
     * @param {module:api/PocketApi~retrieveAll36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountsLinkedToPocketResponse}
     */
    retrieveAll36(callback) {
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
      let returnType = GetAccountsLinkedToPocketResponse;
      return this.apiClient.callApi(
        '/self/pockets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
