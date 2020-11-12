


import ApiClient from "../ApiClient";
import PostLoansLoanIdScheduleResponse from '../model/PostLoansLoanIdScheduleResponse';

/**
* LoanRescheduling service.
* @module api/LoanReschedulingApi
* @version 1.0
*/
export default class LoanReschedulingApi {

    /**
    * Constructs a new LoanReschedulingApi. 
    * @alias module:api/LoanReschedulingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the calculateLoanScheduleOrSubmitVariableSchedule operation.
     * @callback module:api/LoanReschedulingApi~calculateLoanScheduleOrSubmitVariableScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdScheduleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate loan repayment schedule based on Loan term variations | Updates loan repayment schedule based on Loan term variations | Updates loan repayment schedule by removing Loan term variations
     * Calculate loan repayment schedule based on Loan term variations:  Mandatory Fields: exceptions,locale,dateFormat  Updates loan repayment schedule based on Loan term variations:  Mandatory Fields: exceptions,locale,dateFormat  Updates loan repayment schedule by removing Loan term variations:  It updates the loan repayment schedule by removing Loan term variations  Showing request/response for 'Updates loan repayment schedule by removing Loan term variations'
     * @param {Number} loanId loanId
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/LoanReschedulingApi~calculateLoanScheduleOrSubmitVariableScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdScheduleResponse}
     */
    calculateLoanScheduleOrSubmitVariableSchedule(loanId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling calculateLoanScheduleOrSubmitVariableSchedule");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling calculateLoanScheduleOrSubmitVariableSchedule");
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
      let returnType = PostLoansLoanIdScheduleResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
