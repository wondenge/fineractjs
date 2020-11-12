


import ApiClient from "../ApiClient";
import GetClientsClientIdTransactionsResponse from '../model/GetClientsClientIdTransactionsResponse';
import GetClientsClientIdTransactionsTransactionIdResponse from '../model/GetClientsClientIdTransactionsTransactionIdResponse';
import PostClientsClientIdTransactionsTransactionIdResponse from '../model/PostClientsClientIdTransactionsTransactionIdResponse';

/**
* ClientTransaction service.
* @module api/ClientTransactionApi
* @version 1.0
*/
export default class ClientTransactionApi {

    /**
    * Constructs a new ClientTransactionApi. 
    * @alias module:api/ClientTransactionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAllClientTransactions operation.
     * @callback module:api/ClientTransactionApi~retrieveAllClientTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Client Transactions
     * The list capability of client transaction can support pagination.  Example Requests:  clients/189/transactions  clients/189/transactions?offset=10&limit=50
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/ClientTransactionApi~retrieveAllClientTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdTransactionsResponse}
     */
    retrieveAllClientTransactions(clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAllClientTransactions");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetClientsClientIdTransactionsResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveClientTransaction operation.
     * @callback module:api/ClientTransactionApi~retrieveClientTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client Transaction
     * Example Requests: clients/1/transactions/1   clients/1/transactions/1?fields=id,officeName
     * @param {Number} clientId clientId
     * @param {Number} transactionId transactionId
     * @param {module:api/ClientTransactionApi~retrieveClientTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdTransactionsTransactionIdResponse}
     */
    retrieveClientTransaction(clientId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveClientTransaction");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveClientTransaction");
      }

      let pathParams = {
        'clientId': clientId,
        'transactionId': transactionId
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
      let returnType = GetClientsClientIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the undoClientTransaction operation.
     * @callback module:api/ClientTransactionApi~undoClientTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientsClientIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Undo a Client Transaction
     * Undoes a Client Transaction
     * @param {Number} clientId clientId
     * @param {Number} transactionId transactionId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/ClientTransactionApi~undoClientTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientsClientIdTransactionsTransactionIdResponse}
     */
    undoClientTransaction(clientId, transactionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling undoClientTransaction");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling undoClientTransaction");
      }

      let pathParams = {
        'clientId': clientId,
        'transactionId': transactionId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PostClientsClientIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/transactions/{transactionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
