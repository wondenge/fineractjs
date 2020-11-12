


import ApiClient from "../ApiClient";
import DeleteCentersCenterIdResponse from '../model/DeleteCentersCenterIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetCentersCenterIdAccountsResponse from '../model/GetCentersCenterIdAccountsResponse';
import GetCentersCenterIdResponse from '../model/GetCentersCenterIdResponse';
import GetCentersResponse from '../model/GetCentersResponse';
import GetCentersTemplateResponse from '../model/GetCentersTemplateResponse';
import PostCentersCenterIdRequest from '../model/PostCentersCenterIdRequest';
import PostCentersCenterIdResponse from '../model/PostCentersCenterIdResponse';
import PostCentersRequest from '../model/PostCentersRequest';
import PostCentersResponse from '../model/PostCentersResponse';
import PutCentersCenterIdRequest from '../model/PutCentersCenterIdRequest';
import PutCentersCenterIdResponse from '../model/PutCentersCenterIdResponse';

/**
* Centers service.
* @module api/CentersApi
* @version 1.0
*/
export default class CentersApi {

    /**
    * Constructs a new CentersApi. 
    * @alias module:api/CentersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activate2 operation.
     * @callback module:api/CentersApi~activate2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCentersCenterIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Center | Generate Collection Sheet | Save Collection Sheet | Close a Center | Associate Groups | Disassociate Groups
     * Activate a Center:  Centers can be created in a Pending state. This API exists to enable center activation. If the center happens to be already active, this API will result in an error.  Close a Center:  Centers can be closed if they don't have any non-closed groups or saving accounts. If the Center has any active groups or savings accounts, this API will result in an error.  Associate Groups:  This API allows associating existing groups to a center. The groups are listed from the office to which the center is associated. If group(s) is already associated with a center, this API will result in an error.  Disassociate Groups:  This API allows to disassociate groups from a center.  Generate Collection Sheet:  This Api retrieves repayment details of all jlg loans under a center as on a specified meeting date.  Save Collection Sheet:  This Api allows the loan officer to perform bulk repayments of JLG loans for a center on a given meeting date.  Showing Request/Response for Close a Center
     * @param {Number} centerId centerId
     * @param {module:model/PostCentersCenterIdRequest} postCentersCenterIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/CentersApi~activate2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCentersCenterIdResponse}
     */
    activate2(centerId, postCentersCenterIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postCentersCenterIdRequest;
      // verify the required parameter 'centerId' is set
      if (centerId === undefined || centerId === null) {
        throw new Error("Missing the required parameter 'centerId' when calling activate2");
      }
      // verify the required parameter 'postCentersCenterIdRequest' is set
      if (postCentersCenterIdRequest === undefined || postCentersCenterIdRequest === null) {
        throw new Error("Missing the required parameter 'postCentersCenterIdRequest' when calling activate2");
      }

      let pathParams = {
        'centerId': centerId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostCentersCenterIdResponse;
      return this.apiClient.callApi(
        '/centers/{centerId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create6 operation.
     * @callback module:api/CentersApi~create6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCentersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Center
     * Creates a Center  Mandatory Fields: name, officeId, active, activationDate (if active=true)  Optional Fields: externalId, staffId, groupMembers
     * @param {module:model/PostCentersRequest} postCentersRequest 
     * @param {module:api/CentersApi~create6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCentersResponse}
     */
    create6(postCentersRequest, callback) {
      let postBody = postCentersRequest;
      // verify the required parameter 'postCentersRequest' is set
      if (postCentersRequest === undefined || postCentersRequest === null) {
        throw new Error("Missing the required parameter 'postCentersRequest' when calling create6");
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
      let returnType = PostCentersResponse;
      return this.apiClient.callApi(
        '/centers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete10 operation.
     * @callback module:api/CentersApi~delete10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteCentersCenterIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Center
     * A Center can be deleted if it is in pending state and has no association - groups, loans or savings
     * @param {Number} centerId centerId
     * @param {module:api/CentersApi~delete10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteCentersCenterIdResponse}
     */
    delete10(centerId, callback) {
      let postBody = null;
      // verify the required parameter 'centerId' is set
      if (centerId === undefined || centerId === null) {
        throw new Error("Missing the required parameter 'centerId' when calling delete10");
      }

      let pathParams = {
        'centerId': centerId
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
      let returnType = DeleteCentersCenterIdResponse;
      return this.apiClient.callApi(
        '/centers/{centerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCentersTemplate operation.
     * @callback module:api/CentersApi~getCentersTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/CentersApi~getCentersTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getCentersTemplate(opts, callback) {
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
        '/centers/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCentersTemplate operation.
     * @callback module:api/CentersApi~postCentersTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/CentersApi~postCentersTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postCentersTemplate(opts, callback) {
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
        '/centers/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll22 operation.
     * @callback module:api/CentersApi~retrieveAll22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCentersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Centers
     * The default implementation supports pagination and sorting with the default pagination size set to 200 records. The parameter limit with description -1 will return all entries.  Example Requests:    centers    centers?fields=name,officeName,joinedDate    centers?offset=10&limit=50    centers?orderBy=name&sortOrder=DESC
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {Number} opts.staffId staffId
     * @param {String} opts.externalId externalId
     * @param {String} opts.name name
     * @param {String} opts.underHierarchy underHierarchy
     * @param {Boolean} opts.paged paged
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Object} opts.meetingDate meetingDate
     * @param {String} opts.dateFormat dateFormat
     * @param {String} opts.locale locale
     * @param {module:api/CentersApi~retrieveAll22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCentersResponse}
     */
    retrieveAll22(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'staffId': opts['staffId'],
        'externalId': opts['externalId'],
        'name': opts['name'],
        'underHierarchy': opts['underHierarchy'],
        'paged': opts['paged'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'meetingDate': opts['meetingDate'],
        'dateFormat': opts['dateFormat'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetCentersResponse;
      return this.apiClient.callApi(
        '/centers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveGroupAccount operation.
     * @callback module:api/CentersApi~retrieveGroupAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCentersCenterIdAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Center accounts overview
     * An example of how a savings summary for a Center can be provided. This is requested in a specific use case of the reference application.  It is quite reasonable to add resources like this to simplify User Interface development.    Example Requests:    centers/9/accounts
     * @param {Number} centerId centerId
     * @param {module:api/CentersApi~retrieveGroupAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCentersCenterIdAccountsResponse}
     */
    retrieveGroupAccount(centerId, callback) {
      let postBody = null;
      // verify the required parameter 'centerId' is set
      if (centerId === undefined || centerId === null) {
        throw new Error("Missing the required parameter 'centerId' when calling retrieveGroupAccount");
      }

      let pathParams = {
        'centerId': centerId
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
      let returnType = GetCentersCenterIdAccountsResponse;
      return this.apiClient.callApi(
        '/centers/{centerId}/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne12 operation.
     * @callback module:api/CentersApi~retrieveOne12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCentersCenterIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Center
     * Retrieves a Center  Example Requests:    centers/1    centers/1?associations=groupMembers
     * @param {Number} centerId centerId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/CentersApi~retrieveOne12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCentersCenterIdResponse}
     */
    retrieveOne12(centerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'centerId' is set
      if (centerId === undefined || centerId === null) {
        throw new Error("Missing the required parameter 'centerId' when calling retrieveOne12");
      }

      let pathParams = {
        'centerId': centerId
      };
      let queryParams = {
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetCentersCenterIdResponse;
      return this.apiClient.callApi(
        '/centers/{centerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate6 operation.
     * @callback module:api/CentersApi~retrieveTemplate6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCentersTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Center Template
     * Retrieves a Center Template  Example Requests:    centers/template    centers/template?officeId=2
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {Number} opts.officeId officeId
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/CentersApi~retrieveTemplate6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCentersTemplateResponse}
     */
    retrieveTemplate6(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'command': opts['command'],
        'officeId': opts['officeId'],
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetCentersTemplateResponse;
      return this.apiClient.callApi(
        '/centers/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update10 operation.
     * @callback module:api/CentersApi~update10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutCentersCenterIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Center
     * Updates a Center
     * @param {Number} centerId centerId
     * @param {module:model/PutCentersCenterIdRequest} putCentersCenterIdRequest 
     * @param {module:api/CentersApi~update10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutCentersCenterIdResponse}
     */
    update10(centerId, putCentersCenterIdRequest, callback) {
      let postBody = putCentersCenterIdRequest;
      // verify the required parameter 'centerId' is set
      if (centerId === undefined || centerId === null) {
        throw new Error("Missing the required parameter 'centerId' when calling update10");
      }
      // verify the required parameter 'putCentersCenterIdRequest' is set
      if (putCentersCenterIdRequest === undefined || putCentersCenterIdRequest === null) {
        throw new Error("Missing the required parameter 'putCentersCenterIdRequest' when calling update10");
      }

      let pathParams = {
        'centerId': centerId
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
      let returnType = PutCentersCenterIdResponse;
      return this.apiClient.callApi(
        '/centers/{centerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
