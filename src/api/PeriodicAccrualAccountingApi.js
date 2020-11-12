


import ApiClient from "../ApiClient";
import PostRunaccrualsRequest from '../model/PostRunaccrualsRequest';

/**
* PeriodicAccrualAccounting service.
* @module api/PeriodicAccrualAccountingApi
* @version 1.0
*/
export default class PeriodicAccrualAccountingApi {

    /**
    * Constructs a new PeriodicAccrualAccountingApi. 
    * @alias module:api/PeriodicAccrualAccountingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the executePeriodicAccrualAccounting operation.
     * @callback module:api/PeriodicAccrualAccountingApi~executePeriodicAccrualAccountingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Executes Periodic Accrual Accounting
     * Mandatory Fields  tillDate 
     * @param {module:model/PostRunaccrualsRequest} postRunaccrualsRequest 
     * @param {module:api/PeriodicAccrualAccountingApi~executePeriodicAccrualAccountingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    executePeriodicAccrualAccounting(postRunaccrualsRequest, callback) {
      let postBody = postRunaccrualsRequest;
      // verify the required parameter 'postRunaccrualsRequest' is set
      if (postRunaccrualsRequest === undefined || postRunaccrualsRequest === null) {
        throw new Error("Missing the required parameter 'postRunaccrualsRequest' when calling executePeriodicAccrualAccounting");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/runaccruals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
