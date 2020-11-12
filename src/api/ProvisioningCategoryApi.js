


import ApiClient from "../ApiClient";

/**
* ProvisioningCategory service.
* @module api/ProvisioningCategoryApi
* @version 1.0
*/
export default class ProvisioningCategoryApi {

    /**
    * Constructs a new ProvisioningCategoryApi. 
    * @alias module:api/ProvisioningCategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProvisioningCategory operation.
     * @callback module:api/ProvisioningCategoryApi~createProvisioningCategoryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/ProvisioningCategoryApi~createProvisioningCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createProvisioningCategory(opts, callback) {
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
        '/provisioningcategory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProvisioningCategory operation.
     * @callback module:api/ProvisioningCategoryApi~deleteProvisioningCategoryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} categoryId 
     * @param {module:api/ProvisioningCategoryApi~deleteProvisioningCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteProvisioningCategory(categoryId, callback) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteProvisioningCategory");
      }

      let pathParams = {
        'categoryId': categoryId
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
        '/provisioningcategory/{categoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll15 operation.
     * @callback module:api/ProvisioningCategoryApi~retrieveAll15Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ProvisioningCategoryApi~retrieveAll15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll15(callback) {
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
        '/provisioningcategory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProvisioningCategory operation.
     * @callback module:api/ProvisioningCategoryApi~updateProvisioningCategoryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} categoryId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/ProvisioningCategoryApi~updateProvisioningCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateProvisioningCategory(categoryId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling updateProvisioningCategory");
      }

      let pathParams = {
        'categoryId': categoryId
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
        '/provisioningcategory/{categoryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
