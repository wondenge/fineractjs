


import ApiClient from "../ApiClient";
import GetSchedulerResponse from '../model/GetSchedulerResponse';

/**
* Scheduler service.
* @module api/SchedulerApi
* @version 1.0
*/
export default class SchedulerApi {

    /**
    * Constructs a new SchedulerApi. 
    * @alias module:api/SchedulerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeSchedulerStatus operation.
     * @callback module:api/SchedulerApi~changeSchedulerStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate Scheduler Jobs | Suspend Scheduler Jobs
     * Activates the scheduler job service. | Suspends the scheduler job service.
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/SchedulerApi~changeSchedulerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    changeSchedulerStatus(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
        '/scheduler', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveStatus operation.
     * @callback module:api/SchedulerApi~retrieveStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSchedulerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Scheduler Status
     * Returns the scheduler status.  Example Requests:  scheduler
     * @param {module:api/SchedulerApi~retrieveStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSchedulerResponse}
     */
    retrieveStatus(callback) {
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
      let returnType = GetSchedulerResponse;
      return this.apiClient.callApi(
        '/scheduler', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
