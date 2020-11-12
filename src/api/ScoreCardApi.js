


import ApiClient from "../ApiClient";
import Scorecard from '../model/Scorecard';
import ScorecardData from '../model/ScorecardData';

/**
* ScoreCard service.
* @module api/ScoreCardApi
* @version 1.0
*/
export default class ScoreCardApi {

    /**
    * Constructs a new ScoreCardApi. 
    * @alias module:api/ScoreCardApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createScorecard1 operation.
     * @callback module:api/ScoreCardApi~createScorecard1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Scorecard entry
     * Add a new entry to a survey.  Mandatory Fields clientId, createdOn, questionId, responseId, staffId
     * @param {Number} surveyId Enter surveyId
     * @param {Object} opts Optional parameters
     * @param {module:model/ScorecardData} opts.scorecardData scorecardData
     * @param {module:api/ScoreCardApi~createScorecard1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    createScorecard1(surveyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['scorecardData'];
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling createScorecard1");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/surveys/scorecards/{surveyId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findByClient1 operation.
     * @callback module:api/ScoreCardApi~findByClient1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScorecardData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/ScoreCardApi~findByClient1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScorecardData>}
     */
    findByClient1(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling findByClient1");
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
        '/surveys/scorecards/clients/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findBySurvey operation.
     * @callback module:api/ScoreCardApi~findBySurveyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Scorecard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Scorecard entries
     * List all Scorecard entries for a survey.
     * @param {Number} surveyId Enter surveyId
     * @param {module:api/ScoreCardApi~findBySurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Scorecard>}
     */
    findBySurvey(surveyId, callback) {
      let postBody = null;
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling findBySurvey");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Scorecard];
      return this.apiClient.callApi(
        '/surveys/scorecards/{surveyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findBySurveyAndClient operation.
     * @callback module:api/ScoreCardApi~findBySurveyAndClientCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScorecardData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} surveyId Enter surveyId
     * @param {Number} clientId Enter clientId
     * @param {module:api/ScoreCardApi~findBySurveyAndClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScorecardData>}
     */
    findBySurveyAndClient(surveyId, clientId, callback) {
      let postBody = null;
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling findBySurveyAndClient");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling findBySurveyAndClient");
      }

      let pathParams = {
        'surveyId': surveyId,
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
        '/surveys/scorecards/{surveyId}/clients/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
