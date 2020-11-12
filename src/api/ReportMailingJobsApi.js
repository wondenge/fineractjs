


import ApiClient from "../ApiClient";
import DeleteReportMailingJobsResponse from '../model/DeleteReportMailingJobsResponse';
import GetReportMailingJobsResponse from '../model/GetReportMailingJobsResponse';
import GetReportMailingJobsTemplate from '../model/GetReportMailingJobsTemplate';
import PostReportMailingJobsRequest from '../model/PostReportMailingJobsRequest';
import PostReportMailingJobsResponse from '../model/PostReportMailingJobsResponse';
import PutReportMailingJobsRequest from '../model/PutReportMailingJobsRequest';
import PutReportMailingJobsResponse from '../model/PutReportMailingJobsResponse';

/**
* ReportMailingJobs service.
* @module api/ReportMailingJobsApi
* @version 1.0
*/
export default class ReportMailingJobsApi {

    /**
    * Constructs a new ReportMailingJobsApi. 
    * @alias module:api/ReportMailingJobsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createReportMailingJob operation.
     * @callback module:api/ReportMailingJobsApi~createReportMailingJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostReportMailingJobsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Report Mailing Job
     * Mandatory Fields: name, startDateTime, stretchyReportId, emailRecipients, emailSubject, emailMessage, emailAttachmentFileFormatId, recurrence, isActive  Optional Fields: description, stretchyReportParamMap
     * @param {module:model/PostReportMailingJobsRequest} postReportMailingJobsRequest 
     * @param {module:api/ReportMailingJobsApi~createReportMailingJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostReportMailingJobsResponse}
     */
    createReportMailingJob(postReportMailingJobsRequest, callback) {
      let postBody = postReportMailingJobsRequest;
      // verify the required parameter 'postReportMailingJobsRequest' is set
      if (postReportMailingJobsRequest === undefined || postReportMailingJobsRequest === null) {
        throw new Error("Missing the required parameter 'postReportMailingJobsRequest' when calling createReportMailingJob");
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
      let returnType = PostReportMailingJobsResponse;
      return this.apiClient.callApi(
        '/reportmailingjobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReportMailingJob operation.
     * @callback module:api/ReportMailingJobsApi~deleteReportMailingJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteReportMailingJobsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Report Mailing Job
     * @param {Number} entityId entityId
     * @param {Object} body 
     * @param {module:api/ReportMailingJobsApi~deleteReportMailingJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteReportMailingJobsResponse}
     */
    deleteReportMailingJob(entityId, body, callback) {
      let postBody = body;
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling deleteReportMailingJob");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteReportMailingJob");
      }

      let pathParams = {
        'entityId': entityId
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
      let returnType = DeleteReportMailingJobsResponse;
      return this.apiClient.callApi(
        '/reportmailingjobs/{entityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllReportMailingJobs operation.
     * @callback module:api/ReportMailingJobsApi~retrieveAllReportMailingJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetReportMailingJobsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Report Mailing Jobs
     * Example Requests:  reportmailingjobs
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/ReportMailingJobsApi~retrieveAllReportMailingJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetReportMailingJobsResponse>}
     */
    retrieveAllReportMailingJobs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      let returnType = [GetReportMailingJobsResponse];
      return this.apiClient.callApi(
        '/reportmailingjobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveReportMailingJob operation.
     * @callback module:api/ReportMailingJobsApi~retrieveReportMailingJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReportMailingJobsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Report Mailing Job
     * Example Requests:  reportmailingjobs/1   reportmailingjobs/1?template=true
     * @param {Number} entityId entityId
     * @param {module:api/ReportMailingJobsApi~retrieveReportMailingJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReportMailingJobsResponse}
     */
    retrieveReportMailingJob(entityId, callback) {
      let postBody = null;
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveReportMailingJob");
      }

      let pathParams = {
        'entityId': entityId
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
      let returnType = GetReportMailingJobsResponse;
      return this.apiClient.callApi(
        '/reportmailingjobs/{entityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveReportMailingJobTemplate operation.
     * @callback module:api/ReportMailingJobsApi~retrieveReportMailingJobTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReportMailingJobsTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Report Mailing Job Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for report mailing job applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  reportmailingjobs/template
     * @param {module:api/ReportMailingJobsApi~retrieveReportMailingJobTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReportMailingJobsTemplate}
     */
    retrieveReportMailingJobTemplate(callback) {
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
      let returnType = GetReportMailingJobsTemplate;
      return this.apiClient.callApi(
        '/reportmailingjobs/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReportMailingJob operation.
     * @callback module:api/ReportMailingJobsApi~updateReportMailingJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutReportMailingJobsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Report Mailing Job 
     * @param {Number} entityId entityId
     * @param {module:model/PutReportMailingJobsRequest} putReportMailingJobsRequest 
     * @param {module:api/ReportMailingJobsApi~updateReportMailingJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutReportMailingJobsResponse}
     */
    updateReportMailingJob(entityId, putReportMailingJobsRequest, callback) {
      let postBody = putReportMailingJobsRequest;
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateReportMailingJob");
      }
      // verify the required parameter 'putReportMailingJobsRequest' is set
      if (putReportMailingJobsRequest === undefined || putReportMailingJobsRequest === null) {
        throw new Error("Missing the required parameter 'putReportMailingJobsRequest' when calling updateReportMailingJob");
      }

      let pathParams = {
        'entityId': entityId
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
      let returnType = PutReportMailingJobsResponse;
      return this.apiClient.callApi(
        '/reportmailingjobs/{entityId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
