


import ApiClient from "../ApiClient";
import GetMakerCheckerResponse from '../model/GetMakerCheckerResponse';
import GetMakerCheckersSearchTemplateResponse from '../model/GetMakerCheckersSearchTemplateResponse';

/**
* Audits service.
* @module api/AuditsApi
* @version 1.0
*/
export default class AuditsApi {

    /**
    * Constructs a new AuditsApi. 
    * @alias module:api/AuditsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAuditEntries operation.
     * @callback module:api/AuditsApi~retrieveAuditEntriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetMakerCheckerResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Audits
     * Get a 200 list of audits that match the criteria supplied and sorted by audit id in descending order, and are within the requestors' data scope. Also it supports pagination and sorting  Example Requests:  audits  audits?fields=madeOnDate,maker,processingResult  audits?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  audits?officeId=1  audits?officeId=1&includeJson=true
     * @param {Object} opts Optional parameters
     * @param {String} opts.actionName actionName
     * @param {String} opts.entityName entityName
     * @param {Number} opts.resourceId resourceId
     * @param {Number} opts.makerId makerId
     * @param {String} opts.makerDateTimeFrom makerDateTimeFrom
     * @param {String} opts.makerDateTimeTo makerDateTimeTo
     * @param {Number} opts.checkerId checkerId
     * @param {String} opts.checkerDateTimeFrom checkerDateTimeFrom
     * @param {String} opts.checkerDateTimeTo checkerDateTimeTo
     * @param {Number} opts.processingResult processingResult
     * @param {Number} opts.officeId officeId
     * @param {Number} opts.groupId groupId
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.loanid loanid
     * @param {Number} opts.savingsAccountId savingsAccountId
     * @param {Boolean} opts.paged paged
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/AuditsApi~retrieveAuditEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetMakerCheckerResponse>}
     */
    retrieveAuditEntries(opts, callback) {
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
        'checkerId': opts['checkerId'],
        'checkerDateTimeFrom': opts['checkerDateTimeFrom'],
        'checkerDateTimeTo': opts['checkerDateTimeTo'],
        'processingResult': opts['processingResult'],
        'officeId': opts['officeId'],
        'groupId': opts['groupId'],
        'clientId': opts['clientId'],
        'loanid': opts['loanid'],
        'savingsAccountId': opts['savingsAccountId'],
        'paged': opts['paged'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder']
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
        '/audits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAuditEntry operation.
     * @callback module:api/AuditsApi~retrieveAuditEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMakerCheckerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Audit Entry
     * Example Requests:  audits/20 audits/20?fields=madeOnDate,maker,processingResult
     * @param {Number} auditId auditId
     * @param {module:api/AuditsApi~retrieveAuditEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMakerCheckerResponse}
     */
    retrieveAuditEntry(auditId, callback) {
      let postBody = null;
      // verify the required parameter 'auditId' is set
      if (auditId === undefined || auditId === null) {
        throw new Error("Missing the required parameter 'auditId' when calling retrieveAuditEntry");
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
      let returnType = GetMakerCheckerResponse;
      return this.apiClient.callApi(
        '/audits/{auditId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAuditSearchTemplate operation.
     * @callback module:api/AuditsApi~retrieveAuditSearchTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMakerCheckersSearchTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Audit Search Template
     * This is a convenience resource. It can be useful when building an Audit Search UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with.  Example Requests:  audits/searchtemplate audits/searchtemplate?fields=actionNames
     * @param {module:api/AuditsApi~retrieveAuditSearchTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMakerCheckersSearchTemplateResponse}
     */
    retrieveAuditSearchTemplate(callback) {
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
        '/audits/searchtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
