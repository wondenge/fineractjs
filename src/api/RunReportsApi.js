


import ApiClient from "../ApiClient";
import GetReportNameResponse from '../model/GetReportNameResponse';

/**
* RunReports service.
* @module api/RunReportsApi
* @version 1.0
*/
export default class RunReportsApi {

    /**
    * Constructs a new RunReportsApi. 
    * @alias module:api/RunReportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the runReport operation.
     * @callback module:api/RunReportsApi~runReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReportNameResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Running a Report
     * This resource allows you to run and receive output from pre-defined Apache Fineract reports.  Reports can also be used to provide data for searching and workflow functionality.  The default output is a JSON formatted \"Generic Resultset\". The Generic Resultset contains Column Heading as well as Data information. However, you can export to CSV format by simply adding \"&exportCSV=true\" to the end of your URL.  If Pentaho reports have been pre-defined, they can also be run through this resource. Pentaho reports can return HTML, PDF or CSV formats.  The Apache Fineract reference application uses a JQuery plugin called stretchy reporting which, itself, uses this reports resource to provide a pretty flexible reporting User Interface (UI).    Example Requests:  runreports/Client%20Listing?R_officeId=1   runreports/Client%20Listing?R_officeId=1&exportCSV=true   runreports/OfficeIdSelectOne?R_officeId=1&parameterType=true   runreports/OfficeIdSelectOne?R_officeId=1&parameterType=true&exportCSV=true   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=HTML&R_officeId=1   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=XLS&R_officeId=1   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=CSV&R_officeId=1   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=PDF&R_officeId=1
     * @param {String} reportName reportName
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isSelfServiceUserReport isSelfServiceUserReport (default to false)
     * @param {module:api/RunReportsApi~runReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReportNameResponse}
     */
    runReport(reportName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportName' is set
      if (reportName === undefined || reportName === null) {
        throw new Error("Missing the required parameter 'reportName' when calling runReport");
      }

      let pathParams = {
        'reportName': reportName
      };
      let queryParams = {
        'isSelfServiceUserReport': opts['isSelfServiceUserReport']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/csv', 'application/vnd.ms-excel', 'application/pdf', 'text/html'];
      let returnType = GetReportNameResponse;
      return this.apiClient.callApi(
        '/runreports/{reportName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
