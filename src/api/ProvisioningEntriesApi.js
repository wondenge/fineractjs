


import ApiClient from "../ApiClient";
import LoanProductProvisioningEntryData from '../model/LoanProductProvisioningEntryData';
import PostProvisioningEntriesRequest from '../model/PostProvisioningEntriesRequest';
import PostProvisioningEntriesResponse from '../model/PostProvisioningEntriesResponse';
import ProvisioningEntryData from '../model/ProvisioningEntryData';
import PutProvisioningEntriesRequest from '../model/PutProvisioningEntriesRequest';
import PutProvisioningEntriesResponse from '../model/PutProvisioningEntriesResponse';

/**
* ProvisioningEntries service.
* @module api/ProvisioningEntriesApi
* @version 1.0
*/
export default class ProvisioningEntriesApi {

    /**
    * Constructs a new ProvisioningEntriesApi. 
    * @alias module:api/ProvisioningEntriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProvisioningEntries operation.
     * @callback module:api/ProvisioningEntriesApi~createProvisioningEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostProvisioningEntriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Provisioning Entries
     * Creates a new Provisioning Entries  Mandatory Fields date dateFormat locale Optional Fields createjournalentries
     * @param {Object} opts Optional parameters
     * @param {module:model/PostProvisioningEntriesRequest} opts.postProvisioningEntriesRequest 
     * @param {module:api/ProvisioningEntriesApi~createProvisioningEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostProvisioningEntriesResponse}
     */
    createProvisioningEntries(opts, callback) {
      opts = opts || {};
      let postBody = opts['postProvisioningEntriesRequest'];

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
      let returnType = PostProvisioningEntriesResponse;
      return this.apiClient.callApi(
        '/provisioningentries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyProvisioningEntry operation.
     * @callback module:api/ProvisioningEntriesApi~modifyProvisioningEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutProvisioningEntriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recreates Provisioning Entry
     * Recreates Provisioning Entry | createjournalentry.
     * @param {Number} entryId entryId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command=createjournalentry command=recreateprovisioningentry
     * @param {module:model/PutProvisioningEntriesRequest} opts.putProvisioningEntriesRequest 
     * @param {module:api/ProvisioningEntriesApi~modifyProvisioningEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutProvisioningEntriesResponse}
     */
    modifyProvisioningEntry(entryId, opts, callback) {
      opts = opts || {};
      let postBody = opts['putProvisioningEntriesRequest'];
      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling modifyProvisioningEntry");
      }

      let pathParams = {
        'entryId': entryId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutProvisioningEntriesResponse;
      return this.apiClient.callApi(
        '/provisioningentries/{entryId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllProvisioningEntries operation.
     * @callback module:api/ProvisioningEntriesApi~retrieveAllProvisioningEntriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProvisioningEntryData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Provisioning Entries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/ProvisioningEntriesApi~retrieveAllProvisioningEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProvisioningEntryData>}
     */
    retrieveAllProvisioningEntries(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProvisioningEntryData];
      return this.apiClient.callApi(
        '/provisioningentries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveProviioningEntries operation.
     * @callback module:api/ProvisioningEntriesApi~retrieveProviioningEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoanProductProvisioningEntryData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.entryId 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {Number} opts.officeId 
     * @param {Number} opts.productId 
     * @param {Number} opts.categoryId 
     * @param {module:api/ProvisioningEntriesApi~retrieveProviioningEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoanProductProvisioningEntryData}
     */
    retrieveProviioningEntries(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'entryId': opts['entryId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'officeId': opts['officeId'],
        'productId': opts['productId'],
        'categoryId': opts['categoryId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoanProductProvisioningEntryData;
      return this.apiClient.callApi(
        '/provisioningentries/entries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveProvisioningEntry operation.
     * @callback module:api/ProvisioningEntriesApi~retrieveProvisioningEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProvisioningEntryData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Provisioning Entry
     * Returns the details of a generated Provisioning Entry.
     * @param {Number} entryId entryId
     * @param {module:api/ProvisioningEntriesApi~retrieveProvisioningEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProvisioningEntryData}
     */
    retrieveProvisioningEntry(entryId, callback) {
      let postBody = null;
      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling retrieveProvisioningEntry");
      }

      let pathParams = {
        'entryId': entryId
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
      let returnType = ProvisioningEntryData;
      return this.apiClient.callApi(
        '/provisioningentries/{entryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
