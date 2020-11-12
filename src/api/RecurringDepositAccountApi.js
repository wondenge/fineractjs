


import ApiClient from "../ApiClient";
import DeleteRecurringDepositAccountsResponse from '../model/DeleteRecurringDepositAccountsResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetRecurringDepositAccountsAccountIdResponse from '../model/GetRecurringDepositAccountsAccountIdResponse';
import GetRecurringDepositAccountsResponse from '../model/GetRecurringDepositAccountsResponse';
import GetRecurringDepositAccountsTemplateResponse from '../model/GetRecurringDepositAccountsTemplateResponse';
import PostRecurringDepositAccountsAccountIdResponse from '../model/PostRecurringDepositAccountsAccountIdResponse';
import PostRecurringDepositAccountsRequest from '../model/PostRecurringDepositAccountsRequest';
import PostRecurringDepositAccountsResponse from '../model/PostRecurringDepositAccountsResponse';
import PutRecurringDepositAccountsAccountIdRequest from '../model/PutRecurringDepositAccountsAccountIdRequest';
import PutRecurringDepositAccountsAccountIdResponse from '../model/PutRecurringDepositAccountsAccountIdResponse';

/**
* RecurringDepositAccount service.
* @module api/RecurringDepositAccountApi
* @version 1.0
*/
export default class RecurringDepositAccountApi {

    /**
    * Constructs a new RecurringDepositAccountApi. 
    * @alias module:api/RecurringDepositAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountClosureTemplate1 operation.
     * @callback module:api/RecurringDepositAccountApi~accountClosureTemplate1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/RecurringDepositAccountApi~accountClosureTemplate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    accountClosureTemplate1(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountClosureTemplate1");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{accountId}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete16 operation.
     * @callback module:api/RecurringDepositAccountApi~delete16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteRecurringDepositAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a recurring deposit application
     * At present we support hard delete of recurring deposit application so long as its in 'Submitted and pending approval' state. One the application is moves past this state, it is not possible to do a 'hard' delete of the application or the account. An API endpoint will be added to close/de-activate the recurring deposit account.
     * @param {Number} accountId accountId
     * @param {module:api/RecurringDepositAccountApi~delete16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteRecurringDepositAccountsResponse}
     */
    delete16(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling delete16");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = DeleteRecurringDepositAccountsResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{accountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRecurringDepositTemplate operation.
     * @callback module:api/RecurringDepositAccountApi~getRecurringDepositTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/RecurringDepositAccountApi~getRecurringDepositTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getRecurringDepositTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'staffId': opts['staffId'],
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
        '/recurringdepositaccounts/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRecurringDepositTransactionTemplate operation.
     * @callback module:api/RecurringDepositAccountApi~getRecurringDepositTransactionTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/RecurringDepositAccountApi~getRecurringDepositTransactionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getRecurringDepositTransactionTemplate(opts, callback) {
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
        '/recurringdepositaccounts/transactions/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands5 operation.
     * @callback module:api/RecurringDepositAccountApi~handleCommands5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRecurringDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve recurring deposit application | Undo approval recurring deposit application | Reject recurring deposit application | Withdraw recurring deposit application | Activate a recurring deposit account | Update the recommended deposit amount for a recurring deposit account | Close a recurring deposit account | Premature Close a recurring deposit account | Calculate Premature amount on Recurring deposit account | Calculate Interest on recurring Deposit Account | Post Interest on recurring Deposit Account
     * Approve recurring deposit application:  Approves recurring deposit application so long as its in 'Submitted and pending approval' state.  Undo approval recurring deposit application:  Will move 'approved' recurring deposit application back to 'Submitted and pending approval' state.  Reject recurring deposit application  Rejects recurring deposit application so long as its in 'Submitted and pending approval' state.  Withdraw recurring deposit application:  Used when an applicant withdraws from the recurring deposit application. It must be in 'Submitted and pending approval' state.  Activate a recurring deposit account:  Results in an approved recurring deposit application being converted into an 'active' recurring deposit account.  Update the recommended deposit amount for a recurring deposit account:  Updates the recommended deposit amount for a RD account as on the effective date.  Close a recurring deposit account  Results in a Matured recurring deposit account being converted into a 'closed' recurring deposit account.  On account close allowed actions are.Premature Close a recurring deposit account:  Results in an Active recurring deposit account being converted into a 'Premature Closed' recurring deposit account with options to withdraw prematured amount. (premature amount is calculated using interest rate chart applicable along with penal interest if any.)  On account premature closure allowed actions are.  Calculate Premature amount on Recurring deposit account:  Calculate premature amount on recurring deposit till premature close date. Premature amount is calculated based on interest chart and penal interest applicable if any.  Calculate Interest on recurring Deposit Account:  Calculates interest earned on a recurring deposit account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on recurring Deposit Account:  Calculates and Posts interest earned on a recurring deposit account based on todays date and whether an interest posting or crediting event is due.  Showing request/response for 'Post Interest on recurring Deposit Account'
     * @param {Number} accountId accountId
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/RecurringDepositAccountApi~handleCommands5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRecurringDepositAccountsAccountIdResponse}
     */
    handleCommands5(accountId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling handleCommands5");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling handleCommands5");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = PostRecurringDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{accountId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRecurringDepositTemplate operation.
     * @callback module:api/RecurringDepositAccountApi~postRecurringDepositTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/RecurringDepositAccountApi~postRecurringDepositTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postRecurringDepositTemplate(opts, callback) {
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
        '/recurringdepositaccounts/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRecurringDepositTransactionsTemplate operation.
     * @callback module:api/RecurringDepositAccountApi~postRecurringDepositTransactionsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/RecurringDepositAccountApi~postRecurringDepositTransactionsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postRecurringDepositTransactionsTemplate(opts, callback) {
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
        '/recurringdepositaccounts/transactions/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll30 operation.
     * @callback module:api/RecurringDepositAccountApi~retrieveAll30Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetRecurringDepositAccountsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Recurring deposit applications/accounts
     * Lists Recurring deposit applications/accounts  Example Requests:  recurringdepositaccounts   recurringdepositaccounts?fields=name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.paged paged
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/RecurringDepositAccountApi~retrieveAll30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetRecurringDepositAccountsResponse>}
     */
    retrieveAll30(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
      let returnType = [GetRecurringDepositAccountsResponse];
      return this.apiClient.callApi(
        '/recurringdepositaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne20 operation.
     * @callback module:api/RecurringDepositAccountApi~retrieveOne20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRecurringDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a recurring deposit application/account
     * Retrieves a recurring deposit application/account  Example Requests :  recurringdepositaccounts/1   recurringdepositaccounts/1?associations=all
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {module:api/RecurringDepositAccountApi~retrieveOne20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRecurringDepositAccountsAccountIdResponse}
     */
    retrieveOne20(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveOne20");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly'],
        'chargeStatus': opts['chargeStatus']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetRecurringDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitApplication1 operation.
     * @callback module:api/RecurringDepositAccountApi~submitApplication1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRecurringDepositAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit new recurring deposit application
     * Submits new recurring deposit application  Mandatory Fields: clientId or groupId, productId, submittedOnDate, depositAmount, depositPeriod, depositPeriodFrequencyId  Optional Fields: accountNo, externalId, fieldOfficerId,linkAccountId(if provided initial deposit amount will be collected from this account),transferInterestToSavings(By enabling this flag all interest postings will be transferred to linked saving account )  Inherited from Product (if not provided): interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, lockinPeriodFrequency, lockinPeriodFrequencyType, preClosurePenalApplicable, preClosurePenalInterest, preClosurePenalInterestOnTypeId, charts, withHoldTax
     * @param {module:model/PostRecurringDepositAccountsRequest} postRecurringDepositAccountsRequest 
     * @param {module:api/RecurringDepositAccountApi~submitApplication1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRecurringDepositAccountsResponse}
     */
    submitApplication1(postRecurringDepositAccountsRequest, callback) {
      let postBody = postRecurringDepositAccountsRequest;
      // verify the required parameter 'postRecurringDepositAccountsRequest' is set
      if (postRecurringDepositAccountsRequest === undefined || postRecurringDepositAccountsRequest === null) {
        throw new Error("Missing the required parameter 'postRecurringDepositAccountsRequest' when calling submitApplication1");
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
      let returnType = PostRecurringDepositAccountsResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template13 operation.
     * @callback module:api/RecurringDepositAccountApi~template13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRecurringDepositAccountsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve recurring Deposit Account Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for recurring deposit applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  recurringdepositaccounts/template?clientId=1   recurringdepositaccounts/template?clientId=1&productId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.groupId groupId
     * @param {Number} opts.productId productId
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/RecurringDepositAccountApi~template13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRecurringDepositAccountsTemplateResponse}
     */
    template13(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId'],
        'groupId': opts['groupId'],
        'productId': opts['productId'],
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetRecurringDepositAccountsTemplateResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update16 operation.
     * @callback module:api/RecurringDepositAccountApi~update16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutRecurringDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a recurring deposit application
     * Recurring deposit application can only be modified when in 'Submitted and pending approval' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc
     * @param {Number} accountId accountId
     * @param {module:model/PutRecurringDepositAccountsAccountIdRequest} putRecurringDepositAccountsAccountIdRequest 
     * @param {module:api/RecurringDepositAccountApi~update16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutRecurringDepositAccountsAccountIdResponse}
     */
    update16(accountId, putRecurringDepositAccountsAccountIdRequest, callback) {
      let postBody = putRecurringDepositAccountsAccountIdRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling update16");
      }
      // verify the required parameter 'putRecurringDepositAccountsAccountIdRequest' is set
      if (putRecurringDepositAccountsAccountIdRequest === undefined || putRecurringDepositAccountsAccountIdRequest === null) {
        throw new Error("Missing the required parameter 'putRecurringDepositAccountsAccountIdRequest' when calling update16");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = PutRecurringDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositaccounts/{accountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
