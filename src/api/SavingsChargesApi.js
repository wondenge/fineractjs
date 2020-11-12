


import ApiClient from "../ApiClient";
import DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from '../model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import GetSavingsAccountsSavingsAccountIdChargesResponse from '../model/GetSavingsAccountsSavingsAccountIdChargesResponse';
import GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from '../model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import GetSavingsAccountsSavingsAccountIdChargesTemplateResponse from '../model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse';
import PostSavingsAccountsSavingsAccountIdChargesRequest from '../model/PostSavingsAccountsSavingsAccountIdChargesRequest';
import PostSavingsAccountsSavingsAccountIdChargesResponse from '../model/PostSavingsAccountsSavingsAccountIdChargesResponse';
import PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest from '../model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest';
import PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from '../model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest from '../model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest';
import PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from '../model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';

/**
* SavingsCharges service.
* @module api/SavingsChargesApi
* @version 1.0
*/
export default class SavingsChargesApi {

    /**
    * Constructs a new SavingsChargesApi. 
    * @alias module:api/SavingsChargesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addSavingsAccountCharge operation.
     * @callback module:api/SavingsChargesApi~addSavingsAccountChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Savings account Charge
     * Creates a Savings account Charge  Mandatory Fields for Savings account Charges: chargeId, amount  chargeId, amount, dueDate, dateFormat, locale  chargeId, amount, feeOnMonthDay, monthDayFormat, locale
     * @param {Number} savingsAccountId savingsAccountId
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesRequest} postSavingsAccountsSavingsAccountIdChargesRequest 
     * @param {module:api/SavingsChargesApi~addSavingsAccountChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSavingsAccountsSavingsAccountIdChargesResponse}
     */
    addSavingsAccountCharge(savingsAccountId, postSavingsAccountsSavingsAccountIdChargesRequest, callback) {
      let postBody = postSavingsAccountsSavingsAccountIdChargesRequest;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling addSavingsAccountCharge");
      }
      // verify the required parameter 'postSavingsAccountsSavingsAccountIdChargesRequest' is set
      if (postSavingsAccountsSavingsAccountIdChargesRequest === undefined || postSavingsAccountsSavingsAccountIdChargesRequest === null) {
        throw new Error("Missing the required parameter 'postSavingsAccountsSavingsAccountIdChargesRequest' when calling addSavingsAccountCharge");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId
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
      let returnType = PostSavingsAccountsSavingsAccountIdChargesResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSavingsAccountCharge operation.
     * @callback module:api/SavingsChargesApi~deleteSavingsAccountChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Savings account Charge
     * Note: Currently, A Savings account Charge may only be removed from Savings that are not yet approved.
     * @param {Number} savingsAccountId savingsAccountId
     * @param {Number} savingsAccountChargeId savingsAccountChargeId
     * @param {module:api/SavingsChargesApi~deleteSavingsAccountChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    deleteSavingsAccountCharge(savingsAccountId, savingsAccountChargeId, callback) {
      let postBody = null;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling deleteSavingsAccountCharge");
      }
      // verify the required parameter 'savingsAccountChargeId' is set
      if (savingsAccountChargeId === undefined || savingsAccountChargeId === null) {
        throw new Error("Missing the required parameter 'savingsAccountChargeId' when calling deleteSavingsAccountCharge");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId,
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
      let returnType = DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payOrWaiveSavingsAccountCharge operation.
     * @callback module:api/SavingsChargesApi~payOrWaiveSavingsAccountChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay a Savings account Charge | Waive off a Savings account Charge | Inactivate a Savings account Charge
     * Pay a Savings account Charge:  An active charge will be paid when savings account is active and having sufficient balance.  Waive off a Savings account Charge:  Outstanding charge amount will be waived off.  Inactivate a Savings account Charge:  A charge will be allowed to inactivate when savings account is active and not having any dues as of today. If charge is overpaid, corresponding charge payment transactions will be reversed.  Showing request/response for 'Pay a Savings account Charge'
     * @param {Number} savingsAccountId savingsAccountId
     * @param {Number} savingsAccountChargeId savingsAccountChargeId
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest} postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/SavingsChargesApi~payOrWaiveSavingsAccountChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    payOrWaiveSavingsAccountCharge(savingsAccountId, savingsAccountChargeId, postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling payOrWaiveSavingsAccountCharge");
      }
      // verify the required parameter 'savingsAccountChargeId' is set
      if (savingsAccountChargeId === undefined || savingsAccountChargeId === null) {
        throw new Error("Missing the required parameter 'savingsAccountChargeId' when calling payOrWaiveSavingsAccountCharge");
      }
      // verify the required parameter 'postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest' is set
      if (postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest === undefined || postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest === null) {
        throw new Error("Missing the required parameter 'postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest' when calling payOrWaiveSavingsAccountCharge");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId,
        'savingsAccountChargeId': savingsAccountChargeId
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
      let returnType = PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllSavingsAccountCharges operation.
     * @callback module:api/SavingsChargesApi~retrieveAllSavingsAccountChargesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSavingsAccountsSavingsAccountIdChargesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Savings Charges
     * Lists Savings Charges  Example Requests:  savingsaccounts/1/charges  savingsaccounts/1/charges?chargeStatus=all  savingsaccounts/1/charges?chargeStatus=inactive  savingsaccounts/1/charges?chargeStatus=active  savingsaccounts/1/charges?fields=name,amountOrPercentage
     * @param {Number} savingsAccountId savingsAccountId
     * @param {Object} opts Optional parameters
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {module:api/SavingsChargesApi~retrieveAllSavingsAccountChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSavingsAccountsSavingsAccountIdChargesResponse>}
     */
    retrieveAllSavingsAccountCharges(savingsAccountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling retrieveAllSavingsAccountCharges");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId
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
      let returnType = [GetSavingsAccountsSavingsAccountIdChargesResponse];
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSavingsAccountCharge operation.
     * @callback module:api/SavingsChargesApi~retrieveSavingsAccountChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Savings account Charge
     * Retrieves a Savings account Charge  Example Requests:  /savingsaccounts/1/charges/5   /savingsaccounts/1/charges/5?fields=name,amountOrPercentage
     * @param {Number} savingsAccountId savingsAccountId
     * @param {Number} savingsAccountChargeId savingsAccountChargeId
     * @param {module:api/SavingsChargesApi~retrieveSavingsAccountChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    retrieveSavingsAccountCharge(savingsAccountId, savingsAccountChargeId, callback) {
      let postBody = null;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling retrieveSavingsAccountCharge");
      }
      // verify the required parameter 'savingsAccountChargeId' is set
      if (savingsAccountChargeId === undefined || savingsAccountChargeId === null) {
        throw new Error("Missing the required parameter 'savingsAccountChargeId' when calling retrieveSavingsAccountCharge");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId,
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
      let returnType = GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate17 operation.
     * @callback module:api/SavingsChargesApi~retrieveTemplate17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Savings Charges Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsaccounts/1/charges/template
     * @param {Number} savingsAccountId savingsAccountId
     * @param {module:api/SavingsChargesApi~retrieveTemplate17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse}
     */
    retrieveTemplate17(savingsAccountId, callback) {
      let postBody = null;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling retrieveTemplate17");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId
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
      let returnType = GetSavingsAccountsSavingsAccountIdChargesTemplateResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSavingsAccountCharge operation.
     * @callback module:api/SavingsChargesApi~updateSavingsAccountChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Savings account Charge
     * Currently Savings account Charges may be updated only if the Savings account is not yet approved.
     * @param {Number} savingsAccountId savingsAccountId
     * @param {Number} savingsAccountChargeId savingsAccountChargeId
     * @param {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest} putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest 
     * @param {module:api/SavingsChargesApi~updateSavingsAccountChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    updateSavingsAccountCharge(savingsAccountId, savingsAccountChargeId, putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest, callback) {
      let postBody = putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest;
      // verify the required parameter 'savingsAccountId' is set
      if (savingsAccountId === undefined || savingsAccountId === null) {
        throw new Error("Missing the required parameter 'savingsAccountId' when calling updateSavingsAccountCharge");
      }
      // verify the required parameter 'savingsAccountChargeId' is set
      if (savingsAccountChargeId === undefined || savingsAccountChargeId === null) {
        throw new Error("Missing the required parameter 'savingsAccountChargeId' when calling updateSavingsAccountCharge");
      }
      // verify the required parameter 'putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest' is set
      if (putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest === undefined || putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest === null) {
        throw new Error("Missing the required parameter 'putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest' when calling updateSavingsAccountCharge");
      }

      let pathParams = {
        'savingsAccountId': savingsAccountId,
        'savingsAccountChargeId': savingsAccountChargeId
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
      let returnType = PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
