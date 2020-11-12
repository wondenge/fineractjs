

import ApiClient from '../ApiClient';

/**
 * The PostLoanProductsRequest model module.
 * @module model/PostLoanProductsRequest
 * @version 1.0
 */
class PostLoanProductsRequest {
    /**
     * Constructs a new <code>PostLoanProductsRequest</code>.
     * PostLoanProductsRequest
     * @alias module:model/PostLoanProductsRequest
     */
    constructor() { 
        
        PostLoanProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoanProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoanProductsRequest} obj Optional instance to populate.
     * @return {module:model/PostLoanProductsRequest} The populated <code>PostLoanProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoanProductsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('digitsAfterDecimal')) {
                obj['digitsAfterDecimal'] = ApiClient.convertToType(data['digitsAfterDecimal'], 'Number');
            }
            if (data.hasOwnProperty('inMultiplesOf')) {
                obj['inMultiplesOf'] = ApiClient.convertToType(data['inMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('numberOfRepayments')) {
                obj['numberOfRepayments'] = ApiClient.convertToType(data['numberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('repaymentEvery')) {
                obj['repaymentEvery'] = ApiClient.convertToType(data['repaymentEvery'], 'Number');
            }
            if (data.hasOwnProperty('repaymentFrequencyType')) {
                obj['repaymentFrequencyType'] = ApiClient.convertToType(data['repaymentFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
            if (data.hasOwnProperty('interestRatePerPeriod')) {
                obj['interestRatePerPeriod'] = ApiClient.convertToType(data['interestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestRateFrequencyType')) {
                obj['interestRateFrequencyType'] = ApiClient.convertToType(data['interestRateFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = ApiClient.convertToType(data['amortizationType'], 'Number');
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = ApiClient.convertToType(data['interestType'], 'Number');
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = ApiClient.convertToType(data['interestCalculationPeriodType'], 'Number');
            }
            if (data.hasOwnProperty('daysInMonthType')) {
                obj['daysInMonthType'] = ApiClient.convertToType(data['daysInMonthType'], 'Number');
            }
            if (data.hasOwnProperty('daysInYearType')) {
                obj['daysInYearType'] = ApiClient.convertToType(data['daysInYearType'], 'Number');
            }
            if (data.hasOwnProperty('isInterestRecalculationEnabled')) {
                obj['isInterestRecalculationEnabled'] = ApiClient.convertToType(data['isInterestRecalculationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = ApiClient.convertToType(data['accountingRule'], 'Number');
            }
            if (data.hasOwnProperty('fundSourceAccountId')) {
                obj['fundSourceAccountId'] = ApiClient.convertToType(data['fundSourceAccountId'], 'Number');
            }
            if (data.hasOwnProperty('loanPortfolioAccountId')) {
                obj['loanPortfolioAccountId'] = ApiClient.convertToType(data['loanPortfolioAccountId'], 'Number');
            }
            if (data.hasOwnProperty('receivableInterestAccountId')) {
                obj['receivableInterestAccountId'] = ApiClient.convertToType(data['receivableInterestAccountId'], 'Number');
            }
            if (data.hasOwnProperty('receivableFeeAccountId')) {
                obj['receivableFeeAccountId'] = ApiClient.convertToType(data['receivableFeeAccountId'], 'Number');
            }
            if (data.hasOwnProperty('receivablePenaltyAccountId')) {
                obj['receivablePenaltyAccountId'] = ApiClient.convertToType(data['receivablePenaltyAccountId'], 'Number');
            }
            if (data.hasOwnProperty('interestOnLoanAccountId')) {
                obj['interestOnLoanAccountId'] = ApiClient.convertToType(data['interestOnLoanAccountId'], 'Number');
            }
            if (data.hasOwnProperty('incomeFromFeeAccountId')) {
                obj['incomeFromFeeAccountId'] = ApiClient.convertToType(data['incomeFromFeeAccountId'], 'Number');
            }
            if (data.hasOwnProperty('incomeFromPenaltyAccountId')) {
                obj['incomeFromPenaltyAccountId'] = ApiClient.convertToType(data['incomeFromPenaltyAccountId'], 'Number');
            }
            if (data.hasOwnProperty('overpaymentLiabilityAccountId')) {
                obj['overpaymentLiabilityAccountId'] = ApiClient.convertToType(data['overpaymentLiabilityAccountId'], 'Number');
            }
            if (data.hasOwnProperty('writeOffAccountId')) {
                obj['writeOffAccountId'] = ApiClient.convertToType(data['writeOffAccountId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostLoanProductsRequest.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
PostLoanProductsRequest.prototype['shortName'] = undefined;

/**
 * @member {String} currencyCode
 */
PostLoanProductsRequest.prototype['currencyCode'] = undefined;

/**
 * @member {String} locale
 */
PostLoanProductsRequest.prototype['locale'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
PostLoanProductsRequest.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
PostLoanProductsRequest.prototype['inMultiplesOf'] = undefined;

/**
 * @member {Number} principal
 */
PostLoanProductsRequest.prototype['principal'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
PostLoanProductsRequest.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
PostLoanProductsRequest.prototype['repaymentEvery'] = undefined;

/**
 * @member {Number} repaymentFrequencyType
 */
PostLoanProductsRequest.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
PostLoanProductsRequest.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
PostLoanProductsRequest.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {Number} interestRateFrequencyType
 */
PostLoanProductsRequest.prototype['interestRateFrequencyType'] = undefined;

/**
 * @member {Number} amortizationType
 */
PostLoanProductsRequest.prototype['amortizationType'] = undefined;

/**
 * @member {Number} interestType
 */
PostLoanProductsRequest.prototype['interestType'] = undefined;

/**
 * @member {Number} interestCalculationPeriodType
 */
PostLoanProductsRequest.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Number} daysInMonthType
 */
PostLoanProductsRequest.prototype['daysInMonthType'] = undefined;

/**
 * @member {Number} daysInYearType
 */
PostLoanProductsRequest.prototype['daysInYearType'] = undefined;

/**
 * @member {Boolean} isInterestRecalculationEnabled
 */
PostLoanProductsRequest.prototype['isInterestRecalculationEnabled'] = undefined;

/**
 * @member {Number} accountingRule
 */
PostLoanProductsRequest.prototype['accountingRule'] = undefined;

/**
 * @member {Number} fundSourceAccountId
 */
PostLoanProductsRequest.prototype['fundSourceAccountId'] = undefined;

/**
 * @member {Number} loanPortfolioAccountId
 */
PostLoanProductsRequest.prototype['loanPortfolioAccountId'] = undefined;

/**
 * @member {Number} receivableInterestAccountId
 */
PostLoanProductsRequest.prototype['receivableInterestAccountId'] = undefined;

/**
 * @member {Number} receivableFeeAccountId
 */
PostLoanProductsRequest.prototype['receivableFeeAccountId'] = undefined;

/**
 * @member {Number} receivablePenaltyAccountId
 */
PostLoanProductsRequest.prototype['receivablePenaltyAccountId'] = undefined;

/**
 * @member {Number} interestOnLoanAccountId
 */
PostLoanProductsRequest.prototype['interestOnLoanAccountId'] = undefined;

/**
 * @member {Number} incomeFromFeeAccountId
 */
PostLoanProductsRequest.prototype['incomeFromFeeAccountId'] = undefined;

/**
 * @member {Number} incomeFromPenaltyAccountId
 */
PostLoanProductsRequest.prototype['incomeFromPenaltyAccountId'] = undefined;

/**
 * @member {Number} overpaymentLiabilityAccountId
 */
PostLoanProductsRequest.prototype['overpaymentLiabilityAccountId'] = undefined;

/**
 * @member {Number} writeOffAccountId
 */
PostLoanProductsRequest.prototype['writeOffAccountId'] = undefined;






export default PostLoanProductsRequest;

