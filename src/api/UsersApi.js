


import ApiClient from "../ApiClient";
import DeleteUsersUserIdResponse from '../model/DeleteUsersUserIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetUsersResponse from '../model/GetUsersResponse';
import GetUsersTemplateResponse from '../model/GetUsersTemplateResponse';
import GetUsersUserIdResponse from '../model/GetUsersUserIdResponse';
import PostUsersRequest from '../model/PostUsersRequest';
import PostUsersResponse from '../model/PostUsersResponse';
import PutUsersUserIdRequest from '../model/PutUsersUserIdRequest';
import PutUsersUserIdResponse from '../model/PutUsersUserIdResponse';

/**
* Users service.
* @module api/UsersApi
* @version 1.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create14 operation.
     * @callback module:api/UsersApi~create14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a User
     * Adds new application user.  Note: Password information is not required (or processed). Password details at present are auto-generated and then sent to the email account given (which is why it can take a few seconds to complete).  Mandatory Fields:  username, firstname, lastname, email, officeId, roles, sendPasswordToEmail  Optional Fields:  staffId,passwordNeverExpires,isSelfServiceUser,clients
     * @param {module:model/PostUsersRequest} postUsersRequest 
     * @param {module:api/UsersApi~create14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUsersResponse}
     */
    create14(postUsersRequest, callback) {
      let postBody = postUsersRequest;
      // verify the required parameter 'postUsersRequest' is set
      if (postUsersRequest === undefined || postUsersRequest === null) {
        throw new Error("Missing the required parameter 'postUsersRequest' when calling create14");
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
      let returnType = PostUsersResponse;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete21 operation.
     * @callback module:api/UsersApi~delete21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteUsersUserIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a User
     * Removes the user and the associated roles and permissions.
     * @param {Number} userId userId
     * @param {module:api/UsersApi~delete21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteUsersUserIdResponse}
     */
    delete21(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling delete21");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = DeleteUsersUserIdResponse;
      return this.apiClient.callApi(
        '/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTemplate operation.
     * @callback module:api/UsersApi~getUserTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/UsersApi~getUserTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getUserTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'staffId': opts['staffId'],
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/vnd.ms-excel'];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUsersTemplate operation.
     * @callback module:api/UsersApi~postUsersTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/UsersApi~postUsersTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postUsersTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/users/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll40 operation.
     * @callback module:api/UsersApi~retrieveAll40Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetUsersResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of users
     * Example Requests:  users   users?fields=id,username,email,officeName
     * @param {module:api/UsersApi~retrieveAll40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetUsersResponse>}
     */
    retrieveAll40(callback) {
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
      let returnType = [GetUsersResponse];
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne28 operation.
     * @callback module:api/UsersApi~retrieveOne28Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUsersUserIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a User
     * Example Requests:  users/1   users/1?template=true   users/1?fields=username,officeName
     * @param {Number} userId userId
     * @param {module:api/UsersApi~retrieveOne28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUsersUserIdResponse}
     */
    retrieveOne28(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling retrieveOne28");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = GetUsersUserIdResponse;
      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template22 operation.
     * @callback module:api/UsersApi~template22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUsersTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve User Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  users/template
     * @param {module:api/UsersApi~template22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUsersTemplateResponse}
     */
    template22(callback) {
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
      let returnType = GetUsersTemplateResponse;
      return this.apiClient.callApi(
        '/users/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update23 operation.
     * @callback module:api/UsersApi~update23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutUsersUserIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a User
     * When updating a password you must provide the repeatPassword parameter also.
     * @param {Number} userId userId
     * @param {module:model/PutUsersUserIdRequest} putUsersUserIdRequest 
     * @param {module:api/UsersApi~update23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutUsersUserIdResponse}
     */
    update23(userId, putUsersUserIdRequest, callback) {
      let postBody = putUsersUserIdRequest;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling update23");
      }
      // verify the required parameter 'putUsersUserIdRequest' is set
      if (putUsersUserIdRequest === undefined || putUsersUserIdRequest === null) {
        throw new Error("Missing the required parameter 'putUsersUserIdRequest' when calling update23");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = PutUsersUserIdResponse;
      return this.apiClient.callApi(
        '/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
