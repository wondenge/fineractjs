


import ApiClient from "../ApiClient";
import GetLoansLoanIdTransactionsTemplateResponse from '../model/GetLoansLoanIdTransactionsTemplateResponse';
import GetLoansLoanIdTransactionsTransactionIdResponse from '../model/GetLoansLoanIdTransactionsTransactionIdResponse';
import PostLoansLoanIdTransactionsResponse from '../model/PostLoansLoanIdTransactionsResponse';
import PostLoansLoanIdTransactionsTransactionIdRequest from '../model/PostLoansLoanIdTransactionsTransactionIdRequest';
import PostLoansLoanIdTransactionsTransactionIdResponse from '../model/PostLoansLoanIdTransactionsTransactionIdResponse';

/**
* LoanTransactions service.
* @module api/LoanTransactionsApi
* @version 1.0
*/
export default class LoanTransactionsApi {

    /**
    * Constructs a new LoanTransactionsApi. 
    * @alias module:api/LoanTransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the adjustLoanTransaction operation.
     * @callback module:api/LoanTransactionsApi~adjustLoanTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adjust a Transaction
     * Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount
     * @param {Number} loanId loanId
     * @param {Number} transactionId transactionId
     * @param {module:model/PostLoansLoanIdTransactionsTransactionIdRequest} postLoansLoanIdTransactionsTransactionIdRequest 
     * @param {module:api/LoanTransactionsApi~adjustLoanTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdTransactionsTransactionIdResponse}
     */
    adjustLoanTransaction(loanId, transactionId, postLoansLoanIdTransactionsTransactionIdRequest, callback) {
      let postBody = postLoansLoanIdTransactionsTransactionIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling adjustLoanTransaction");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling adjustLoanTransaction");
      }
      // verify the required parameter 'postLoansLoanIdTransactionsTransactionIdRequest' is set
      if (postLoansLoanIdTransactionsTransactionIdRequest === undefined || postLoansLoanIdTransactionsTransactionIdRequest === null) {
        throw new Error("Missing the required parameter 'postLoansLoanIdTransactionsTransactionIdRequest' when calling adjustLoanTransaction");
      }

      let pathParams = {
        'loanId': loanId,
        'transactionId': transactionId
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
      let returnType = PostLoansLoanIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/transactions/{transactionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the executeLoanTransaction operation.
     * @callback module:api/LoanTransactionsApi~executeLoanTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Make a Repayment | Make a Refund of an Active Loan by Cash | Foreclosure of an Active Loan | Waive Interest | Write-off Loan | Make Recovery Payment | Undo Loan Write-off Transaction
     * Make Recovery Payment:  This API allows collecting recovery payments for written-off loans
     * @param {Number} loanId loanId
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/LoanTransactionsApi~executeLoanTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdTransactionsResponse}
     */
    executeLoanTransaction(loanId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling executeLoanTransaction");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeLoanTransaction");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = PostLoansLoanIdTransactionsResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTransaction operation.
     * @callback module:api/LoanTransactionsApi~retrieveTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Transaction Details
     * Retrieves a Transaction Details  Example Request:  loans/5/transactions/3
     * @param {Number} loanId loanId
     * @param {Number} transactionId transactionId
     * @param {module:api/LoanTransactionsApi~retrieveTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdTransactionsTransactionIdResponse}
     */
    retrieveTransaction(loanId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveTransaction");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveTransaction");
      }

      let pathParams = {
        'loanId': loanId,
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
      let returnType = GetLoansLoanIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTransactionTemplate operation.
     * @callback module:api/LoanTransactionsApi~retrieveTransactionTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdTransactionsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Loan Transaction Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  loans/1/transactions/template?command=repayment
     * @param {Number} loanId loanId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {String} opts.dateFormat dateFormat
     * @param {Object} opts.transactionDate transactionDate
     * @param {String} opts.locale locale
     * @param {module:api/LoanTransactionsApi~retrieveTransactionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdTransactionsTemplateResponse}
     */
    retrieveTransactionTemplate(loanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveTransactionTemplate");
      }

      let pathParams = {
        'loanId': loanId
      };
      let queryParams = {
        'command': opts['command'],
        'dateFormat': opts['dateFormat'],
        'transactionDate': opts['transactionDate'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLoansLoanIdTransactionsTemplateResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/transactions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
