


import ApiClient from "../ApiClient";
import GetSelfSavingsAccountsAccountIdChargesResponse from '../model/GetSelfSavingsAccountsAccountIdChargesResponse';
import GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse from '../model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse';
import GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse from '../model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse';
import GetSelfSavingsAccountsResponse from '../model/GetSelfSavingsAccountsResponse';

/**
* SelfSavingsAccount service.
* @module api/SelfSavingsAccountApi
* @version 1.0
*/
export default class SelfSavingsAccountApi {

    /**
    * Constructs a new SelfSavingsAccountApi. 
    * @alias module:api/SelfSavingsAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the modifySavingsAccountApplication operation.
     * @callback module:api/SelfSavingsAccountApi~modifySavingsAccountApplicationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} accountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/SelfSavingsAccountApi~modifySavingsAccountApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    modifySavingsAccountApplication(accountId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifySavingsAccountApplication");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/savingsaccounts/{accountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllSavingsAccountCharges1 operation.
     * @callback module:api/SelfSavingsAccountApi~retrieveAllSavingsAccountCharges1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSelfSavingsAccountsAccountIdChargesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Savings Charges
     * Lists Savings Charges  Example Requests:  self/savingsaccounts/1/charges  self/savingsaccounts/1/charges?chargeStatus=inactive  self/savingsaccounts/1/charges?fields=name,amountOrPercentage
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {module:api/SelfSavingsAccountApi~retrieveAllSavingsAccountCharges1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSelfSavingsAccountsAccountIdChargesResponse>}
     */
    retrieveAllSavingsAccountCharges1(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveAllSavingsAccountCharges1");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'chargeStatus': opts['chargeStatus']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetSelfSavingsAccountsAccountIdChargesResponse];
      return this.apiClient.callApi(
        '/self/savingsaccounts/{accountId}/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSavings operation.
     * @callback module:api/SelfSavingsAccountApi~retrieveSavingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfSavingsAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a savings account
     * Retrieves a savings account  Example Requests :  self/savingsaccounts/1   self/savingsaccounts/1?associations=transactions
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {module:api/SelfSavingsAccountApi~retrieveSavingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfSavingsAccountsResponse}
     */
    retrieveSavings(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveSavings");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'chargeStatus': opts['chargeStatus']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSelfSavingsAccountsResponse;
      return this.apiClient.callApi(
        '/self/savingsaccounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSavingsAccountCharge1 operation.
     * @callback module:api/SelfSavingsAccountApi~retrieveSavingsAccountCharge1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Savings account Charge
     * Retrieves a Savings account Charge  Example Requests:  self/savingsaccounts/1/charges/5   self/savingsaccounts/1/charges/5?fields=name,amountOrPercentage
     * @param {Number} accountId accountId
     * @param {Number} savingsAccountChargeId savingsAccountChargeId
     * @param {module:api/SelfSavingsAccountApi~retrieveSavingsAccountCharge1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    retrieveSavingsAccountCharge1(accountId, savingsAccountChargeId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveSavingsAccountCharge1");
      }
      // verify the required parameter 'savingsAccountChargeId' is set
      if (savingsAccountChargeId === undefined || savingsAccountChargeId === null) {
        throw new Error("Missing the required parameter 'savingsAccountChargeId' when calling retrieveSavingsAccountCharge1");
      }

      let pathParams = {
        'accountId': accountId,
        'savingsAccountChargeId': savingsAccountChargeId
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
      let returnType = GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse;
      return this.apiClient.callApi(
        '/self/savingsaccounts/{accountId}/charges/{savingsAccountChargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSavingsTransaction operation.
     * @callback module:api/SelfSavingsAccountApi~retrieveSavingsTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Savings Account Transaction
     * Retrieves Savings Account Transaction  Example Requests:  self/savingsaccounts/1/transactions/1
     * @param {Number} accountId accountId
     * @param {Number} transactionId transactionId
     * @param {module:api/SelfSavingsAccountApi~retrieveSavingsTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse}
     */
    retrieveSavingsTransaction(accountId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveSavingsTransaction");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveSavingsTransaction");
      }

      let pathParams = {
        'accountId': accountId,
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
      let returnType = GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/self/savingsaccounts/{accountId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitSavingsAccountApplication operation.
     * @callback module:api/SelfSavingsAccountApi~submitSavingsAccountApplicationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/SelfSavingsAccountApi~submitSavingsAccountApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    submitSavingsAccountApplication(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/savingsaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template18 operation.
     * @callback module:api/SelfSavingsAccountApi~template18Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {Number} opts.productId 
     * @param {module:api/SelfSavingsAccountApi~template18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    template18(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/savingsaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
