


import ApiClient from "../ApiClient";
import LookupTableData from '../model/LookupTableData';

/**
* SPMAPILookUpTable service.
* @module api/SPMAPILookUpTableApi
* @version 1.0
*/
export default class SPMAPILookUpTableApi {

    /**
    * Constructs a new SPMAPILookUpTableApi. 
    * @alias module:api/SPMAPILookUpTableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createLookupTable operation.
     * @callback module:api/SPMAPILookUpTableApi~createLookupTableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Lookup Table entry
     * Add a new entry to a survey.  Mandatory Fields key, score, validFrom, validTo
     * @param {Number} surveyId Enter surveyId
     * @param {Object} opts Optional parameters
     * @param {module:model/LookupTableData} opts.lookupTableData 
     * @param {module:api/SPMAPILookUpTableApi~createLookupTableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createLookupTable(surveyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['lookupTableData'];
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling createLookupTable");
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
        '/surveys/{surveyId}/lookuptables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchLookupTables operation.
     * @callback module:api/SPMAPILookUpTableApi~fetchLookupTablesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LookupTableData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Lookup Table entries
     * List all Lookup Table entries for a survey.
     * @param {Number} surveyId Enter surveyId
     * @param {module:api/SPMAPILookUpTableApi~fetchLookupTablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LookupTableData>}
     */
    fetchLookupTables(surveyId, callback) {
      let postBody = null;
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling fetchLookupTables");
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
      let returnType = [LookupTableData];
      return this.apiClient.callApi(
        '/surveys/{surveyId}/lookuptables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findLookupTable operation.
     * @callback module:api/SPMAPILookUpTableApi~findLookupTableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookupTableData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Lookup Table entry
     * Retrieve a Lookup Table entry for a survey.
     * @param {Number} surveyId Enter surveyId
     * @param {String} key Enter key
     * @param {module:api/SPMAPILookUpTableApi~findLookupTableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookupTableData}
     */
    findLookupTable(surveyId, key, callback) {
      let postBody = null;
      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling findLookupTable");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling findLookupTable");
      }

      let pathParams = {
        'surveyId': surveyId,
        'key': key
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
      let returnType = LookupTableData;
      return this.apiClient.callApi(
        '/surveys/{surveyId}/lookuptables/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
