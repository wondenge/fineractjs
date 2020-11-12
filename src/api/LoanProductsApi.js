


import ApiClient from "../ApiClient";
import GetLoanProductsProductIdResponse from '../model/GetLoanProductsProductIdResponse';
import GetLoanProductsResponse from '../model/GetLoanProductsResponse';
import GetLoanProductsTemplateResponse from '../model/GetLoanProductsTemplateResponse';
import PostLoanProductsRequest from '../model/PostLoanProductsRequest';
import PostLoanProductsResponse from '../model/PostLoanProductsResponse';
import PutLoanProductsProductIdRequest from '../model/PutLoanProductsProductIdRequest';
import PutLoanProductsProductIdResponse from '../model/PutLoanProductsProductIdResponse';

/**
* LoanProducts service.
* @module api/LoanProductsApi
* @version 1.0
*/
export default class LoanProductsApi {

    /**
    * Constructs a new LoanProductsApi. 
    * @alias module:api/LoanProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createLoanProduct operation.
     * @callback module:api/LoanProductsApi~createLoanProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoanProductsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Loan Product
     * Depending of the Accounting Rule (accountingRule) selected, additional fields with details of the appropriate Ledger Account identifiers would need to be passed in.  Refer MifosX Accounting Specs Draft for more details regarding the significance of the selected accounting rule  Mandatory Fields: name, shortName, currencyCode, digitsAfterDecimal, inMultiplesOf, principal, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, interestRateFrequencyType, amortizationType, interestType, interestCalculationPeriodType, transactionProcessingStrategyId, accountingRule, isInterestRecalculationEnabled, daysInYearType, daysInMonthType  Optional Fields: inArrearsTolerance, graceOnPrincipalPayment, graceOnInterestPayment, graceOnInterestCharged, graceOnArrearsAgeing, charges, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, includeInBorrowerCycle, useBorrowerCycle,principalVariationsForBorrowerCycle, numberOfRepaymentVariationsForBorrowerCycle, interestRateVariationsForBorrowerCycle, multiDisburseLoan,maxTrancheCount, outstandingLoanBalance,overdueDaysForNPA,holdGuaranteeFunds, principalThresholdForLastInstalment, accountMovesOutOfNPAOnlyOnArrearsCompletion, canDefineInstallmentAmount, installmentAmountInMultiplesOf, allowAttributeOverrides, allowPartialPeriodInterestCalcualtion  Additional Mandatory Fields for Cash(2) based accounting: fundSourceAccountId, loanPortfolioAccountId, interestOnLoanAccountId, incomeFromFeeAccountId, incomeFromPenaltyAccountId, writeOffAccountId, transfersInSuspenseAccountId, overpaymentLiabilityAccountId  Additional Mandatory Fields for periodic (3) and upfront (4)accrual accounting: fundSourceAccountId, loanPortfolioAccountId, interestOnLoanAccountId, incomeFromFeeAccountId, incomeFromPenaltyAccountId, writeOffAccountId, receivableInterestAccountId, receivableFeeAccountId, receivablePenaltyAccountId, transfersInSuspenseAccountId, overpaymentLiabilityAccountId  Additional Mandatory Fields if interest recalculation is enabled(true): interestRecalculationCompoundingMethod, rescheduleStrategyMethod, recalculationRestFrequencyType  Additional Optional Fields if interest recalculation is enabled(true): isArrearsBasedOnOriginalSchedule, preClosureInterestCalculationStrategy  Additional Optional Fields if interest recalculation is enabled(true) and recalculationRestFrequencyType is not same as repayment period: recalculationRestFrequencyInterval, recalculationRestFrequencyDate  Additional Optional Fields if interest recalculation is enabled(true) and interestRecalculationCompoundingMethod is enabled: recalculationCompoundingFrequencyType  Additional Optional Fields if interest recalculation is enabled(true) and interestRecalculationCompoundingMethod is enabled and recalculationCompoundingFrequencyType is not same as repayment period: recalculationCompoundingFrequencyInterval, recalculationCompoundingFrequencyDate  Additional Mandatory Fields if Hold Guarantee funds is enabled(true): mandatoryGuarantee  Additional Optional Fields if Hold Guarantee funds is enabled(true): minimumGuaranteeFromOwnFunds,minimumGuaranteeFromGuarantor
     * @param {module:model/PostLoanProductsRequest} postLoanProductsRequest 
     * @param {module:api/LoanProductsApi~createLoanProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoanProductsResponse}
     */
    createLoanProduct(postLoanProductsRequest, callback) {
      let postBody = postLoanProductsRequest;
      // verify the required parameter 'postLoanProductsRequest' is set
      if (postLoanProductsRequest === undefined || postLoanProductsRequest === null) {
        throw new Error("Missing the required parameter 'postLoanProductsRequest' when calling createLoanProduct");
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
      let returnType = PostLoanProductsResponse;
      return this.apiClient.callApi(
        '/loanproducts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllLoanProducts operation.
     * @callback module:api/LoanProductsApi~retrieveAllLoanProductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetLoanProductsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Loan Products
     * Lists Loan Products  Example Requests:  loanproducts   loanproducts?fields=name,description,interestRateFrequencyType,amortizationType
     * @param {module:api/LoanProductsApi~retrieveAllLoanProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetLoanProductsResponse>}
     */
    retrieveAllLoanProducts(callback) {
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
      let returnType = [GetLoanProductsResponse];
      return this.apiClient.callApi(
        '/loanproducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveLoanProductDetails operation.
     * @callback module:api/LoanProductsApi~retrieveLoanProductDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoanProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Loan Product
     * Retrieves a Loan Product  Example Requests:  loanproducts/1   loanproducts/1?template=true   loanproducts/1?fields=name,description,numberOfRepayments
     * @param {Number} productId productId
     * @param {module:api/LoanProductsApi~retrieveLoanProductDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoanProductsProductIdResponse}
     */
    retrieveLoanProductDetails(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveLoanProductDetails");
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
      let returnType = GetLoanProductsProductIdResponse;
      return this.apiClient.callApi(
        '/loanproducts/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate10 operation.
     * @callback module:api/LoanProductsApi~retrieveTemplate10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoanProductsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Loan Product Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loanproducts/template
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isProductMixTemplate isProductMixTemplate
     * @param {module:api/LoanProductsApi~retrieveTemplate10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoanProductsTemplateResponse}
     */
    retrieveTemplate10(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'isProductMixTemplate': opts['isProductMixTemplate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLoanProductsTemplateResponse;
      return this.apiClient.callApi(
        '/loanproducts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoanProduct operation.
     * @callback module:api/LoanProductsApi~updateLoanProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutLoanProductsProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Loan Product
     * Updates a Loan Product
     * @param {Number} productId productId
     * @param {module:model/PutLoanProductsProductIdRequest} putLoanProductsProductIdRequest 
     * @param {module:api/LoanProductsApi~updateLoanProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutLoanProductsProductIdResponse}
     */
    updateLoanProduct(productId, putLoanProductsProductIdRequest, callback) {
      let postBody = putLoanProductsProductIdRequest;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateLoanProduct");
      }
      // verify the required parameter 'putLoanProductsProductIdRequest' is set
      if (putLoanProductsProductIdRequest === undefined || putLoanProductsProductIdRequest === null) {
        throw new Error("Missing the required parameter 'putLoanProductsProductIdRequest' when calling updateLoanProduct");
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
      let returnType = PutLoanProductsProductIdResponse;
      return this.apiClient.callApi(
        '/loanproducts/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
