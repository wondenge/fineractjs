


import ApiClient from "../ApiClient";
import GetSelfClientsClientIdAccountsResponse from '../model/GetSelfClientsClientIdAccountsResponse';
import GetSelfClientsClientIdChargesChargeIdResponse from '../model/GetSelfClientsClientIdChargesChargeIdResponse';
import GetSelfClientsClientIdChargesResponse from '../model/GetSelfClientsClientIdChargesResponse';
import GetSelfClientsClientIdResponse from '../model/GetSelfClientsClientIdResponse';
import GetSelfClientsClientIdTransactionsResponse from '../model/GetSelfClientsClientIdTransactionsResponse';
import GetSelfClientsClientIdTransactionsTransactionIdResponse from '../model/GetSelfClientsClientIdTransactionsTransactionIdResponse';
import GetSelfClientsResponse from '../model/GetSelfClientsResponse';

/**
* SelfClient service.
* @module api/SelfClientApi
* @version 1.0
*/
export default class SelfClientApi {

    /**
    * Constructs a new SelfClientApi. 
    * @alias module:api/SelfClientApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addNewClientImage2 operation.
     * @callback module:api/SelfClientApi~addNewClientImage2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entity 
     * @param {Number} clientId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SelfClientApi~addNewClientImage2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    addNewClientImage2(entity, clientId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling addNewClientImage2");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling addNewClientImage2");
      }

      let pathParams = {
        'entity': entity,
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['text/plain', 'text/html', 'application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/clients/{clientId}/images', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientImage1 operation.
     * @callback module:api/SelfClientApi~deleteClientImage1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/SelfClientApi~deleteClientImage1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteClientImage1(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClientImage1");
      }

      let pathParams = {
        'clientId': clientId
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
        '/self/clients/{clientId}/images', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll35 operation.
     * @callback module:api/SelfClientApi~retrieveAll35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Clients associated to the user
     * The list capability of clients can support pagination and sorting.  Example Requests:  self/clients  self/clients?fields=displayName,officeName  self/clients?offset=10&limit=50  self/clients?orderBy=displayName&sortOrder=DESC
     * @param {Object} opts Optional parameters
     * @param {String} opts.displayName displayName
     * @param {String} opts.firstName firstName
     * @param {String} opts.lastName lastName
     * @param {Number} opts.offset offset
     * @param {String} opts.status status
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/SelfClientApi~retrieveAll35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsResponse}
     */
    retrieveAll35(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'displayName': opts['displayName'],
        'firstName': opts['firstName'],
        'lastName': opts['lastName'],
        'offset': opts['offset'],
        'status': opts['status'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSelfClientsResponse;
      return this.apiClient.callApi(
        '/self/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllClientCharges1 operation.
     * @callback module:api/SelfClientApi~retrieveAllClientCharges1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsClientIdChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Client Charges
     * The list capability of client charges supports pagination.  Example Requests:  self/clients/1/charges  self/clients/1/charges?offset=0&limit=5
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {Boolean} opts.pendingPayment pendingPayment
     * @param {Number} opts.limit limit
     * @param {Number} opts.offset offset
     * @param {module:api/SelfClientApi~retrieveAllClientCharges1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsClientIdChargesResponse}
     */
    retrieveAllClientCharges1(clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAllClientCharges1");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
        'chargeStatus': opts['chargeStatus'],
        'pendingPayment': opts['pendingPayment'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSelfClientsClientIdChargesResponse;
      return this.apiClient.callApi(
        '/self/clients/{clientId}/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllClientTransactions1 operation.
     * @callback module:api/SelfClientApi~retrieveAllClientTransactions1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsClientIdTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Client Transactions
     * The list capability of client transaction can support pagination.  Example Requests:  self/clients/189/transactions  self/clients/189/transactions?offset=10&limit=50
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/SelfClientApi~retrieveAllClientTransactions1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsClientIdTransactionsResponse}
     */
    retrieveAllClientTransactions1(clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAllClientTransactions1");
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
      let returnType = GetSelfClientsClientIdTransactionsResponse;
      return this.apiClient.callApi(
        '/self/clients/{clientId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAssociatedAccounts1 operation.
     * @callback module:api/SelfClientApi~retrieveAssociatedAccounts1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsClientIdAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve client accounts overview
     * An example of how a loan portfolio summary can be provided. This is requested in a specific use case of the community application. It is quite reasonable to add resources like this to simplify User Interface development.  Example Requests:  self/clients/1/accounts   self/clients/1/accounts?fields=loanAccounts,savingsAccounts
     * @param {Number} clientId clientId
     * @param {module:api/SelfClientApi~retrieveAssociatedAccounts1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsClientIdAccountsResponse}
     */
    retrieveAssociatedAccounts1(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAssociatedAccounts1");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = GetSelfClientsClientIdAccountsResponse;
      return this.apiClient.callApi(
        '/self/clients/{clientId}/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveClientCharge1 operation.
     * @callback module:api/SelfClientApi~retrieveClientCharge1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsClientIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client Charge
     * Retrieves a Client Charge  Example Requests:  self/clients/1/charges/1   self/clients/1/charges/1?fields=name,id
     * @param {Number} clientId clientId
     * @param {Number} chargeId chargeId
     * @param {module:api/SelfClientApi~retrieveClientCharge1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsClientIdChargesChargeIdResponse}
     */
    retrieveClientCharge1(clientId, chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveClientCharge1");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling retrieveClientCharge1");
      }

      let pathParams = {
        'clientId': clientId,
        'chargeId': chargeId
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
      let returnType = GetSelfClientsClientIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/self/clients/{clientId}/charges/{chargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveClientTransaction1 operation.
     * @callback module:api/SelfClientApi~retrieveClientTransaction1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsClientIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client Transaction
     * Retrieves a Client TransactionExample Requests:  self/clients/1/transactions/1   self/clients/1/transactions/1?fields=id,officeName
     * @param {Number} clientId clientId
     * @param {Number} transactionId transactionId
     * @param {module:api/SelfClientApi~retrieveClientTransaction1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsClientIdTransactionsTransactionIdResponse}
     */
    retrieveClientTransaction1(clientId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveClientTransaction1");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveClientTransaction1");
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
      let returnType = GetSelfClientsClientIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/self/clients/{clientId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveImage operation.
     * @callback module:api/SelfClientApi~retrieveImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Client Image
     * Optional arguments are identical to those of Get Image associated with an Entity (Binary file)  Example Requests:  self/clients/1/images
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxWidth 
     * @param {Number} opts.maxHeight 
     * @param {String} opts.output 
     * @param {module:api/SelfClientApi~retrieveImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    retrieveImage(clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveImage");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'output': opts['output']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/clients/{clientId}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveObligeeDetails1 operation.
     * @callback module:api/SelfClientApi~retrieveObligeeDetails1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/SelfClientApi~retrieveObligeeDetails1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveObligeeDetails1(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveObligeeDetails1");
      }

      let pathParams = {
        'clientId': clientId
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
        '/self/clients/{clientId}/obligeedetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne25 operation.
     * @callback module:api/SelfClientApi~retrieveOne25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfClientsClientIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client
     * Retrieves a Client  Example Requests:  self/clients/1  self/clients/1?fields=id,displayName,officeName
     * @param {Number} clientId clientId
     * @param {module:api/SelfClientApi~retrieveOne25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfClientsClientIdResponse}
     */
    retrieveOne25(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveOne25");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = GetSelfClientsClientIdResponse;
      return this.apiClient.callApi(
        '/self/clients/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
