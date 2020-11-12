


import ApiClient from "../ApiClient";
import PostSelfAuthenticationResponse from '../model/PostSelfAuthenticationResponse';

/**
* SelfAuthentication service.
* @module api/SelfAuthenticationApi
* @version 1.0
*/
export default class SelfAuthenticationApi {

    /**
    * Constructs a new SelfAuthenticationApi. 
    * @alias module:api/SelfAuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticate1 operation.
     * @callback module:api/SelfAuthenticationApi~authenticate1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSelfAuthenticationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify authentication
     * Authenticates the credentials provided and returns the set roles and permissions allowed.  Please visit this link for more info - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#selfbasicauth
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SelfAuthenticationApi~authenticate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSelfAuthenticationResponse}
     */
    authenticate1(opts, callback) {
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
      let returnType = PostSelfAuthenticationResponse;
      return this.apiClient.callApi(
        '/self/authentication', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
