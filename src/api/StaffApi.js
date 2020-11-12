


import ApiClient from "../ApiClient";
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetStaffResponse from '../model/GetStaffResponse';
import PostStaffRequest from '../model/PostStaffRequest';
import PostStaffResponse from '../model/PostStaffResponse';
import PutStaffRequest from '../model/PutStaffRequest';
import PutStaffResponse from '../model/PutStaffResponse';

/**
* Staff service.
* @module api/StaffApi
* @version 1.0
*/
export default class StaffApi {

    /**
    * Constructs a new StaffApi. 
    * @alias module:api/StaffApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createStaff operation.
     * @callback module:api/StaffApi~createStaffCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostStaffResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a staff member
     * Creates a staff member.  Mandatory Fields:  officeId, firstname, lastname  Optional Fields:  isLoanOfficer, isActive
     * @param {module:model/PostStaffRequest} postStaffRequest 
     * @param {module:api/StaffApi~createStaffCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostStaffResponse}
     */
    createStaff(postStaffRequest, callback) {
      let postBody = postStaffRequest;
      // verify the required parameter 'postStaffRequest' is set
      if (postStaffRequest === undefined || postStaffRequest === null) {
        throw new Error("Missing the required parameter 'postStaffRequest' when calling createStaff");
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
      let returnType = PostStaffResponse;
      return this.apiClient.callApi(
        '/staff', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStaffTemplate operation.
     * @callback module:api/StaffApi~getStaffTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/StaffApi~getStaffTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getStaffTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
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
        '/staff/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postStaffTemplate operation.
     * @callback module:api/StaffApi~postStaffTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/StaffApi~postStaffTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postStaffTemplate(opts, callback) {
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
        '/staff/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreiveStaff operation.
     * @callback module:api/StaffApi~retreiveStaffCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStaffResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Staff Member
     * Returns the details of a Staff Member.  Example Requests:  staff/1
     * @param {Number} staffId staffId
     * @param {module:api/StaffApi~retreiveStaffCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStaffResponse}
     */
    retreiveStaff(staffId, callback) {
      let postBody = null;
      // verify the required parameter 'staffId' is set
      if (staffId === undefined || staffId === null) {
        throw new Error("Missing the required parameter 'staffId' when calling retreiveStaff");
      }

      let pathParams = {
        'staffId': staffId
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
      let returnType = GetStaffResponse;
      return this.apiClient.callApi(
        '/staff/{staffId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveStaff operation.
     * @callback module:api/StaffApi~retrieveStaffCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStaffResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Staff
     * Returns the list of staff members.  Example Requests:  staff     Retrieve a Staff by status  Returns the details of a Staff based on status.  By default it Returns all the ACTIVE Staff.  If status=INACTIVE, then it returns all INACTIVE Staff.  and for status=ALL, it Returns both ACTIVE and INACTIVE Staff.  Example Requests:  staff?status=active
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {Boolean} opts.staffInOfficeHierarchy staffInOfficeHierarchy (default to false)
     * @param {Boolean} opts.loanOfficersOnly loanOfficersOnly (default to false)
     * @param {String} opts.status status (default to 'active')
     * @param {module:api/StaffApi~retrieveStaffCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStaffResponse}
     */
    retrieveStaff(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'staffInOfficeHierarchy': opts['staffInOfficeHierarchy'],
        'loanOfficersOnly': opts['loanOfficersOnly'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStaffResponse;
      return this.apiClient.callApi(
        '/staff', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStaff operation.
     * @callback module:api/StaffApi~updateStaffCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutStaffResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Staff Member
     * Updates the details of a staff member.
     * @param {Number} staffId staffId
     * @param {module:model/PutStaffRequest} putStaffRequest 
     * @param {module:api/StaffApi~updateStaffCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutStaffResponse}
     */
    updateStaff(staffId, putStaffRequest, callback) {
      let postBody = putStaffRequest;
      // verify the required parameter 'staffId' is set
      if (staffId === undefined || staffId === null) {
        throw new Error("Missing the required parameter 'staffId' when calling updateStaff");
      }
      // verify the required parameter 'putStaffRequest' is set
      if (putStaffRequest === undefined || putStaffRequest === null) {
        throw new Error("Missing the required parameter 'putStaffRequest' when calling updateStaff");
      }

      let pathParams = {
        'staffId': staffId
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
      let returnType = PutStaffResponse;
      return this.apiClient.callApi(
        '/staff/{staffId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
