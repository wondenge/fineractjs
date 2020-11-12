


import ApiClient from "../ApiClient";
import GetTaxesGroupResponse from '../model/GetTaxesGroupResponse';
import PostTaxesGroupRequest from '../model/PostTaxesGroupRequest';
import PostTaxesGroupResponse from '../model/PostTaxesGroupResponse';
import PutTaxesGroupTaxGroupIdRequest from '../model/PutTaxesGroupTaxGroupIdRequest';
import PutTaxesGroupTaxGroupIdResponse from '../model/PutTaxesGroupTaxGroupIdResponse';

/**
* TaxGroup service.
* @module api/TaxGroupApi
* @version 1.0
*/
export default class TaxGroupApi {

    /**
    * Constructs a new TaxGroupApi. 
    * @alias module:api/TaxGroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTaxGroup operation.
     * @callback module:api/TaxGroupApi~createTaxGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTaxesGroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Tax Group
     * Create a new Tax Group Mandatory Fields: name and taxComponents Mandatory Fields in taxComponents: taxComponentId Optional Fields in taxComponents: id, startDate and endDate
     * @param {module:model/PostTaxesGroupRequest} postTaxesGroupRequest 
     * @param {module:api/TaxGroupApi~createTaxGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTaxesGroupResponse}
     */
    createTaxGroup(postTaxesGroupRequest, callback) {
      let postBody = postTaxesGroupRequest;
      // verify the required parameter 'postTaxesGroupRequest' is set
      if (postTaxesGroupRequest === undefined || postTaxesGroupRequest === null) {
        throw new Error("Missing the required parameter 'postTaxesGroupRequest' when calling createTaxGroup");
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
      let returnType = PostTaxesGroupResponse;
      return this.apiClient.callApi(
        '/taxes/group', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllTaxGroups operation.
     * @callback module:api/TaxGroupApi~retrieveAllTaxGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetTaxesGroupResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Tax Group
     * List Tax Group
     * @param {module:api/TaxGroupApi~retrieveAllTaxGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetTaxesGroupResponse>}
     */
    retrieveAllTaxGroups(callback) {
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
      let returnType = [GetTaxesGroupResponse];
      return this.apiClient.callApi(
        '/taxes/group', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTaxGroup operation.
     * @callback module:api/TaxGroupApi~retrieveTaxGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTaxesGroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Tax Group
     * Retrieve Tax Group
     * @param {Number} taxGroupId taxGroupId
     * @param {module:api/TaxGroupApi~retrieveTaxGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTaxesGroupResponse}
     */
    retrieveTaxGroup(taxGroupId, callback) {
      let postBody = null;
      // verify the required parameter 'taxGroupId' is set
      if (taxGroupId === undefined || taxGroupId === null) {
        throw new Error("Missing the required parameter 'taxGroupId' when calling retrieveTaxGroup");
      }

      let pathParams = {
        'taxGroupId': taxGroupId
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
      let returnType = GetTaxesGroupResponse;
      return this.apiClient.callApi(
        '/taxes/group/{taxGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate21 operation.
     * @callback module:api/TaxGroupApi~retrieveTemplate21Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TaxGroupApi~retrieveTemplate21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate21(callback) {
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
        '/taxes/group/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaxGroup operation.
     * @callback module:api/TaxGroupApi~updateTaxGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutTaxesGroupTaxGroupIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Tax Group
     * Updates Tax Group. Only end date can be up-datable and can insert new tax components.
     * @param {Number} taxGroupId taxGroupId
     * @param {module:model/PutTaxesGroupTaxGroupIdRequest} putTaxesGroupTaxGroupIdRequest 
     * @param {module:api/TaxGroupApi~updateTaxGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutTaxesGroupTaxGroupIdResponse}
     */
    updateTaxGroup(taxGroupId, putTaxesGroupTaxGroupIdRequest, callback) {
      let postBody = putTaxesGroupTaxGroupIdRequest;
      // verify the required parameter 'taxGroupId' is set
      if (taxGroupId === undefined || taxGroupId === null) {
        throw new Error("Missing the required parameter 'taxGroupId' when calling updateTaxGroup");
      }
      // verify the required parameter 'putTaxesGroupTaxGroupIdRequest' is set
      if (putTaxesGroupTaxGroupIdRequest === undefined || putTaxesGroupTaxGroupIdRequest === null) {
        throw new Error("Missing the required parameter 'putTaxesGroupTaxGroupIdRequest' when calling updateTaxGroup");
      }

      let pathParams = {
        'taxGroupId': taxGroupId
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
      let returnType = PutTaxesGroupTaxGroupIdResponse;
      return this.apiClient.callApi(
        '/taxes/group/{taxGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
