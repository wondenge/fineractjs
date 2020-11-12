


import ApiClient from "../ApiClient";

/**
* SelfLoanProducts service.
* @module api/SelfLoanProductsApi
* @version 1.0
*/
export default class SelfLoanProductsApi {

    /**
    * Constructs a new SelfLoanProductsApi. 
    * @alias module:api/SelfLoanProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAllLoanProducts1 operation.
     * @callback module:api/SelfLoanProductsApi~retrieveAllLoanProducts1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {module:api/SelfLoanProductsApi~retrieveAllLoanProducts1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllLoanProducts1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId']
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
        '/self/loanproducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveLoanProductDetails1 operation.
     * @callback module:api/SelfLoanProductsApi~retrieveLoanProductDetails1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {module:api/SelfLoanProductsApi~retrieveLoanProductDetails1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveLoanProductDetails1(productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveLoanProductDetails1");
      }

      let pathParams = {
        'productId': productId
      };
      let queryParams = {
        'clientId': opts['clientId']
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
        '/self/loanproducts/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
