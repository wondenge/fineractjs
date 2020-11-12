


import ApiClient from "../ApiClient";
import SurveyData from '../model/SurveyData';

/**
* SpmSurveys service.
* @module api/SpmSurveysApi
* @version 1.0
*/
export default class SpmSurveysApi {

    /**
    * Constructs a new SpmSurveysApi. 
    * @alias module:api/SpmSurveysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activateOrDeactivateSurvey operation.
     * @callback module:api/SpmSurveysApi~activateOrDeactivateSurveyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deactivate Survey
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {module:api/SpmSurveysApi~activateOrDeactivateSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    activateOrDeactivateSurvey(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling activateOrDeactivateSurvey");
      }

      let pathParams = {
        'id': id
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
        '/surveys/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSurvey operation.
     * @callback module:api/SpmSurveysApi~createSurveyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Survey
     * Adds a new survey to collect client related data.  Mandatory Fields  countryCode, key, name, questions, responses, sequenceNo, text, description
     * @param {Object} opts Optional parameters
     * @param {module:model/SurveyData} opts.surveyData Create survey
     * @param {module:api/SpmSurveysApi~createSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createSurvey(opts, callback) {
      opts = opts || {};
      let postBody = opts['surveyData'];

      let pathParams = {
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
        '/surveys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editSurvey operation.
     * @callback module:api/SpmSurveysApi~editSurveyCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SurveyData} opts.surveyData 
     * @param {module:api/SpmSurveysApi~editSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    editSurvey(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['surveyData'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling editSurvey");
      }

      let pathParams = {
        'id': id
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/surveys/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchAllSurveys1 operation.
     * @callback module:api/SpmSurveysApi~fetchAllSurveys1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SurveyData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Surveys
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isActive 
     * @param {module:api/SpmSurveysApi~fetchAllSurveys1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SurveyData>}
     */
    fetchAllSurveys1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'isActive': opts['isActive']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SurveyData];
      return this.apiClient.callApi(
        '/surveys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findSurvey operation.
     * @callback module:api/SpmSurveysApi~findSurveyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SurveyData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Survey
     * @param {Number} id Enter id
     * @param {module:api/SpmSurveysApi~findSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SurveyData}
     */
    findSurvey(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findSurvey");
      }

      let pathParams = {
        'id': id
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
      let returnType = SurveyData;
      return this.apiClient.callApi(
        '/surveys/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
