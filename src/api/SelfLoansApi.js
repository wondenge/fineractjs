


import ApiClient from "../ApiClient";
import GetSelfLoansLoanIdChargesResponse from '../model/GetSelfLoansLoanIdChargesResponse';
import GetSelfLoansLoanIdResponse from '../model/GetSelfLoansLoanIdResponse';
import GetSelfLoansLoanIdTransactionsTransactionIdResponse from '../model/GetSelfLoansLoanIdTransactionsTransactionIdResponse';
import GetSelfLoansTemplateResponse from '../model/GetSelfLoansTemplateResponse';
import PostSelfLoansLoanIdRequest from '../model/PostSelfLoansLoanIdRequest';
import PostSelfLoansLoanIdResponse from '../model/PostSelfLoansLoanIdResponse';
import PostSelfLoansRequest from '../model/PostSelfLoansRequest';
import PostSelfLoansResponse from '../model/PostSelfLoansResponse';
import PutSelfLoansLoanIdRequest from '../model/PutSelfLoansLoanIdRequest';
import PutSelfLoansLoanIdResponse from '../model/PutSelfLoansLoanIdResponse';

/**
* SelfLoans service.
* @module api/SelfLoansApi
* @version 1.0
*/
export default class SelfLoansApi {

    /**
    * Constructs a new SelfLoansApi. 
    * @alias module:api/SelfLoansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the calculateLoanScheduleOrSubmitLoanApplication1 operation.
     * @callback module:api/SelfLoansApi~calculateLoanScheduleOrSubmitLoanApplication1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSelfLoansResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate Loan Repayment Schedule | Submit a new Loan Application
     * Calculate Loan Repayment Schedule:  Calculates Loan Repayment Schedule  Mandatory Fields: productId, principal, loanTermFrequency, loanTermFrequencyType, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, amortizationType, interestType, interestCalculationPeriodType, expectedDisbursementDate, transactionProcessingStrategyId  Submit a new Loan Application:  Mandatory Fields: clientId, productId, principal, loanTermFrequency, loanTermFrequencyType, loanType, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, amortizationType, interestType, interestCalculationPeriodType, transactionProcessingStrategyId, expectedDisbursementDate, submittedOnDate, loanType  Additional Mandatory Fields if interest recalculation is enabled for product and Rest frequency not same as repayment period: recalculationRestFrequencyDate  Additional Mandatory Fields if interest recalculation with interest/fee compounding is enabled for product and compounding frequency not same as repayment period: recalculationCompoundingFrequencyDate  Additional Mandatory Field if Entity-Datatable Check is enabled for the entity of type loan: datatables  Optional Fields: graceOnPrincipalPayment, graceOnInterestPayment, graceOnInterestCharged, linkAccountId, allowPartialPeriodInterestCalcualtion, fixedEmiAmount, maxOutstandingLoanBalance, disbursementData, graceOnArrearsAgeing, createStandingInstructionAtDisbursement (requires linkedAccountId if set to true)  Showing request/response for 'Submit a new Loan Application'
     * @param {module:model/PostSelfLoansRequest} postSelfLoansRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/SelfLoansApi~calculateLoanScheduleOrSubmitLoanApplication1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSelfLoansResponse}
     */
    calculateLoanScheduleOrSubmitLoanApplication1(postSelfLoansRequest, opts, callback) {
      opts = opts || {};
      let postBody = postSelfLoansRequest;
      // verify the required parameter 'postSelfLoansRequest' is set
      if (postSelfLoansRequest === undefined || postSelfLoansRequest === null) {
        throw new Error("Missing the required parameter 'postSelfLoansRequest' when calling calculateLoanScheduleOrSubmitLoanApplication1");
      }

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
      let returnType = PostSelfLoansResponse;
      return this.apiClient.callApi(
        '/self/loans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyLoanApplication1 operation.
     * @callback module:api/SelfLoansApi~modifyLoanApplication1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSelfLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Loan Application
     * Loan application can only be modified when in 'Submitted and pending approval' state. Once the application is approved, the details cannot be changed using this method.
     * @param {Number} loanId loanId
     * @param {module:model/PutSelfLoansLoanIdRequest} putSelfLoansLoanIdRequest 
     * @param {module:api/SelfLoansApi~modifyLoanApplication1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSelfLoansLoanIdResponse}
     */
    modifyLoanApplication1(loanId, putSelfLoansLoanIdRequest, callback) {
      let postBody = putSelfLoansLoanIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling modifyLoanApplication1");
      }
      // verify the required parameter 'putSelfLoansLoanIdRequest' is set
      if (putSelfLoansLoanIdRequest === undefined || putSelfLoansLoanIdRequest === null) {
        throw new Error("Missing the required parameter 'putSelfLoansLoanIdRequest' when calling modifyLoanApplication1");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = PutSelfLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/self/loans/{loanId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllLoanCharges1 operation.
     * @callback module:api/SelfLoansApi~retrieveAllLoanCharges1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSelfLoansLoanIdChargesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Loan Charges
     * Lists loan Charges  Example Requests:  self/loans/1/charges   self/loans/1/charges?fields=name,amountOrPercentage
     * @param {Number} loanId loanId
     * @param {module:api/SelfLoansApi~retrieveAllLoanCharges1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSelfLoansLoanIdChargesResponse>}
     */
    retrieveAllLoanCharges1(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveAllLoanCharges1");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = [GetSelfLoansLoanIdChargesResponse];
      return this.apiClient.callApi(
        '/self/loans/{loanId}/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveGuarantorDetails2 operation.
     * @callback module:api/SelfLoansApi~retrieveGuarantorDetails2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {module:api/SelfLoansApi~retrieveGuarantorDetails2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveGuarantorDetails2(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveGuarantorDetails2");
      }

      let pathParams = {
        'loanId': loanId
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
        '/self/loans/{loanId}/guarantors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveLoan1 operation.
     * @callback module:api/SelfLoansApi~retrieveLoan1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Loan
     * Retrieves a Loan  Example Requests:  self/loans/1   self/loans/1?fields=id,principal,annualInterestRate   self/loans/1?fields=id,principal,annualInterestRate&associations=repaymentSchedule,transactions
     * @param {Number} loanId loanId
     * @param {module:api/SelfLoansApi~retrieveLoan1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfLoansLoanIdResponse}
     */
    retrieveLoan1(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveLoan1");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = GetSelfLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/self/loans/{loanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveLoanCharge1 operation.
     * @callback module:api/SelfLoansApi~retrieveLoanCharge1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfLoansLoanIdChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Loan Charge
     * Retrieves a Loan Charge  Example Requests:  self/loans/1/charges/1   self/loans/1/charges/1?fields=name,amountOrPercentage
     * @param {Number} loanId loanId
     * @param {Number} chargeId chargeId
     * @param {module:api/SelfLoansApi~retrieveLoanCharge1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfLoansLoanIdChargesResponse}
     */
    retrieveLoanCharge1(loanId, chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveLoanCharge1");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling retrieveLoanCharge1");
      }

      let pathParams = {
        'loanId': loanId,
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
      let returnType = GetSelfLoansLoanIdChargesResponse;
      return this.apiClient.callApi(
        '/self/loans/{loanId}/charges/{chargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTransaction1 operation.
     * @callback module:api/SelfLoansApi~retrieveTransaction1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfLoansLoanIdTransactionsTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Loan Transaction Details
     * Retrieves a Loan Transaction DetailsExample Request:  self/loans/5/transactions/3
     * @param {Number} loanId loanId
     * @param {Number} transactionId transactionId
     * @param {module:api/SelfLoansApi~retrieveTransaction1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfLoansLoanIdTransactionsTransactionIdResponse}
     */
    retrieveTransaction1(loanId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveTransaction1");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveTransaction1");
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
      let returnType = GetSelfLoansLoanIdTransactionsTransactionIdResponse;
      return this.apiClient.callApi(
        '/self/loans/{loanId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stateTransitions1 operation.
     * @callback module:api/SelfLoansApi~stateTransitions1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSelfLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Applicant Withdraws from Loan Application
     * Applicant Withdraws from Loan Application  Mandatory Fields: withdrawnOnDate
     * @param {Number} loanId loanId
     * @param {module:model/PostSelfLoansLoanIdRequest} postSelfLoansLoanIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/SelfLoansApi~stateTransitions1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSelfLoansLoanIdResponse}
     */
    stateTransitions1(loanId, postSelfLoansLoanIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postSelfLoansLoanIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling stateTransitions1");
      }
      // verify the required parameter 'postSelfLoansLoanIdRequest' is set
      if (postSelfLoansLoanIdRequest === undefined || postSelfLoansLoanIdRequest === null) {
        throw new Error("Missing the required parameter 'postSelfLoansLoanIdRequest' when calling stateTransitions1");
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
      let returnType = PostSelfLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/self/loans/{loanId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template17 operation.
     * @callback module:api/SelfLoansApi~template17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfLoansTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Loan Details Template
     * Retrieves Loan Details Template  This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists  Example Requests:  self/loans/template?templateType=individual&clientId=1   self/loans/template?templateType=individual&clientId=1&productId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.productId productId
     * @param {String} opts.templateType templateType
     * @param {module:api/SelfLoansApi~template17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfLoansTemplateResponse}
     */
    template17(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId'],
        'productId': opts['productId'],
        'templateType': opts['templateType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSelfLoansTemplateResponse;
      return this.apiClient.callApi(
        '/self/loans/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
