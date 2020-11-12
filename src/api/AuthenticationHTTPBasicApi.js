


import ApiClient from "../ApiClient";
import PostAuthenticationResponse from '../model/PostAuthenticationResponse';

/**
* AuthenticationHTTPBasic service.
* @module api/AuthenticationHTTPBasicApi
* @version 1.0
*/
export default class AuthenticationHTTPBasicApi {

    /**
    * Constructs a new AuthenticationHTTPBasicApi. 
    * @alias module:api/AuthenticationHTTPBasicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticate operation.
     * @callback module:api/AuthenticationHTTPBasicApi~authenticateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAuthenticationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify authentication
     * Authenticates the credentials provided and returns the set roles and permissions allowed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/AuthenticationHTTPBasicApi~authenticateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAuthenticationResponse}
     */
    authenticate(opts, callback) {
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
      let returnType = PostAuthenticationResponse;
      return this.apiClient.callApi(
        '/authentication', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
