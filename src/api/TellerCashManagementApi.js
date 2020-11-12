


import ApiClient from "../ApiClient";
import DeleteTellersTellerIdCashiersCashierIdResponse from '../model/DeleteTellersTellerIdCashiersCashierIdResponse';
import GetTellersResponse from '../model/GetTellersResponse';
import GetTellersTellerIdCashiersCashierIdResponse from '../model/GetTellersTellerIdCashiersCashierIdResponse';
import GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse from '../model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse';
import GetTellersTellerIdCashiersCashiersIdTransactionsResponse from '../model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse';
import GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse from '../model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse';
import GetTellersTellerIdCashiersResponse from '../model/GetTellersTellerIdCashiersResponse';
import GetTellersTellerIdCashiersTemplateResponse from '../model/GetTellersTellerIdCashiersTemplateResponse';
import PostTellersRequest from '../model/PostTellersRequest';
import PostTellersResponse from '../model/PostTellersResponse';
import PostTellersTellerIdCashiersCashierIdAllocateRequest from '../model/PostTellersTellerIdCashiersCashierIdAllocateRequest';
import PostTellersTellerIdCashiersCashierIdAllocateResponse from '../model/PostTellersTellerIdCashiersCashierIdAllocateResponse';
import PostTellersTellerIdCashiersCashierIdSettleRequest from '../model/PostTellersTellerIdCashiersCashierIdSettleRequest';
import PostTellersTellerIdCashiersCashierIdSettleResponse from '../model/PostTellersTellerIdCashiersCashierIdSettleResponse';
import PostTellersTellerIdCashiersRequest from '../model/PostTellersTellerIdCashiersRequest';
import PostTellersTellerIdCashiersResponse from '../model/PostTellersTellerIdCashiersResponse';
import PutTellersRequest from '../model/PutTellersRequest';
import PutTellersResponse from '../model/PutTellersResponse';
import PutTellersTellerIdCashiersCashierIdRequest from '../model/PutTellersTellerIdCashiersCashierIdRequest';
import PutTellersTellerIdCashiersCashierIdResponse from '../model/PutTellersTellerIdCashiersCashierIdResponse';

/**
* TellerCashManagement service.
* @module api/TellerCashManagementApi
* @version 1.0
*/
export default class TellerCashManagementApi {

    /**
    * Constructs a new TellerCashManagementApi. 
    * @alias module:api/TellerCashManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the allocateCashToCashier operation.
     * @callback module:api/TellerCashManagementApi~allocateCashToCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTellersTellerIdCashiersCashierIdAllocateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allocate Cash To Cashier
     * Mandatory Fields:  Date, Amount, Currency, Notes/Comments
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {module:model/PostTellersTellerIdCashiersCashierIdAllocateRequest} postTellersTellerIdCashiersCashierIdAllocateRequest 
     * @param {module:api/TellerCashManagementApi~allocateCashToCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTellersTellerIdCashiersCashierIdAllocateResponse}
     */
    allocateCashToCashier(tellerId, cashierId, postTellersTellerIdCashiersCashierIdAllocateRequest, callback) {
      let postBody = postTellersTellerIdCashiersCashierIdAllocateRequest;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling allocateCashToCashier");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling allocateCashToCashier");
      }
      // verify the required parameter 'postTellersTellerIdCashiersCashierIdAllocateRequest' is set
      if (postTellersTellerIdCashiersCashierIdAllocateRequest === undefined || postTellersTellerIdCashiersCashierIdAllocateRequest === null) {
        throw new Error("Missing the required parameter 'postTellersTellerIdCashiersCashierIdAllocateRequest' when calling allocateCashToCashier");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['text/html', 'application/json'];
      let accepts = ['application/json'];
      let returnType = PostTellersTellerIdCashiersCashierIdAllocateResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}/allocate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCashier operation.
     * @callback module:api/TellerCashManagementApi~createCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTellersTellerIdCashiersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Cashiers
     * Mandatory Fields:  Cashier/staff, Fromm Date, To Date, Full Day or From time and To time    Optional Fields:  Description/Notes
     * @param {Number} tellerId tellerId
     * @param {module:model/PostTellersTellerIdCashiersRequest} postTellersTellerIdCashiersRequest 
     * @param {module:api/TellerCashManagementApi~createCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTellersTellerIdCashiersResponse}
     */
    createCashier(tellerId, postTellersTellerIdCashiersRequest, callback) {
      let postBody = postTellersTellerIdCashiersRequest;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling createCashier");
      }
      // verify the required parameter 'postTellersTellerIdCashiersRequest' is set
      if (postTellersTellerIdCashiersRequest === undefined || postTellersTellerIdCashiersRequest === null) {
        throw new Error("Missing the required parameter 'postTellersTellerIdCashiersRequest' when calling createCashier");
      }

      let pathParams = {
        'tellerId': tellerId
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
      let returnType = PostTellersTellerIdCashiersResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTeller operation.
     * @callback module:api/TellerCashManagementApi~createTellerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTellersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create teller
     * Mandatory Fields Teller name, OfficeId, Description, Start Date, Status Optional Fields End Date
     * @param {module:model/PostTellersRequest} postTellersRequest 
     * @param {module:api/TellerCashManagementApi~createTellerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTellersResponse}
     */
    createTeller(postTellersRequest, callback) {
      let postBody = postTellersRequest;
      // verify the required parameter 'postTellersRequest' is set
      if (postTellersRequest === undefined || postTellersRequest === null) {
        throw new Error("Missing the required parameter 'postTellersRequest' when calling createTeller");
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
      let returnType = PostTellersResponse;
      return this.apiClient.callApi(
        '/tellers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCashier operation.
     * @callback module:api/TellerCashManagementApi~deleteCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteTellersTellerIdCashiersCashierIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Cashier
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {module:api/TellerCashManagementApi~deleteCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteTellersTellerIdCashiersCashierIdResponse}
     */
    deleteCashier(tellerId, cashierId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling deleteCashier");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling deleteCashier");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
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
      let returnType = DeleteTellersTellerIdCashiersCashierIdResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTeller operation.
     * @callback module:api/TellerCashManagementApi~deleteTellerCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} tellerId tellerId
     * @param {module:api/TellerCashManagementApi~deleteTellerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteTeller(tellerId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling deleteTeller");
      }

      let pathParams = {
        'tellerId': tellerId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/tellers/{tellerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findCashierData operation.
     * @callback module:api/TellerCashManagementApi~findCashierDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTellersTellerIdCashiersCashierIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a cashier
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {module:api/TellerCashManagementApi~findCashierDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTellersTellerIdCashiersCashierIdResponse}
     */
    findCashierData(tellerId, cashierId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling findCashierData");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling findCashierData");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
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
      let returnType = GetTellersTellerIdCashiersCashierIdResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findTeller operation.
     * @callback module:api/TellerCashManagementApi~findTellerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTellersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve tellers
     * @param {Number} tellerId tellerId
     * @param {module:api/TellerCashManagementApi~findTellerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTellersResponse}
     */
    findTeller(tellerId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling findTeller");
      }

      let pathParams = {
        'tellerId': tellerId
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
      let returnType = GetTellersResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findTransactionData operation.
     * @callback module:api/TellerCashManagementApi~findTransactionDataCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} tellerId tellerId
     * @param {Number} transactionId transactionId
     * @param {module:api/TellerCashManagementApi~findTransactionDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    findTransactionData(tellerId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling findTransactionData");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling findTransactionData");
      }

      let pathParams = {
        'tellerId': tellerId,
        'transactionId': transactionId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/tellers/{tellerId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCashierData1 operation.
     * @callback module:api/TellerCashManagementApi~getCashierData1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTellersTellerIdCashiersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Cashiers
     * @param {Number} tellerId tellerId
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromdate fromdate
     * @param {String} opts.todate todate
     * @param {module:api/TellerCashManagementApi~getCashierData1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTellersTellerIdCashiersResponse}
     */
    getCashierData1(tellerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getCashierData1");
      }

      let pathParams = {
        'tellerId': tellerId
      };
      let queryParams = {
        'fromdate': opts['fromdate'],
        'todate': opts['todate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTellersTellerIdCashiersResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCashierTemplate operation.
     * @callback module:api/TellerCashManagementApi~getCashierTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTellersTellerIdCashiersTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Cashiers
     * @param {Number} tellerId tellerId
     * @param {module:api/TellerCashManagementApi~getCashierTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTellersTellerIdCashiersTemplateResponse}
     */
    getCashierTemplate(tellerId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getCashierTemplate");
      }

      let pathParams = {
        'tellerId': tellerId
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
      let returnType = GetTellersTellerIdCashiersTemplateResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCashierTxnTemplate operation.
     * @callback module:api/TellerCashManagementApi~getCashierTxnTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Cashier Transaction Template
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {module:api/TellerCashManagementApi~getCashierTxnTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse}
     */
    getCashierTxnTemplate(tellerId, cashierId, callback) {
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getCashierTxnTemplate");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling getCashierTxnTemplate");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
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
      let returnType = GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}/transactions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJournalData operation.
     * @callback module:api/TellerCashManagementApi~getJournalDataCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} tellerId tellerId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.cashierId cashierId
     * @param {String} opts.dateRange dateRange
     * @param {module:api/TellerCashManagementApi~getJournalDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getJournalData(tellerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getJournalData");
      }

      let pathParams = {
        'tellerId': tellerId
      };
      let queryParams = {
        'cashierId': opts['cashierId'],
        'dateRange': opts['dateRange']
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
        '/tellers/{tellerId}/journals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTellerData operation.
     * @callback module:api/TellerCashManagementApi~getTellerDataCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetTellersResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all tellers
     * Retrieves list tellers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {module:api/TellerCashManagementApi~getTellerDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetTellersResponse>}
     */
    getTellerData(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetTellersResponse];
      return this.apiClient.callApi(
        '/tellers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionData operation.
     * @callback module:api/TellerCashManagementApi~getTransactionDataCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} tellerId tellerId
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateRange dateRange
     * @param {module:api/TellerCashManagementApi~getTransactionDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getTransactionData(tellerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getTransactionData");
      }

      let pathParams = {
        'tellerId': tellerId
      };
      let queryParams = {
        'dateRange': opts['dateRange']
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
        '/tellers/{tellerId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionsForCashier operation.
     * @callback module:api/TellerCashManagementApi~getTransactionsForCashierCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Cashier Transaction
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyCode currencyCode
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/TellerCashManagementApi~getTransactionsForCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse>}
     */
    getTransactionsForCashier(tellerId, cashierId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getTransactionsForCashier");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling getTransactionsForCashier");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
      };
      let queryParams = {
        'currencyCode': opts['currencyCode'],
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
      let returnType = [GetTellersTellerIdCashiersCashiersIdTransactionsResponse];
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionsWtihSummaryForCashier operation.
     * @callback module:api/TellerCashManagementApi~getTransactionsWtihSummaryForCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transactions Wtih Summary For Cashier
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyCode currencyCode
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/TellerCashManagementApi~getTransactionsWtihSummaryForCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse}
     */
    getTransactionsWtihSummaryForCashier(tellerId, cashierId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling getTransactionsWtihSummaryForCashier");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling getTransactionsWtihSummaryForCashier");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
      };
      let queryParams = {
        'currencyCode': opts['currencyCode'],
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
      let returnType = GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}/summaryandtransactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the settleCashFromCashier operation.
     * @callback module:api/TellerCashManagementApi~settleCashFromCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTellersTellerIdCashiersCashierIdSettleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Settle Cash From Cashier
     * Mandatory Fields Date, Amount, Currency, Notes/Comments
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {module:model/PostTellersTellerIdCashiersCashierIdSettleRequest} postTellersTellerIdCashiersCashierIdSettleRequest 
     * @param {module:api/TellerCashManagementApi~settleCashFromCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTellersTellerIdCashiersCashierIdSettleResponse}
     */
    settleCashFromCashier(tellerId, cashierId, postTellersTellerIdCashiersCashierIdSettleRequest, callback) {
      let postBody = postTellersTellerIdCashiersCashierIdSettleRequest;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling settleCashFromCashier");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling settleCashFromCashier");
      }
      // verify the required parameter 'postTellersTellerIdCashiersCashierIdSettleRequest' is set
      if (postTellersTellerIdCashiersCashierIdSettleRequest === undefined || postTellersTellerIdCashiersCashierIdSettleRequest === null) {
        throw new Error("Missing the required parameter 'postTellersTellerIdCashiersCashierIdSettleRequest' when calling settleCashFromCashier");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['text/html', 'application/json'];
      let accepts = ['application/json'];
      let returnType = PostTellersTellerIdCashiersCashierIdSettleResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}/settle', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCashier operation.
     * @callback module:api/TellerCashManagementApi~updateCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutTellersTellerIdCashiersCashierIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Cashier
     * @param {Number} tellerId tellerId
     * @param {Number} cashierId cashierId
     * @param {module:model/PutTellersTellerIdCashiersCashierIdRequest} putTellersTellerIdCashiersCashierIdRequest 
     * @param {module:api/TellerCashManagementApi~updateCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutTellersTellerIdCashiersCashierIdResponse}
     */
    updateCashier(tellerId, cashierId, putTellersTellerIdCashiersCashierIdRequest, callback) {
      let postBody = putTellersTellerIdCashiersCashierIdRequest;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling updateCashier");
      }
      // verify the required parameter 'cashierId' is set
      if (cashierId === undefined || cashierId === null) {
        throw new Error("Missing the required parameter 'cashierId' when calling updateCashier");
      }
      // verify the required parameter 'putTellersTellerIdCashiersCashierIdRequest' is set
      if (putTellersTellerIdCashiersCashierIdRequest === undefined || putTellersTellerIdCashiersCashierIdRequest === null) {
        throw new Error("Missing the required parameter 'putTellersTellerIdCashiersCashierIdRequest' when calling updateCashier");
      }

      let pathParams = {
        'tellerId': tellerId,
        'cashierId': cashierId
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
      let returnType = PutTellersTellerIdCashiersCashierIdResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}/cashiers/{cashierId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTeller operation.
     * @callback module:api/TellerCashManagementApi~updateTellerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutTellersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update teller
     * @param {Number} tellerId tellerId
     * @param {module:model/PutTellersRequest} putTellersRequest 
     * @param {module:api/TellerCashManagementApi~updateTellerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutTellersResponse}
     */
    updateTeller(tellerId, putTellersRequest, callback) {
      let postBody = putTellersRequest;
      // verify the required parameter 'tellerId' is set
      if (tellerId === undefined || tellerId === null) {
        throw new Error("Missing the required parameter 'tellerId' when calling updateTeller");
      }
      // verify the required parameter 'putTellersRequest' is set
      if (putTellersRequest === undefined || putTellersRequest === null) {
        throw new Error("Missing the required parameter 'putTellersRequest' when calling updateTeller");
      }

      let pathParams = {
        'tellerId': tellerId
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
      let returnType = PutTellersResponse;
      return this.apiClient.callApi(
        '/tellers/{tellerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
