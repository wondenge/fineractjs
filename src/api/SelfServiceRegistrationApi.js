


import ApiClient from "../ApiClient";

/**
* SelfServiceRegistration service.
* @module api/SelfServiceRegistrationApi
* @version 1.0
*/
export default class SelfServiceRegistrationApi {

    /**
    * Constructs a new SelfServiceRegistrationApi. 
    * @alias module:api/SelfServiceRegistrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSelfServiceRegistrationRequest operation.
     * @callback module:api/SelfServiceRegistrationApi~createSelfServiceRegistrationRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SelfServiceRegistrationApi~createSelfServiceRegistrationRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createSelfServiceRegistrationRequest(opts, callback) {
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/registration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSelfServiceUser operation.
     * @callback module:api/SelfServiceRegistrationApi~createSelfServiceUserCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SelfServiceRegistrationApi~createSelfServiceUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createSelfServiceUser(opts, callback) {
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/registration/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
