


import ApiClient from "../ApiClient";

/**
* Cashiers service.
* @module api/CashiersApi
* @version 1.0
*/
export default class CashiersApi {

    /**
    * Constructs a new CashiersApi. 
    * @alias module:api/CashiersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCashierData operation.
     * @callback module:api/CashiersApi~getCashierDataCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.tellerId 
     * @param {Number} opts.staffId 
     * @param {String} opts._date 
     * @param {module:api/CashiersApi~getCashierDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCashierData(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'tellerId': opts['tellerId'],
        'staffId': opts['staffId'],
        'date': opts['_date']
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
        '/cashiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
