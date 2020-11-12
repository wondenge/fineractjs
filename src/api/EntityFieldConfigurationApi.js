


import ApiClient from "../ApiClient";
import GetFieldConfigurationEntityResponse from '../model/GetFieldConfigurationEntityResponse';

/**
* EntityFieldConfiguration service.
* @module api/EntityFieldConfigurationApi
* @version 1.0
*/
export default class EntityFieldConfigurationApi {

    /**
    * Constructs a new EntityFieldConfigurationApi. 
    * @alias module:api/EntityFieldConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAddresses operation.
     * @callback module:api/EntityFieldConfigurationApi~getAddressesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFieldConfigurationEntityResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the Entity Field Configuration
     * It retrieves all the Entity Field Configuration
     * @param {String} entity entity
     * @param {module:api/EntityFieldConfigurationApi~getAddressesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFieldConfigurationEntityResponse>}
     */
    getAddresses(entity, callback) {
      let postBody = null;
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getAddresses");
      }

      let pathParams = {
        'entity': entity
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
      let returnType = [GetFieldConfigurationEntityResponse];
      return this.apiClient.callApi(
        '/fieldconfiguration/{entity}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
