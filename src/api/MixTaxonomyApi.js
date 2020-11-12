


import ApiClient from "../ApiClient";

/**
* MixTaxonomy service.
* @module api/MixTaxonomyApi
* @version 1.0
*/
export default class MixTaxonomyApi {

    /**
    * Constructs a new MixTaxonomyApi. 
    * @alias module:api/MixTaxonomyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAll14 operation.
     * @callback module:api/MixTaxonomyApi~retrieveAll14Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/MixTaxonomyApi~retrieveAll14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll14(callback) {
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
        '/mixtaxonomy', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
