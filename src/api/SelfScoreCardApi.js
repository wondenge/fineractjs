


import ApiClient from "../ApiClient";
import ScorecardData from '../model/ScorecardData';

/**
* SelfScoreCard service.
* @module api/SelfScoreCardApi
* @version 1.0
*/
export default class SelfScoreCardApi {

    /**
    * Constructs a new SelfScoreCardApi. 
    * @alias module:api/SelfScoreCardApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createScorecard operation.
     * @callback module:api/SelfScoreCardApi~createScorecardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} surveyId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ScorecardData} opts.scorecardData 
     * @param {module:api/SelfScoreCardApi~createScorecardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createScorecard(surveyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['scorecardData'];
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling createScorecard");
      }

      let pathParams = {
        'surveyId': surveyId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/self/surveys/scorecards/{surveyId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findByClient operation.
     * @callback module:api/SelfScoreCardApi~findByClientCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScorecardData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/SelfScoreCardApi~findByClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScorecardData>}
     */
    findByClient(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling findByClient");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = [ScorecardData];
      return this.apiClient.callApi(
        '/self/surveys/scorecards/clients/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
