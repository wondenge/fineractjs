


import ApiClient from "../ApiClient";

/**
* CashierJournals service.
* @module api/CashierJournalsApi
* @version 1.0
*/
export default class CashierJournalsApi {

    /**
    * Constructs a new CashierJournalsApi. 
    * @alias module:api/CashierJournalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getJournalData1 operation.
     * @callback module:api/CashierJournalsApi~getJournalData1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.tellerId 
     * @param {Number} opts.cashierId 
     * @param {String} opts.dateRange 
     * @param {module:api/CashierJournalsApi~getJournalData1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getJournalData1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'tellerId': opts['tellerId'],
        'cashierId': opts['cashierId'],
        'dateRange': opts['dateRange']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/cashiersjournal', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
