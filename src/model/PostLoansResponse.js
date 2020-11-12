

import ApiClient from '../ApiClient';
import GetLoansLoanIdCurrency from './GetLoansLoanIdCurrency';
import PostLoansRepaymentSchedulePeriods from './PostLoansRepaymentSchedulePeriods';

/**
 * The PostLoansResponse model module.
 * @module model/PostLoansResponse
 * @version 1.0
 */
class PostLoansResponse {
    /**
     * Constructs a new <code>PostLoansResponse</code>.
     * PostLoansResponse
     * @alias module:model/PostLoansResponse
     */
    constructor() { 
        
        PostLoansResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansResponse} The populated <code>PostLoansResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansResponse();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoansLoanIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('loanTermInDays')) {
                obj['loanTermInDays'] = ApiClient.convertToType(data['loanTermInDays'], 'Number');
            }
            if (data.hasOwnProperty('totalPrincipalDisbursed')) {
                obj['totalPrincipalDisbursed'] = ApiClient.convertToType(data['totalPrincipalDisbursed'], 'Number');
            }
            if (data.hasOwnProperty('totalPrincipalExpected')) {
                obj['totalPrincipalExpected'] = ApiClient.convertToType(data['totalPrincipalExpected'], 'Number');
            }
            if (data.hasOwnProperty('totalPrincipalPaid')) {
                obj['totalPrincipalPaid'] = ApiClient.convertToType(data['totalPrincipalPaid'], 'Number');
            }
            if (data.hasOwnProperty('totalInterestCharged')) {
                obj['totalInterestCharged'] = ApiClient.convertToType(data['totalInterestCharged'], 'Number');
            }
            if (data.hasOwnProperty('totalFeeChargesCharged')) {
                obj['totalFeeChargesCharged'] = ApiClient.convertToType(data['totalFeeChargesCharged'], 'Number');
            }
            if (data.hasOwnProperty('totalPenaltyChargesCharged')) {
                obj['totalPenaltyChargesCharged'] = ApiClient.convertToType(data['totalPenaltyChargesCharged'], 'Number');
            }
            if (data.hasOwnProperty('totalWaived')) {
                obj['totalWaived'] = ApiClient.convertToType(data['totalWaived'], 'Number');
            }
            if (data.hasOwnProperty('totalWrittenOff')) {
                obj['totalWrittenOff'] = ApiClient.convertToType(data['totalWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('totalRepaymentExpected')) {
                obj['totalRepaymentExpected'] = ApiClient.convertToType(data['totalRepaymentExpected'], 'Number');
            }
            if (data.hasOwnProperty('totalRepayment')) {
                obj['totalRepayment'] = ApiClient.convertToType(data['totalRepayment'], 'Number');
            }
            if (data.hasOwnProperty('totalOutstanding')) {
                obj['totalOutstanding'] = ApiClient.convertToType(data['totalOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [PostLoansRepaymentSchedulePeriods]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoansLoanIdCurrency} currency
 */
PostLoansResponse.prototype['currency'] = undefined;

/**
 * @member {Number} loanTermInDays
 */
PostLoansResponse.prototype['loanTermInDays'] = undefined;

/**
 * @member {Number} totalPrincipalDisbursed
 */
PostLoansResponse.prototype['totalPrincipalDisbursed'] = undefined;

/**
 * @member {Number} totalPrincipalExpected
 */
PostLoansResponse.prototype['totalPrincipalExpected'] = undefined;

/**
 * @member {Number} totalPrincipalPaid
 */
PostLoansResponse.prototype['totalPrincipalPaid'] = undefined;

/**
 * @member {Number} totalInterestCharged
 */
PostLoansResponse.prototype['totalInterestCharged'] = undefined;

/**
 * @member {Number} totalFeeChargesCharged
 */
PostLoansResponse.prototype['totalFeeChargesCharged'] = undefined;

/**
 * @member {Number} totalPenaltyChargesCharged
 */
PostLoansResponse.prototype['totalPenaltyChargesCharged'] = undefined;

/**
 * @member {Number} totalWaived
 */
PostLoansResponse.prototype['totalWaived'] = undefined;

/**
 * @member {Number} totalWrittenOff
 */
PostLoansResponse.prototype['totalWrittenOff'] = undefined;

/**
 * @member {Number} totalRepaymentExpected
 */
PostLoansResponse.prototype['totalRepaymentExpected'] = undefined;

/**
 * @member {Number} totalRepayment
 */
PostLoansResponse.prototype['totalRepayment'] = undefined;

/**
 * @member {Number} totalOutstanding
 */
PostLoansResponse.prototype['totalOutstanding'] = undefined;

/**
 * @member {Array.<module:model/PostLoansRepaymentSchedulePeriods>} periods
 */
PostLoansResponse.prototype['periods'] = undefined;






export default PostLoansResponse;

