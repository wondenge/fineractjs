


import ApiClient from "../ApiClient";
import DeleteLoansLoanIdResponse from '../model/DeleteLoansLoanIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetLoansLoanIdResponse from '../model/GetLoansLoanIdResponse';
import GetLoansResponse from '../model/GetLoansResponse';
import GetLoansTemplateResponse from '../model/GetLoansTemplateResponse';
import PostLoansLoanIdRequest from '../model/PostLoansLoanIdRequest';
import PostLoansLoanIdResponse from '../model/PostLoansLoanIdResponse';
import PostLoansRequest from '../model/PostLoansRequest';
import PostLoansResponse from '../model/PostLoansResponse';
import PutLoansLoanIdRequest from '../model/PutLoansLoanIdRequest';
import PutLoansLoanIdResponse from '../model/PutLoansLoanIdResponse';

/**
* Loans service.
* @module api/LoansApi
* @version 1.0
*/
export default class LoansApi {

    /**
    * Constructs a new LoansApi. 
    * @alias module:api/LoansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the calculateLoanScheduleOrSubmitLoanApplication operation.
     * @callback module:api/LoansApi~calculateLoanScheduleOrSubmitLoanApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate loan repayment schedule | Submit a new Loan Application
     * It calculates the loan repayment Schedule Submits a new loan application Mandatory Fields: clientId, productId, principal, loanTermFrequency, loanTermFrequencyType, loanType, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, amortizationType, interestType, interestCalculationPeriodType, transactionProcessingStrategyId, expectedDisbursementDate, submittedOnDate, loanType Optional Fields: graceOnPrincipalPayment, graceOnInterestPayment, graceOnInterestCharged, linkAccountId, allowPartialPeriodInterestCalcualtion, fixedEmiAmount, maxOutstandingLoanBalance, disbursementData, graceOnArrearsAgeing, createStandingInstructionAtDisbursement (requires linkedAccountId if set to true) Additional Mandatory Fields if interest recalculation is enabled for product and Rest frequency not same as repayment period: recalculationRestFrequencyDate Additional Mandatory Fields if interest recalculation with interest/fee compounding is enabled for product and compounding frequency not same as repayment period: recalculationCompoundingFrequencyDate Additional Mandatory Field if Entity-Datatable Check is enabled for the entity of type loan: datatables
     * @param {module:model/PostLoansRequest} postLoansRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/LoansApi~calculateLoanScheduleOrSubmitLoanApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansResponse}
     */
    calculateLoanScheduleOrSubmitLoanApplication(postLoansRequest, opts, callback) {
      opts = opts || {};
      let postBody = postLoansRequest;
      // verify the required parameter 'postLoansRequest' is set
      if (postLoansRequest === undefined || postLoansRequest === null) {
        throw new Error("Missing the required parameter 'postLoansRequest' when calling calculateLoanScheduleOrSubmitLoanApplication");
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
      let returnType = PostLoansResponse;
      return this.apiClient.callApi(
        '/loans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoanApplication operation.
     * @callback module:api/LoansApi~deleteLoanApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Loan Application
     * Note: Only loans in \"Submitted and awaiting approval\" status can be deleted.
     * @param {Number} loanId loanId
     * @param {module:api/LoansApi~deleteLoanApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteLoansLoanIdResponse}
     */
    deleteLoanApplication(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling deleteLoanApplication");
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
      let returnType = DeleteLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGlimRepaymentTemplate operation.
     * @callback module:api/LoansApi~getGlimRepaymentTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} glimId 
     * @param {module:api/LoansApi~getGlimRepaymentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getGlimRepaymentTemplate(glimId, callback) {
      let postBody = null;
      // verify the required parameter 'glimId' is set
      if (glimId === undefined || glimId === null) {
        throw new Error("Missing the required parameter 'glimId' when calling getGlimRepaymentTemplate");
      }

      let pathParams = {
        'glimId': glimId
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
        '/loans/glimAccount/{glimId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoanRepaymentTemplate operation.
     * @callback module:api/LoansApi~getLoanRepaymentTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/LoansApi~getLoanRepaymentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getLoanRepaymentTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/vnd.ms-excel'];
      let returnType = null;
      return this.apiClient.callApi(
        '/loans/repayments/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoansTemplate operation.
     * @callback module:api/LoansApi~getLoansTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/LoansApi~getLoansTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getLoansTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'staffId': opts['staffId'],
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/vnd.ms-excel'];
      let returnType = null;
      return this.apiClient.callApi(
        '/loans/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the glimStateTransitions operation.
     * @callback module:api/LoansApi~glimStateTransitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve GLIM Application | Undo GLIM Application Approval | Reject GLIM Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal
     * Approve GLIM Application: Mandatory Fields: approvedOnDate Optional Fields: approvedLoanAmount and expectedDisbursementDate Approves the GLIM application  Undo GLIM Application Approval: Undoes the GLIM Application Approval  Reject GLIM Application: Mandatory Fields: rejectedOnDate Allows you to reject the GLIM application  Disburse Loan: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the Loan  Disburse Loan To Savings Account: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the loan to Saving Account  Undo Loan Disbursal: Undoes the Loan Disbursal 
     * @param {Number} glimId 
     * @param {module:model/PostLoansLoanIdRequest} postLoansLoanIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {module:api/LoansApi~glimStateTransitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdResponse}
     */
    glimStateTransitions(glimId, postLoansLoanIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postLoansLoanIdRequest;
      // verify the required parameter 'glimId' is set
      if (glimId === undefined || glimId === null) {
        throw new Error("Missing the required parameter 'glimId' when calling glimStateTransitions");
      }
      // verify the required parameter 'postLoansLoanIdRequest' is set
      if (postLoansLoanIdRequest === undefined || postLoansLoanIdRequest === null) {
        throw new Error("Missing the required parameter 'postLoansLoanIdRequest' when calling glimStateTransitions");
      }

      let pathParams = {
        'glimId': glimId
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
      let returnType = PostLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/loans/glimAccount/{glimId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyLoanApplication operation.
     * @callback module:api/LoansApi~modifyLoanApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a loan application
     * Loan application can only be modified when in 'Submitted and pending approval' state. Once the application is approved, the details cannot be changed using this method.
     * @param {Number} loanId loanId
     * @param {module:model/PutLoansLoanIdRequest} putLoansLoanIdRequest 
     * @param {module:api/LoansApi~modifyLoanApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutLoansLoanIdResponse}
     */
    modifyLoanApplication(loanId, putLoansLoanIdRequest, callback) {
      let postBody = putLoansLoanIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling modifyLoanApplication");
      }
      // verify the required parameter 'putLoansLoanIdRequest' is set
      if (putLoansLoanIdRequest === undefined || putLoansLoanIdRequest === null) {
        throw new Error("Missing the required parameter 'putLoansLoanIdRequest' when calling modifyLoanApplication");
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
      let returnType = PutLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postLoanRepaymentTemplate operation.
     * @callback module:api/LoansApi~postLoanRepaymentTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/LoansApi~postLoanRepaymentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postLoanRepaymentTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/repayments/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postLoanTemplate operation.
     * @callback module:api/LoansApi~postLoanTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/LoansApi~postLoanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postLoanTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll26 operation.
     * @callback module:api/LoansApi~retrieveAll26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Loans
     * The list capability of loans can support pagination and sorting. Example Requests:  loans  loans?fields=accountNo  loans?offset=10&limit=50  loans?orderBy=accountNo&sortOrder=DESC
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {String} opts.externalId externalId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {String} opts.accountNo accountNo
     * @param {module:api/LoansApi~retrieveAll26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansResponse}
     */
    retrieveAll26(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'externalId': opts['externalId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'accountNo': opts['accountNo']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLoansResponse;
      return this.apiClient.callApi(
        '/loans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveApprovalTemplate operation.
     * @callback module:api/LoansApi~retrieveApprovalTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId loanId
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateType templateType
     * @param {module:api/LoansApi~retrieveApprovalTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveApprovalTemplate(loanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveApprovalTemplate");
      }

      let pathParams = {
        'loanId': loanId
      };
      let queryParams = {
        'templateType': opts['templateType']
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
        '/loans/{loanId}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveLoan operation.
     * @callback module:api/LoansApi~retrieveLoanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Loan
     * Note: template=true parameter doesn't apply to this resource.Example Requests:  loans/1   loans/1?fields=id,principal,annualInterestRate   loans/1?associations=all  loans/1?associations=all&exclude=guarantors   loans/1?fields=id,principal,annualInterestRate&associations=repaymentSchedule,transactions
     * @param {Number} loanId loanId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/LoansApi~retrieveLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdResponse}
     */
    retrieveLoan(loanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveLoan");
      }

      let pathParams = {
        'loanId': loanId
      };
      let queryParams = {
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stateTransitions operation.
     * @callback module:api/LoansApi~stateTransitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve Loan Application | Recover Loan Guarantee | Undo Loan Application Approval | Assign a Loan Officer | Unassign a Loan Officer | Reject Loan Application | Applicant Withdraws from Loan Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal
     * Approve Loan Application: Mandatory Fields: approvedOnDate Optional Fields: approvedLoanAmount and expectedDisbursementDate Approves the loan application  Recover Loan Guarantee: Recovers the loan guarantee  Undo Loan Application Approval: Undoes the Loan Application Approval  Assign a Loan Officer: Allows you to assign Loan Officer for existing Loan.  Unassign a Loan Officer: Allows you to unassign the Loan Officer.  Reject Loan Application: Mandatory Fields: rejectedOnDate Allows you to reject the loan application  Applicant Withdraws from Loan Application: Mandatory Fields: withdrawnOnDate Allows the applicant to withdraw the loan application  Disburse Loan: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the Loan  Disburse Loan To Savings Account: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the loan to Saving Account  Undo Loan Disbursal: Undoes the Loan Disbursal Showing request and response for Assign a Loan Officer
     * @param {Number} loanId loanId
     * @param {module:model/PostLoansLoanIdRequest} postLoansLoanIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/LoansApi~stateTransitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdResponse}
     */
    stateTransitions(loanId, postLoansLoanIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postLoansLoanIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling stateTransitions");
      }
      // verify the required parameter 'postLoansLoanIdRequest' is set
      if (postLoansLoanIdRequest === undefined || postLoansLoanIdRequest === null) {
        throw new Error("Missing the required parameter 'postLoansLoanIdRequest' when calling stateTransitions");
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
      let returnType = PostLoansLoanIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template10 operation.
     * @callback module:api/LoansApi~template10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Loan Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Requests:  loans/template?templateType=individual&clientId=1   loans/template?templateType=individual&clientId=1&productId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.groupId groupId
     * @param {Number} opts.productId productId
     * @param {String} opts.templateType templateType
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {Boolean} opts.activeOnly activeOnly (default to false)
     * @param {module:api/LoansApi~template10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansTemplateResponse}
     */
    template10(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId'],
        'groupId': opts['groupId'],
        'productId': opts['productId'],
        'templateType': opts['templateType'],
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly'],
        'activeOnly': opts['activeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLoansTemplateResponse;
      return this.apiClient.callApi(
        '/loans/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
