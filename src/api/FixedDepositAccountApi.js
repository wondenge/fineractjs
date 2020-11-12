


import ApiClient from "../ApiClient";
import DeleteFixedDepositAccountsAccountIdResponse from '../model/DeleteFixedDepositAccountsAccountIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetFixedDepositAccountsAccountIdResponse from '../model/GetFixedDepositAccountsAccountIdResponse';
import GetFixedDepositAccountsResponse from '../model/GetFixedDepositAccountsResponse';
import GetFixedDepositAccountsTemplateResponse from '../model/GetFixedDepositAccountsTemplateResponse';
import PostFixedDepositAccountsAccountIdResponse from '../model/PostFixedDepositAccountsAccountIdResponse';
import PostFixedDepositAccountsRequest from '../model/PostFixedDepositAccountsRequest';
import PostFixedDepositAccountsResponse from '../model/PostFixedDepositAccountsResponse';
import PutFixedDepositAccountsAccountIdRequest from '../model/PutFixedDepositAccountsAccountIdRequest';
import PutFixedDepositAccountsAccountIdResponse from '../model/PutFixedDepositAccountsAccountIdResponse';

/**
* FixedDepositAccount service.
* @module api/FixedDepositAccountApi
* @version 1.0
*/
export default class FixedDepositAccountApi {

    /**
    * Constructs a new FixedDepositAccountApi. 
    * @alias module:api/FixedDepositAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountClosureTemplate operation.
     * @callback module:api/FixedDepositAccountApi~accountClosureTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/FixedDepositAccountApi~accountClosureTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    accountClosureTemplate(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountClosureTemplate");
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
        '/fixeddepositaccounts/{accountId}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete14 operation.
     * @callback module:api/FixedDepositAccountApi~delete14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteFixedDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a fixed deposit application
     * At present we support hard delete of fixed deposit application so long as its in 'Submitted and pending approval' state. One the application is moves past this state, it is not possible to do a 'hard' delete of the application or the account. An API endpoint will be added to close/de-activate the fixed deposit account.
     * @param {Number} accountId accountId
     * @param {module:api/FixedDepositAccountApi~delete14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteFixedDepositAccountsAccountIdResponse}
     */
    delete14(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling delete14");
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
      let returnType = DeleteFixedDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositaccounts/{accountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFixedDepositTemplate operation.
     * @callback module:api/FixedDepositAccountApi~getFixedDepositTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/FixedDepositAccountApi~getFixedDepositTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getFixedDepositTemplate(opts, callback) {
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
        '/fixeddepositaccounts/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFixedDepositTransactionTemplate operation.
     * @callback module:api/FixedDepositAccountApi~getFixedDepositTransactionTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/FixedDepositAccountApi~getFixedDepositTransactionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getFixedDepositTransactionTemplate(opts, callback) {
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
        '/fixeddepositaccounts/transaction/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands4 operation.
     * @callback module:api/FixedDepositAccountApi~handleCommands4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostFixedDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve fixed deposit application | Undo approval fixed deposit application | Reject fixed deposit application | Withdraw fixed deposit application | Activate a fixed deposit account | Close a fixed deposit account | Premature Close a fixed deposit account | Calculate Premature amount on Fixed deposit account | Calculate Interest on Fixed Deposit Account | Post Interest on Fixed Deposit Account
     * Approve fixed deposit application:  Approves fixed deposit application so long as its in 'Submitted and pending approval' state.  Undo approval fixed deposit application:  Will move 'approved' fixed deposit application back to 'Submitted and pending approval' state.  Reject fixed deposit application:  Rejects fixed deposit application so long as its in 'Submitted and pending approval' state.  Withdraw fixed deposit application:  Used when an applicant withdraws from the fixed deposit application. It must be in 'Submitted and pending approval' state.  Close a fixed deposit account:  Results in a Matured fixed deposit account being converted into a 'closed' fixed deposit account.  Premature Close a fixed deposit account:  Results in an Active fixed deposit account being converted into a 'Premature Closed' fixed deposit account with options to withdraw prematured amount. (premature amount is calculated using interest rate chart applicable along with penal interest if any.)  Calculate Premature amount on Fixed deposit account:  Calculate premature amount on fixed deposit account till premature close date. Premature amount is calculated based on interest chart and penal interest applicable.  Calculate Interest on Fixed Deposit Account:  Calculates interest earned on a fixed deposit account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on Fixed Deposit Account:  Calculates and Posts interest earned on a fixed deposit account based on today's date and whether an interest posting or crediting event is due.  Showing request/response for Calculate Interest on Fixed Deposit Account
     * @param {Number} accountId accountId
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/FixedDepositAccountApi~handleCommands4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostFixedDepositAccountsAccountIdResponse}
     */
    handleCommands4(accountId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling handleCommands4");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling handleCommands4");
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
      let returnType = PostFixedDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositaccounts/{accountId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postFixedDepositTemplate operation.
     * @callback module:api/FixedDepositAccountApi~postFixedDepositTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/FixedDepositAccountApi~postFixedDepositTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postFixedDepositTemplate(opts, callback) {
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
        '/fixeddepositaccounts/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postFixedDepositTransactionTemplate operation.
     * @callback module:api/FixedDepositAccountApi~postFixedDepositTransactionTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/FixedDepositAccountApi~postFixedDepositTransactionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postFixedDepositTransactionTemplate(opts, callback) {
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
        '/fixeddepositaccounts/transaction/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll28 operation.
     * @callback module:api/FixedDepositAccountApi~retrieveAll28Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFixedDepositAccountsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Fixed deposit applications/accounts
     * Lists Fixed Deposit Accounts  Example Requests:    fixeddepositaccounts    fixeddepositaccounts?fields=name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.paged paged
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/FixedDepositAccountApi~retrieveAll28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFixedDepositAccountsResponse>}
     */
    retrieveAll28(opts, callback) {
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
      let returnType = [GetFixedDepositAccountsResponse];
      return this.apiClient.callApi(
        '/fixeddepositaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne17 operation.
     * @callback module:api/FixedDepositAccountApi~retrieveOne17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFixedDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a fixed deposit application/account
     * Retrieves a fixed deposit application/account  Example Requests :    fixeddepositaccounts/1  fixeddepositaccounts/1?associations=all
     * @param {Number} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {module:api/FixedDepositAccountApi~retrieveOne17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFixedDepositAccountsAccountIdResponse}
     */
    retrieveOne17(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveOne17");
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
      let returnType = GetFixedDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositaccounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitApplication operation.
     * @callback module:api/FixedDepositAccountApi~submitApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostFixedDepositAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit new fixed deposit application
     * Submits a new fixed deposit applicationMandatory Fields: clientId or groupId, productId, submittedOnDate, depositAmount, depositPeriod, depositPeriodFrequencyId  Optional Fields: accountNo, externalId, fieldOfficerId,linkAccountId(if provided initial deposit amount will be collected from this account),transferInterestToSavings(By enabling this flag all interest postings will be transferred to linked saving account )
     * @param {module:model/PostFixedDepositAccountsRequest} postFixedDepositAccountsRequest 
     * @param {module:api/FixedDepositAccountApi~submitApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostFixedDepositAccountsResponse}
     */
    submitApplication(postFixedDepositAccountsRequest, callback) {
      let postBody = postFixedDepositAccountsRequest;
      // verify the required parameter 'postFixedDepositAccountsRequest' is set
      if (postFixedDepositAccountsRequest === undefined || postFixedDepositAccountsRequest === null) {
        throw new Error("Missing the required parameter 'postFixedDepositAccountsRequest' when calling submitApplication");
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
      let returnType = PostFixedDepositAccountsResponse;
      return this.apiClient.callApi(
        '/fixeddepositaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template12 operation.
     * @callback module:api/FixedDepositAccountApi~template12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFixedDepositAccountsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Fixed Deposit Account Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for fixed deposit applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value ListsExample Requests:    fixeddepositaccounts/template?clientId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.groupId groupId
     * @param {Number} opts.productId productId
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/FixedDepositAccountApi~template12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFixedDepositAccountsTemplateResponse}
     */
    template12(opts, callback) {
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
      let returnType = GetFixedDepositAccountsTemplateResponse;
      return this.apiClient.callApi(
        '/fixeddepositaccounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update14 operation.
     * @callback module:api/FixedDepositAccountApi~update14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutFixedDepositAccountsAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a fixed deposit application
     * Fixed deposit application can only be modified when in 'Submitted and pending approval' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc
     * @param {Number} accountId accountId
     * @param {module:model/PutFixedDepositAccountsAccountIdRequest} putFixedDepositAccountsAccountIdRequest 
     * @param {module:api/FixedDepositAccountApi~update14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutFixedDepositAccountsAccountIdResponse}
     */
    update14(accountId, putFixedDepositAccountsAccountIdRequest, callback) {
      let postBody = putFixedDepositAccountsAccountIdRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling update14");
      }
      // verify the required parameter 'putFixedDepositAccountsAccountIdRequest' is set
      if (putFixedDepositAccountsAccountIdRequest === undefined || putFixedDepositAccountsAccountIdRequest === null) {
        throw new Error("Missing the required parameter 'putFixedDepositAccountsAccountIdRequest' when calling update14");
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
      let returnType = PutFixedDepositAccountsAccountIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositaccounts/{accountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
