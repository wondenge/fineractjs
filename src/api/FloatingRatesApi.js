


import ApiClient from "../ApiClient";
import GetFloatingRatesFloatingRateIdResponse from '../model/GetFloatingRatesFloatingRateIdResponse';
import GetFloatingRatesResponse from '../model/GetFloatingRatesResponse';
import PostFloatingRatesRequest from '../model/PostFloatingRatesRequest';
import PostFloatingRatesResponse from '../model/PostFloatingRatesResponse';
import PutFloatingRatesFloatingRateIdRequest from '../model/PutFloatingRatesFloatingRateIdRequest';
import PutFloatingRatesFloatingRateIdResponse from '../model/PutFloatingRatesFloatingRateIdResponse';

/**
* FloatingRates service.
* @module api/FloatingRatesApi
* @version 1.0
*/
export default class FloatingRatesApi {

    /**
    * Constructs a new FloatingRatesApi. 
    * @alias module:api/FloatingRatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFloatingRate operation.
     * @callback module:api/FloatingRatesApi~createFloatingRateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostFloatingRatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Floating Rate
     * Creates a new Floating Rate Mandatory Fields: name Optional Fields: isBaseLendingRate, isActive, ratePeriods
     * @param {module:model/PostFloatingRatesRequest} postFloatingRatesRequest 
     * @param {module:api/FloatingRatesApi~createFloatingRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostFloatingRatesResponse}
     */
    createFloatingRate(postFloatingRatesRequest, callback) {
      let postBody = postFloatingRatesRequest;
      // verify the required parameter 'postFloatingRatesRequest' is set
      if (postFloatingRatesRequest === undefined || postFloatingRatesRequest === null) {
        throw new Error("Missing the required parameter 'postFloatingRatesRequest' when calling createFloatingRate");
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
      let returnType = PostFloatingRatesResponse;
      return this.apiClient.callApi(
        '/floatingrates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll21 operation.
     * @callback module:api/FloatingRatesApi~retrieveAll21Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFloatingRatesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Floating Rates
     * Lists Floating Rates
     * @param {module:api/FloatingRatesApi~retrieveAll21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFloatingRatesResponse>}
     */
    retrieveAll21(callback) {
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
      let returnType = [GetFloatingRatesResponse];
      return this.apiClient.callApi(
        '/floatingrates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne11 operation.
     * @callback module:api/FloatingRatesApi~retrieveOne11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFloatingRatesFloatingRateIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Floating Rate
     * Retrieves Floating Rate
     * @param {Number} floatingRateId floatingRateId
     * @param {module:api/FloatingRatesApi~retrieveOne11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFloatingRatesFloatingRateIdResponse}
     */
    retrieveOne11(floatingRateId, callback) {
      let postBody = null;
      // verify the required parameter 'floatingRateId' is set
      if (floatingRateId === undefined || floatingRateId === null) {
        throw new Error("Missing the required parameter 'floatingRateId' when calling retrieveOne11");
      }

      let pathParams = {
        'floatingRateId': floatingRateId
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
      let returnType = GetFloatingRatesFloatingRateIdResponse;
      return this.apiClient.callApi(
        '/floatingrates/{floatingRateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFloatingRate operation.
     * @callback module:api/FloatingRatesApi~updateFloatingRateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutFloatingRatesFloatingRateIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Floating Rate
     * Updates new Floating Rate. Rate Periods in the past cannot be modified. All the future rateperiods would be replaced with the new ratePeriods data sent.
     * @param {Number} floatingRateId floatingRateId
     * @param {module:model/PutFloatingRatesFloatingRateIdRequest} putFloatingRatesFloatingRateIdRequest 
     * @param {module:api/FloatingRatesApi~updateFloatingRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutFloatingRatesFloatingRateIdResponse}
     */
    updateFloatingRate(floatingRateId, putFloatingRatesFloatingRateIdRequest, callback) {
      let postBody = putFloatingRatesFloatingRateIdRequest;
      // verify the required parameter 'floatingRateId' is set
      if (floatingRateId === undefined || floatingRateId === null) {
        throw new Error("Missing the required parameter 'floatingRateId' when calling updateFloatingRate");
      }
      // verify the required parameter 'putFloatingRatesFloatingRateIdRequest' is set
      if (putFloatingRatesFloatingRateIdRequest === undefined || putFloatingRatesFloatingRateIdRequest === null) {
        throw new Error("Missing the required parameter 'putFloatingRatesFloatingRateIdRequest' when calling updateFloatingRate");
      }

      let pathParams = {
        'floatingRateId': floatingRateId
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
      let returnType = PutFloatingRatesFloatingRateIdResponse;
      return this.apiClient.callApi(
        '/floatingrates/{floatingRateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
