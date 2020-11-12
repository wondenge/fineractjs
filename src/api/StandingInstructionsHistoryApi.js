


import ApiClient from "../ApiClient";
import GetStandingInstructionRunHistoryResponse from '../model/GetStandingInstructionRunHistoryResponse';

/**
* StandingInstructionsHistory service.
* @module api/StandingInstructionsHistoryApi
* @version 1.0
*/
export default class StandingInstructionsHistoryApi {

    /**
    * Constructs a new StandingInstructionsHistoryApi. 
    * @alias module:api/StandingInstructionsHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAll19 operation.
     * @callback module:api/StandingInstructionsHistoryApi~retrieveAll19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStandingInstructionRunHistoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Standing Instructions Logged History
     * The list capability of history can support pagination and sorting   Example Requests :  standinginstructionrunhistory  standinginstructionrunhistory?orderBy=name&sortOrder=DESC  standinginstructionrunhistory?offset=10&limit=50
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {String} opts.externalId externalId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Number} opts.transferType transferType
     * @param {String} opts.clientName clientName
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.fromAccountId fromAccountId
     * @param {Number} opts.fromAccountType fromAccountType
     * @param {String} opts.locale locale
     * @param {String} opts.dateFormat dateFormat
     * @param {Object} opts.fromDate fromDate
     * @param {Object} opts.toDate toDate
     * @param {module:api/StandingInstructionsHistoryApi~retrieveAll19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStandingInstructionRunHistoryResponse}
     */
    retrieveAll19(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'externalId': opts['externalId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'transferType': opts['transferType'],
        'clientName': opts['clientName'],
        'clientId': opts['clientId'],
        'fromAccountId': opts['fromAccountId'],
        'fromAccountType': opts['fromAccountType'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStandingInstructionRunHistoryResponse;
      return this.apiClient.callApi(
        '/standinginstructionrunhistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
