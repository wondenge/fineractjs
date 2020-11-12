


import ApiClient from "../ApiClient";
import DeleteEntityTypeEntityIdDocumentsResponse from '../model/DeleteEntityTypeEntityIdDocumentsResponse';
import FormDataBodyPart from '../model/FormDataBodyPart';
import GetEntityTypeEntityIdDocumentsResponse from '../model/GetEntityTypeEntityIdDocumentsResponse';
import PostEntityTypeEntityIdDocumentsResponse from '../model/PostEntityTypeEntityIdDocumentsResponse';
import PutEntityTypeEntityIdDocumentsResponse from '../model/PutEntityTypeEntityIdDocumentsResponse';

/**
* Documents service.
* @module api/DocumentsApi
* @version 1.0
*/
export default class DocumentsApi {

    /**
    * Constructs a new DocumentsApi. 
    * @alias module:api/DocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDocument operation.
     * @callback module:api/DocumentsApi~createDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostEntityTypeEntityIdDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Document
     * Note: A document is created using a Multi-part form upload   Body Parts  name :  Name or summary of the document  description :  Description of the document  file :  The file to be uploaded  Mandatory Fields :  file and description
     * @param {String} entityType entityType
     * @param {Number} entityId entityId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.contentLength Content-Length
     * @param {module:model/FormDataBodyPart} opts.file 
     * @param {String} opts.name name
     * @param {String} opts.description description
     * @param {module:api/DocumentsApi~createDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostEntityTypeEntityIdDocumentsResponse}
     */
    createDocument(entityType, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling createDocument");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling createDocument");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Length': opts['contentLength']
      };
      let formParams = {
        'file': opts['file'],
        'name': opts['name'],
        'description': opts['description']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PostEntityTypeEntityIdDocumentsResponse;
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDocument operation.
     * @callback module:api/DocumentsApi~deleteDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteEntityTypeEntityIdDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a Document
     * @param {String} entityType entityType
     * @param {Number} entityId entityId
     * @param {Number} documentId documentId
     * @param {module:api/DocumentsApi~deleteDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteEntityTypeEntityIdDocumentsResponse}
     */
    deleteDocument(entityType, entityId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling deleteDocument");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling deleteDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocument");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'documentId': documentId
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
      let returnType = DeleteEntityTypeEntityIdDocumentsResponse;
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/documents/{documentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadFile operation.
     * @callback module:api/DocumentsApi~downloadFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Binary File associated with Document
     * Request used to download the file associated with the document  Example Requests:  clients/1/documents/1/attachment   loans/1/documents/1/attachment
     * @param {String} entityType entityType
     * @param {Number} entityId entityId
     * @param {Number} documentId documentId
     * @param {module:api/DocumentsApi~downloadFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    downloadFile(entityType, entityId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling downloadFile");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling downloadFile");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling downloadFile");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'documentId': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/documents/{documentId}/attachment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDocument operation.
     * @callback module:api/DocumentsApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetEntityTypeEntityIdDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Document
     * Example Requests:  clients/1/documents/1   loans/1/documents/1   client_identifiers/1/documents/1?fields=name,description
     * @param {String} entityType entityType
     * @param {Number} entityId entityId
     * @param {Number} documentId documentId
     * @param {module:api/DocumentsApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetEntityTypeEntityIdDocumentsResponse}
     */
    getDocument(entityType, entityId, documentId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling getDocument");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'documentId': documentId
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
      let returnType = GetEntityTypeEntityIdDocumentsResponse;
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllDocuments operation.
     * @callback module:api/DocumentsApi~retrieveAllDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetEntityTypeEntityIdDocumentsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List documents
     * Example Requests:  clients/1/documents  client_identifiers/1/documents  loans/1/documents?fields=name,description
     * @param {String} entityType entityType
     * @param {Number} entityId entityId
     * @param {module:api/DocumentsApi~retrieveAllDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetEntityTypeEntityIdDocumentsResponse>}
     */
    retrieveAllDocuments(entityType, entityId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling retrieveAllDocuments");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveAllDocuments");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
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
      let returnType = [GetEntityTypeEntityIdDocumentsResponse];
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDocument operation.
     * @callback module:api/DocumentsApi~updateDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutEntityTypeEntityIdDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Document
     * Note: A document is updated using a Multi-part form upload  Body Parts name Name or summary of the document description Description of the document file The file to be uploaded
     * @param {String} entityType entityType
     * @param {Number} entityId entityId
     * @param {Number} documentId documentId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.contentLength Content-Length
     * @param {module:model/FormDataBodyPart} opts.file 
     * @param {String} opts.name name
     * @param {String} opts.description description
     * @param {module:api/DocumentsApi~updateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutEntityTypeEntityIdDocumentsResponse}
     */
    updateDocument(entityType, entityId, documentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling updateDocument");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateDocument");
      }
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocument");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'documentId': documentId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Length': opts['contentLength']
      };
      let formParams = {
        'file': opts['file'],
        'name': opts['name'],
        'description': opts['description']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PutEntityTypeEntityIdDocumentsResponse;
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/documents/{documentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
