import ApiClient from "../ApiClient";
import DeleteGlClosuresResponse from '../model/DeleteGlClosuresResponse';
import GetGlClosureResponse from '../model/GetGlClosureResponse';
import PostGlClosuresRequest from '../model/PostGlClosuresRequest';
import PostGlClosuresResponse from '../model/PostGlClosuresResponse';
import PutGlClosuresRequest from '../model/PutGlClosuresRequest';
import PutGlClosuresResponse from '../model/PutGlClosuresResponse';

/**
 * AccountingClosure service.
 * @module api/AccountingClosureApi
 * @version 1.0
 */
export default class AccountingClosureApi {

    /**
     * Constructs a new AccountingClosureApi.
     * @alias module:api/AccountingClosureApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createGLClosure operation.
     * @callback module:api/AccountingClosureApi~createGLClosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostGlClosuresResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Accounting Closure
     * Mandatory Fields officeId,closingDate
     * @param {module:model/PostGlClosuresRequest} postGlClosuresRequest
     * @param {module:api/AccountingClosureApi~createGLClosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostGlClosuresResponse}
     */
    createGLClosure(postGlClosuresRequest, callback) {
        let postBody = postGlClosuresRequest;
        // verify the required parameter 'postGlClosuresRequest' is set
        if (postGlClosuresRequest === undefined || postGlClosuresRequest === null) {
            throw new Error("Missing the required parameter 'postGlClosuresRequest' when calling createGLClosure");
        }

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth', 'tenantid'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = PostGlClosuresResponse;
        return this.apiClient.callApi(
            '/glclosures', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the deleteGLClosure operation.
     * @callback module:api/AccountingClosureApi~deleteGLClosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteGlClosuresResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an accounting closure
     * Note: Only the latest accounting closure associated with a branch may be deleted.
     * @param {Number} glClosureId glclosureId
     * @param {module:api/AccountingClosureApi~deleteGLClosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteGlClosuresResponse}
     */
    deleteGLClosure(glClosureId, callback) {
        let postBody = null;
        // verify the required parameter 'glClosureId' is set
        if (glClosureId === undefined || glClosureId === null) {
            throw new Error("Missing the required parameter 'glClosureId' when calling deleteGLClosure");
        }

        let pathParams = {
            'glClosureId': glClosureId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth', 'tenantid'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = DeleteGlClosuresResponse;
        return this.apiClient.callApi(
            '/glclosures/{glClosureId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the retreiveClosure operation.
     * @callback module:api/AccountingClosureApi~retreiveClosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGlClosureResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Accounting Closure
     * Example Requests:  glclosures/1   /glclosures/1?fields=officeName,closingDate
     * @param {Number} glClosureId glClosureId
     * @param {module:api/AccountingClosureApi~retreiveClosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGlClosureResponse}
     */
    retreiveClosure(glClosureId, callback) {
        let postBody = null;
        // verify the required parameter 'glClosureId' is set
        if (glClosureId === undefined || glClosureId === null) {
            throw new Error("Missing the required parameter 'glClosureId' when calling retreiveClosure");
        }

        let pathParams = {
            'glClosureId': glClosureId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth', 'tenantid'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = GetGlClosureResponse;
        return this.apiClient.callApi(
            '/glclosures/{glClosureId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the retrieveAllClosures operation.
     * @callback module:api/AccountingClosureApi~retrieveAllClosuresCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetGlClosureResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Accounting closures
     * Example Requests:  glclosures
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId
     * @param {module:api/AccountingClosureApi~retrieveAllClosuresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetGlClosureResponse>}
     */
    retrieveAllClosures(opts, callback) {
        opts = opts || {};
        let postBody = null;

        let pathParams = {};
        let queryParams = {
            'officeId': opts['officeId']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth', 'tenantid'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [GetGlClosureResponse];
        return this.apiClient.callApi(
            '/glclosures', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the updateGLClosure operation.
     * @callback module:api/AccountingClosureApi~updateGLClosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutGlClosuresResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Accounting closure
     * Once an accounting closure is created, only the comments associated with it may be edited
     * @param {Number} glClosureId glClosureId
     * @param {Object} opts Optional parameters
     * @param {module:model/PutGlClosuresRequest} opts.putGlClosuresRequest
     * @param {module:api/AccountingClosureApi~updateGLClosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutGlClosuresResponse}
     */
    updateGLClosure(glClosureId, opts, callback) {
        opts = opts || {};
        let postBody = opts['putGlClosuresRequest'];
        // verify the required parameter 'glClosureId' is set
        if (glClosureId === undefined || glClosureId === null) {
            throw new Error("Missing the required parameter 'glClosureId' when calling updateGLClosure");
        }

        let pathParams = {
            'glClosureId': glClosureId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth', 'tenantid'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = PutGlClosuresResponse;
        return this.apiClient.callApi(
            '/glclosures/{glClosureId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }


}
