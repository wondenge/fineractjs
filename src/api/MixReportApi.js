


import ApiClient from "../ApiClient";

/**
* MixReport service.
* @module api/MixReportApi
* @version 1.0
*/
export default class MixReportApi {

    /**
    * Constructs a new MixReportApi. 
    * @alias module:api/MixReportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveXBRLReport operation.
     * @callback module:api/MixReportApi~retrieveXBRLReportCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate 
     * @param {Date} opts.endDate 
     * @param {String} opts.currency 
     * @param {module:api/MixReportApi~retrieveXBRLReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveXBRLReport(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/mixreport', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
