


import ApiClient from "../ApiClient";
import DeleteFixedDepositProductsProductIdResponse from '../model/DeleteFixedDepositProductsProductIdResponse';
import GetFixedDepositProductsProductIdResponse from '../model/GetFixedDepositProductsProductIdResponse';
import GetFixedDepositProductsResponse from '../model/GetFixedDepositProductsResponse';
import PostFixedDepositProductsRequest from '../model/PostFixedDepositProductsRequest';
import PostFixedDepositProductsResponse from '../model/PostFixedDepositProductsResponse';
import PutFixedDepositProductsProductIdRequest from '../model/PutFixedDepositProductsProductIdRequest';
import PutFixedDepositProductsProductIdResponse from '../model/PutFixedDepositProductsProductIdResponse';

/**
* FixedDepositProduct service.
* @module api/FixedDepositProductApi
* @version 1.0
*/
export default class FixedDepositProductApi {

    /**
    * Constructs a new FixedDepositProductApi. 
    * @alias module:api/FixedDepositProductApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create10 operation.
     * @callback module:api/FixedDepositProductApi~create10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostFixedDepositProductsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Fixed Deposit Product
     * Creates a Fixed Deposit Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, minDepositTerm, minDepositTermTypeId, accountingRule  Optional Fields: lockinPeriodFrequency, lockinPeriodFrequencyType, maxDepositTerm, maxDepositTermTypeId, inMultiplesOfDepositTerm, inMultiplesOfDepositTermTypeId, preClosurePenalApplicable, preClosurePenalInterest, preClosurePenalInterestOnTypeId, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, charts, , withHoldTax, taxGroupId   Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId
     * @param {module:model/PostFixedDepositProductsRequest} postFixedDepositProductsRequest 
     * @param {module:api/FixedDepositProductApi~create10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostFixedDepositProductsResponse}
     */
    create10(postFixedDepositProductsRequest, callback) {
      let postBody = postFixedDepositProductsRequest;
      // verify the required parameter 'postFixedDepositProductsRequest' is set
      if (postFixedDepositProductsRequest === undefined || postFixedDepositProductsRequest === null) {
        throw new Error("Missing the required parameter 'postFixedDepositProductsRequest' when calling create10");
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
      let returnType = PostFixedDepositProductsResponse;
      return this.apiClient.callApi(
        '/fixeddepositproducts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete15 operation.
     * @callback module:api/FixedDepositProductApi~delete15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteFixedDepositProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Fixed Deposit Product
     * Deletes a Fixed Deposit Product
     * @param {Number} productId productId
     * @param {module:api/FixedDepositProductApi~delete15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteFixedDepositProductsProductIdResponse}
     */
    delete15(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling delete15");
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
      let returnType = DeleteFixedDepositProductsProductIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositproducts/{productId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll29 operation.
     * @callback module:api/FixedDepositProductApi~retrieveAll29Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFixedDepositProductsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Fixed Deposit Products
     * Lists Fixed Deposit Products  Example Requests:  fixeddepositproducts   fixeddepositproducts?fields=name
     * @param {module:api/FixedDepositProductApi~retrieveAll29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFixedDepositProductsResponse>}
     */
    retrieveAll29(callback) {
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
      let returnType = [GetFixedDepositProductsResponse];
      return this.apiClient.callApi(
        '/fixeddepositproducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne18 operation.
     * @callback module:api/FixedDepositProductApi~retrieveOne18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFixedDepositProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Fixed Deposit Product
     * Retrieves a Fixed Deposit Product  Example Requests:  fixeddepositproducts/1   fixeddepositproducts/1?template=true   fixeddepositproducts/1?fields=name,description
     * @param {Number} productId productId
     * @param {module:api/FixedDepositProductApi~retrieveOne18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFixedDepositProductsProductIdResponse}
     */
    retrieveOne18(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveOne18");
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
      let returnType = GetFixedDepositProductsProductIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositproducts/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate14 operation.
     * @callback module:api/FixedDepositProductApi~retrieveTemplate14Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/FixedDepositProductApi~retrieveTemplate14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate14(callback) {
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
        '/fixeddepositproducts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update15 operation.
     * @callback module:api/FixedDepositProductApi~update15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutFixedDepositProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Fixed Deposit Product
     * Updates a Fixed Deposit Product
     * @param {Number} productId productId
     * @param {module:model/PutFixedDepositProductsProductIdRequest} putFixedDepositProductsProductIdRequest 
     * @param {module:api/FixedDepositProductApi~update15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutFixedDepositProductsProductIdResponse}
     */
    update15(productId, putFixedDepositProductsProductIdRequest, callback) {
      let postBody = putFixedDepositProductsProductIdRequest;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling update15");
      }
      // verify the required parameter 'putFixedDepositProductsProductIdRequest' is set
      if (putFixedDepositProductsProductIdRequest === undefined || putFixedDepositProductsProductIdRequest === null) {
        throw new Error("Missing the required parameter 'putFixedDepositProductsProductIdRequest' when calling update15");
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
      let returnType = PutFixedDepositProductsProductIdResponse;
      return this.apiClient.callApi(
        '/fixeddepositproducts/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
