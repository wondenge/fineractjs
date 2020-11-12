


import ApiClient from "../ApiClient";
import GetTaxesComponentsResponse from '../model/GetTaxesComponentsResponse';
import PostTaxesComponentsRequest from '../model/PostTaxesComponentsRequest';
import PostTaxesComponentsResponse from '../model/PostTaxesComponentsResponse';
import PutTaxesComponentsTaxComponentIdRequest from '../model/PutTaxesComponentsTaxComponentIdRequest';
import PutTaxesComponentsTaxComponentIdResponse from '../model/PutTaxesComponentsTaxComponentIdResponse';

/**
* TaxComponents service.
* @module api/TaxComponentsApi
* @version 1.0
*/
export default class TaxComponentsApi {

    /**
    * Constructs a new TaxComponentsApi. 
    * @alias module:api/TaxComponentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTaxCompoent operation.
     * @callback module:api/TaxComponentsApi~createTaxCompoentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTaxesComponentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Tax Component
     * Creates a new Tax Component  Mandatory Fields: name, percentage  Optional Fields: debitAccountType, debitAcountId, creditAccountType, creditAcountId, startDate
     * @param {module:model/PostTaxesComponentsRequest} postTaxesComponentsRequest 
     * @param {module:api/TaxComponentsApi~createTaxCompoentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTaxesComponentsResponse}
     */
    createTaxCompoent(postTaxesComponentsRequest, callback) {
      let postBody = postTaxesComponentsRequest;
      // verify the required parameter 'postTaxesComponentsRequest' is set
      if (postTaxesComponentsRequest === undefined || postTaxesComponentsRequest === null) {
        throw new Error("Missing the required parameter 'postTaxesComponentsRequest' when calling createTaxCompoent");
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
      let returnType = PostTaxesComponentsResponse;
      return this.apiClient.callApi(
        '/taxes/component', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllTaxComponents operation.
     * @callback module:api/TaxComponentsApi~retrieveAllTaxComponentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetTaxesComponentsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Tax Components
     * List Tax Components
     * @param {module:api/TaxComponentsApi~retrieveAllTaxComponentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetTaxesComponentsResponse>}
     */
    retrieveAllTaxComponents(callback) {
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
      let returnType = [GetTaxesComponentsResponse];
      return this.apiClient.callApi(
        '/taxes/component', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTaxComponent operation.
     * @callback module:api/TaxComponentsApi~retrieveTaxComponentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTaxesComponentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Tax Component
     * Retrieve Tax Component
     * @param {Number} taxComponentId taxComponentId
     * @param {module:api/TaxComponentsApi~retrieveTaxComponentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTaxesComponentsResponse}
     */
    retrieveTaxComponent(taxComponentId, callback) {
      let postBody = null;
      // verify the required parameter 'taxComponentId' is set
      if (taxComponentId === undefined || taxComponentId === null) {
        throw new Error("Missing the required parameter 'taxComponentId' when calling retrieveTaxComponent");
      }

      let pathParams = {
        'taxComponentId': taxComponentId
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
      let returnType = GetTaxesComponentsResponse;
      return this.apiClient.callApi(
        '/taxes/component/{taxComponentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate20 operation.
     * @callback module:api/TaxComponentsApi~retrieveTemplate20Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TaxComponentsApi~retrieveTemplate20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate20(callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/taxes/component/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaxCompoent operation.
     * @callback module:api/TaxComponentsApi~updateTaxCompoentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutTaxesComponentsTaxComponentIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Tax Component
     * Updates Tax component. Debit and credit account details cannot be modified. All the future tax components would be replaced with the new percentage.
     * @param {Number} taxComponentId taxComponentId
     * @param {module:model/PutTaxesComponentsTaxComponentIdRequest} putTaxesComponentsTaxComponentIdRequest 
     * @param {module:api/TaxComponentsApi~updateTaxCompoentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutTaxesComponentsTaxComponentIdResponse}
     */
    updateTaxCompoent(taxComponentId, putTaxesComponentsTaxComponentIdRequest, callback) {
      let postBody = putTaxesComponentsTaxComponentIdRequest;
      // verify the required parameter 'taxComponentId' is set
      if (taxComponentId === undefined || taxComponentId === null) {
        throw new Error("Missing the required parameter 'taxComponentId' when calling updateTaxCompoent");
      }
      // verify the required parameter 'putTaxesComponentsTaxComponentIdRequest' is set
      if (putTaxesComponentsTaxComponentIdRequest === undefined || putTaxesComponentsTaxComponentIdRequest === null) {
        throw new Error("Missing the required parameter 'putTaxesComponentsTaxComponentIdRequest' when calling updateTaxCompoent");
      }

      let pathParams = {
        'taxComponentId': taxComponentId
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
      let returnType = PutTaxesComponentsTaxComponentIdResponse;
      return this.apiClient.callApi(
        '/taxes/component/{taxComponentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
