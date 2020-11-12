  


import ApiClient from "../ApiClient";
import ExternalServicesPropertiesData from '../model/ExternalServicesPropertiesData';
import PutExternalServiceRequest from '../model/PutExternalServiceRequest';

/**
* ExternalServices service.
* @module api/ExternalServicesApi
* @version 1.0
*/
export default class ExternalServicesApi {

    /**
    * Constructs a new ExternalServicesApi. 
    * @alias module:api/ExternalServicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveOne2 operation.
     * @callback module:api/ExternalServicesApi~retrieveOne2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalServicesPropertiesData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve External Services Configuration
     * Returns a external Service configurations based on the Service Name.  Service Names supported are S3 and SMTP.  Example Requests:  externalservice/SMTP
     * @param {String} servicename servicename
     * @param {module:api/ExternalServicesApi~retrieveOne2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalServicesPropertiesData}
     */
    retrieveOne2(servicename, callback) {
      let postBody = null;
      // verify the required parameter 'servicename' is set
      if (servicename === undefined || servicename === null) {
        throw new Error("Missing the required parameter 'servicename' when calling retrieveOne2");
      }

      let pathParams = {
        'servicename': servicename
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
      let returnType = ExternalServicesPropertiesData;
      return this.apiClient.callApi(
        '/externalservice/{servicename}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExternalServiceProperties operation.
     * @callback module:api/ExternalServicesApi~updateExternalServicePropertiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update External Service
     * Updates the external Service Configuration for a Service Name.  Example:   externalservice/S3
     * @param {String} servicename servicename
     * @param {module:model/PutExternalServiceRequest} putExternalServiceRequest 
     * @param {module:api/ExternalServicesApi~updateExternalServicePropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateExternalServiceProperties(servicename, putExternalServiceRequest, callback) {
      let postBody = putExternalServiceRequest;
      // verify the required parameter 'servicename' is set
      if (servicename === undefined || servicename === null) {
        throw new Error("Missing the required parameter 'servicename' when calling updateExternalServiceProperties");
      }
      // verify the required parameter 'putExternalServiceRequest' is set
      if (putExternalServiceRequest === undefined || putExternalServiceRequest === null) {
        throw new Error("Missing the required parameter 'putExternalServiceRequest' when calling updateExternalServiceProperties");
      }

      let pathParams = {
        'servicename': servicename
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
        '/externalservice/{servicename}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
