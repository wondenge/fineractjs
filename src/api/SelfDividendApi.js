


import ApiClient from "../ApiClient";

/**
* SelfDividend service.
* @module api/SelfDividendApi
* @version 1.0
*/
export default class SelfDividendApi {

    /**
    * Constructs a new SelfDividendApi. 
    * @alias module:api/SelfDividendApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDividendDetail operation.
     * @callback module:api/SelfDividendApi~createDividendDetailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SelfDividendApi~createDividendDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createDividendDetail(productId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling createDividendDetail");
      }

      let pathParams = {
        'productId': productId
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
        '/shareproduct/{productId}/dividend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDividendDetail operation.
     * @callback module:api/SelfDividendApi~deleteDividendDetailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Number} dividendId 
     * @param {module:api/SelfDividendApi~deleteDividendDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteDividendDetail(productId, dividendId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling deleteDividendDetail");
      }
      // verify the required parameter 'dividendId' is set
      if (dividendId === undefined || dividendId === null) {
        throw new Error("Missing the required parameter 'dividendId' when calling deleteDividendDetail");
      }

      let pathParams = {
        'productId': productId,
        'dividendId': dividendId
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
        '/shareproduct/{productId}/dividend/{dividendId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll38 operation.
     * @callback module:api/SelfDividendApi~retrieveAll38Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {Number} opts.status 
     * @param {module:api/SelfDividendApi~retrieveAll38Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll38(productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveAll38");
      }

      let pathParams = {
        'productId': productId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'status': opts['status']
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
        '/shareproduct/{productId}/dividend', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveDividendDetails operation.
     * @callback module:api/SelfDividendApi~retrieveDividendDetailsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} dividendId 
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {String} opts.accountNo 
     * @param {module:api/SelfDividendApi~retrieveDividendDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveDividendDetails(dividendId, productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dividendId' is set
      if (dividendId === undefined || dividendId === null) {
        throw new Error("Missing the required parameter 'dividendId' when calling retrieveDividendDetails");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveDividendDetails");
      }

      let pathParams = {
        'dividendId': dividendId,
        'productId': productId
      };
      let queryParams = {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/shareproduct/{productId}/dividend/{dividendId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDividendDetail operation.
     * @callback module:api/SelfDividendApi~updateDividendDetailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Number} dividendId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/SelfDividendApi~updateDividendDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateDividendDetail(productId, dividendId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateDividendDetail");
      }
      // verify the required parameter 'dividendId' is set
      if (dividendId === undefined || dividendId === null) {
        throw new Error("Missing the required parameter 'dividendId' when calling updateDividendDetail");
      }

      let pathParams = {
        'productId': productId,
        'dividendId': dividendId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/shareproduct/{productId}/dividend/{dividendId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
