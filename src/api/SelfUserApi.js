


import ApiClient from "../ApiClient";
import PutSelfUserRequest from '../model/PutSelfUserRequest';
import PutSelfUserResponse from '../model/PutSelfUserResponse';

/**
* SelfUser service.
* @module api/SelfUserApi
* @version 1.0
*/
export default class SelfUserApi {

    /**
    * Constructs a new SelfUserApi. 
    * @alias module:api/SelfUserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the update21 operation.
     * @callback module:api/SelfUserApi~update21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSelfUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User
     * This API can be used by Self Service user to update their own user information. Currently, \"password\" and \"repeatPassword\" are the only parameters accepted.
     * @param {module:model/PutSelfUserRequest} putSelfUserRequest 
     * @param {module:api/SelfUserApi~update21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSelfUserResponse}
     */
    update21(putSelfUserRequest, callback) {
      let postBody = putSelfUserRequest;
      // verify the required parameter 'putSelfUserRequest' is set
      if (putSelfUserRequest === undefined || putSelfUserRequest === null) {
        throw new Error("Missing the required parameter 'putSelfUserRequest' when calling update21");
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
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = PutSelfUserResponse;
      return this.apiClient.callApi(
        '/self/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
