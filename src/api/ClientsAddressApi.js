


import ApiClient from "../ApiClient";
import GetClientClientIdAddressesResponse from '../model/GetClientClientIdAddressesResponse';
import PostClientClientIdAddressesRequest from '../model/PostClientClientIdAddressesRequest';
import PostClientClientIdAddressesResponse from '../model/PostClientClientIdAddressesResponse';
import PutClientClientIdAddressesRequest from '../model/PutClientClientIdAddressesRequest';
import PutClientClientIdAddressesResponse from '../model/PutClientClientIdAddressesResponse';

/**
* ClientsAddress service.
* @module api/ClientsAddressApi
* @version 1.0
*/
export default class ClientsAddressApi {

    /**
    * Constructs a new ClientsAddressApi. 
    * @alias module:api/ClientsAddressApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addClientAddress operation.
     * @callback module:api/ClientsAddressApi~addClientAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientClientIdAddressesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an address for a Client
     * Mandatory Fields :  type and clientId
     * @param {Number} clientid clientId
     * @param {module:model/PostClientClientIdAddressesRequest} postClientClientIdAddressesRequest 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.type type
     * @param {module:api/ClientsAddressApi~addClientAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientClientIdAddressesResponse}
     */
    addClientAddress(clientid, postClientClientIdAddressesRequest, opts, callback) {
      opts = opts || {};
      let postBody = postClientClientIdAddressesRequest;
      // verify the required parameter 'clientid' is set
      if (clientid === undefined || clientid === null) {
        throw new Error("Missing the required parameter 'clientid' when calling addClientAddress");
      }
      // verify the required parameter 'postClientClientIdAddressesRequest' is set
      if (postClientClientIdAddressesRequest === undefined || postClientClientIdAddressesRequest === null) {
        throw new Error("Missing the required parameter 'postClientClientIdAddressesRequest' when calling addClientAddress");
      }

      let pathParams = {
        'clientid': clientid
      };
      let queryParams = {
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostClientClientIdAddressesResponse;
      return this.apiClient.callApi(
        '/client/{clientid}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddresses1 operation.
     * @callback module:api/ClientsAddressApi~getAddresses1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetClientClientIdAddressesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all addresses for a Client
     * Example Requests:  client/1/addresses   clients/1/addresses?status=false,true&&type=1,2,3
     * @param {Number} clientid clientId
     * @param {Object} opts Optional parameters
     * @param {String} opts.status status
     * @param {Number} opts.type type
     * @param {module:api/ClientsAddressApi~getAddresses1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetClientClientIdAddressesResponse>}
     */
    getAddresses1(clientid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientid' is set
      if (clientid === undefined || clientid === null) {
        throw new Error("Missing the required parameter 'clientid' when calling getAddresses1");
      }

      let pathParams = {
        'clientid': clientid
      };
      let queryParams = {
        'status': opts['status'],
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetClientClientIdAddressesResponse];
      return this.apiClient.callApi(
        '/client/{clientid}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddressesTemplate operation.
     * @callback module:api/ClientsAddressApi~getAddressesTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ClientsAddressApi~getAddressesTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAddressesTemplate(callback) {
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
        '/client/addresses/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientAddress operation.
     * @callback module:api/ClientsAddressApi~updateClientAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutClientClientIdAddressesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an address for a Client
     * All the address fields can be updated by using update client address API  Mandatory Fields type and addressId
     * @param {Number} clientid clientId
     * @param {module:model/PutClientClientIdAddressesRequest} putClientClientIdAddressesRequest 
     * @param {module:api/ClientsAddressApi~updateClientAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutClientClientIdAddressesResponse}
     */
    updateClientAddress(clientid, putClientClientIdAddressesRequest, callback) {
      let postBody = putClientClientIdAddressesRequest;
      // verify the required parameter 'clientid' is set
      if (clientid === undefined || clientid === null) {
        throw new Error("Missing the required parameter 'clientid' when calling updateClientAddress");
      }
      // verify the required parameter 'putClientClientIdAddressesRequest' is set
      if (putClientClientIdAddressesRequest === undefined || putClientClientIdAddressesRequest === null) {
        throw new Error("Missing the required parameter 'putClientClientIdAddressesRequest' when calling updateClientAddress");
      }

      let pathParams = {
        'clientid': clientid
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
      let returnType = PutClientClientIdAddressesResponse;
      return this.apiClient.callApi(
        '/client/{clientid}/addresses', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
