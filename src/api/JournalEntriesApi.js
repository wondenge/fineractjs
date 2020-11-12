


import ApiClient from "../ApiClient";
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import JournalEntryCommand from '../model/JournalEntryCommand';
import JournalEntryData from '../model/JournalEntryData';
import PostJournalEntriesResponse from '../model/PostJournalEntriesResponse';
import PostJournalEntriesTransactionIdRequest from '../model/PostJournalEntriesTransactionIdRequest';
import PostJournalEntriesTransactionIdResponse from '../model/PostJournalEntriesTransactionIdResponse';

/**
* JournalEntries service.
* @module api/JournalEntriesApi
* @version 1.0
*/
export default class JournalEntriesApi {

    /**
    * Constructs a new JournalEntriesApi. 
    * @alias module:api/JournalEntriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createGLJournalEntry operation.
     * @callback module:api/JournalEntriesApi~createGLJournalEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostJournalEntriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create \"Balanced\" Journal Entries
     * Note: A Balanced (simple) Journal entry would have atleast one \"Debit\" and one \"Credit\" entry whose amounts are equal  Compound Journal entries may have \"n\" debits and \"m\" credits where both \"m\" and \"n\" are greater than 0 and the net sum or all debits and credits are equal    Mandatory Fields officeId, transactionDate   credits- glAccountId, amount, comments    debits-  glAccountId, amount, comments    Optional Fields paymentTypeId, accountNumber, checkNumber, routingCode, receiptNumber, bankNumber
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:model/JournalEntryCommand} opts.journalEntryCommand 
     * @param {module:api/JournalEntriesApi~createGLJournalEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostJournalEntriesResponse}
     */
    createGLJournalEntry(opts, callback) {
      opts = opts || {};
      let postBody = opts['journalEntryCommand'];

      let pathParams = {
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
      let returnType = PostJournalEntriesResponse;
      return this.apiClient.callApi(
        '/journalentries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createReversalJournalEntry operation.
     * @callback module:api/JournalEntriesApi~createReversalJournalEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostJournalEntriesTransactionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Running balances for Journal Entries
     * This API calculates the running balances for office. If office ID not provided this API calculates running balances for all offices.  Mandatory Fields officeId
     * @param {String} transactionId transactionId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:model/PostJournalEntriesTransactionIdRequest} opts.postJournalEntriesTransactionIdRequest 
     * @param {module:api/JournalEntriesApi~createReversalJournalEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostJournalEntriesTransactionIdResponse}
     */
    createReversalJournalEntry(transactionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['postJournalEntriesTransactionIdRequest'];
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling createReversalJournalEntry");
      }

      let pathParams = {
        'transactionId': transactionId
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
      let returnType = PostJournalEntriesTransactionIdResponse;
      return this.apiClient.callApi(
        '/journalentries/{transactionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJournalEntriesTemplate operation.
     * @callback module:api/JournalEntriesApi~getJournalEntriesTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/JournalEntriesApi~getJournalEntriesTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getJournalEntriesTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/vnd.ms-excel'];
      let returnType = null;
      return this.apiClient.callApi(
        '/journalentries/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postJournalEntriesTemplate operation.
     * @callback module:api/JournalEntriesApi~postJournalEntriesTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/JournalEntriesApi~postJournalEntriesTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postJournalEntriesTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/journalentries/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreiveJournalEntryById operation.
     * @callback module:api/JournalEntriesApi~retreiveJournalEntryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalEntryData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a single Entry
     * Example Requests:  journalentries/1    journalentries/1?fields=officeName,glAccountId,entryType,amount  journalentries/1?runningBalance=true  journalentries/1?transactionDetails=true
     * @param {Number} journalEntryId journalEntryId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.runningBalance runningBalance
     * @param {Boolean} opts.transactionDetails transactionDetails
     * @param {module:api/JournalEntriesApi~retreiveJournalEntryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalEntryData}
     */
    retreiveJournalEntryById(journalEntryId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'journalEntryId' is set
      if (journalEntryId === undefined || journalEntryId === null) {
        throw new Error("Missing the required parameter 'journalEntryId' when calling retreiveJournalEntryById");
      }

      let pathParams = {
        'journalEntryId': journalEntryId
      };
      let queryParams = {
        'runningBalance': opts['runningBalance'],
        'transactionDetails': opts['transactionDetails']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JournalEntryData;
      return this.apiClient.callApi(
        '/journalentries/{journalEntryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll1 operation.
     * @callback module:api/JournalEntriesApi~retrieveAll1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JournalEntryData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Journal Entries
     * The list capability of journal entries can support pagination and sorting.  Example Requests:  journalentries  journalentries?transactionId=PB37X8Y21EQUY4S  journalentries?officeId=1&manualEntriesOnly=true&fromDate=1 July 2013&toDate=15 July 2013&dateFormat=dd MMMM yyyy&locale=en  journalentries?fields=officeName,glAccountName,transactionDate  journalentries?offset=10&limit=50  journalentries?orderBy=transactionId&sortOrder=DESC  journalentries?runningBalance=true  journalentries?transactionDetails=true  journalentries?loanId=12  journalentries?savingsId=24
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {Number} opts.glAccountId glAccountId
     * @param {Boolean} opts.manualEntriesOnly manualEntriesOnly
     * @param {Object} opts.fromDate fromDate
     * @param {Object} opts.toDate toDate
     * @param {String} opts.transactionId transactionId
     * @param {Number} opts.entityType entityType
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {String} opts.locale locale
     * @param {String} opts.dateFormat dateFormat
     * @param {Number} opts.loanId loanId
     * @param {Number} opts.savingsId savingsId
     * @param {Boolean} opts.runningBalance runningBalance
     * @param {Boolean} opts.transactionDetails transactionDetails
     * @param {module:api/JournalEntriesApi~retrieveAll1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/JournalEntryData>}
     */
    retrieveAll1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'glAccountId': opts['glAccountId'],
        'manualEntriesOnly': opts['manualEntriesOnly'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'transactionId': opts['transactionId'],
        'entityType': opts['entityType'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat'],
        'loanId': opts['loanId'],
        'savingsId': opts['savingsId'],
        'runningBalance': opts['runningBalance'],
        'transactionDetails': opts['transactionDetails']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [JournalEntryData];
      return this.apiClient.callApi(
        '/journalentries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveJournalEntries operation.
     * @callback module:api/JournalEntriesApi~retrieveJournalEntriesCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {Number} opts.entryId 
     * @param {module:api/JournalEntriesApi~retrieveJournalEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveJournalEntries(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'entryId': opts['entryId']
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
        '/journalentries/provisioning', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOpeningBalance operation.
     * @callback module:api/JournalEntriesApi~retrieveOpeningBalanceCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.currencyCode 
     * @param {module:api/JournalEntriesApi~retrieveOpeningBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOpeningBalance(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'currencyCode': opts['currencyCode']
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
        '/journalentries/openingbalance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
