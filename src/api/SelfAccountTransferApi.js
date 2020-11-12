


import ApiClient from "../ApiClient";
import GetAccountTransferTemplateResponse from '../model/GetAccountTransferTemplateResponse';
import PostNewTransferResponse from '../model/PostNewTransferResponse';

/**
* SelfAccountTransfer service.
* @module api/SelfAccountTransferApi
* @version 1.0
*/
export default class SelfAccountTransferApi {

    /**
    * Constructs a new SelfAccountTransferApi. 
    * @alias module:api/SelfAccountTransferApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create13 operation.
     * @callback module:api/SelfAccountTransferApi~create13Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostNewTransferResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Transfer
     * Ability to create new transfer of monetary funds from one account to another.   Example Requests:   self/accounttransfers/ 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type  (default to '')
     * @param {String} opts.body 
     * @param {module:api/SelfAccountTransferApi~create13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostNewTransferResponse>}
     */
    create13(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [PostNewTransferResponse];
      return this.apiClient.callApi(
        '/self/accounttransfers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template15 operation.
     * @callback module:api/SelfAccountTransferApi~template15Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAccountTransferTemplateResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Account Transfer Template
     * Returns list of loan/savings accounts that can be used for account transfer   Example Requests:  self/accounttransfers/template 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type  (default to '')
     * @param {module:api/SelfAccountTransferApi~template15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAccountTransferTemplateResponse>}
     */
    template15(opts, callback) {
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
      let returnType = [GetAccountTransferTemplateResponse];
      return this.apiClient.callApi(
        '/self/accounttransfers/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
