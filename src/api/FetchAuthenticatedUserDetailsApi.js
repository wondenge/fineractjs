


import ApiClient from "../ApiClient";
import GetUserDetailsResponse from '../model/GetUserDetailsResponse';

/**
* FetchAuthenticatedUserDetails service.
* @module api/FetchAuthenticatedUserDetailsApi
* @version 1.0
*/
export default class FetchAuthenticatedUserDetailsApi {

    /**
    * Constructs a new FetchAuthenticatedUserDetailsApi. 
    * @alias module:api/FetchAuthenticatedUserDetailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the fetchAuthenticatedUserData operation.
     * @callback module:api/FetchAuthenticatedUserDetailsApi~fetchAuthenticatedUserDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUserDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch authenticated user details 
     * checks the Authentication and returns the set roles and permissions allowed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessToken access_token
     * @param {module:api/FetchAuthenticatedUserDetailsApi~fetchAuthenticatedUserDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUserDetailsResponse}
     */
    fetchAuthenticatedUserData(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'access_token': opts['accessToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetUserDetailsResponse;
      return this.apiClient.callApi(
        '/userdetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
