


import ApiClient from "../ApiClient";
import GetGlobalConfigurationsResponse from '../model/GetGlobalConfigurationsResponse';
import PutGlobalConfigurationsRequest from '../model/PutGlobalConfigurationsRequest';
import PutGlobalConfigurationsResponse from '../model/PutGlobalConfigurationsResponse';

/**
* GlobalConfiguration service.
* @module api/GlobalConfigurationApi
* @version 1.0
*/
export default class GlobalConfigurationApi {

    /**
    * Constructs a new GlobalConfigurationApi. 
    * @alias module:api/GlobalConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveConfiguration operation.
     * @callback module:api/GlobalConfigurationApi~retrieveConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetGlobalConfigurationsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Global Configuration | Retrieve Global Configuration for surveys
     * Returns the list global enable/disable configurations.  Example Requests:  configurations   Returns the list global enable/disable survey configurations.  Example Requests:  configurations/survey
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.survey survey (default to false)
     * @param {module:api/GlobalConfigurationApi~retrieveConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetGlobalConfigurationsResponse>}
     */
    retrieveConfiguration(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'survey': opts['survey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetGlobalConfigurationsResponse];
      return this.apiClient.callApi(
        '/configurations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne3 operation.
     * @callback module:api/GlobalConfigurationApi~retrieveOne3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGlobalConfigurationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Global Configuration
     * Returns a global enable/disable configurations.  Example Requests:  configurations/1
     * @param {Number} configId configId
     * @param {module:api/GlobalConfigurationApi~retrieveOne3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGlobalConfigurationsResponse}
     */
    retrieveOne3(configId, callback) {
      let postBody = null;
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling retrieveOne3");
      }

      let pathParams = {
        'configId': configId
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
      let returnType = GetGlobalConfigurationsResponse;
      return this.apiClient.callApi(
        '/configurations/{configId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConfiguration1 operation.
     * @callback module:api/GlobalConfigurationApi~updateConfiguration1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutGlobalConfigurationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Global Configuration
     * Updates an enable/disable global configuration item.
     * @param {Number} configId configId
     * @param {module:model/PutGlobalConfigurationsRequest} putGlobalConfigurationsRequest 
     * @param {module:api/GlobalConfigurationApi~updateConfiguration1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutGlobalConfigurationsResponse}
     */
    updateConfiguration1(configId, putGlobalConfigurationsRequest, callback) {
      let postBody = putGlobalConfigurationsRequest;
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling updateConfiguration1");
      }
      // verify the required parameter 'putGlobalConfigurationsRequest' is set
      if (putGlobalConfigurationsRequest === undefined || putGlobalConfigurationsRequest === null) {
        throw new Error("Missing the required parameter 'putGlobalConfigurationsRequest' when calling updateConfiguration1");
      }

      let pathParams = {
        'configId': configId
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
      let returnType = PutGlobalConfigurationsResponse;
      return this.apiClient.callApi(
        '/configurations/{configId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
