


import ApiClient from "../ApiClient";
import GetSearchResponse from '../model/GetSearchResponse';
import PostAdhocQuerySearchRequest from '../model/PostAdhocQuerySearchRequest';
import PostAdhocQuerySearchResponse from '../model/PostAdhocQuerySearchResponse';

/**
* SearchAPI service.
* @module api/SearchAPIApi
* @version 1.0
*/
export default class SearchAPIApi {

    /**
    * Constructs a new SearchAPIApi. 
    * @alias module:api/SearchAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the advancedSearch operation.
     * @callback module:api/SearchAPIApi~advancedSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAdhocQuerySearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adhoc query search
     * AdHocQuery search has more search options, it is a POST request, it uses request body to send search parameters   Mandatory fields:entities  Optional fields:loanStatus, loanProducts, offices, loanDateOption, loanFromDate, loanToDate,  includeOutStandingAmountPercentage, outStandingAmountPercentageCondition,  minOutStandingAmountPercentage and maxOutStandingAmountPercentage OR outStandingAmountPercentage,  includeOutstandingAmount, outstandingAmountCondition,  minOutstandingAmount and maxOutstandingAmount OR outstandingAmount
     * @param {module:model/PostAdhocQuerySearchRequest} postAdhocQuerySearchRequest 
     * @param {module:api/SearchAPIApi~advancedSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAdhocQuerySearchResponse}
     */
    advancedSearch(postAdhocQuerySearchRequest, callback) {
      let postBody = postAdhocQuerySearchRequest;
      // verify the required parameter 'postAdhocQuerySearchRequest' is set
      if (postAdhocQuerySearchRequest === undefined || postAdhocQuerySearchRequest === null) {
        throw new Error("Missing the required parameter 'postAdhocQuerySearchRequest' when calling advancedSearch");
      }

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
      let accepts = ['application/json'];
      let returnType = PostAdhocQuerySearchResponse;
      return this.apiClient.callApi(
        '/search/advance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAdHocSearchQueryTemplate operation.
     * @callback module:api/SearchAPIApi~retrieveAdHocSearchQueryTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrive Adhoc Search query template
     * Mandatory Fields  search?query=000000001 
     * @param {module:api/SearchAPIApi~retrieveAdHocSearchQueryTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSearchResponse}
     */
    retrieveAdHocSearchQueryTemplate(callback) {
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
      let returnType = GetSearchResponse;
      return this.apiClient.callApi(
        '/search/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchData operation.
     * @callback module:api/SearchAPIApi~searchDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Resources
     * Example Requests:  search?query=000000001   search?query=Petra&resource=clients,groups   search?query=Petra&resource=clients,groups&exactMatch=true
     * @param {Object} opts Optional parameters
     * @param {String} opts.query query
     * @param {String} opts.resource resource
     * @param {Boolean} opts.exactMatch exactMatch (default to false)
     * @param {module:api/SearchAPIApi~searchDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSearchResponse}
     */
    searchData(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'query': opts['query'],
        'resource': opts['resource'],
        'exactMatch': opts['exactMatch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSearchResponse;
      return this.apiClient.callApi(
        '/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
