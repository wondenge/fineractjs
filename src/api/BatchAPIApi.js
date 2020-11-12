


import ApiClient from "../ApiClient";
import BatchResponse from '../model/BatchResponse';
import PostBatchesRequest from '../model/PostBatchesRequest';

/**
* BatchAPI service.
* @module api/BatchAPIApi
* @version 1.0
*/
export default class BatchAPIApi {

    /**
    * Constructs a new BatchAPIApi. 
    * @alias module:api/BatchAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the handleBatchRequests operation.
     * @callback module:api/BatchAPIApi~handleBatchRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Batch requests in a single transaction
     * The Apache Fineract Batch API is also capable of executing all the requests in a single transaction, by setting a Query Parameter, \"enclosingTransaction=true\". So, if one or more of the requests in a batch returns an erroneous response all of the Data base transactions made by other successful requests will be rolled back.  If there has been a rollback in a transaction then a single response will be provided, with a '400' status code and a body consisting of the error details of the first failed request.
     * @param {module:model/PostBatchesRequest} postBatchesRequest 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.enclosingTransaction enclosingTransaction (default to false)
     * @param {module:api/BatchAPIApi~handleBatchRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BatchResponse}
     */
    handleBatchRequests(postBatchesRequest, opts, callback) {
      opts = opts || {};
      let postBody = postBatchesRequest;
      // verify the required parameter 'postBatchesRequest' is set
      if (postBatchesRequest === undefined || postBatchesRequest === null) {
        throw new Error("Missing the required parameter 'postBatchesRequest' when calling handleBatchRequests");
      }

      let pathParams = {
      };
      let queryParams = {
        'enclosingTransaction': opts['enclosingTransaction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BatchResponse;
      return this.apiClient.callApi(
        '/batches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
