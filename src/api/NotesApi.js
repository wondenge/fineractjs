


import ApiClient from "../ApiClient";
import DeleteResourceTypeResourceIdNotesNoteIdResponse from '../model/DeleteResourceTypeResourceIdNotesNoteIdResponse';
import GetResourceTypeResourceIdNotesNoteIdResponse from '../model/GetResourceTypeResourceIdNotesNoteIdResponse';
import GetResourceTypeResourceIdNotesResponse from '../model/GetResourceTypeResourceIdNotesResponse';
import PostResourceTypeResourceIdNotesRequest from '../model/PostResourceTypeResourceIdNotesRequest';
import PostResourceTypeResourceIdNotesResponse from '../model/PostResourceTypeResourceIdNotesResponse';
import PutResourceTypeResourceIdNotesNoteIdRequest from '../model/PutResourceTypeResourceIdNotesNoteIdRequest';
import PutResourceTypeResourceIdNotesNoteIdResponse from '../model/PutResourceTypeResourceIdNotesNoteIdResponse';

/**
* Notes service.
* @module api/NotesApi
* @version 1.0
*/
export default class NotesApi {

    /**
    * Constructs a new NotesApi. 
    * @alias module:api/NotesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addNewNote operation.
     * @callback module:api/NotesApi~addNewNoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostResourceTypeResourceIdNotesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a Resource Note
     * Adds a new note to a supported resource.  Example Requests:  clients/1/notes   groups/1/notes
     * @param {String} resourceType resourceType
     * @param {Number} resourceId resourceId
     * @param {module:model/PostResourceTypeResourceIdNotesRequest} postResourceTypeResourceIdNotesRequest 
     * @param {module:api/NotesApi~addNewNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostResourceTypeResourceIdNotesResponse}
     */
    addNewNote(resourceType, resourceId, postResourceTypeResourceIdNotesRequest, callback) {
      let postBody = postResourceTypeResourceIdNotesRequest;
      // verify the required parameter 'resourceType' is set
      if (resourceType === undefined || resourceType === null) {
        throw new Error("Missing the required parameter 'resourceType' when calling addNewNote");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling addNewNote");
      }
      // verify the required parameter 'postResourceTypeResourceIdNotesRequest' is set
      if (postResourceTypeResourceIdNotesRequest === undefined || postResourceTypeResourceIdNotesRequest === null) {
        throw new Error("Missing the required parameter 'postResourceTypeResourceIdNotesRequest' when calling addNewNote");
      }

      let pathParams = {
        'resourceType': resourceType,
        'resourceId': resourceId
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
      let returnType = PostResourceTypeResourceIdNotesResponse;
      return this.apiClient.callApi(
        '/{resourceType}/{resourceId}/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNote operation.
     * @callback module:api/NotesApi~deleteNoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResourceTypeResourceIdNotesNoteIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Resource Note
     * Deletes a Resource Note
     * @param {String} resourceType resourceType
     * @param {Number} resourceId resourceId
     * @param {Number} noteId noteId
     * @param {module:api/NotesApi~deleteNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResourceTypeResourceIdNotesNoteIdResponse}
     */
    deleteNote(resourceType, resourceId, noteId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceType' is set
      if (resourceType === undefined || resourceType === null) {
        throw new Error("Missing the required parameter 'resourceType' when calling deleteNote");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling deleteNote");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling deleteNote");
      }

      let pathParams = {
        'resourceType': resourceType,
        'resourceId': resourceId,
        'noteId': noteId
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
      let returnType = DeleteResourceTypeResourceIdNotesNoteIdResponse;
      return this.apiClient.callApi(
        '/{resourceType}/{resourceId}/notes/{noteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveNote operation.
     * @callback module:api/NotesApi~retrieveNoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetResourceTypeResourceIdNotesNoteIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Resource Note
     * Retrieves a Resource Note  Example Requests:  clients/1/notes/76   groups/1/notes/20   clients/1/notes/76?fields=note,createdOn,createdByUsername   groups/1/notes/20?fields=note,createdOn,createdByUsername
     * @param {String} resourceType resourceType
     * @param {Number} resourceId resourceId
     * @param {Number} noteId noteId
     * @param {module:api/NotesApi~retrieveNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetResourceTypeResourceIdNotesNoteIdResponse}
     */
    retrieveNote(resourceType, resourceId, noteId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceType' is set
      if (resourceType === undefined || resourceType === null) {
        throw new Error("Missing the required parameter 'resourceType' when calling retrieveNote");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveNote");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling retrieveNote");
      }

      let pathParams = {
        'resourceType': resourceType,
        'resourceId': resourceId,
        'noteId': noteId
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
      let returnType = GetResourceTypeResourceIdNotesNoteIdResponse;
      return this.apiClient.callApi(
        '/{resourceType}/{resourceId}/notes/{noteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveNotesByResource operation.
     * @callback module:api/NotesApi~retrieveNotesByResourceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetResourceTypeResourceIdNotesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Resource's description
     * Retrieves a Resource's Notes  Note: Notes are returned in descending createOn order.  Example Requests:  clients/2/notes   groups/2/notes?fields=note,createdOn,createdByUsername
     * @param {String} resourceType resourceType
     * @param {Number} resourceId resourceId
     * @param {module:api/NotesApi~retrieveNotesByResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetResourceTypeResourceIdNotesResponse>}
     */
    retrieveNotesByResource(resourceType, resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceType' is set
      if (resourceType === undefined || resourceType === null) {
        throw new Error("Missing the required parameter 'resourceType' when calling retrieveNotesByResource");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveNotesByResource");
      }

      let pathParams = {
        'resourceType': resourceType,
        'resourceId': resourceId
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
      let returnType = [GetResourceTypeResourceIdNotesResponse];
      return this.apiClient.callApi(
        '/{resourceType}/{resourceId}/notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNote operation.
     * @callback module:api/NotesApi~updateNoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutResourceTypeResourceIdNotesNoteIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Resource Note
     * Updates a Resource Note
     * @param {String} resourceType resourceType
     * @param {Number} resourceId resourceId
     * @param {Number} noteId noteId
     * @param {module:model/PutResourceTypeResourceIdNotesNoteIdRequest} putResourceTypeResourceIdNotesNoteIdRequest 
     * @param {module:api/NotesApi~updateNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutResourceTypeResourceIdNotesNoteIdResponse}
     */
    updateNote(resourceType, resourceId, noteId, putResourceTypeResourceIdNotesNoteIdRequest, callback) {
      let postBody = putResourceTypeResourceIdNotesNoteIdRequest;
      // verify the required parameter 'resourceType' is set
      if (resourceType === undefined || resourceType === null) {
        throw new Error("Missing the required parameter 'resourceType' when calling updateNote");
      }
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling updateNote");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling updateNote");
      }
      // verify the required parameter 'putResourceTypeResourceIdNotesNoteIdRequest' is set
      if (putResourceTypeResourceIdNotesNoteIdRequest === undefined || putResourceTypeResourceIdNotesNoteIdRequest === null) {
        throw new Error("Missing the required parameter 'putResourceTypeResourceIdNotesNoteIdRequest' when calling updateNote");
      }

      let pathParams = {
        'resourceType': resourceType,
        'resourceId': resourceId,
        'noteId': noteId
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
      let returnType = PutResourceTypeResourceIdNotesNoteIdResponse;
      return this.apiClient.callApi(
        '/{resourceType}/{resourceId}/notes/{noteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
