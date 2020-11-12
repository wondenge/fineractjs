


import ApiClient from "../ApiClient";
import ReportMailingJobRunHistoryData from '../model/ReportMailingJobRunHistoryData';

/**
* ListReportMailingJobHistory service.
* @module api/ListReportMailingJobHistoryApi
* @version 1.0
*/
export default class ListReportMailingJobHistoryApi {

    /**
    * Constructs a new ListReportMailingJobHistoryApi. 
    * @alias module:api/ListReportMailingJobHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAllByReportMailingJobId operation.
     * @callback module:api/ListReportMailingJobHistoryApi~retrieveAllByReportMailingJobIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportMailingJobRunHistoryData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Report Mailing Job History
     * The list capability of report mailing job history can support pagination and sorting.  Example Requests:  reportmailingjobrunhistory/1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.reportMailingJobId reportMailingJobId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/ListReportMailingJobHistoryApi~retrieveAllByReportMailingJobIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportMailingJobRunHistoryData}
     */
    retrieveAllByReportMailingJobId(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'reportMailingJobId': opts['reportMailingJobId'],
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
      let returnType = ReportMailingJobRunHistoryData;
      return this.apiClient.callApi(
        '/reportmailingjobrunhistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
