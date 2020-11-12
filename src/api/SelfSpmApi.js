


import ApiClient from "../ApiClient";
import SurveyData from '../model/SurveyData';

/**
* SelfSpm service.
* @module api/SelfSpmApi
* @version 1.0
*/
export default class SelfSpmApi {

    /**
    * Constructs a new SelfSpmApi. 
    * @alias module:api/SelfSpmApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the fetchAllSurveys operation.
     * @callback module:api/SelfSpmApi~fetchAllSurveysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SurveyData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SelfSpmApi~fetchAllSurveysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SurveyData>}
     */
    fetchAllSurveys(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = [SurveyData];
      return this.apiClient.callApi(
        '/self/surveys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
