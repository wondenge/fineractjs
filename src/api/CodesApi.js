  


import ApiClient from "../ApiClient";
import DeleteCodesResponse from '../model/DeleteCodesResponse';
import GetCodesResponse from '../model/GetCodesResponse';
import PostCodesRequest from '../model/PostCodesRequest';
import PostCodesResponse from '../model/PostCodesResponse';
import PutCodesRequest from '../model/PutCodesRequest';
import PutCodesResponse from '../model/PutCodesResponse';

/**
* Codes service.
* @module api/CodesApi
* @version 1.0
*/
export default class CodesApi {

    /**
    * Constructs a new CodesApi. 
    * @alias module:api/CodesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCode operation.
     * @callback module:api/CodesApi~createCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Code
     * Creates a code. Codes created through api are always 'user defined' and so system defined is marked as false.
     * @param {module:model/PostCodesRequest} postCodesRequest 
     * @param {module:api/CodesApi~createCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCodesResponse}
     */
    createCode(postCodesRequest, callback) {
      let postBody = postCodesRequest;
      // verify the required parameter 'postCodesRequest' is set
      if (postCodesRequest === undefined || postCodesRequest === null) {
        throw new Error("Missing the required parameter 'postCodesRequest' when calling createCode");
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
      let returnType = PostCodesResponse;
      return this.apiClient.callApi(
        '/codes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCode operation.
     * @callback module:api/CodesApi~deleteCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Code
     * Deletes a code if it is not system defined.
     * @param {Number} codeId codeId
     * @param {module:api/CodesApi~deleteCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteCodesResponse}
     */
    deleteCode(codeId, callback) {
      let postBody = null;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling deleteCode");
      }

      let pathParams = {
        'codeId': codeId
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
      let returnType = DeleteCodesResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCode operation.
     * @callback module:api/CodesApi~retrieveCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Code
     * Returns the details of a Code.  Example Requests:  codes/1
     * @param {Number} codeId codeId
     * @param {module:api/CodesApi~retrieveCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCodesResponse}
     */
    retrieveCode(codeId, callback) {
      let postBody = null;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling retrieveCode");
      }

      let pathParams = {
        'codeId': codeId
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
      let returnType = GetCodesResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCodes operation.
     * @callback module:api/CodesApi~retrieveCodesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCodesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Codes
     * Returns the list of codes.  Example Requests:  codes
     * @param {module:api/CodesApi~retrieveCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCodesResponse>}
     */
    retrieveCodes(callback) {
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
      let returnType = [GetCodesResponse];
      return this.apiClient.callApi(
        '/codes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCode operation.
     * @callback module:api/CodesApi~updateCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Code
     * Updates the details of a code if it is not system defined.
     * @param {Number} codeId codeId
     * @param {module:model/PutCodesRequest} putCodesRequest 
     * @param {module:api/CodesApi~updateCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutCodesResponse}
     */
    updateCode(codeId, putCodesRequest, callback) {
      let postBody = putCodesRequest;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling updateCode");
      }
      // verify the required parameter 'putCodesRequest' is set
      if (putCodesRequest === undefined || putCodesRequest === null) {
        throw new Error("Missing the required parameter 'putCodesRequest' when calling updateCode");
      }

      let pathParams = {
        'codeId': codeId
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
      let returnType = PutCodesResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
