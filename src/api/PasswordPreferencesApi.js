


import ApiClient from "../ApiClient";
import GetPasswordPreferencesTemplateResponse from '../model/GetPasswordPreferencesTemplateResponse';
import PutPasswordPreferencesTemplateRequest from '../model/PutPasswordPreferencesTemplateRequest';

/**
* PasswordPreferences service.
* @module api/PasswordPreferencesApi
* @version 1.0
*/
export default class PasswordPreferencesApi {

    /**
    * Constructs a new PasswordPreferencesApi. 
    * @alias module:api/PasswordPreferencesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieve1 operation.
     * @callback module:api/PasswordPreferencesApi~retrieve1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPasswordPreferencesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/PasswordPreferencesApi~retrieve1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPasswordPreferencesTemplateResponse}
     */
    retrieve1(callback) {
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
      let returnType = GetPasswordPreferencesTemplateResponse;
      return this.apiClient.callApi(
        '/passwordpreferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template21 operation.
     * @callback module:api/PasswordPreferencesApi~template21Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetPasswordPreferencesTemplateResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Application Password validation policies
     * ARGUMENTS Example Requests:  passwordpreferences
     * @param {module:api/PasswordPreferencesApi~template21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetPasswordPreferencesTemplateResponse>}
     */
    template21(callback) {
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
      let returnType = [GetPasswordPreferencesTemplateResponse];
      return this.apiClient.callApi(
        '/passwordpreferences/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update22 operation.
     * @callback module:api/PasswordPreferencesApi~update22Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update password preferences
     * @param {module:model/PutPasswordPreferencesTemplateRequest} putPasswordPreferencesTemplateRequest 
     * @param {module:api/PasswordPreferencesApi~update22Callback} callback The callback function, accepting three arguments: error, data, response
     */
    update22(putPasswordPreferencesTemplateRequest, callback) {
      let postBody = putPasswordPreferencesTemplateRequest;
      // verify the required parameter 'putPasswordPreferencesTemplateRequest' is set
      if (putPasswordPreferencesTemplateRequest === undefined || putPasswordPreferencesTemplateRequest === null) {
        throw new Error("Missing the required parameter 'putPasswordPreferencesTemplateRequest' when calling update22");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/passwordpreferences', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
