


import ApiClient from "../ApiClient";
import DeleteCodeValueDataResponse from '../model/DeleteCodeValueDataResponse';
import GetCodeValuesDataResponse from '../model/GetCodeValuesDataResponse';
import PostCodeValueDataResponse from '../model/PostCodeValueDataResponse';
import PostCodeValuesDataRequest from '../model/PostCodeValuesDataRequest';
import PutCodeValueDataResponse from '../model/PutCodeValueDataResponse';
import PutCodeValuesDataRequest from '../model/PutCodeValuesDataRequest';

/**
* CodeValues service.
* @module api/CodeValuesApi
* @version 1.0
*/
export default class CodeValuesApi {

    /**
    * Constructs a new CodeValuesApi. 
    * @alias module:api/CodeValuesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCodeValue operation.
     * @callback module:api/CodeValuesApi~createCodeValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCodeValueDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Code description
     * @param {Number} codeId codeId
     * @param {module:model/PostCodeValuesDataRequest} postCodeValuesDataRequest 
     * @param {module:api/CodeValuesApi~createCodeValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCodeValueDataResponse}
     */
    createCodeValue(codeId, postCodeValuesDataRequest, callback) {
      let postBody = postCodeValuesDataRequest;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling createCodeValue");
      }
      // verify the required parameter 'postCodeValuesDataRequest' is set
      if (postCodeValuesDataRequest === undefined || postCodeValuesDataRequest === null) {
        throw new Error("Missing the required parameter 'postCodeValuesDataRequest' when calling createCodeValue");
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
      let returnType = PostCodeValueDataResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}/codevalues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCodeValue operation.
     * @callback module:api/CodeValuesApi~deleteCodeValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteCodeValueDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Code description
     * Deletes a code description
     * @param {Number} codeId codeId
     * @param {Number} codeValueId codeValueId
     * @param {module:api/CodeValuesApi~deleteCodeValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteCodeValueDataResponse}
     */
    deleteCodeValue(codeId, codeValueId, callback) {
      let postBody = null;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling deleteCodeValue");
      }
      // verify the required parameter 'codeValueId' is set
      if (codeValueId === undefined || codeValueId === null) {
        throw new Error("Missing the required parameter 'codeValueId' when calling deleteCodeValue");
      }

      let pathParams = {
        'codeId': codeId,
        'codeValueId': codeValueId
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
      let returnType = DeleteCodeValueDataResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}/codevalues/{codeValueId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllCodeValues operation.
     * @callback module:api/CodeValuesApi~retrieveAllCodeValuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCodeValuesDataResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Code Values
     * Returns the list of Code Values for a given Code  Example Requests:  codes/1/codevalues
     * @param {Number} codeId codeId
     * @param {module:api/CodeValuesApi~retrieveAllCodeValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCodeValuesDataResponse>}
     */
    retrieveAllCodeValues(codeId, callback) {
      let postBody = null;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling retrieveAllCodeValues");
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
      let returnType = [GetCodeValuesDataResponse];
      return this.apiClient.callApi(
        '/codes/{codeId}/codevalues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCodeValue operation.
     * @callback module:api/CodeValuesApi~retrieveCodeValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCodeValuesDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Code description
     * Returns the details of a Code Value  Example Requests:  codes/1/codevalues/1
     * @param {Number} codeValueId codeValueId
     * @param {Number} codeId codeId
     * @param {module:api/CodeValuesApi~retrieveCodeValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCodeValuesDataResponse}
     */
    retrieveCodeValue(codeValueId, codeId, callback) {
      let postBody = null;
      // verify the required parameter 'codeValueId' is set
      if (codeValueId === undefined || codeValueId === null) {
        throw new Error("Missing the required parameter 'codeValueId' when calling retrieveCodeValue");
      }
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling retrieveCodeValue");
      }

      let pathParams = {
        'codeValueId': codeValueId,
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
      let returnType = GetCodeValuesDataResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}/codevalues/{codeValueId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCodeValue operation.
     * @callback module:api/CodeValuesApi~updateCodeValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutCodeValueDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Code description
     * Updates the details of a code description.
     * @param {Number} codeId codeId
     * @param {Number} codeValueId codeValueId
     * @param {module:model/PutCodeValuesDataRequest} putCodeValuesDataRequest 
     * @param {module:api/CodeValuesApi~updateCodeValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutCodeValueDataResponse}
     */
    updateCodeValue(codeId, codeValueId, putCodeValuesDataRequest, callback) {
      let postBody = putCodeValuesDataRequest;
      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw new Error("Missing the required parameter 'codeId' when calling updateCodeValue");
      }
      // verify the required parameter 'codeValueId' is set
      if (codeValueId === undefined || codeValueId === null) {
        throw new Error("Missing the required parameter 'codeValueId' when calling updateCodeValue");
      }
      // verify the required parameter 'putCodeValuesDataRequest' is set
      if (putCodeValuesDataRequest === undefined || putCodeValuesDataRequest === null) {
        throw new Error("Missing the required parameter 'putCodeValuesDataRequest' when calling updateCodeValue");
      }

      let pathParams = {
        'codeId': codeId,
        'codeValueId': codeValueId
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
      let returnType = PutCodeValueDataResponse;
      return this.apiClient.callApi(
        '/codes/{codeId}/codevalues/{codeValueId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
