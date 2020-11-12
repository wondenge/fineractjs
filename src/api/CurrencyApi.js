


import ApiClient from "../ApiClient";
import GetCurrenciesResponse from '../model/GetCurrenciesResponse';
import PutCurrenciesRequest from '../model/PutCurrenciesRequest';
import PutCurrenciesResponse from '../model/PutCurrenciesResponse';

/**
* Currency service.
* @module api/CurrencyApi
* @version 1.0
*/
export default class CurrencyApi {

    /**
    * Constructs a new CurrencyApi. 
    * @alias module:api/CurrencyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveCurrencies operation.
     * @callback module:api/CurrencyApi~retrieveCurrenciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCurrenciesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Currency Configuration
     * Returns the list of currencies permitted for use AND the list of currencies not selected (but available for selection).  Example Requests:  currencies   currencies?fields=selectedCurrencyOptions
     * @param {module:api/CurrencyApi~retrieveCurrenciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCurrenciesResponse}
     */
    retrieveCurrencies(callback) {
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
      let returnType = GetCurrenciesResponse;
      return this.apiClient.callApi(
        '/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCurrencies operation.
     * @callback module:api/CurrencyApi~updateCurrenciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutCurrenciesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Currency Configuration
     * Updates the list of currencies permitted for use.
     * @param {module:model/PutCurrenciesRequest} putCurrenciesRequest 
     * @param {module:api/CurrencyApi~updateCurrenciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutCurrenciesResponse}
     */
    updateCurrencies(putCurrenciesRequest, callback) {
      let postBody = putCurrenciesRequest;
      // verify the required parameter 'putCurrenciesRequest' is set
      if (putCurrenciesRequest === undefined || putCurrenciesRequest === null) {
        throw new Error("Missing the required parameter 'putCurrenciesRequest' when calling updateCurrencies");
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
      let returnType = PutCurrenciesResponse;
      return this.apiClient.callApi(
        '/currencies', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
