

import ApiClient from '../ApiClient';
import PostSelfLoansDatatables from './PostSelfLoansDatatables';
import PostSelfLoansDisbursementData from './PostSelfLoansDisbursementData';

/**
 * The PostSelfLoansRequest model module.
 * @module model/PostSelfLoansRequest
 * @version 1.0
 */
class PostSelfLoansRequest {
    /**
     * Constructs a new <code>PostSelfLoansRequest</code>.
     * PostSelfLoansRequest
     * @alias module:model/PostSelfLoansRequest
     */
    constructor() { 
        
        PostSelfLoansRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansRequest} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansRequest} The populated <code>PostSelfLoansRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
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
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = ApiClient.convertToType(data['loanType'], 'String');
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
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
            if (data.hasOwnProperty('expectedDisbursementDate')) {
                obj['expectedDisbursementDate'] = ApiClient.convertToType(data['expectedDisbursementDate'], 'String');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'String');
            }
            if (data.hasOwnProperty('linkAccountId')) {
                obj['linkAccountId'] = ApiClient.convertToType(data['linkAccountId'], 'Number');
            }
            if (data.hasOwnProperty('fixedEmiAmount')) {
                obj['fixedEmiAmount'] = ApiClient.convertToType(data['fixedEmiAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxOutstandingLoanBalance')) {
                obj['maxOutstandingLoanBalance'] = ApiClient.convertToType(data['maxOutstandingLoanBalance'], 'Number');
            }
            if (data.hasOwnProperty('disbursementData')) {
                obj['disbursementData'] = ApiClient.convertToType(data['disbursementData'], [PostSelfLoansDisbursementData]);
            }
            if (data.hasOwnProperty('datatables')) {
                obj['datatables'] = ApiClient.convertToType(data['datatables'], [PostSelfLoansDatatables]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PostSelfLoansRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostSelfLoansRequest.prototype['locale'] = undefined;

/**
 * @member {Number} clientId
 */
PostSelfLoansRequest.prototype['clientId'] = undefined;

/**
 * @member {Number} productId
 */
PostSelfLoansRequest.prototype['productId'] = undefined;

/**
 * @member {Number} principal
 */
PostSelfLoansRequest.prototype['principal'] = undefined;

/**
 * @member {Number} loanTermFrequency
 */
PostSelfLoansRequest.prototype['loanTermFrequency'] = undefined;

/**
 * @member {Number} loanTermFrequencyType
 */
PostSelfLoansRequest.prototype['loanTermFrequencyType'] = undefined;

/**
 * @member {String} loanType
 */
PostSelfLoansRequest.prototype['loanType'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
PostSelfLoansRequest.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
PostSelfLoansRequest.prototype['repaymentEvery'] = undefined;

/**
 * @member {Number} repaymentFrequencyType
 */
PostSelfLoansRequest.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
PostSelfLoansRequest.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {Number} amortizationType
 */
PostSelfLoansRequest.prototype['amortizationType'] = undefined;

/**
 * @member {Number} interestType
 */
PostSelfLoansRequest.prototype['interestType'] = undefined;

/**
 * @member {Number} interestCalculationPeriodType
 */
PostSelfLoansRequest.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
PostSelfLoansRequest.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {String} expectedDisbursementDate
 */
PostSelfLoansRequest.prototype['expectedDisbursementDate'] = undefined;

/**
 * @member {String} submittedOnDate
 */
PostSelfLoansRequest.prototype['submittedOnDate'] = undefined;

/**
 * @member {Number} linkAccountId
 */
PostSelfLoansRequest.prototype['linkAccountId'] = undefined;

/**
 * @member {Number} fixedEmiAmount
 */
PostSelfLoansRequest.prototype['fixedEmiAmount'] = undefined;

/**
 * @member {Number} maxOutstandingLoanBalance
 */
PostSelfLoansRequest.prototype['maxOutstandingLoanBalance'] = undefined;

/**
 * @member {Array.<module:model/PostSelfLoansDisbursementData>} disbursementData
 */
PostSelfLoansRequest.prototype['disbursementData'] = undefined;

/**
 * @member {Array.<module:model/PostSelfLoansDatatables>} datatables
 */
PostSelfLoansRequest.prototype['datatables'] = undefined;






export default PostSelfLoansRequest;

