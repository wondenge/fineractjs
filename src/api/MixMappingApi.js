


import ApiClient from "../ApiClient";

/**
* MixMapping service.
* @module api/MixMappingApi
* @version 1.0
*/
export default class MixMappingApi {

    /**
    * Constructs a new MixMappingApi. 
    * @alias module:api/MixMappingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveTaxonomyMapping operation.
     * @callback module:api/MixMappingApi~retrieveTaxonomyMappingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/MixMappingApi~retrieveTaxonomyMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTaxonomyMapping(callback) {
      let postBody = null;

      let pathParams = {
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
        '/mixmapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaxonomyMapping operation.
     * @callback module:api/MixMappingApi~updateTaxonomyMappingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/MixMappingApi~updateTaxonomyMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateTaxonomyMapping(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/mixmapping', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
