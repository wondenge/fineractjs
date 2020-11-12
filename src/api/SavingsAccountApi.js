


import ApiClient from "../ApiClient";
import DeleteSavingsAccountsAccountIdResponse from '../model/DeleteSavingsAccountsAccountIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetSavingsAccountsAccountIdResponse from '../model/GetSavingsAccountsAccountIdResponse';
import GetSavingsAccountsResponse from '../model/GetSavingsAccountsResponse';
import GetSavingsAccountsTemplateResponse from '../model/GetSavingsAccountsTemplateResponse';
import PostSavingsAccountsAccountIdRequest from '../model/PostSavingsAccountsAccountIdRequest';
import PostSavingsAccountsAccountIdResponse from '../model/PostSavingsAccountsAccountIdResponse';
import PostSavingsAccountsRequest from '../model/PostSavingsAccountsRequest';
import PostSavingsAccountsResponse from '../model/PostSavingsAccountsResponse';
import PutSavingsAccountsAccountIdRequest from '../model/PutSavingsAccountsAccountIdRequest';
import PutSavingsAccountsAccountIdResponse from '../model/PutSavingsAccountsAccountIdResponse';

/**
* SavingsAccount service.
* @module api/SavingsAccountApi
* @version 1.0
*/
export default class SavingsAccountApi {

    /**
    * Constructs a new SavingsAccountApi. 
    * @alias module:api/SavingsAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the delete18 operation.
     * @callback module:api/SavingsAccountApi~delete18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteSavingsAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a savings application
     * At present we support hard delete of savings application so long as its in 'Submitted and pending approval' state. One the application is moves past this state, it is not possible to do a 'hard' delete of the application or the account. An API endpoint will be added to close/de-activate the savings account.
     * @param {Number} accountId accountId
     * @param {module:api/SavingsAccountApi~delete18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteSavingsAccountsAccountIdResponse}
     */
    delete18(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling delete18");
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
      let returnType = DeleteSavingsAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{accountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSavingsTemplate operation.
     * @callback module:api/SavingsAccountApi~getSavingsTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/SavingsAccountApi~getSavingsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getSavingsTemplate(opts, callback) {
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
        '/savingsaccounts/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSavingsTransactionTemplate operation.
     * @callback module:api/SavingsAccountApi~getSavingsTransactionTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/SavingsAccountApi~getSavingsTransactionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getSavingsTransactionTemplate(opts, callback) {
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
        '/savingsaccounts/transactions/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands6 operation.
     * @callback module:api/SavingsAccountApi~handleCommands6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSavingsAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve savings application | Undo approval savings application | Assign Savings Officer | Unassign Savings Officer | Reject savings application | Withdraw savings application | Activate a savings account | Close a savings account | Calculate Interest on Savings Account | Post Interest on Savings Account | Block Savings Account | Unblock Savings Account | Block Savings Account Credit transactions | Unblock Savings Account Credit transactions | Block Savings Account Debit transactions | Unblock Savings Account debit transactions
     * Approve savings application:  Approves savings application so long as its in 'Submitted and pending approval' state.  Undo approval savings application:  Will move 'approved' savings application back to 'Submitted and pending approval' state.  Assign Savings Officer:  Allows you to assign Savings Officer for existing Savings Account.  Unassign Savings Officer:  Allows you to unassign the Savings Officer.  Reject savings application:  Rejects savings application so long as its in 'Submitted and pending approval' state.  Withdraw savings application:  Used when an applicant withdraws from the savings application. It must be in 'Submitted and pending approval' state.  Activate a savings account:  Results in an approved savings application being converted into an 'active' savings account.  Close a savings account:  Results in an Activated savings application being converted into an 'closed' savings account.  closedOnDate is closure date of savings account  withdrawBalance is a boolean description, true value of this field performs a withdrawal transaction with account's running balance.  Mandatory Fields: dateFormat,locale,closedOnDate  Optional Fields: note, withdrawBalance, paymentTypeId, accountNumber, checkNumber, routingCode, receiptNumber, bankNumber  Calculate Interest on Savings Account:  Calculates interest earned on a savings account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on Savings Account:  Calculates and Posts interest earned on a savings account based on today's date and whether an interest posting or crediting event is due.  Block Savings Account:  Blocks Savings account from all types of credit and debit transactions  Unblock Savings Account:  Unblock a blocked account. On unblocking account, user can perform debit and credit transactions  Block Savings Account Credit transactions:  Savings account will be blocked from all types of credit transactions.  Unblock Savings Account Credit transactions:  It unblocks the Saving account's credit operations. Now all types of credits can be transacted to Savings account  Block Savings Account Debit transactions:  All types of debit operations from Savings account wil be blocked  Unblock Savings Account debit transactions:  It unblocks the Saving account's debit operations. Now all types of debits can be transacted from Savings account  Showing request/response for 'Unassign Savings Officer'
     * @param {Number} accountId accountId
     * @param {module:model/PostSavingsAccountsAccountIdRequest} postSavingsAccountsAccountIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/SavingsAccountApi~handleCommands6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSavingsAccountsAccountIdResponse}
     */
    handleCommands6(accountId, postSavingsAccountsAccountIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postSavingsAccountsAccountIdRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling handleCommands6");
      }
      // verify the required parameter 'postSavingsAccountsAccountIdRequest' is set
      if (postSavingsAccountsAccountIdRequest === undefined || postSavingsAccountsAccountIdRequest === null) {
        throw new Error("Missing the required parameter 'postSavingsAccountsAccountIdRequest' when calling handleCommands6");
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
      let returnType = PostSavingsAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{accountId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleGSIMCommands operation.
     * @callback module:api/SavingsAccountApi~handleGSIMCommandsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} parentAccountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/SavingsAccountApi~handleGSIMCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    handleGSIMCommands(parentAccountId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'parentAccountId' is set
      if (parentAccountId === undefined || parentAccountId === null) {
        throw new Error("Missing the required parameter 'parentAccountId' when calling handleGSIMCommands");
      }

      let pathParams = {
        'parentAccountId': parentAccountId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/savingsaccounts/gsimcommands/{parentAccountId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postSavingsTemplate operation.
     * @callback module:api/SavingsAccountApi~postSavingsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/SavingsAccountApi~postSavingsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postSavingsTemplate(opts, callback) {
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
        '/savingsaccounts/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postSavingsTransactionTemplate operation.
     * @callback module:api/SavingsAccountApi~postSavingsTransactionTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/SavingsAccountApi~postSavingsTransactionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postSavingsTransactionTemplate(opts, callback) {
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
        '/savingsaccounts/transactions/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll32 operation.
     * @callback module:api/SavingsAccountApi~retrieveAll32Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List savings applications/accounts
     * Lists savings applications/accounts  Example Requests:  savingsaccounts   savingsaccounts?fields=name
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {String} opts.externalId externalId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/SavingsAccountApi~retrieveAll32Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsAccountsResponse}
     */
    retrieveAll32(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'externalId': opts['externalId'],
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
      let returnType = GetSavingsAccountsResponse;
      return this.apiClient.callApi(
        '/savingsaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne23 operation.
     * @callback module:api/SavingsAccountApi~retrieveOne23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a savings application/account
     * Retrieves a savings application/account  Example Requests :  savingsaccounts/1   savingsaccounts/1?associations=all
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {module:api/SavingsAccountApi~retrieveOne23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsAccountsAccountIdResponse}
     */
    retrieveOne23(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveOne23");
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
      let returnType = GetSavingsAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitApplication2 operation.
     * @callback module:api/SavingsAccountApi~submitApplication2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSavingsAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit new savings application
     * Submits new savings application  Mandatory Fields: clientId or groupId, productId, submittedOnDate  Optional Fields: accountNo, externalId, fieldOfficerId  Inherited from Product (if not provided): nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, allowOverdraft, overdraftLimit, withHoldTax  Additional Mandatory Field if Entity-Datatable Check is enabled for the entity of type Savings: datatables
     * @param {module:model/PostSavingsAccountsRequest} postSavingsAccountsRequest 
     * @param {module:api/SavingsAccountApi~submitApplication2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSavingsAccountsResponse}
     */
    submitApplication2(postSavingsAccountsRequest, callback) {
      let postBody = postSavingsAccountsRequest;
      // verify the required parameter 'postSavingsAccountsRequest' is set
      if (postSavingsAccountsRequest === undefined || postSavingsAccountsRequest === null) {
        throw new Error("Missing the required parameter 'postSavingsAccountsRequest' when calling submitApplication2");
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
      let returnType = PostSavingsAccountsResponse;
      return this.apiClient.callApi(
        '/savingsaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitGSIMApplication operation.
     * @callback module:api/SavingsAccountApi~submitGSIMApplicationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SavingsAccountApi~submitGSIMApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    submitGSIMApplication(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/savingsaccounts/gsim', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template14 operation.
     * @callback module:api/SavingsAccountApi~template14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsAccountsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Savings Account Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  savingsaccounts/template?clientId=1   savingsaccounts/template?clientId=1&productId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.groupId groupId
     * @param {Number} opts.productId productId
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/SavingsAccountApi~template14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsAccountsTemplateResponse}
     */
    template14(opts, callback) {
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
      let returnType = GetSavingsAccountsTemplateResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update18 operation.
     * @callback module:api/SavingsAccountApi~update18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSavingsAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a savings application | Modify savings account withhold tax applicability
     * Modify a savings application:  Savings application can only be modified when in 'Submitted and pending approval' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc  Modify savings account withhold tax applicability:  Savings application's withhold tax can be modified when in 'Active' state. Once the application is activated, can modify the account withhold tax to post tax or vice-versaShowing request/response for 'Modify a savings application'
     * @param {Number} accountId accountId
     * @param {module:model/PutSavingsAccountsAccountIdRequest} putSavingsAccountsAccountIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/SavingsAccountApi~update18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSavingsAccountsAccountIdResponse}
     */
    update18(accountId, putSavingsAccountsAccountIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = putSavingsAccountsAccountIdRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling update18");
      }
      // verify the required parameter 'putSavingsAccountsAccountIdRequest' is set
      if (putSavingsAccountsAccountIdRequest === undefined || putSavingsAccountsAccountIdRequest === null) {
        throw new Error("Missing the required parameter 'putSavingsAccountsAccountIdRequest' when calling update18");
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
      let returnType = PutSavingsAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/savingsaccounts/{accountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGsim operation.
     * @callback module:api/SavingsAccountApi~updateGsimCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} parentAccountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SavingsAccountApi~updateGsimCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateGsim(parentAccountId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'parentAccountId' is set
      if (parentAccountId === undefined || parentAccountId === null) {
        throw new Error("Missing the required parameter 'parentAccountId' when calling updateGsim");
      }

      let pathParams = {
        'parentAccountId': parentAccountId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/savingsaccounts/gsim/{parentAccountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
