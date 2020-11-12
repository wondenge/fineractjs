


import ApiClient from "../ApiClient";
import GetAccountTransfersPageItems from '../model/GetAccountTransfersPageItems';
import GetAccountTransfersResponse from '../model/GetAccountTransfersResponse';
import GetAccountTransfersTemplateRefundByTransferResponse from '../model/GetAccountTransfersTemplateRefundByTransferResponse';
import GetAccountTransfersTemplateResponse from '../model/GetAccountTransfersTemplateResponse';
import PostAccountTransfersRefundByTransferRequest from '../model/PostAccountTransfersRefundByTransferRequest';
import PostAccountTransfersRefundByTransferResponse from '../model/PostAccountTransfersRefundByTransferResponse';
import PostAccountTransfersRequest from '../model/PostAccountTransfersRequest';
import PostAccountTransfersResponse from '../model/PostAccountTransfersResponse';

/**
* AccountTransfers service.
* @module api/AccountTransfersApi
* @version 1.0
*/
export default class AccountTransfersApi {

    /**
    * Constructs a new AccountTransfersApi. 
    * @alias module:api/AccountTransfersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create3 operation.
     * @callback module:api/AccountTransfersApi~create3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAccountTransfersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Transfer
     * Ability to create new transfer of monetary funds from one account to another.
     * @param {module:model/PostAccountTransfersRequest} postAccountTransfersRequest 
     * @param {module:api/AccountTransfersApi~create3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAccountTransfersResponse}
     */
    create3(postAccountTransfersRequest, callback) {
      let postBody = postAccountTransfersRequest;
      // verify the required parameter 'postAccountTransfersRequest' is set
      if (postAccountTransfersRequest === undefined || postAccountTransfersRequest === null) {
        throw new Error("Missing the required parameter 'postAccountTransfersRequest' when calling create3");
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
      let returnType = PostAccountTransfersResponse;
      return this.apiClient.callApi(
        '/accounttransfers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll17 operation.
     * @callback module:api/AccountTransfersApi~retrieveAll17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountTransfersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List account transfers
     * Lists account's transfers  Example Requests:    accounttransfers
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {String} opts.externalId externalId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Number} opts.accountDetailId accountDetailId
     * @param {module:api/AccountTransfersApi~retrieveAll17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountTransfersResponse}
     */
    retrieveAll17(opts, callback) {
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
        'sortOrder': opts['sortOrder'],
        'accountDetailId': opts['accountDetailId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAccountTransfersResponse;
      return this.apiClient.callApi(
        '/accounttransfers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne8 operation.
     * @callback module:api/AccountTransfersApi~retrieveOne8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountTransfersPageItems} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve account transfer
     * Retrieves account transfer  Example Requests :    accounttransfers/1
     * @param {Number} transferId transferId
     * @param {module:api/AccountTransfersApi~retrieveOne8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountTransfersPageItems}
     */
    retrieveOne8(transferId, callback) {
      let postBody = null;
      // verify the required parameter 'transferId' is set
      if (transferId === undefined || transferId === null) {
        throw new Error("Missing the required parameter 'transferId' when calling retrieveOne8");
      }

      let pathParams = {
        'transferId': transferId
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
      let returnType = GetAccountTransfersPageItems;
      return this.apiClient.callApi(
        '/accounttransfers/{transferId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template5 operation.
     * @callback module:api/AccountTransfersApi~template5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountTransfersTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Account Transfer Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    accounttransfers/template?fromAccountType=2&fromOfficeId=1    accounttransfers/template?fromAccountType=2&fromOfficeId=1&fromClientId=1    accounttransfers/template?fromClientId=1&fromAccountType=2&fromAccountId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromOfficeId fromOfficeId
     * @param {Number} opts.fromClientId fromClientId
     * @param {Number} opts.fromAccountId fromAccountId
     * @param {Number} opts.fromAccountType fromAccountType
     * @param {Number} opts.toOfficeId toOfficeId
     * @param {Number} opts.toClientId toClientId
     * @param {Number} opts.toAccountId toAccountId
     * @param {Number} opts.toAccountType toAccountType
     * @param {module:api/AccountTransfersApi~template5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountTransfersTemplateResponse}
     */
    template5(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fromOfficeId': opts['fromOfficeId'],
        'fromClientId': opts['fromClientId'],
        'fromAccountId': opts['fromAccountId'],
        'fromAccountType': opts['fromAccountType'],
        'toOfficeId': opts['toOfficeId'],
        'toClientId': opts['toClientId'],
        'toAccountId': opts['toAccountId'],
        'toAccountType': opts['toAccountType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAccountTransfersTemplateResponse;
      return this.apiClient.callApi(
        '/accounttransfers/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the templateRefundByTransfer operation.
     * @callback module:api/AccountTransfersApi~templateRefundByTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Refund of an Active Loan by Transfer Template
     * Retrieves Refund of an Active Loan by Transfer TemplateExample Requests :    accounttransfers/templateRefundByTransfer?fromAccountId=2&fromAccountType=1& toAccountId=1&toAccountType=2&toClientId=1&toOfficeId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromOfficeId fromOfficeId
     * @param {Number} opts.fromClientId fromClientId
     * @param {Number} opts.fromAccountId fromAccountId
     * @param {Number} opts.fromAccountType fromAccountType
     * @param {Number} opts.toOfficeId toOfficeId
     * @param {Number} opts.toClientId toClientId
     * @param {Number} opts.toAccountId toAccountId
     * @param {Number} opts.toAccountType toAccountType
     * @param {module:api/AccountTransfersApi~templateRefundByTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAccountTransfersTemplateRefundByTransferResponse}
     */
    templateRefundByTransfer(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fromOfficeId': opts['fromOfficeId'],
        'fromClientId': opts['fromClientId'],
        'fromAccountId': opts['fromAccountId'],
        'fromAccountType': opts['fromAccountType'],
        'toOfficeId': opts['toOfficeId'],
        'toClientId': opts['toClientId'],
        'toAccountId': opts['toAccountId'],
        'toAccountType': opts['toAccountType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAccountTransfersTemplateRefundByTransferResponse;
      return this.apiClient.callApi(
        '/accounttransfers/templateRefundByTransfer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the templateRefundByTransferPost operation.
     * @callback module:api/AccountTransfersApi~templateRefundByTransferPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAccountTransfersRefundByTransferResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund of an Active Loan by Transfer
     * Ability to refund an active loan by transferring to a savings account.
     * @param {module:model/PostAccountTransfersRefundByTransferRequest} postAccountTransfersRefundByTransferRequest 
     * @param {module:api/AccountTransfersApi~templateRefundByTransferPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAccountTransfersRefundByTransferResponse}
     */
    templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest, callback) {
      let postBody = postAccountTransfersRefundByTransferRequest;
      // verify the required parameter 'postAccountTransfersRefundByTransferRequest' is set
      if (postAccountTransfersRefundByTransferRequest === undefined || postAccountTransfersRefundByTransferRequest === null) {
        throw new Error("Missing the required parameter 'postAccountTransfersRefundByTransferRequest' when calling templateRefundByTransferPost");
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
      let returnType = PostAccountTransfersRefundByTransferResponse;
      return this.apiClient.callApi(
        '/accounttransfers/refundByTransfer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
