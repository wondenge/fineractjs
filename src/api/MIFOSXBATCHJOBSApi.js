


import ApiClient from "../ApiClient";
import GetJobsJobIDJobRunHistoryResponse from '../model/GetJobsJobIDJobRunHistoryResponse';
import GetJobsResponse from '../model/GetJobsResponse';
import PutJobsJobIDRequest from '../model/PutJobsJobIDRequest';

/**
* MIFOSXBATCHJOBS service.
* @module api/MIFOSXBATCHJOBSApi
* @version 1.0
*/
export default class MIFOSXBATCHJOBSApi {

    /**
    * Constructs a new MIFOSXBATCHJOBSApi. 
    * @alias module:api/MIFOSXBATCHJOBSApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the executeJob operation.
     * @callback module:api/MIFOSXBATCHJOBSApi~executeJobCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run a Job
     * Manually Execute Specific Job.
     * @param {Number} jobId jobId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/MIFOSXBATCHJOBSApi~executeJobCallback} callback The callback function, accepting three arguments: error, data, response
     */
    executeJob(jobId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling executeJob");
      }

      let pathParams = {
        'jobId': jobId
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/jobs/{jobId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll8 operation.
     * @callback module:api/MIFOSXBATCHJOBSApi~retrieveAll8Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetJobsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Scheduler Jobs
     * Returns the list of jobs.  Example Requests:  jobs
     * @param {module:api/MIFOSXBATCHJOBSApi~retrieveAll8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetJobsResponse>}
     */
    retrieveAll8(callback) {
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
      let returnType = [GetJobsResponse];
      return this.apiClient.callApi(
        '/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveHistory operation.
     * @callback module:api/MIFOSXBATCHJOBSApi~retrieveHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetJobsJobIDJobRunHistoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Job Run History
     * Example Requests:  jobs/5/runhistory?offset=0&limit=200
     * @param {Number} jobId jobId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/MIFOSXBATCHJOBSApi~retrieveHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetJobsJobIDJobRunHistoryResponse}
     */
    retrieveHistory(jobId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling retrieveHistory");
      }

      let pathParams = {
        'jobId': jobId
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
      let returnType = GetJobsJobIDJobRunHistoryResponse;
      return this.apiClient.callApi(
        '/jobs/{jobId}/runhistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne5 operation.
     * @callback module:api/MIFOSXBATCHJOBSApi~retrieveOne5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetJobsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Job
     * Returns the details of a Job.  Example Requests:  jobs/5
     * @param {Number} jobId jobId
     * @param {module:api/MIFOSXBATCHJOBSApi~retrieveOne5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetJobsResponse}
     */
    retrieveOne5(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling retrieveOne5");
      }

      let pathParams = {
        'jobId': jobId
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
      let returnType = GetJobsResponse;
      return this.apiClient.callApi(
        '/jobs/{jobId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobDetail operation.
     * @callback module:api/MIFOSXBATCHJOBSApi~updateJobDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Job
     * Updates the details of a job.
     * @param {Number} jobId jobId
     * @param {module:model/PutJobsJobIDRequest} putJobsJobIDRequest 
     * @param {module:api/MIFOSXBATCHJOBSApi~updateJobDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateJobDetail(jobId, putJobsJobIDRequest, callback) {
      let postBody = putJobsJobIDRequest;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling updateJobDetail");
      }
      // verify the required parameter 'putJobsJobIDRequest' is set
      if (putJobsJobIDRequest === undefined || putJobsJobIDRequest === null) {
        throw new Error("Missing the required parameter 'putJobsJobIDRequest' when calling updateJobDetail");
      }

      let pathParams = {
        'jobId': jobId
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
        '/jobs/{jobId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
