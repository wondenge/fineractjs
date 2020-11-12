


import ApiClient from "../ApiClient";
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetOfficesResponse from '../model/GetOfficesResponse';
import GetOfficesTemplateResponse from '../model/GetOfficesTemplateResponse';
import PostOfficesRequest from '../model/PostOfficesRequest';
import PostOfficesResponse from '../model/PostOfficesResponse';
import PutOfficesOfficeIdRequest from '../model/PutOfficesOfficeIdRequest';
import PutOfficesOfficeIdResponse from '../model/PutOfficesOfficeIdResponse';

/**
* Offices service.
* @module api/OfficesApi
* @version 1.0
*/
export default class OfficesApi {

    /**
    * Constructs a new OfficesApi. 
    * @alias module:api/OfficesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createOffice operation.
     * @callback module:api/OfficesApi~createOfficeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostOfficesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Office
     * Mandatory Fields name, openingDate, parentId
     * @param {module:model/PostOfficesRequest} postOfficesRequest 
     * @param {module:api/OfficesApi~createOfficeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostOfficesResponse}
     */
    createOffice(postOfficesRequest, callback) {
      let postBody = postOfficesRequest;
      // verify the required parameter 'postOfficesRequest' is set
      if (postOfficesRequest === undefined || postOfficesRequest === null) {
        throw new Error("Missing the required parameter 'postOfficesRequest' when calling createOffice");
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
      let returnType = PostOfficesResponse;
      return this.apiClient.callApi(
        '/offices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOfficeTemplate operation.
     * @callback module:api/OfficesApi~getOfficeTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateFormat 
     * @param {module:api/OfficesApi~getOfficeTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getOfficeTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
        '/offices/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postOfficeTemplate operation.
     * @callback module:api/OfficesApi~postOfficeTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/OfficesApi~postOfficeTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postOfficeTemplate(opts, callback) {
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
        '/offices/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreiveOffice operation.
     * @callback module:api/OfficesApi~retreiveOfficeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOfficesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Office
     * Example Requests:  offices/1   offices/1?template=true   offices/1?fields=id,name,parentName
     * @param {Number} officeId officeId
     * @param {module:api/OfficesApi~retreiveOfficeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOfficesResponse}
     */
    retreiveOffice(officeId, callback) {
      let postBody = null;
      // verify the required parameter 'officeId' is set
      if (officeId === undefined || officeId === null) {
        throw new Error("Missing the required parameter 'officeId' when calling retreiveOffice");
      }

      let pathParams = {
        'officeId': officeId
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
      let returnType = GetOfficesResponse;
      return this.apiClient.callApi(
        '/offices/{officeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOfficeTemplate1 operation.
     * @callback module:api/OfficesApi~retrieveOfficeTemplate1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOfficesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Office Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  offices/template
     * @param {module:api/OfficesApi~retrieveOfficeTemplate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOfficesTemplateResponse}
     */
    retrieveOfficeTemplate1(callback) {
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
      let returnType = GetOfficesTemplateResponse;
      return this.apiClient.callApi(
        '/offices/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOffices operation.
     * @callback module:api/OfficesApi~retrieveOfficesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetOfficesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Offices
     * Example Requests:  offices   offices?fields=id,name,openingDate
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeAllOffices includeAllOffices (default to false)
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/OfficesApi~retrieveOfficesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetOfficesResponse>}
     */
    retrieveOffices(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'includeAllOffices': opts['includeAllOffices'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetOfficesResponse];
      return this.apiClient.callApi(
        '/offices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOffice operation.
     * @callback module:api/OfficesApi~updateOfficeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutOfficesOfficeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Office
     * @param {Number} officeId officeId
     * @param {module:model/PutOfficesOfficeIdRequest} putOfficesOfficeIdRequest 
     * @param {module:api/OfficesApi~updateOfficeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutOfficesOfficeIdResponse}
     */
    updateOffice(officeId, putOfficesOfficeIdRequest, callback) {
      let postBody = putOfficesOfficeIdRequest;
      // verify the required parameter 'officeId' is set
      if (officeId === undefined || officeId === null) {
        throw new Error("Missing the required parameter 'officeId' when calling updateOffice");
      }
      // verify the required parameter 'putOfficesOfficeIdRequest' is set
      if (putOfficesOfficeIdRequest === undefined || putOfficesOfficeIdRequest === null) {
        throw new Error("Missing the required parameter 'putOfficesOfficeIdRequest' when calling updateOffice");
      }

      let pathParams = {
        'officeId': officeId
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
      let returnType = PutOfficesOfficeIdResponse;
      return this.apiClient.callApi(
        '/offices/{officeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
