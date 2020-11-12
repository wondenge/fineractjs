


import ApiClient from "../ApiClient";
import DeleteTemplatesTemplateIdResponse from '../model/DeleteTemplatesTemplateIdResponse';
import GetTemplatesResponse from '../model/GetTemplatesResponse';
import GetTemplatesTemplateIdResponse from '../model/GetTemplatesTemplateIdResponse';
import GetTemplatesTemplateResponse from '../model/GetTemplatesTemplateResponse';
import PostTemplatesRequest from '../model/PostTemplatesRequest';
import PostTemplatesResponse from '../model/PostTemplatesResponse';
import PutTemplatesTemplateIdRequest from '../model/PutTemplatesTemplateIdRequest';
import PutTemplatesTemplateIdResponse from '../model/PutTemplatesTemplateIdResponse';

/**
* UserGeneratedDocuments service.
* @module api/UserGeneratedDocumentsApi
* @version 1.0
*/
export default class UserGeneratedDocumentsApi {

    /**
    * Constructs a new UserGeneratedDocumentsApi. 
    * @alias module:api/UserGeneratedDocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:api/UserGeneratedDocumentsApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTemplatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a UGD
     * Adds a new UGD.  Mandatory Fields name    Example Requests:  templates/1
     * @param {module:model/PostTemplatesRequest} postTemplatesRequest 
     * @param {module:api/UserGeneratedDocumentsApi~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTemplatesResponse}
     */
    createTemplate(postTemplatesRequest, callback) {
      let postBody = postTemplatesRequest;
      // verify the required parameter 'postTemplatesRequest' is set
      if (postTemplatesRequest === undefined || postTemplatesRequest === null) {
        throw new Error("Missing the required parameter 'postTemplatesRequest' when calling createTemplate");
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
      let returnType = PostTemplatesResponse;
      return this.apiClient.callApi(
        '/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTemplate operation.
     * @callback module:api/UserGeneratedDocumentsApi~deleteTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteTemplatesTemplateIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a UGD
     * @param {Number} templateId templateId
     * @param {module:api/UserGeneratedDocumentsApi~deleteTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteTemplatesTemplateIdResponse}
     */
    deleteTemplate(templateId, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTemplate");
      }

      let pathParams = {
        'templateId': templateId
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
      let returnType = DeleteTemplatesTemplateIdResponse;
      return this.apiClient.callApi(
        '/templates/{templateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplateByTemplate operation.
     * @callback module:api/UserGeneratedDocumentsApi~getTemplateByTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} templateId 
     * @param {module:api/UserGeneratedDocumentsApi~getTemplateByTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getTemplateByTemplate(templateId, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getTemplateByTemplate");
      }

      let pathParams = {
        'templateId': templateId
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
        '/templates/{templateId}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeTemplate operation.
     * @callback module:api/UserGeneratedDocumentsApi~mergeTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} templateId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/UserGeneratedDocumentsApi~mergeTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    mergeTemplate(templateId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling mergeTemplate");
      }

      let pathParams = {
        'templateId': templateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['text/html'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/templates/{templateId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll39 operation.
     * @callback module:api/UserGeneratedDocumentsApi~retrieveAll39Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTemplatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all UGDs
     * Example Requests:  templates  It is also possible to get specific UGDs by entity and type:  templates?type=0&entity=0 [Entity: Id]      client: 0, loan: 1  [Type: Id]    Document: 0, E-Mail (not yet): 1,  SMS: 2
     * @param {Object} opts Optional parameters
     * @param {Number} opts.typeId typeId (default to -1)
     * @param {Number} opts.entityId entityId (default to -1)
     * @param {module:api/UserGeneratedDocumentsApi~retrieveAll39Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTemplatesResponse}
     */
    retrieveAll39(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'typeId': opts['typeId'],
        'entityId': opts['entityId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTemplatesResponse;
      return this.apiClient.callApi(
        '/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne27 operation.
     * @callback module:api/UserGeneratedDocumentsApi~retrieveOne27Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTemplatesTemplateIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a UGD
     * Example Requests:  templates/1
     * @param {Number} templateId templateId
     * @param {module:api/UserGeneratedDocumentsApi~retrieveOne27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTemplatesTemplateIdResponse}
     */
    retrieveOne27(templateId, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling retrieveOne27");
      }

      let pathParams = {
        'templateId': templateId
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
      let returnType = GetTemplatesTemplateIdResponse;
      return this.apiClient.callApi(
        '/templates/{templateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveTemplate operation.
     * @callback module:api/UserGeneratedDocumentsApi~saveTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutTemplatesTemplateIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a UGD
     * @param {Number} templateId templateId
     * @param {module:model/PutTemplatesTemplateIdRequest} putTemplatesTemplateIdRequest 
     * @param {module:api/UserGeneratedDocumentsApi~saveTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutTemplatesTemplateIdResponse}
     */
    saveTemplate(templateId, putTemplatesTemplateIdRequest, callback) {
      let postBody = putTemplatesTemplateIdRequest;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling saveTemplate");
      }
      // verify the required parameter 'putTemplatesTemplateIdRequest' is set
      if (putTemplatesTemplateIdRequest === undefined || putTemplatesTemplateIdRequest === null) {
        throw new Error("Missing the required parameter 'putTemplatesTemplateIdRequest' when calling saveTemplate");
      }

      let pathParams = {
        'templateId': templateId
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
      let returnType = PutTemplatesTemplateIdResponse;
      return this.apiClient.callApi(
        '/templates/{templateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template20 operation.
     * @callback module:api/UserGeneratedDocumentsApi~template20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTemplatesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve UGD Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for UGDs. The UGD data returned consists of any or all of:  ARGUMENTS name String entity String type String text String optional mappers Mapper optional Example Request:  templates/template
     * @param {module:api/UserGeneratedDocumentsApi~template20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTemplatesTemplateResponse}
     */
    template20(callback) {
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
      let returnType = GetTemplatesTemplateResponse;
      return this.apiClient.callApi(
        '/templates/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
