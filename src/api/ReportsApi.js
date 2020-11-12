


import ApiClient from "../ApiClient";
import DeleteReportsResponse from '../model/DeleteReportsResponse';
import GetReportsResponse from '../model/GetReportsResponse';
import GetReportsTemplateResponse from '../model/GetReportsTemplateResponse';
import PostReportsResponse from '../model/PostReportsResponse';
import PostRepostRequest from '../model/PostRepostRequest';
import PutReportRequest from '../model/PutReportRequest';
import PutReportResponse from '../model/PutReportResponse';

/**
* Reports service.
* @module api/ReportsApi
* @version 1.0
*/
export default class ReportsApi {

    /**
    * Constructs a new ReportsApi. 
    * @alias module:api/ReportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createReport operation.
     * @callback module:api/ReportsApi~createReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostReportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Report
     * @param {module:model/PostRepostRequest} postRepostRequest 
     * @param {module:api/ReportsApi~createReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostReportsResponse}
     */
    createReport(postRepostRequest, callback) {
      let postBody = postRepostRequest;
      // verify the required parameter 'postRepostRequest' is set
      if (postRepostRequest === undefined || postRepostRequest === null) {
        throw new Error("Missing the required parameter 'postRepostRequest' when calling createReport");
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
      let returnType = PostReportsResponse;
      return this.apiClient.callApi(
        '/reports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReport operation.
     * @callback module:api/ReportsApi~deleteReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteReportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Report
     * Only non-core reports can be deleted.
     * @param {Number} id id
     * @param {module:api/ReportsApi~deleteReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteReportsResponse}
     */
    deleteReport(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteReport");
      }

      let pathParams = {
        'id': id
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
      let returnType = DeleteReportsResponse;
      return this.apiClient.callApi(
        '/reports/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOfficeTemplate operation.
     * @callback module:api/ReportsApi~retrieveOfficeTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReportsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Report Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists  Example Request :   reports/template
     * @param {module:api/ReportsApi~retrieveOfficeTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReportsTemplateResponse}
     */
    retrieveOfficeTemplate(callback) {
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
      let returnType = GetReportsTemplateResponse;
      return this.apiClient.callApi(
        '/reports/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveReport operation.
     * @callback module:api/ReportsApi~retrieveReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Report 
     * Example Requests:  reports/1   reports/1?template=true
     * @param {Number} id id
     * @param {module:api/ReportsApi~retrieveReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReportsResponse}
     */
    retrieveReport(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveReport");
      }

      let pathParams = {
        'id': id
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
      let returnType = GetReportsResponse;
      return this.apiClient.callApi(
        '/reports/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveReportList operation.
     * @callback module:api/ReportsApi~retrieveReportListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetReportsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Reports
     * Lists all reports and their parameters.  Example Request:  reports
     * @param {module:api/ReportsApi~retrieveReportListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetReportsResponse>}
     */
    retrieveReportList(callback) {
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
      let returnType = [GetReportsResponse];
      return this.apiClient.callApi(
        '/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReport operation.
     * @callback module:api/ReportsApi~updateReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Report
     * Only the useReport description can be updated for core reports.
     * @param {Number} id id
     * @param {module:model/PutReportRequest} putReportRequest 
     * @param {module:api/ReportsApi~updateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutReportResponse}
     */
    updateReport(id, putReportRequest, callback) {
      let postBody = putReportRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateReport");
      }
      // verify the required parameter 'putReportRequest' is set
      if (putReportRequest === undefined || putReportRequest === null) {
        throw new Error("Missing the required parameter 'putReportRequest' when calling updateReport");
      }

      let pathParams = {
        'id': id
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
      let returnType = PutReportResponse;
      return this.apiClient.callApi(
        '/reports/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
