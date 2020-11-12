


import ApiClient from "../ApiClient";

/**
* AdhocQueryApi service.
* @module api/AdhocQueryApiApi
* @version 1.0
*/
export default class AdhocQueryApiApi {

    /**
    * Constructs a new AdhocQueryApiApi. 
    * @alias module:api/AdhocQueryApiApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAdHocQuery operation.
     * @callback module:api/AdhocQueryApiApi~createAdHocQueryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/AdhocQueryApiApi~createAdHocQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createAdHocQuery(opts, callback) {
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
        '/adhocquery', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAdHocQuery operation.
     * @callback module:api/AdhocQueryApiApi~deleteAdHocQueryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} adHocId adHocId
     * @param {module:api/AdhocQueryApiApi~deleteAdHocQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteAdHocQuery(adHocId, callback) {
      let postBody = null;
      // verify the required parameter 'adHocId' is set
      if (adHocId === undefined || adHocId === null) {
        throw new Error("Missing the required parameter 'adHocId' when calling deleteAdHocQuery");
      }

      let pathParams = {
        'adHocId': adHocId
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
        '/adhocquery/{adHocId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAdHocQuery operation.
     * @callback module:api/AdhocQueryApiApi~retrieveAdHocQueryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} adHocId adHocId
     * @param {module:api/AdhocQueryApiApi~retrieveAdHocQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAdHocQuery(adHocId, callback) {
      let postBody = null;
      // verify the required parameter 'adHocId' is set
      if (adHocId === undefined || adHocId === null) {
        throw new Error("Missing the required parameter 'adHocId' when calling retrieveAdHocQuery");
      }

      let pathParams = {
        'adHocId': adHocId
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
        '/adhocquery/{adHocId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll2 operation.
     * @callback module:api/AdhocQueryApiApi~retrieveAll2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AdhocQueryApiApi~retrieveAll2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll2(callback) {
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
        '/adhocquery', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template operation.
     * @callback module:api/AdhocQueryApiApi~templateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AdhocQueryApiApi~templateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    template(callback) {
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
        '/adhocquery/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/AdhocQueryApiApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} adHocId adHocId
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/AdhocQueryApiApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    update(adHocId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'adHocId' is set
      if (adHocId === undefined || adHocId === null) {
        throw new Error("Missing the required parameter 'adHocId' when calling update");
      }

      let pathParams = {
        'adHocId': adHocId
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
        '/adhocquery/{adHocId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
