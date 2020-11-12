


import ApiClient from "../ApiClient";
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetAccountsTypeAccountIdResponse from '../model/GetAccountsTypeAccountIdResponse';
import GetAccountsTypeResponse from '../model/GetAccountsTypeResponse';
import GetAccountsTypeTemplateResponse from '../model/GetAccountsTypeTemplateResponse';
import PostAccountsTypeAccountIdRequest from '../model/PostAccountsTypeAccountIdRequest';
import PostAccountsTypeAccountIdResponse from '../model/PostAccountsTypeAccountIdResponse';
import PostAccountsTypeRequest from '../model/PostAccountsTypeRequest';
import PostAccountsTypeResponse from '../model/PostAccountsTypeResponse';
import PutAccountsTypeAccountIdRequest from '../model/PutAccountsTypeAccountIdRequest';
import PutAccountsTypeAccountIdResponse from '../model/PutAccountsTypeAccountIdResponse';

/**
* ShareAccount service.
* @module api/ShareAccountApi
* @version 1.0
*/
export default class ShareAccountApi {

    /**
    * Constructs a new ShareAccountApi. 
    * @alias module:api/ShareAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAccount operation.
     * @callback module:api/ShareAccountApi~createAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAccountsTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit new share application
     * Submits new share application  Mandatory Fields: clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate  Optional Fields: accountNo, externalId  Inherited from Product (if not provided): minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType
     * @param {String} type type
     * @param {module:model/PostAccountsTypeRequest} postAccountsTypeRequest 
     * @param {module:api/ShareAccountApi~createAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAccountsTypeResponse}
     */
    createAccount(type, postAccountsTypeRequest, callback) {
      let postBody = postAccountsTypeRequest;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling createAccount");
      }
      // verify the required parameter 'postAccountsTypeRequest' is set
      if (postAccountsTypeRequest === undefined || postAccountsTypeRequest === null) {
        throw new Error("Missing the required parameter 'postAccountsTypeRequest' when calling createAccount");
      }

      let pathParams = {
        'type': type
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
      let returnType = PostAccountsTypeResponse;
      return this.apiClient.callApi(
        '/accounts/{type}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharedAccountsTemplate operation.
     * @callback module:api/ShareAccountApi~getSharedAccountsTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} type type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/ShareAccountApi~getSharedAccountsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getSharedAccountsTemplate(type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getSharedAccountsTemplate");
      }

      let pathParams = {
        'type': type
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
        '/accounts/{type}/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands2 operation.
     * @callback module:api/ShareAccountApi~handleCommands2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAccountsTypeAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve share application | Undo approval share application | Reject share application | Activate a share account | Close a share account | Apply additional shares on a share account | Approve additional shares request on a share account | Reject additional shares request on a share account | Redeem shares on a share account
     * Approve share application:  Approves share application so long as its in 'Submitted and pending approval' state.  Undo approval share application:  Will move 'approved' share application back to 'Submitted and pending approval' state.  Reject share application:  Rejects share application so long as its in 'Submitted and pending approval' state.  Activate a share account:  Results in an approved share application being converted into an 'active' share account.  Close a share account:  Results in an Activated share application being converted into an 'closed' share account.  closedDate is closure date of share account  Mandatory Fields: dateFormat,locale,closedDate  Apply additional shares on a share account:  requestedDate is requsted date of share purchase  requestedShares is number of shares to be purchase  Mandatory Fields: dateFormat,locale,requestedDate, requestedShares  Approve additional shares request on a share account  requestedShares is Share purchase transaction ids  Mandatory Fields: requestedShares  Reject additional shares request on a share account:  requestedShares is Share purchase transaction ids  Mandatory Fields: requestedShares  Redeem shares on a share account:  Results redeem some/all shares from share account.  requestedDate is requsted date of shares redeem  requestedShares is number of shares to be redeemed  Mandatory Fields: dateFormat,locale,requestedDate,requestedShares  Showing request/response for 'Reject additional shares request on a share account'  For more info visit this link - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#shareaccounts
     * @param {String} type type
     * @param {Number} accountId accountId
     * @param {module:model/PostAccountsTypeAccountIdRequest} postAccountsTypeAccountIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/ShareAccountApi~handleCommands2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAccountsTypeAccountIdResponse}
     */
    handleCommands2(type, accountId, postAccountsTypeAccountIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postAccountsTypeAccountIdRequest;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling handleCommands2");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling handleCommands2");
      }
      // verify the required parameter 'postAccountsTypeAccountIdRequest' is set
      if (postAccountsTypeAccountIdRequest === undefined || postAccountsTypeAccountIdRequest === null) {
        throw new Error("Missing the required parameter 'postAccountsTypeAccountIdRequest' when calling handleCommands2");
      }

      let pathParams = {
        'type': type,
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
      let returnType = PostAccountsTypeAccountIdResponse;
      return this.apiClient.callApi(
        '/accounts/{type}/{accountId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postSharedAccountsTemplate operation.
     * @callback module:api/ShareAccountApi~postSharedAccountsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} type type
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/ShareAccountApi~postSharedAccountsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postSharedAccountsTemplate(type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling postSharedAccountsTemplate");
      }

      let pathParams = {
        'type': type
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
        '/accounts/{type}/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAccount operation.
     * @callback module:api/ShareAccountApi~retrieveAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountsTypeAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a share application/account
     * Retrieves a share application/account  Example Requests :  shareaccount/1
     * @param {Number} accountId accountId
     * @param {String} type type
     * @param {module:api/ShareAccountApi~retrieveAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountsTypeAccountIdResponse}
     */
    retrieveAccount(accountId, type, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling retrieveAccount");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling retrieveAccount");
      }

      let pathParams = {
        'accountId': accountId,
        'type': type
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
      let returnType = GetAccountsTypeAccountIdResponse;
      return this.apiClient.callApi(
        '/accounts/{type}/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllAccounts1 operation.
     * @callback module:api/ShareAccountApi~retrieveAllAccounts1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountsTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List share applications/accounts
     * Lists share applications/accounts  Example Requests:  shareaccount
     * @param {String} type type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/ShareAccountApi~retrieveAllAccounts1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountsTypeResponse}
     */
    retrieveAllAccounts1(type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling retrieveAllAccounts1");
      }

      let pathParams = {
        'type': type
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
      let returnType = GetAccountsTypeResponse;
      return this.apiClient.callApi(
        '/accounts/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template7 operation.
     * @callback module:api/ShareAccountApi~template7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountsTypeTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Share Account Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  accounts/share/template?clientId=1   accounts/share/template?clientId=1&productId=1
     * @param {String} type type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.productId productId
     * @param {module:api/ShareAccountApi~template7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountsTypeTemplateResponse}
     */
    template7(type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling template7");
      }

      let pathParams = {
        'type': type
      };
      let queryParams = {
        'clientId': opts['clientId'],
        'productId': opts['productId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAccountsTypeTemplateResponse;
      return this.apiClient.callApi(
        '/accounts/{type}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAccount operation.
     * @callback module:api/ShareAccountApi~updateAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutAccountsTypeAccountIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a share application
     * Share application can only be modified when in 'Submitted and pending approval' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc
     * @param {String} type type
     * @param {Number} accountId accountId
     * @param {module:model/PutAccountsTypeAccountIdRequest} putAccountsTypeAccountIdRequest 
     * @param {module:api/ShareAccountApi~updateAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutAccountsTypeAccountIdResponse}
     */
    updateAccount(type, accountId, putAccountsTypeAccountIdRequest, callback) {
      let postBody = putAccountsTypeAccountIdRequest;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateAccount");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateAccount");
      }
      // verify the required parameter 'putAccountsTypeAccountIdRequest' is set
      if (putAccountsTypeAccountIdRequest === undefined || putAccountsTypeAccountIdRequest === null) {
        throw new Error("Missing the required parameter 'putAccountsTypeAccountIdRequest' when calling updateAccount");
      }

      let pathParams = {
        'type': type,
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
      let returnType = PutAccountsTypeAccountIdResponse;
      return this.apiClient.callApi(
        '/accounts/{type}/{accountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
