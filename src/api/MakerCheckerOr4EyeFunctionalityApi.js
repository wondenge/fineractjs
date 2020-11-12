


import ApiClient from "../ApiClient";
import GetMakerCheckerResponse from '../model/GetMakerCheckerResponse';
import GetMakerCheckersSearchTemplateResponse from '../model/GetMakerCheckersSearchTemplateResponse';
import PostMakerCheckersResponse from '../model/PostMakerCheckersResponse';

/**
* MakerCheckerOr4EyeFunctionality service.
* @module api/MakerCheckerOr4EyeFunctionalityApi
* @version 1.0
*/
export default class MakerCheckerOr4EyeFunctionalityApi {

    /**
    * Constructs a new MakerCheckerOr4EyeFunctionalityApi. 
    * @alias module:api/MakerCheckerOr4EyeFunctionalityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the approveMakerCheckerEntry operation.
     * @callback module:api/MakerCheckerOr4EyeFunctionalityApi~approveMakerCheckerEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostMakerCheckersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve Maker Checker Entry | Reject Maker Checker Entry
     * @param {Number} auditId auditId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/MakerCheckerOr4EyeFunctionalityApi~approveMakerCheckerEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostMakerCheckersResponse}
     */
    approveMakerCheckerEntry(auditId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'auditId' is set
      if (auditId === undefined || auditId === null) {
        throw new Error("Missing the required parameter 'auditId' when calling approveMakerCheckerEntry");
      }

      let pathParams = {
        'auditId': auditId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PostMakerCheckersResponse;
      return this.apiClient.callApi(
        '/makercheckers/{auditId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMakerCheckerEntry operation.
     * @callback module:api/MakerCheckerOr4EyeFunctionalityApi~deleteMakerCheckerEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostMakerCheckersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Maker Checker Entry
     * @param {Number} auditId auditId
     * @param {module:api/MakerCheckerOr4EyeFunctionalityApi~deleteMakerCheckerEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostMakerCheckersResponse}
     */
    deleteMakerCheckerEntry(auditId, callback) {
      let postBody = null;
      // verify the required parameter 'auditId' is set
      if (auditId === undefined || auditId === null) {
        throw new Error("Missing the required parameter 'auditId' when calling deleteMakerCheckerEntry");
      }

      let pathParams = {
        'auditId': auditId
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
      let returnType = PostMakerCheckersResponse;
      return this.apiClient.callApi(
        '/makercheckers/{auditId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAuditSearchTemplate1 operation.
     * @callback module:api/MakerCheckerOr4EyeFunctionalityApi~retrieveAuditSearchTemplate1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMakerCheckersSearchTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Maker Checker Search Template
     * This is a convenience resource. It can be useful when building a Checker Inbox UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with. \"actionNames\" and \"entityNames\" returned are those that the requestor has Checker approval permissions for.  Example Requests:  makercheckers/searchtemplate makercheckers/searchtemplate?fields=entityNames
     * @param {module:api/MakerCheckerOr4EyeFunctionalityApi~retrieveAuditSearchTemplate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMakerCheckersSearchTemplateResponse}
     */
    retrieveAuditSearchTemplate1(callback) {
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
      let returnType = GetMakerCheckersSearchTemplateResponse;
      return this.apiClient.callApi(
        '/makercheckers/searchtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCommands operation.
     * @callback module:api/MakerCheckerOr4EyeFunctionalityApi~retrieveCommandsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetMakerCheckerResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Maker Checker Entries
     * Get a list of entries that can be checked by the requestor that match the criteria supplied.  Example Requests:  makercheckers  makercheckers?fields=madeOnDate,maker,processingResult  makercheckers?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  makercheckers?officeId=1  makercheckers?officeId=1&includeJson=true
     * @param {Object} opts Optional parameters
     * @param {String} opts.actionName actionName
     * @param {String} opts.entityName entityName
     * @param {Number} opts.resourceId resourceId
     * @param {Number} opts.makerId makerId
     * @param {String} opts.makerDateTimeFrom makerDateTimeFrom
     * @param {String} opts.makerDateTimeTo makerDateTimeTo
     * @param {Number} opts.officeId officeId
     * @param {Number} opts.groupId groupId
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.loanid loanid
     * @param {Number} opts.savingsAccountId savingsAccountId
     * @param {module:api/MakerCheckerOr4EyeFunctionalityApi~retrieveCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetMakerCheckerResponse>}
     */
    retrieveCommands(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'actionName': opts['actionName'],
        'entityName': opts['entityName'],
        'resourceId': opts['resourceId'],
        'makerId': opts['makerId'],
        'makerDateTimeFrom': opts['makerDateTimeFrom'],
        'makerDateTimeTo': opts['makerDateTimeTo'],
        'officeId': opts['officeId'],
        'groupId': opts['groupId'],
        'clientId': opts['clientId'],
        'loanid': opts['loanid'],
        'savingsAccountId': opts['savingsAccountId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetMakerCheckerResponse];
      return this.apiClient.callApi(
        '/makercheckers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
