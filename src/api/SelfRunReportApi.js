


import ApiClient from "../ApiClient";
import GetRunReportResponse from '../model/GetRunReportResponse';

/**
* SelfRunReport service.
* @module api/SelfRunReportApi
* @version 1.0
*/
export default class SelfRunReportApi {

    /**
    * Constructs a new SelfRunReportApi. 
    * @alias module:api/SelfRunReportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the runReport1 operation.
     * @callback module:api/SelfRunReportApi~runReport1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRunReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Running A Report
     * Example Requests:   self/runreports/Client%20Details?R_officeId=1   self/runreports/Client%20Details?R_officeId=1&exportCSV=true
     * @param {String} reportName reportName
     * @param {module:api/SelfRunReportApi~runReport1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRunReportResponse}
     */
    runReport1(reportName, callback) {
      let postBody = null;
      // verify the required parameter 'reportName' is set
      if (reportName === undefined || reportName === null) {
        throw new Error("Missing the required parameter 'reportName' when calling runReport1");
      }

      let pathParams = {
        'reportName': reportName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/csv', 'application/vnd.ms-excel', 'application/pdf', 'text/html'];
      let returnType = GetRunReportResponse;
      return this.apiClient.callApi(
        '/self/runreports/{reportName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
