


import ApiClient from "../ApiClient";
import DeleteInterestRateChartsChartIdChartSlabsResponse from '../model/DeleteInterestRateChartsChartIdChartSlabsResponse';
import GetInterestRateChartsChartIdChartSlabsResponse from '../model/GetInterestRateChartsChartIdChartSlabsResponse';
import PostInterestRateChartsChartIdChartSlabsRequest from '../model/PostInterestRateChartsChartIdChartSlabsRequest';
import PostInterestRateChartsChartIdChartSlabsResponse from '../model/PostInterestRateChartsChartIdChartSlabsResponse';
import PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest from '../model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest';
import PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse from '../model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse';

/**
* InterestRateSlabAKAInterestBands service.
* @module api/InterestRateSlabAKAInterestBandsApi
* @version 1.0
*/
export default class InterestRateSlabAKAInterestBandsApi {

    /**
    * Constructs a new InterestRateSlabAKAInterestBandsApi. 
    * @alias module:api/InterestRateSlabAKAInterestBandsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create8 operation.
     * @callback module:api/InterestRateSlabAKAInterestBandsApi~create8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostInterestRateChartsChartIdChartSlabsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Slab
     * Creates a new interest rate slab for an interest rate chart. Mandatory Fields periodType, fromPeriod, annualInterestRate Optional Fields toPeriod and description Example Requests:  interestratecharts/1/chartslabs
     * @param {Number} chartId chartId
     * @param {module:model/PostInterestRateChartsChartIdChartSlabsRequest} postInterestRateChartsChartIdChartSlabsRequest 
     * @param {module:api/InterestRateSlabAKAInterestBandsApi~create8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostInterestRateChartsChartIdChartSlabsResponse}
     */
    create8(chartId, postInterestRateChartsChartIdChartSlabsRequest, callback) {
      let postBody = postInterestRateChartsChartIdChartSlabsRequest;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling create8");
      }
      // verify the required parameter 'postInterestRateChartsChartIdChartSlabsRequest' is set
      if (postInterestRateChartsChartIdChartSlabsRequest === undefined || postInterestRateChartsChartIdChartSlabsRequest === null) {
        throw new Error("Missing the required parameter 'postInterestRateChartsChartIdChartSlabsRequest' when calling create8");
      }

      let pathParams = {
        'chartId': chartId
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
      let returnType = PostInterestRateChartsChartIdChartSlabsResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}/chartslabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete12 operation.
     * @callback module:api/InterestRateSlabAKAInterestBandsApi~delete12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteInterestRateChartsChartIdChartSlabsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Slab
     * Delete a Slab from a chart
     * @param {Number} chartId chartId
     * @param {Number} chartSlabId chartSlabId
     * @param {module:api/InterestRateSlabAKAInterestBandsApi~delete12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteInterestRateChartsChartIdChartSlabsResponse}
     */
    delete12(chartId, chartSlabId, callback) {
      let postBody = null;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling delete12");
      }
      // verify the required parameter 'chartSlabId' is set
      if (chartSlabId === undefined || chartSlabId === null) {
        throw new Error("Missing the required parameter 'chartSlabId' when calling delete12");
      }

      let pathParams = {
        'chartId': chartId,
        'chartSlabId': chartSlabId
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
      let returnType = DeleteInterestRateChartsChartIdChartSlabsResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}/chartslabs/{chartSlabId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll24 operation.
     * @callback module:api/InterestRateSlabAKAInterestBandsApi~retrieveAll24Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetInterestRateChartsChartIdChartSlabsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all Slabs
     * Retrieve list of slabs associated with a chart  Example Requests:  interestratecharts/1/chartslabs
     * @param {Number} chartId chartId
     * @param {module:api/InterestRateSlabAKAInterestBandsApi~retrieveAll24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetInterestRateChartsChartIdChartSlabsResponse>}
     */
    retrieveAll24(chartId, callback) {
      let postBody = null;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling retrieveAll24");
      }

      let pathParams = {
        'chartId': chartId
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
      let returnType = [GetInterestRateChartsChartIdChartSlabsResponse];
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}/chartslabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne14 operation.
     * @callback module:api/InterestRateSlabAKAInterestBandsApi~retrieveOne14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Slab
     * Retrieve a slab associated with an Interest rate chart  Example Requests:  interestratecharts/1/chartslabs/1 
     * @param {Number} chartId chartId
     * @param {Number} chartSlabId chartSlabId
     * @param {module:api/InterestRateSlabAKAInterestBandsApi~retrieveOne14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetInterestRateChartsChartIdChartSlabsResponse}
     */
    retrieveOne14(chartId, chartSlabId, callback) {
      let postBody = null;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling retrieveOne14");
      }
      // verify the required parameter 'chartSlabId' is set
      if (chartSlabId === undefined || chartSlabId === null) {
        throw new Error("Missing the required parameter 'chartSlabId' when calling retrieveOne14");
      }

      let pathParams = {
        'chartId': chartId,
        'chartSlabId': chartSlabId
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
      let returnType = GetInterestRateChartsChartIdChartSlabsResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}/chartslabs/{chartSlabId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template8 operation.
     * @callback module:api/InterestRateSlabAKAInterestBandsApi~template8Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} chartId chartId
     * @param {module:api/InterestRateSlabAKAInterestBandsApi~template8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    template8(chartId, callback) {
      let postBody = null;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling template8");
      }

      let pathParams = {
        'chartId': chartId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}/chartslabs/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update12 operation.
     * @callback module:api/InterestRateSlabAKAInterestBandsApi~update12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Slab
     * It updates the Slab from chart
     * @param {Number} chartId chartId
     * @param {Number} chartSlabId chartSlabId
     * @param {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest} putInterestRateChartsChartIdChartSlabsChartSlabIdRequest 
     * @param {module:api/InterestRateSlabAKAInterestBandsApi~update12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse}
     */
    update12(chartId, chartSlabId, putInterestRateChartsChartIdChartSlabsChartSlabIdRequest, callback) {
      let postBody = putInterestRateChartsChartIdChartSlabsChartSlabIdRequest;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling update12");
      }
      // verify the required parameter 'chartSlabId' is set
      if (chartSlabId === undefined || chartSlabId === null) {
        throw new Error("Missing the required parameter 'chartSlabId' when calling update12");
      }
      // verify the required parameter 'putInterestRateChartsChartIdChartSlabsChartSlabIdRequest' is set
      if (putInterestRateChartsChartIdChartSlabsChartSlabIdRequest === undefined || putInterestRateChartsChartIdChartSlabsChartSlabIdRequest === null) {
        throw new Error("Missing the required parameter 'putInterestRateChartsChartIdChartSlabsChartSlabIdRequest' when calling update12");
      }

      let pathParams = {
        'chartId': chartId,
        'chartSlabId': chartSlabId
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
      let returnType = PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}/chartslabs/{chartSlabId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
