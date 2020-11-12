


import ApiClient from "../ApiClient";
import GetCachesResponse from '../model/GetCachesResponse';
import PutCachesRequest from '../model/PutCachesRequest';
import PutCachesResponse from '../model/PutCachesResponse';

/**
* Cache service.
* @module api/CacheApi
* @version 1.0
*/
export default class CacheApi {

    /**
    * Constructs a new CacheApi. 
    * @alias module:api/CacheApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAll4 operation.
     * @callback module:api/CacheApi~retrieveAll4Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCachesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Cache Types
     * Returns the list of caches.  Example Requests:  caches
     * @param {module:api/CacheApi~retrieveAll4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCachesResponse>}
     */
    retrieveAll4(callback) {
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
      let returnType = [GetCachesResponse];
      return this.apiClient.callApi(
        '/caches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the switchCache operation.
     * @callback module:api/CacheApi~switchCacheCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutCachesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Switch Cache
     * Switches the cache to chosen one.
     * @param {module:model/PutCachesRequest} putCachesRequest 
     * @param {module:api/CacheApi~switchCacheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutCachesResponse}
     */
    switchCache(putCachesRequest, callback) {
      let postBody = putCachesRequest;
      // verify the required parameter 'putCachesRequest' is set
      if (putCachesRequest === undefined || putCachesRequest === null) {
        throw new Error("Missing the required parameter 'putCachesRequest' when calling switchCache");
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
      let accepts = ['application/json'];
      let returnType = PutCachesResponse;
      return this.apiClient.callApi(
        '/caches', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
