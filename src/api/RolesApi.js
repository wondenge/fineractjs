


import ApiClient from "../ApiClient";
import DeleteRolesRoleIdResponse from '../model/DeleteRolesRoleIdResponse';
import GetRolesResponse from '../model/GetRolesResponse';
import GetRolesRoleIdPermissionsResponse from '../model/GetRolesRoleIdPermissionsResponse';
import GetRolesRoleIdResponse from '../model/GetRolesRoleIdResponse';
import PostRolesRequest from '../model/PostRolesRequest';
import PostRolesResponse from '../model/PostRolesResponse';
import PostRolesRoleIdResponse from '../model/PostRolesRoleIdResponse';
import PutRolesRoleIdPermissionsRequest from '../model/PutRolesRoleIdPermissionsRequest';
import PutRolesRoleIdPermissionsResponse from '../model/PutRolesRoleIdPermissionsResponse';
import PutRolesRoleIdRequest from '../model/PutRolesRoleIdRequest';
import PutRolesRoleIdResponse from '../model/PutRolesRoleIdResponse';

/**
* Roles service.
* @module api/RolesApi
* @version 1.0
*/
export default class RolesApi {

    /**
    * Constructs a new RolesApi. 
    * @alias module:api/RolesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the actionsOnRoles operation.
     * @callback module:api/RolesApi~actionsOnRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRolesRoleIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable Role | Disable Role
     * Description : Enable role in case role is disabled. | Disable the role in case role is not associated with any users.      Example Request:   https://DomainName/api/v1/roles/{roleId}?command=enable      https://DomainName/api/v1/roles/{roleId}?command=disable
     * @param {Number} roleId roleId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/RolesApi~actionsOnRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRolesRoleIdResponse}
     */
    actionsOnRoles(roleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling actionsOnRoles");
      }

      let pathParams = {
        'roleId': roleId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PostRolesRoleIdResponse;
      return this.apiClient.callApi(
        '/roles/{roleId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRole operation.
     * @callback module:api/RolesApi~createRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRolesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a New Role
     * Mandatory Fields name, description
     * @param {module:model/PostRolesRequest} postRolesRequest 
     * @param {module:api/RolesApi~createRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRolesResponse}
     */
    createRole(postRolesRequest, callback) {
      let postBody = postRolesRequest;
      // verify the required parameter 'postRolesRequest' is set
      if (postRolesRequest === undefined || postRolesRequest === null) {
        throw new Error("Missing the required parameter 'postRolesRequest' when calling createRole");
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
      let returnType = PostRolesResponse;
      return this.apiClient.callApi(
        '/roles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRole operation.
     * @callback module:api/RolesApi~deleteRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteRolesRoleIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Role
     * Description : Delete the role in case role is not associated with any users.
     * @param {Number} roleId roleId
     * @param {module:api/RolesApi~deleteRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteRolesRoleIdResponse}
     */
    deleteRole(roleId, callback) {
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling deleteRole");
      }

      let pathParams = {
        'roleId': roleId
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
      let returnType = DeleteRolesRoleIdResponse;
      return this.apiClient.callApi(
        '/roles/{roleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllRoles operation.
     * @callback module:api/RolesApi~retrieveAllRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetRolesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Roles
     * Example Requests:  roles   roles?fields=name
     * @param {module:api/RolesApi~retrieveAllRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetRolesResponse>}
     */
    retrieveAllRoles(callback) {
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
      let returnType = [GetRolesResponse];
      return this.apiClient.callApi(
        '/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveRole operation.
     * @callback module:api/RolesApi~retrieveRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRolesRoleIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Role
     * Example Requests:  roles/1   roles/1?fields=name
     * @param {Number} roleId roleId
     * @param {module:api/RolesApi~retrieveRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRolesRoleIdResponse}
     */
    retrieveRole(roleId, callback) {
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling retrieveRole");
      }

      let pathParams = {
        'roleId': roleId
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
      let returnType = GetRolesRoleIdResponse;
      return this.apiClient.callApi(
        '/roles/{roleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveRolePermissions operation.
     * @callback module:api/RolesApi~retrieveRolePermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRolesRoleIdPermissionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Role's Permissions
     * Example Requests:  roles/1/permissions
     * @param {Number} roleId roleId
     * @param {module:api/RolesApi~retrieveRolePermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRolesRoleIdPermissionsResponse}
     */
    retrieveRolePermissions(roleId, callback) {
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling retrieveRolePermissions");
      }

      let pathParams = {
        'roleId': roleId
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
      let returnType = GetRolesRoleIdPermissionsResponse;
      return this.apiClient.callApi(
        '/roles/{roleId}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRole operation.
     * @callback module:api/RolesApi~updateRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutRolesRoleIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Role
     * @param {Number} roleId roleId
     * @param {module:model/PutRolesRoleIdRequest} putRolesRoleIdRequest 
     * @param {module:api/RolesApi~updateRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutRolesRoleIdResponse}
     */
    updateRole(roleId, putRolesRoleIdRequest, callback) {
      let postBody = putRolesRoleIdRequest;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling updateRole");
      }
      // verify the required parameter 'putRolesRoleIdRequest' is set
      if (putRolesRoleIdRequest === undefined || putRolesRoleIdRequest === null) {
        throw new Error("Missing the required parameter 'putRolesRoleIdRequest' when calling updateRole");
      }

      let pathParams = {
        'roleId': roleId
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
      let returnType = PutRolesRoleIdResponse;
      return this.apiClient.callApi(
        '/roles/{roleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRolePermissions operation.
     * @callback module:api/RolesApi~updateRolePermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutRolesRoleIdPermissionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Role's Permissions
     * @param {Number} roleId roleId
     * @param {module:model/PutRolesRoleIdPermissionsRequest} putRolesRoleIdPermissionsRequest 
     * @param {module:api/RolesApi~updateRolePermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutRolesRoleIdPermissionsResponse}
     */
    updateRolePermissions(roleId, putRolesRoleIdPermissionsRequest, callback) {
      let postBody = putRolesRoleIdPermissionsRequest;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling updateRolePermissions");
      }
      // verify the required parameter 'putRolesRoleIdPermissionsRequest' is set
      if (putRolesRoleIdPermissionsRequest === undefined || putRolesRoleIdPermissionsRequest === null) {
        throw new Error("Missing the required parameter 'putRolesRoleIdPermissionsRequest' when calling updateRolePermissions");
      }

      let pathParams = {
        'roleId': roleId
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
      let returnType = PutRolesRoleIdPermissionsResponse;
      return this.apiClient.callApi(
        '/roles/{roleId}/permissions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
