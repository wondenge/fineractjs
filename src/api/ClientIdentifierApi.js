


import ApiClient from "../ApiClient";
import DeleteClientsClientIdIdentifiersIdentifierIdResponse from '../model/DeleteClientsClientIdIdentifiersIdentifierIdResponse';
import GetClientsClientIdIdentifiersResponse from '../model/GetClientsClientIdIdentifiersResponse';
import GetClientsClientIdIdentifiersTemplateResponse from '../model/GetClientsClientIdIdentifiersTemplateResponse';
import PostClientsClientIdIdentifiersRequest from '../model/PostClientsClientIdIdentifiersRequest';
import PostClientsClientIdIdentifiersResponse from '../model/PostClientsClientIdIdentifiersResponse';
import PutClientsClientIdIdentifiersIdentifierIdRequest from '../model/PutClientsClientIdIdentifiersIdentifierIdRequest';
import PutClientsClientIdIdentifiersIdentifierIdResponse from '../model/PutClientsClientIdIdentifiersIdentifierIdResponse';

/**
* ClientIdentifier service.
* @module api/ClientIdentifierApi
* @version 1.0
*/
export default class ClientIdentifierApi {

    /**
    * Constructs a new ClientIdentifierApi. 
    * @alias module:api/ClientIdentifierApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createClientIdentifier operation.
     * @callback module:api/ClientIdentifierApi~createClientIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientsClientIdIdentifiersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Identifier for a Client
     * Mandatory Fields documentKey, documentTypeId 
     * @param {Number} clientId clientId
     * @param {module:model/PostClientsClientIdIdentifiersRequest} postClientsClientIdIdentifiersRequest 
     * @param {module:api/ClientIdentifierApi~createClientIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientsClientIdIdentifiersResponse}
     */
    createClientIdentifier(clientId, postClientsClientIdIdentifiersRequest, callback) {
      let postBody = postClientsClientIdIdentifiersRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling createClientIdentifier");
      }
      // verify the required parameter 'postClientsClientIdIdentifiersRequest' is set
      if (postClientsClientIdIdentifiersRequest === undefined || postClientsClientIdIdentifiersRequest === null) {
        throw new Error("Missing the required parameter 'postClientsClientIdIdentifiersRequest' when calling createClientIdentifier");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = PostClientsClientIdIdentifiersResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/identifiers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientIdentifier operation.
     * @callback module:api/ClientIdentifierApi~deleteClientIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteClientsClientIdIdentifiersIdentifierIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Client Identifier
     * Deletes a Client Identifier
     * @param {Number} clientId clientId
     * @param {Number} identifierId identifierId
     * @param {module:api/ClientIdentifierApi~deleteClientIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteClientsClientIdIdentifiersIdentifierIdResponse}
     */
    deleteClientIdentifier(clientId, identifierId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClientIdentifier");
      }
      // verify the required parameter 'identifierId' is set
      if (identifierId === undefined || identifierId === null) {
        throw new Error("Missing the required parameter 'identifierId' when calling deleteClientIdentifier");
      }

      let pathParams = {
        'clientId': clientId,
        'identifierId': identifierId
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
      let returnType = DeleteClientsClientIdIdentifiersIdentifierIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/identifiers/{identifierId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newClientIdentifierDetails operation.
     * @callback module:api/ClientIdentifierApi~newClientIdentifierDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdIdentifiersTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Client Identifier Details Template
     * This is a convenience resource useful for building maintenance user interface screens for client applications. The template data returned consists of any or all of:   Field Defaults  Allowed description Lists   Example Request: clients/1/identifiers/template
     * @param {Number} clientId clientId
     * @param {module:api/ClientIdentifierApi~newClientIdentifierDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdIdentifiersTemplateResponse}
     */
    newClientIdentifierDetails(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling newClientIdentifierDetails");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = GetClientsClientIdIdentifiersTemplateResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/identifiers/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllClientIdentifiers operation.
     * @callback module:api/ClientIdentifierApi~retrieveAllClientIdentifiersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetClientsClientIdIdentifiersResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Identifiers for a Client
     * Example Requests: clients/1/identifiers   clients/1/identifiers?fields=documentKey,documentType,description
     * @param {Number} clientId clientId
     * @param {module:api/ClientIdentifierApi~retrieveAllClientIdentifiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetClientsClientIdIdentifiersResponse>}
     */
    retrieveAllClientIdentifiers(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAllClientIdentifiers");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = [GetClientsClientIdIdentifiersResponse];
      return this.apiClient.callApi(
        '/clients/{clientId}/identifiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveClientIdentifiers operation.
     * @callback module:api/ClientIdentifierApi~retrieveClientIdentifiersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdIdentifiersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client Identifier
     * Example Requests: clients/1/identifier/2   clients/1/identifier/2?template=true  clients/1/identifiers/2?fields=documentKey,documentType,description
     * @param {Number} clientId clientId
     * @param {Number} identifierId identifierId
     * @param {module:api/ClientIdentifierApi~retrieveClientIdentifiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdIdentifiersResponse}
     */
    retrieveClientIdentifiers(clientId, identifierId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveClientIdentifiers");
      }
      // verify the required parameter 'identifierId' is set
      if (identifierId === undefined || identifierId === null) {
        throw new Error("Missing the required parameter 'identifierId' when calling retrieveClientIdentifiers");
      }

      let pathParams = {
        'clientId': clientId,
        'identifierId': identifierId
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
      let returnType = GetClientsClientIdIdentifiersResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/identifiers/{identifierId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientIdentifer operation.
     * @callback module:api/ClientIdentifierApi~updateClientIdentiferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutClientsClientIdIdentifiersIdentifierIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Client Identifier
     * Updates a Client Identifier
     * @param {Number} clientId clientId
     * @param {Number} identifierId identifierId
     * @param {module:model/PutClientsClientIdIdentifiersIdentifierIdRequest} putClientsClientIdIdentifiersIdentifierIdRequest 
     * @param {module:api/ClientIdentifierApi~updateClientIdentiferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutClientsClientIdIdentifiersIdentifierIdResponse}
     */
    updateClientIdentifer(clientId, identifierId, putClientsClientIdIdentifiersIdentifierIdRequest, callback) {
      let postBody = putClientsClientIdIdentifiersIdentifierIdRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling updateClientIdentifer");
      }
      // verify the required parameter 'identifierId' is set
      if (identifierId === undefined || identifierId === null) {
        throw new Error("Missing the required parameter 'identifierId' when calling updateClientIdentifer");
      }
      // verify the required parameter 'putClientsClientIdIdentifiersIdentifierIdRequest' is set
      if (putClientsClientIdIdentifiersIdentifierIdRequest === undefined || putClientsClientIdIdentifiersIdentifierIdRequest === null) {
        throw new Error("Missing the required parameter 'putClientsClientIdIdentifiersIdentifierIdRequest' when calling updateClientIdentifer");
      }

      let pathParams = {
        'clientId': clientId,
        'identifierId': identifierId
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
      let returnType = PutClientsClientIdIdentifiersIdentifierIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/identifiers/{identifierId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
