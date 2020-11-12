


import ApiClient from "../ApiClient";
import GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse from '../model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse';
import GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse from '../model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse';
import PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest from '../model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest';
import PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse from '../model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse';
import PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse from '../model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse';

/**
* RecurringDepositAccountTransactions service.
* @module api/RecurringDepositAccountTransactionsApi
* @version 1.0
*/
export default class RecurringDepositAccountTransactionsApi {

    /**
    * Constructs a new RecurringDepositAccountTransactionsApi. 
    * @alias module:api/RecurringDepositAccountTransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the handleTransactionCommands operation.
     * @callback module:api/RecurringDepositAccountTransactionsApi~handleTransactionCommandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adjust Transaction | Undo transaction
     * Adjust Transaction:  This command modifies the given transaction.  Undo transaction:  This command reverses the given transaction.  Showing request/response for 'Adjust Transaction'
     * @param {Number} recurringDepositAccountId recurringDepositAccountId
     * @param {Number} transactionId transactionId
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/RecurringDepositAccountTransactionsApi~handleTransactionCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse}
     */
    handleTransactionCommands(recurringDepositAccountId, transactionId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, opts, callback) {
      opts = opts || {};
      let postBody = postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest;
      // verify the required parameter 'recurringDepositAccountId' is set
      if (recurringDepositAccountId === undefined || recurringDepositAccountId === null) {
        throw new Error("Missing the required parameter 'recurringDepositAccountId' when calling handleTransactionCommands");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling handleTransactionCommands");
      }
      // verify the required parameter 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest' is set
      if (postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest === undefined || postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest === null) {
        throw new Error("Missing the required parameter 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest' when calling handleTransactionCommands");
      }

      let pathParams = {
        'recurringDepositAccountId': recurringDepositAccountId,
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne19 operation.
     * @callback module:api/RecurringDepositAccountTransactionsApi~retrieveOne19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Recurring Deposit Account Transaction
     * Retrieves Recurring Deposit Account Transaction  Example Requests:  recurringdepositaccounts/1/transactions/1
     * @param {Number} recurringDepositAccountId recurringDepositAccountId
     * @param {Number} transactionId transactionId
     * @param {module:api/RecurringDepositAccountTransactionsApi~retrieveOne19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse}
     */
    retrieveOne19(recurringDepositAccountId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'recurringDepositAccountId' is set
      if (recurringDepositAccountId === undefined || recurringDepositAccountId === null) {
        throw new Error("Missing the required parameter 'recurringDepositAccountId' when calling retrieveOne19");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveOne19");
      }

      let pathParams = {
        'recurringDepositAccountId': recurringDepositAccountId,
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
      let returnType = GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate15 operation.
     * @callback module:api/RecurringDepositAccountTransactionsApi~retrieveTemplate15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Recurring Deposit Account Transaction Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  recurringdepositaccounts/1/transactions/template?command=deposit  recurringdepositaccounts/1/transactions/template?command=withdrawal
     * @param {Number} recurringDepositAccountId recurringDepositAccountId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/RecurringDepositAccountTransactionsApi~retrieveTemplate15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse}
     */
    retrieveTemplate15(recurringDepositAccountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'recurringDepositAccountId' is set
      if (recurringDepositAccountId === undefined || recurringDepositAccountId === null) {
        throw new Error("Missing the required parameter 'recurringDepositAccountId' when calling retrieveTemplate15");
      }

      let pathParams = {
        'recurringDepositAccountId': recurringDepositAccountId
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
      let returnType = GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{recurringDepositAccountId}/transactions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the transaction1 operation.
     * @callback module:api/RecurringDepositAccountTransactionsApi~transaction1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deposit Transaction | Withdrawal Transaction
     * Deposit Transaction:  Used for a deposit transaction  Withdrawal Transaction:  Used for a Withdrawal Transaction  Showing request/response for Deposit Transaction
     * @param {Number} recurringDepositAccountId recurringDepositAccountId
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/RecurringDepositAccountTransactionsApi~transaction1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse}
     */
    transaction1(recurringDepositAccountId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, opts, callback) {
      opts = opts || {};
      let postBody = postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest;
      // verify the required parameter 'recurringDepositAccountId' is set
      if (recurringDepositAccountId === undefined || recurringDepositAccountId === null) {
        throw new Error("Missing the required parameter 'recurringDepositAccountId' when calling transaction1");
      }
      // verify the required parameter 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest' is set
      if (postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest === undefined || postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest === null) {
        throw new Error("Missing the required parameter 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest' when calling transaction1");
      }

      let pathParams = {
        'recurringDepositAccountId': recurringDepositAccountId
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
      let returnType = PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{recurringDepositAccountId}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
