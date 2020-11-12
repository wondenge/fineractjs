


import ApiClient from "../ApiClient";
import AccountingRuleData from '../model/AccountingRuleData';
import DeleteAccountingRulesResponse from '../model/DeleteAccountingRulesResponse';
import GetAccountRulesResponse from '../model/GetAccountRulesResponse';
import GetAccountRulesTemplateResponse from '../model/GetAccountRulesTemplateResponse';
import PostAccountingRulesRequest from '../model/PostAccountingRulesRequest';
import PostAccountingRulesResponse from '../model/PostAccountingRulesResponse';
import PutAccountingRulesRequest from '../model/PutAccountingRulesRequest';
import PutAccountingRulesResponse from '../model/PutAccountingRulesResponse';

/**
* AccountingRules service.
* @module api/AccountingRulesApi
* @version 1.0
*/
export default class AccountingRulesApi {

    /**
    * Constructs a new AccountingRulesApi. 
    * @alias module:api/AccountingRulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAccountingRule operation.
     * @callback module:api/AccountingRulesApi~createAccountingRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAccountingRulesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/Define a Accounting rule
     * Define a new Accounting rule.  Mandatory Fields name, officeId, accountToDebit OR debitTags, accountToCredit OR creditTags.  Optional Fields description
     * @param {Object} opts Optional parameters
     * @param {module:model/PostAccountingRulesRequest} opts.postAccountingRulesRequest 
     * @param {module:api/AccountingRulesApi~createAccountingRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAccountingRulesResponse}
     */
    createAccountingRule(opts, callback) {
      opts = opts || {};
      let postBody = opts['postAccountingRulesRequest'];

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
      let returnType = PostAccountingRulesResponse;
      return this.apiClient.callApi(
        '/accountingrules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAccountingRule operation.
     * @callback module:api/AccountingRulesApi~deleteAccountingRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAccountingRulesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Accounting Rule
     * Deletes a Accounting rule.
     * @param {Number} accountingRuleId accountingRuleId
     * @param {module:api/AccountingRulesApi~deleteAccountingRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAccountingRulesResponse}
     */
    deleteAccountingRule(accountingRuleId, callback) {
      let postBody = null;
      // verify the required parameter 'accountingRuleId' is set
      if (accountingRuleId === undefined || accountingRuleId === null) {
        throw new Error("Missing the required parameter 'accountingRuleId' when calling deleteAccountingRule");
      }

      let pathParams = {
        'accountingRuleId': accountingRuleId
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
      let returnType = DeleteAccountingRulesResponse;
      return this.apiClient.callApi(
        '/accountingrules/{accountingRuleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreiveAccountingRule operation.
     * @callback module:api/AccountingRulesApi~retreiveAccountingRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountingRuleData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Accounting rule
     * Returns the details of a defined Accounting rule.  Example Requests:  accountingrules/1
     * @param {Number} accountingRuleId accountingRuleId
     * @param {module:api/AccountingRulesApi~retreiveAccountingRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountingRuleData}
     */
    retreiveAccountingRule(accountingRuleId, callback) {
      let postBody = null;
      // verify the required parameter 'accountingRuleId' is set
      if (accountingRuleId === undefined || accountingRuleId === null) {
        throw new Error("Missing the required parameter 'accountingRuleId' when calling retreiveAccountingRule");
      }

      let pathParams = {
        'accountingRuleId': accountingRuleId
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
      let returnType = AccountingRuleData;
      return this.apiClient.callApi(
        '/accountingrules/{accountingRuleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllAccountingRules operation.
     * @callback module:api/AccountingRulesApi~retrieveAllAccountingRulesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAccountRulesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Accounting Rules
     * Returns the list of defined accounting rules.  Example Requests:  accountingrules
     * @param {module:api/AccountingRulesApi~retrieveAllAccountingRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAccountRulesResponse>}
     */
    retrieveAllAccountingRules(callback) {
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
      let returnType = [GetAccountRulesResponse];
      return this.apiClient.callApi(
        '/accountingrules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate1 operation.
     * @callback module:api/AccountingRulesApi~retrieveTemplate1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountRulesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Accounting Rule Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  accountingrules/template
     * @param {module:api/AccountingRulesApi~retrieveTemplate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountRulesTemplateResponse}
     */
    retrieveTemplate1(callback) {
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
      let returnType = GetAccountRulesTemplateResponse;
      return this.apiClient.callApi(
        '/accountingrules/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAccountingRule operation.
     * @callback module:api/AccountingRulesApi~updateAccountingRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutAccountingRulesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Accounting Rule
     * Updates the details of a Accounting rule.
     * @param {Number} accountingRuleId accountingRuleId
     * @param {Object} opts Optional parameters
     * @param {module:model/PutAccountingRulesRequest} opts.putAccountingRulesRequest 
     * @param {module:api/AccountingRulesApi~updateAccountingRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutAccountingRulesResponse}
     */
    updateAccountingRule(accountingRuleId, opts, callback) {
      opts = opts || {};
      let postBody = opts['putAccountingRulesRequest'];
      // verify the required parameter 'accountingRuleId' is set
      if (accountingRuleId === undefined || accountingRuleId === null) {
        throw new Error("Missing the required parameter 'accountingRuleId' when calling updateAccountingRule");
      }

      let pathParams = {
        'accountingRuleId': accountingRuleId
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
      let returnType = PutAccountingRulesResponse;
      return this.apiClient.callApi(
        '/accountingrules/{accountingRuleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
