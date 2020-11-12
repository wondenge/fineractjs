


import ApiClient from "../ApiClient";
import DeleteHookResponse from '../model/DeleteHookResponse';
import GetHookResponse from '../model/GetHookResponse';
import GetHookTemplateResponse from '../model/GetHookTemplateResponse';
import PostHookRequest from '../model/PostHookRequest';
import PostHookResponse from '../model/PostHookResponse';
import PutHookRequest from '../model/PutHookRequest';
import PutHookResponse from '../model/PutHookResponse';

/**
* Hooks service.
* @module api/HooksApi
* @version 1.0
*/
export default class HooksApi {

    /**
    * Constructs a new HooksApi. 
    * @alias module:api/HooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createHook operation.
     * @callback module:api/HooksApi~createHookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Hook
     * The following parameters can be passed for the creation of a hook :-  name - string - Required. The name of the template that is being called. (See /hooks/template for the list of valid hook names.)  isActive - boolean - Determines whether the hook is actually triggered.  events - array - Determines what events the hook is triggered for.  config - hash - Required. Key/value pairs to provide settings for this hook. These settings vary between the templates.  templateId - Optional. The UGD template ID associated with the same entity (client or loan).
     * @param {module:model/PostHookRequest} postHookRequest 
     * @param {module:api/HooksApi~createHookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostHookResponse}
     */
    createHook(postHookRequest, callback) {
      let postBody = postHookRequest;
      // verify the required parameter 'postHookRequest' is set
      if (postHookRequest === undefined || postHookRequest === null) {
        throw new Error("Missing the required parameter 'postHookRequest' when calling createHook");
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
      let returnType = PostHookResponse;
      return this.apiClient.callApi(
        '/hooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHook operation.
     * @callback module:api/HooksApi~deleteHookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Hook
     * Deletes a hook.
     * @param {Number} hookId hookId
     * @param {module:api/HooksApi~deleteHookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteHookResponse}
     */
    deleteHook(hookId, callback) {
      let postBody = null;
      // verify the required parameter 'hookId' is set
      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling deleteHook");
      }

      let pathParams = {
        'hookId': hookId
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
      let returnType = DeleteHookResponse;
      return this.apiClient.callApi(
        '/hooks/{hookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveHook operation.
     * @callback module:api/HooksApi~retrieveHookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Hook
     * Returns the details of a Hook.  Example Requests:  hooks/1
     * @param {Number} hookId hookId
     * @param {module:api/HooksApi~retrieveHookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetHookResponse}
     */
    retrieveHook(hookId, callback) {
      let postBody = null;
      // verify the required parameter 'hookId' is set
      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling retrieveHook");
      }

      let pathParams = {
        'hookId': hookId
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
      let returnType = GetHookResponse;
      return this.apiClient.callApi(
        '/hooks/{hookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveHooks operation.
     * @callback module:api/HooksApi~retrieveHooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetHookResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Hooks
     * Returns the list of hooks.  Example Requests:  hooks
     * @param {module:api/HooksApi~retrieveHooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetHookResponse>}
     */
    retrieveHooks(callback) {
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
      let returnType = [GetHookResponse];
      return this.apiClient.callApi(
        '/hooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template3 operation.
     * @callback module:api/HooksApi~template3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetHookTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Hooks Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  hooks/template
     * @param {module:api/HooksApi~template3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetHookTemplateResponse}
     */
    template3(callback) {
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
      let returnType = GetHookTemplateResponse;
      return this.apiClient.callApi(
        '/hooks/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHook operation.
     * @callback module:api/HooksApi~updateHookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Hook
     * Updates the details of a hook.
     * @param {Number} hookId hookId
     * @param {module:model/PutHookRequest} putHookRequest 
     * @param {module:api/HooksApi~updateHookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutHookResponse}
     */
    updateHook(hookId, putHookRequest, callback) {
      let postBody = putHookRequest;
      // verify the required parameter 'hookId' is set
      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling updateHook");
      }
      // verify the required parameter 'putHookRequest' is set
      if (putHookRequest === undefined || putHookRequest === null) {
        throw new Error("Missing the required parameter 'putHookRequest' when calling updateHook");
      }

      let pathParams = {
        'hookId': hookId
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
      let returnType = PutHookResponse;
      return this.apiClient.callApi(
        '/hooks/{hookId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
