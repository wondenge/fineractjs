


import ApiClient from "../ApiClient";
import DeleteSavingsProductsProductIdResponse from '../model/DeleteSavingsProductsProductIdResponse';
import GetSavingsProductsProductIdResponse from '../model/GetSavingsProductsProductIdResponse';
import GetSavingsProductsResponse from '../model/GetSavingsProductsResponse';
import GetSavingsProductsTemplateResponse from '../model/GetSavingsProductsTemplateResponse';
import PostSavingsProductsRequest from '../model/PostSavingsProductsRequest';
import PostSavingsProductsResponse from '../model/PostSavingsProductsResponse';
import PutSavingsProductsProductIdRequest from '../model/PutSavingsProductsProductIdRequest';
import PutSavingsProductsProductIdResponse from '../model/PutSavingsProductsProductIdResponse';

/**
* SavingsProduct service.
* @module api/SavingsProductApi
* @version 1.0
*/
export default class SavingsProductApi {

    /**
    * Constructs a new SavingsProductApi. 
    * @alias module:api/SavingsProductApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create12 operation.
     * @callback module:api/SavingsProductApi~create12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSavingsProductsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Savings Product
     * Creates a Savings Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, allowOverdraft, overdraftLimit, minBalanceForInterestCalculation,withHoldTax,taxGroupId
     * @param {module:model/PostSavingsProductsRequest} postSavingsProductsRequest 
     * @param {module:api/SavingsProductApi~create12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSavingsProductsResponse}
     */
    create12(postSavingsProductsRequest, callback) {
      let postBody = postSavingsProductsRequest;
      // verify the required parameter 'postSavingsProductsRequest' is set
      if (postSavingsProductsRequest === undefined || postSavingsProductsRequest === null) {
        throw new Error("Missing the required parameter 'postSavingsProductsRequest' when calling create12");
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
      let returnType = PostSavingsProductsResponse;
      return this.apiClient.callApi(
        '/savingsproducts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete19 operation.
     * @callback module:api/SavingsProductApi~delete19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteSavingsProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Savings Product
     * Deletes a Savings Product
     * @param {Number} productId productId
     * @param {module:api/SavingsProductApi~delete19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteSavingsProductsProductIdResponse}
     */
    delete19(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling delete19");
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
      let returnType = DeleteSavingsProductsProductIdResponse;
      return this.apiClient.callApi(
        '/savingsproducts/{productId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll33 operation.
     * @callback module:api/SavingsProductApi~retrieveAll33Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSavingsProductsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Savings Products
     * Lists Savings Products  Example Requests:  savingsproducts  savingsproducts?fields=name
     * @param {module:api/SavingsProductApi~retrieveAll33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSavingsProductsResponse>}
     */
    retrieveAll33(callback) {
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
      let returnType = [GetSavingsProductsResponse];
      return this.apiClient.callApi(
        '/savingsproducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne24 operation.
     * @callback module:api/SavingsProductApi~retrieveOne24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Savings Product
     * Retrieves a Savings Product  Example Requests:  savingsproducts/1  savingsproducts/1?template=true  savingsproducts/1?fields=name,description
     * @param {Number} productId productId
     * @param {module:api/SavingsProductApi~retrieveOne24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsProductsProductIdResponse}
     */
    retrieveOne24(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveOne24");
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
      let returnType = GetSavingsProductsProductIdResponse;
      return this.apiClient.callApi(
        '/savingsproducts/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate19 operation.
     * @callback module:api/SavingsProductApi~retrieveTemplate19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSavingsProductsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Savings Product Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsproducts/template
     * @param {module:api/SavingsProductApi~retrieveTemplate19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSavingsProductsTemplateResponse}
     */
    retrieveTemplate19(callback) {
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
      let returnType = GetSavingsProductsTemplateResponse;
      return this.apiClient.callApi(
        '/savingsproducts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update19 operation.
     * @callback module:api/SavingsProductApi~update19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSavingsProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Savings Product
     * Updates a Savings Product
     * @param {Number} productId productId
     * @param {module:model/PutSavingsProductsProductIdRequest} putSavingsProductsProductIdRequest 
     * @param {module:api/SavingsProductApi~update19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSavingsProductsProductIdResponse}
     */
    update19(productId, putSavingsProductsProductIdRequest, callback) {
      let postBody = putSavingsProductsProductIdRequest;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling update19");
      }
      // verify the required parameter 'putSavingsProductsProductIdRequest' is set
      if (putSavingsProductsProductIdRequest === undefined || putSavingsProductsProductIdRequest === null) {
        throw new Error("Missing the required parameter 'putSavingsProductsProductIdRequest' when calling update19");
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
      let returnType = PutSavingsProductsProductIdResponse;
      return this.apiClient.callApi(
        '/savingsproducts/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
