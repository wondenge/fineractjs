  


import ApiClient from "../ApiClient";
import DeleteInterestRateChartsChartIdResponse from '../model/DeleteInterestRateChartsChartIdResponse';
import GetInterestRateChartsResponse from '../model/GetInterestRateChartsResponse';
import GetInterestRateChartsTemplateResponse from '../model/GetInterestRateChartsTemplateResponse';
import PostInterestRateChartsRequest from '../model/PostInterestRateChartsRequest';
import PostInterestRateChartsResponse from '../model/PostInterestRateChartsResponse';
import PutInterestRateChartsChartIdRequest from '../model/PutInterestRateChartsChartIdRequest';
import PutInterestRateChartsChartIdResponse from '../model/PutInterestRateChartsChartIdResponse';

/**
* InterestRateChart service.
* @module api/InterestRateChartApi
* @version 1.0
*/
export default class InterestRateChartApi {

    /**
    * Constructs a new InterestRateChartApi. 
    * @alias module:api/InterestRateChartApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create9 operation.
     * @callback module:api/InterestRateChartApi~create9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostInterestRateChartsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Chart
     * Creates a new chart which can be attached to a term deposit products (FD or RD).
     * @param {module:model/PostInterestRateChartsRequest} postInterestRateChartsRequest 
     * @param {module:api/InterestRateChartApi~create9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostInterestRateChartsResponse}
     */
    create9(postInterestRateChartsRequest, callback) {
      let postBody = postInterestRateChartsRequest;
      // verify the required parameter 'postInterestRateChartsRequest' is set
      if (postInterestRateChartsRequest === undefined || postInterestRateChartsRequest === null) {
        throw new Error("Missing the required parameter 'postInterestRateChartsRequest' when calling create9");
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
      let returnType = PostInterestRateChartsResponse;
      return this.apiClient.callApi(
        '/interestratecharts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete13 operation.
     * @callback module:api/InterestRateChartApi~delete13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteInterestRateChartsChartIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Chart
     * It deletes the chart
     * @param {Number} chartId chartId
     * @param {module:api/InterestRateChartApi~delete13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteInterestRateChartsChartIdResponse}
     */
    delete13(chartId, callback) {
      let postBody = null;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling delete13");
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
      let returnType = DeleteInterestRateChartsChartIdResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll25 operation.
     * @callback module:api/InterestRateChartApi~retrieveAll25Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetInterestRateChartsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all Charts
     * Retrieve list of charts associated with a term deposit product(FD or RD). Example Requests:  interestratecharts?productId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.productId productId
     * @param {module:api/InterestRateChartApi~retrieveAll25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetInterestRateChartsResponse>}
     */
    retrieveAll25(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'productId': opts['productId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetInterestRateChartsResponse];
      return this.apiClient.callApi(
        '/interestratecharts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne15 operation.
     * @callback module:api/InterestRateChartApi~retrieveOne15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetInterestRateChartsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Chart
     * It retrieves the Interest Rate Chart Example Requests:  interestratecharts/1
     * @param {Number} chartId chartId
     * @param {module:api/InterestRateChartApi~retrieveOne15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetInterestRateChartsResponse}
     */
    retrieveOne15(chartId, callback) {
      let postBody = null;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling retrieveOne15");
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
      let returnType = GetInterestRateChartsResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template9 operation.
     * @callback module:api/InterestRateChartApi~template9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetInterestRateChartsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Chart Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for creating a chart. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  interestratecharts/template
     * @param {module:api/InterestRateChartApi~template9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetInterestRateChartsTemplateResponse}
     */
    template9(callback) {
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
      let returnType = GetInterestRateChartsTemplateResponse;
      return this.apiClient.callApi(
        '/interestratecharts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update13 operation.
     * @callback module:api/InterestRateChartApi~update13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutInterestRateChartsChartIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Chart
     * It updates the chart
     * @param {Number} chartId chartId
     * @param {module:model/PutInterestRateChartsChartIdRequest} putInterestRateChartsChartIdRequest 
     * @param {module:api/InterestRateChartApi~update13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutInterestRateChartsChartIdResponse}
     */
    update13(chartId, putInterestRateChartsChartIdRequest, callback) {
      let postBody = putInterestRateChartsChartIdRequest;
      // verify the required parameter 'chartId' is set
      if (chartId === undefined || chartId === null) {
        throw new Error("Missing the required parameter 'chartId' when calling update13");
      }
      // verify the required parameter 'putInterestRateChartsChartIdRequest' is set
      if (putInterestRateChartsChartIdRequest === undefined || putInterestRateChartsChartIdRequest === null) {
        throw new Error("Missing the required parameter 'putInterestRateChartsChartIdRequest' when calling update13");
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
      let returnType = PutInterestRateChartsChartIdResponse;
      return this.apiClient.callApi(
        '/interestratecharts/{chartId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
