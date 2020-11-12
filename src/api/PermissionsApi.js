


import ApiClient from "../ApiClient";
import CommandProcessingResult from '../model/CommandProcessingResult';
import GetPermissionsResponse from '../model/GetPermissionsResponse';
import PutPermissionsRequest from '../model/PutPermissionsRequest';

/**
* Permissions service.
* @module api/PermissionsApi
* @version 1.0
*/
export default class PermissionsApi {

    /**
    * Constructs a new PermissionsApi. 
    * @alias module:api/PermissionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAllPermissions operation.
     * @callback module:api/PermissionsApi~retrieveAllPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetPermissionsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Application Permissions
     * ARGUMENTS makerCheckerableoptional, Values are true, false. Default is false. If makerCheckerable=false or not supplied then a list of application permissions is returned. The \"selected\" attribute is always true in this case.  If makerCheckerable=true then the \"selected\" attribute shows whether the permission is enabled for Maker Check functionality.  Note: Each Apache Fineract transaction is associated with a permission.  Example Requests:  permissions   permissions?makerCheckerable=true   permissions?fields=grouping,code
     * @param {module:api/PermissionsApi~retrieveAllPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetPermissionsResponse>}
     */
    retrieveAllPermissions(callback) {
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
      let returnType = [GetPermissionsResponse];
      return this.apiClient.callApi(
        '/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePermissionsDetails operation.
     * @callback module:api/PermissionsApi~updatePermissionsDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommandProcessingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable/Disable Permissions for Maker Checker
     * @param {module:model/PutPermissionsRequest} putPermissionsRequest 
     * @param {module:api/PermissionsApi~updatePermissionsDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommandProcessingResult}
     */
    updatePermissionsDetails(putPermissionsRequest, callback) {
      let postBody = putPermissionsRequest;
      // verify the required parameter 'putPermissionsRequest' is set
      if (putPermissionsRequest === undefined || putPermissionsRequest === null) {
        throw new Error("Missing the required parameter 'putPermissionsRequest' when calling updatePermissionsDetails");
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
      let accepts = ['application/json'];
      let returnType = CommandProcessingResult;
      return this.apiClient.callApi(
        '/permissions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
