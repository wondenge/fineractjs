


import ApiClient from "../ApiClient";
import DeleteLoansLoanIdChargesChargeIdResponse from '../model/DeleteLoansLoanIdChargesChargeIdResponse';
import GetLoansLoanIdChargesChargeIdResponse from '../model/GetLoansLoanIdChargesChargeIdResponse';
import GetLoansLoanIdChargesTemplateResponse from '../model/GetLoansLoanIdChargesTemplateResponse';
import PostLoansLoanIdChargesChargeIdRequest from '../model/PostLoansLoanIdChargesChargeIdRequest';
import PostLoansLoanIdChargesChargeIdResponse from '../model/PostLoansLoanIdChargesChargeIdResponse';
import PostLoansLoanIdChargesRequest from '../model/PostLoansLoanIdChargesRequest';
import PostLoansLoanIdChargesResponse from '../model/PostLoansLoanIdChargesResponse';
import PutLoansLoanIdChargesChargeIdRequest from '../model/PutLoansLoanIdChargesChargeIdRequest';
import PutLoansLoanIdChargesChargeIdResponse from '../model/PutLoansLoanIdChargesChargeIdResponse';

/**
* LoanCharges service.
* @module api/LoanChargesApi
* @version 1.0
*/
export default class LoanChargesApi {

    /**
    * Constructs a new LoanChargesApi. 
    * @alias module:api/LoanChargesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteLoanCharge operation.
     * @callback module:api/LoanChargesApi~deleteLoanChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteLoansLoanIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Loan Charge
     * Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.
     * @param {Number} loanId loanId
     * @param {Number} chargeId chargeId
     * @param {module:api/LoanChargesApi~deleteLoanChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteLoansLoanIdChargesChargeIdResponse}
     */
    deleteLoanCharge(loanId, chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling deleteLoanCharge");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling deleteLoanCharge");
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
      let returnType = DeleteLoansLoanIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/charges/{chargeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the executeLoanCharge operation.
     * @callback module:api/LoanChargesApi~executeLoanChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Loan Charge
     * It Creates a Loan Charge
     * @param {Number} loanId loanId
     * @param {module:model/PostLoansLoanIdChargesRequest} postLoansLoanIdChargesRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/LoanChargesApi~executeLoanChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdChargesResponse}
     */
    executeLoanCharge(loanId, postLoansLoanIdChargesRequest, opts, callback) {
      opts = opts || {};
      let postBody = postLoansLoanIdChargesRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling executeLoanCharge");
      }
      // verify the required parameter 'postLoansLoanIdChargesRequest' is set
      if (postLoansLoanIdChargesRequest === undefined || postLoansLoanIdChargesRequest === null) {
        throw new Error("Missing the required parameter 'postLoansLoanIdChargesRequest' when calling executeLoanCharge");
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
      let returnType = PostLoansLoanIdChargesResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/charges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the executeLoanCharge1 operation.
     * @callback module:api/LoanChargesApi~executeLoanCharge1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay Loan Charge
     * Loan Charge will be paid if the loan is linked with a savings account
     * @param {Number} loanId loanId
     * @param {Number} chargeId chargeId
     * @param {module:model/PostLoansLoanIdChargesChargeIdRequest} postLoansLoanIdChargesChargeIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/LoanChargesApi~executeLoanCharge1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdChargesChargeIdResponse}
     */
    executeLoanCharge1(loanId, chargeId, postLoansLoanIdChargesChargeIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postLoansLoanIdChargesChargeIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling executeLoanCharge1");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling executeLoanCharge1");
      }
      // verify the required parameter 'postLoansLoanIdChargesChargeIdRequest' is set
      if (postLoansLoanIdChargesChargeIdRequest === undefined || postLoansLoanIdChargesChargeIdRequest === null) {
        throw new Error("Missing the required parameter 'postLoansLoanIdChargesChargeIdRequest' when calling executeLoanCharge1");
      }

      let pathParams = {
        'loanId': loanId,
        'chargeId': chargeId
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
      let returnType = PostLoansLoanIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/charges/{chargeId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllLoanCharges operation.
     * @callback module:api/LoanChargesApi~retrieveAllLoanChargesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetLoansLoanIdChargesChargeIdResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Loan Charges
     * It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage
     * @param {Number} loanId loanId
     * @param {module:api/LoanChargesApi~retrieveAllLoanChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetLoansLoanIdChargesChargeIdResponse>}
     */
    retrieveAllLoanCharges(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveAllLoanCharges");
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
      let returnType = [GetLoansLoanIdChargesChargeIdResponse];
      return this.apiClient.callApi(
        '/loans/{loanId}/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveLoanCharge operation.
     * @callback module:api/LoanChargesApi~retrieveLoanChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Loan Charge
     * Retrieves Loan Charge according to the Loan ID and Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage
     * @param {Number} loanId loanId
     * @param {Number} chargeId chargeId
     * @param {module:api/LoanChargesApi~retrieveLoanChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdChargesChargeIdResponse}
     */
    retrieveLoanCharge(loanId, chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveLoanCharge");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling retrieveLoanCharge");
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
      let returnType = GetLoansLoanIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/charges/{chargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate8 operation.
     * @callback module:api/LoanChargesApi~retrieveTemplate8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdChargesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Loan Charges Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  
     * @param {Number} loanId loanId
     * @param {module:api/LoanChargesApi~retrieveTemplate8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdChargesTemplateResponse}
     */
    retrieveTemplate8(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveTemplate8");
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
      let returnType = GetLoansLoanIdChargesTemplateResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/charges/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoanCharge operation.
     * @callback module:api/LoanChargesApi~updateLoanChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutLoansLoanIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Loan Charge
     * Currently Loan Charges may be updated only if the Loan is not yet approved
     * @param {Number} loanId loanId
     * @param {Number} chargeId chargeId
     * @param {module:model/PutLoansLoanIdChargesChargeIdRequest} putLoansLoanIdChargesChargeIdRequest 
     * @param {module:api/LoanChargesApi~updateLoanChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutLoansLoanIdChargesChargeIdResponse}
     */
    updateLoanCharge(loanId, chargeId, putLoansLoanIdChargesChargeIdRequest, callback) {
      let postBody = putLoansLoanIdChargesChargeIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling updateLoanCharge");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling updateLoanCharge");
      }
      // verify the required parameter 'putLoansLoanIdChargesChargeIdRequest' is set
      if (putLoansLoanIdChargesChargeIdRequest === undefined || putLoansLoanIdChargesChargeIdRequest === null) {
        throw new Error("Missing the required parameter 'putLoansLoanIdChargesChargeIdRequest' when calling updateLoanCharge");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutLoansLoanIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/charges/{chargeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
