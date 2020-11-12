

import ApiClient from '../ApiClient';

/**
 * The PutSelfLoansLoanIdRequest model module.
 * @module model/PutSelfLoansLoanIdRequest
 * @version 1.0
 */
class PutSelfLoansLoanIdRequest {
    /**
     * Constructs a new <code>PutSelfLoansLoanIdRequest</code>.
     * PutSelfLoansLoanIdRequest
     * @alias module:model/PutSelfLoansLoanIdRequest
     */
    constructor() { 
        
        PutSelfLoansLoanIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfLoansLoanIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfLoansLoanIdRequest} obj Optional instance to populate.
     * @return {module:model/PutSelfLoansLoanIdRequest} The populated <code>PutSelfLoansLoanIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfLoansLoanIdRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
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
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = ApiClient.convertToType(data['interestType'], 'Number');
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = ApiClient.convertToType(data['interestCalculationPeriodType'], 'Number');
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = ApiClient.convertToType(data['amortizationType'], 'Number');
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
 * @member {String} locale
 */
PutSelfLoansLoanIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutSelfLoansLoanIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Number} productId
 */
PutSelfLoansLoanIdRequest.prototype['productId'] = undefined;

/**
 * @member {Number} principal
 */
PutSelfLoansLoanIdRequest.prototype['principal'] = undefined;

/**
 * @member {Number} loanTermFrequency
 */
PutSelfLoansLoanIdRequest.prototype['loanTermFrequency'] = undefined;

/**
 * @member {Number} loanTermFrequencyType
 */
PutSelfLoansLoanIdRequest.prototype['loanTermFrequencyType'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
PutSelfLoansLoanIdRequest.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
PutSelfLoansLoanIdRequest.prototype['repaymentEvery'] = undefined;

/**
 * @member {Number} repaymentFrequencyType
 */
PutSelfLoansLoanIdRequest.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
PutSelfLoansLoanIdRequest.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {Number} interestType
 */
PutSelfLoansLoanIdRequest.prototype['interestType'] = undefined;

/**
 * @member {Number} interestCalculationPeriodType
 */
PutSelfLoansLoanIdRequest.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Number} amortizationType
 */
PutSelfLoansLoanIdRequest.prototype['amortizationType'] = undefined;

/**
 * @member {String} expectedDisbursementDate
 */
PutSelfLoansLoanIdRequest.prototype['expectedDisbursementDate'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
PutSelfLoansLoanIdRequest.prototype['transactionProcessingStrategyId'] = undefined;






export default PutSelfLoansLoanIdRequest;

