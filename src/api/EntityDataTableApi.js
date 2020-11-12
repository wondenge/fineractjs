  


import ApiClient from "../ApiClient";
import DeleteEntityDatatableChecksTemplateResponse from '../model/DeleteEntityDatatableChecksTemplateResponse';
import GetEntityDatatableChecksResponse from '../model/GetEntityDatatableChecksResponse';
import GetEntityDatatableChecksTemplateResponse from '../model/GetEntityDatatableChecksTemplateResponse';
import PostEntityDatatableChecksTemplateRequest from '../model/PostEntityDatatableChecksTemplateRequest';
import PostEntityDatatableChecksTemplateResponse from '../model/PostEntityDatatableChecksTemplateResponse';

/**
* EntityDataTable service.
* @module api/EntityDataTableApi
* @version 1.0
*/
export default class EntityDataTableApi {

    /**
    * Constructs a new EntityDataTableApi. 
    * @alias module:api/EntityDataTableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEntityDatatableCheck operation.
     * @callback module:api/EntityDataTableApi~createEntityDatatableCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostEntityDatatableChecksTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Entity-Datatable Checks
     * Mandatory Fields :  entity, status, datatableName  Non-Mandatory Fields :  productId
     * @param {module:model/PostEntityDatatableChecksTemplateRequest} postEntityDatatableChecksTemplateRequest 
     * @param {module:api/EntityDataTableApi~createEntityDatatableCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostEntityDatatableChecksTemplateResponse}
     */
    createEntityDatatableCheck(postEntityDatatableChecksTemplateRequest, callback) {
      let postBody = postEntityDatatableChecksTemplateRequest;
      // verify the required parameter 'postEntityDatatableChecksTemplateRequest' is set
      if (postEntityDatatableChecksTemplateRequest === undefined || postEntityDatatableChecksTemplateRequest === null) {
        throw new Error("Missing the required parameter 'postEntityDatatableChecksTemplateRequest' when calling createEntityDatatableCheck");
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
      let returnType = PostEntityDatatableChecksTemplateResponse;
      return this.apiClient.callApi(
        '/entityDatatableChecks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDatatable1 operation.
     * @callback module:api/EntityDataTableApi~deleteDatatable1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteEntityDatatableChecksTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Entity-Datatable Checks
     * Deletes an existing Entity-Datatable Check
     * @param {Number} entityDatatableCheckId entityDatatableCheckId
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/EntityDataTableApi~deleteDatatable1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteEntityDatatableChecksTemplateResponse}
     */
    deleteDatatable1(entityDatatableCheckId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entityDatatableCheckId' is set
      if (entityDatatableCheckId === undefined || entityDatatableCheckId === null) {
        throw new Error("Missing the required parameter 'entityDatatableCheckId' when calling deleteDatatable1");
      }

      let pathParams = {
        'entityDatatableCheckId': entityDatatableCheckId
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
      let returnType = DeleteEntityDatatableChecksTemplateResponse;
      return this.apiClient.callApi(
        '/entityDatatableChecks/{entityDatatableCheckId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplate operation.
     * @callback module:api/EntityDataTableApi~getTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetEntityDatatableChecksTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Entity-Datatable Checks Template
     * This is a convenience resource useful for building maintenance user interface screens for Entity-Datatable Checks applications. The template data returned consists of:  Allowed description Lists Example Request:  entityDatatableChecks/template
     * @param {module:api/EntityDataTableApi~getTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetEntityDatatableChecksTemplateResponse}
     */
    getTemplate(callback) {
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
      let returnType = GetEntityDatatableChecksTemplateResponse;
      return this.apiClient.callApi(
        '/entityDatatableChecks/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll6 operation.
     * @callback module:api/EntityDataTableApi~retrieveAll6Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetEntityDatatableChecksResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Entity-Datatable Checks
     * The list capability of Entity-Datatable Checks can support pagination.  OPTIONAL ARGUMENTS offset Integer optional, defaults to 0 Indicates the result from which pagination startslimit Integer optional, defaults to 200 Restricts the size of results returned. To override the default and return all entries you must explicitly pass a non-positive integer value for limit e.g. limit=0, or limit=-1 Example Request:  entityDatatableChecks?offset=0&limit=15
     * @param {Object} opts Optional parameters
     * @param {Number} opts.status status
     * @param {String} opts.entity entity
     * @param {Number} opts.productId productId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/EntityDataTableApi~retrieveAll6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetEntityDatatableChecksResponse>}
     */
    retrieveAll6(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status'],
        'entity': opts['entity'],
        'productId': opts['productId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetEntityDatatableChecksResponse];
      return this.apiClient.callApi(
        '/entityDatatableChecks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
