

import ApiClient from '../ApiClient';

/**
 * The PostLoansRequest model module.
 * @module model/PostLoansRequest
 * @version 1.0
 */
class PostLoansRequest {
    /**
     * Constructs a new <code>PostLoansRequest</code>.
     * PostLoansRequest
     * @alias module:model/PostLoansRequest
     */
    constructor() { 
        
        PostLoansRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansRequest} obj Optional instance to populate.
     * @return {module:model/PostLoansRequest} The populated <code>PostLoansRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('loanTermFrequency')) {
                obj['loanTermFrequency'] = ApiClient.convertToType(data['loanTermFrequency'], 'Number');
            }
            if (data.hasOwnProperty('loanTermFrequencyType')) {
                obj['loanTermFrequencyType'] = ApiClient.convertToType(data['loanTermFrequencyType'], 'Number');
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
            if (data.hasOwnProperty('interestRatePerPeriod')) {
                obj['interestRatePerPeriod'] = ApiClient.convertToType(data['interestRatePerPeriod'], 'Number');
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
            if (data.hasOwnProperty('expectedDisbursementDate')) {
                obj['expectedDisbursementDate'] = ApiClient.convertToType(data['expectedDisbursementDate'], 'String');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PostLoansRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostLoansRequest.prototype['locale'] = undefined;

/**
 * @member {Number} productId
 */
PostLoansRequest.prototype['productId'] = undefined;

/**
 * @member {Number} principal
 */
PostLoansRequest.prototype['principal'] = undefined;

/**
 * @member {Number} loanTermFrequency
 */
PostLoansRequest.prototype['loanTermFrequency'] = undefined;

/**
 * @member {Number} loanTermFrequencyType
 */
PostLoansRequest.prototype['loanTermFrequencyType'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
PostLoansRequest.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
PostLoansRequest.prototype['repaymentEvery'] = undefined;

/**
 * @member {Number} repaymentFrequencyType
 */
PostLoansRequest.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
PostLoansRequest.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {Number} amortizationType
 */
PostLoansRequest.prototype['amortizationType'] = undefined;

/**
 * @member {Number} interestType
 */
PostLoansRequest.prototype['interestType'] = undefined;

/**
 * @member {Number} interestCalculationPeriodType
 */
PostLoansRequest.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {String} expectedDisbursementDate
 */
PostLoansRequest.prototype['expectedDisbursementDate'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
PostLoansRequest.prototype['transactionProcessingStrategyId'] = undefined;






export default PostLoansRequest;

