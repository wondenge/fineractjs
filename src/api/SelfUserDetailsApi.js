


import ApiClient from "../ApiClient";
import GetSelfUserDetailsResponse from '../model/GetSelfUserDetailsResponse';

/**
* SelfUserDetails service.
* @module api/SelfUserDetailsApi
* @version 1.0
*/
export default class SelfUserDetailsApi {

    /**
    * Constructs a new SelfUserDetailsApi. 
    * @alias module:api/SelfUserDetailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the fetchAuthenticatedUserData1 operation.
     * @callback module:api/SelfUserDetailsApi~fetchAuthenticatedUserData1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfUserDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch authenticated user details
     * Checks the Authentication and returns the set roles and permissions allowed  For more info visit this link - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#selfoauth
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessToken äccess_token
     * @param {module:api/SelfUserDetailsApi~fetchAuthenticatedUserData1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfUserDetailsResponse}
     */
    fetchAuthenticatedUserData1(opts, callback) {
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
      let returnType = GetSelfUserDetailsResponse;
      return this.apiClient.callApi(
        '/self/userdetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
