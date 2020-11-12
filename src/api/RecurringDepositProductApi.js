


import ApiClient from "../ApiClient";
import DeleteRecurringDepositProductsProductIdResponse from '../model/DeleteRecurringDepositProductsProductIdResponse';
import GetRecurringDepositProductsProductIdResponse from '../model/GetRecurringDepositProductsProductIdResponse';
import GetRecurringDepositProductsResponse from '../model/GetRecurringDepositProductsResponse';
import PostRecurringDepositProductsRequest from '../model/PostRecurringDepositProductsRequest';
import PostRecurringDepositProductsResponse from '../model/PostRecurringDepositProductsResponse';
import PutRecurringDepositProductsRequest from '../model/PutRecurringDepositProductsRequest';
import PutRecurringDepositProductsResponse from '../model/PutRecurringDepositProductsResponse';

/**
* RecurringDepositProduct service.
* @module api/RecurringDepositProductApi
* @version 1.0
*/
export default class RecurringDepositProductApi {

    /**
    * Constructs a new RecurringDepositProductApi. 
    * @alias module:api/RecurringDepositProductApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create11 operation.
     * @callback module:api/RecurringDepositProductApi~create11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostRecurringDepositProductsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Recurring Deposit Product
     * Creates a Recurring Deposit Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, minDepositTerm, minDepositTermTypeId, recurringDepositFrequency, recurringDepositFrequencyTypeId, accountingRule, depositAmount  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: lockinPeriodFrequency, lockinPeriodFrequencyType, maxDepositTerm, maxDepositTermTypeId, inMultiplesOfDepositTerm, inMultiplesOfDepositTermTypeId, preClosurePenalApplicable, preClosurePenalInterest, preClosurePenalInterestOnTypeId, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, charts, minDepositAmount, maxDepositAmount, withHoldTax, taxGroupId
     * @param {module:model/PostRecurringDepositProductsRequest} postRecurringDepositProductsRequest 
     * @param {module:api/RecurringDepositProductApi~create11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostRecurringDepositProductsResponse}
     */
    create11(postRecurringDepositProductsRequest, callback) {
      let postBody = postRecurringDepositProductsRequest;
      // verify the required parameter 'postRecurringDepositProductsRequest' is set
      if (postRecurringDepositProductsRequest === undefined || postRecurringDepositProductsRequest === null) {
        throw new Error("Missing the required parameter 'postRecurringDepositProductsRequest' when calling create11");
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
      let returnType = PostRecurringDepositProductsResponse;
      return this.apiClient.callApi(
        '/recurringdepositproducts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete17 operation.
     * @callback module:api/RecurringDepositProductApi~delete17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteRecurringDepositProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Recurring Deposit Product
     * Deletes a Recurring Deposit Product
     * @param {Number} productId productId
     * @param {module:api/RecurringDepositProductApi~delete17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteRecurringDepositProductsProductIdResponse}
     */
    delete17(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling delete17");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = DeleteRecurringDepositProductsProductIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositproducts/{productId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll31 operation.
     * @callback module:api/RecurringDepositProductApi~retrieveAll31Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetRecurringDepositProductsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Recuring Deposit Products
     * Lists Recuring Deposit Products  Example Requests:  recurringdepositproducts   recurringdepositproducts?fields=name
     * @param {module:api/RecurringDepositProductApi~retrieveAll31Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetRecurringDepositProductsResponse>}
     */
    retrieveAll31(callback) {
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
      let returnType = [GetRecurringDepositProductsResponse];
      return this.apiClient.callApi(
        '/recurringdepositproducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne21 operation.
     * @callback module:api/RecurringDepositProductApi~retrieveOne21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRecurringDepositProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Recurring Deposit Product
     * Retrieves a Recurring Deposit Product  Example Requests:  recurringdepositproducts/1   recurringdepositproducts/1?template=true   recurringdepositproducts/1?fields=name,description
     * @param {Number} productId productId
     * @param {module:api/RecurringDepositProductApi~retrieveOne21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRecurringDepositProductsProductIdResponse}
     */
    retrieveOne21(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveOne21");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = GetRecurringDepositProductsProductIdResponse;
      return this.apiClient.callApi(
        '/recurringdepositproducts/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate16 operation.
     * @callback module:api/RecurringDepositProductApi~retrieveTemplate16Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/RecurringDepositProductApi~retrieveTemplate16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate16(callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/recurringdepositproducts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update17 operation.
     * @callback module:api/RecurringDepositProductApi~update17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutRecurringDepositProductsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Recurring Deposit Product
     * Updates a Recurring Deposit Product
     * @param {Number} productId productId
     * @param {module:model/PutRecurringDepositProductsRequest} putRecurringDepositProductsRequest 
     * @param {module:api/RecurringDepositProductApi~update17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutRecurringDepositProductsResponse}
     */
    update17(productId, putRecurringDepositProductsRequest, callback) {
      let postBody = putRecurringDepositProductsRequest;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling update17");
      }
      // verify the required parameter 'putRecurringDepositProductsRequest' is set
      if (putRecurringDepositProductsRequest === undefined || putRecurringDepositProductsRequest === null) {
        throw new Error("Missing the required parameter 'putRecurringDepositProductsRequest' when calling update17");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = PutRecurringDepositProductsResponse;
      return this.apiClient.callApi(
        '/recurringdepositproducts/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
