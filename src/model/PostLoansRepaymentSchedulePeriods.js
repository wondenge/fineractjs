

import ApiClient from '../ApiClient';

/**
 * The PostLoansRepaymentSchedulePeriods model module.
 * @module model/PostLoansRepaymentSchedulePeriods
 * @version 1.0
 */
class PostLoansRepaymentSchedulePeriods {
    /**
     * Constructs a new <code>PostLoansRepaymentSchedulePeriods</code>.
     * @alias module:model/PostLoansRepaymentSchedulePeriods
     */
    constructor() { 
        
        PostLoansRepaymentSchedulePeriods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansRepaymentSchedulePeriods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansRepaymentSchedulePeriods} obj Optional instance to populate.
     * @return {module:model/PostLoansRepaymentSchedulePeriods} The populated <code>PostLoansRepaymentSchedulePeriods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansRepaymentSchedulePeriods();

            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('principalDisbursed')) {
                obj['principalDisbursed'] = ApiClient.convertToType(data['principalDisbursed'], 'Number');
            }
            if (data.hasOwnProperty('principalLoanBalanceOutstanding')) {
                obj['principalLoanBalanceOutstanding'] = ApiClient.convertToType(data['principalLoanBalanceOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesDue')) {
                obj['feeChargesDue'] = ApiClient.convertToType(data['feeChargesDue'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesOutstanding')) {
                obj['feeChargesOutstanding'] = ApiClient.convertToType(data['feeChargesOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('totalOriginalDueForPeriod')) {
                obj['totalOriginalDueForPeriod'] = ApiClient.convertToType(data['totalOriginalDueForPeriod'], 'Number');
            }
            if (data.hasOwnProperty('totalDueForPeriod')) {
                obj['totalDueForPeriod'] = ApiClient.convertToType(data['totalDueForPeriod'], 'Number');
            }
            if (data.hasOwnProperty('totalOutstandingForPeriod')) {
                obj['totalOutstandingForPeriod'] = ApiClient.convertToType(data['totalOutstandingForPeriod'], 'Number');
            }
            if (data.hasOwnProperty('totalOverdue')) {
                obj['totalOverdue'] = ApiClient.convertToType(data['totalOverdue'], 'Number');
            }
            if (data.hasOwnProperty('totalActualCostOfLoanForPeriod')) {
                obj['totalActualCostOfLoanForPeriod'] = ApiClient.convertToType(data['totalActualCostOfLoanForPeriod'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} period
 */
PostLoansRepaymentSchedulePeriods.prototype['period'] = undefined;

/**
 * @member {Date} dueDate
 */
PostLoansRepaymentSchedulePeriods.prototype['dueDate'] = undefined;

/**
 * @member {Number} principalDisbursed
 */
PostLoansRepaymentSchedulePeriods.prototype['principalDisbursed'] = undefined;

/**
 * @member {Number} principalLoanBalanceOutstanding
 */
PostLoansRepaymentSchedulePeriods.prototype['principalLoanBalanceOutstanding'] = undefined;

/**
 * @member {Number} feeChargesDue
 */
PostLoansRepaymentSchedulePeriods.prototype['feeChargesDue'] = undefined;

/**
 * @member {Number} feeChargesOutstanding
 */
PostLoansRepaymentSchedulePeriods.prototype['feeChargesOutstanding'] = undefined;

/**
 * @member {Number} totalOriginalDueForPeriod
 */
PostLoansRepaymentSchedulePeriods.prototype['totalOriginalDueForPeriod'] = undefined;

/**
 * @member {Number} totalDueForPeriod
 */
PostLoansRepaymentSchedulePeriods.prototype['totalDueForPeriod'] = undefined;

/**
 * @member {Number} totalOutstandingForPeriod
 */
PostLoansRepaymentSchedulePeriods.prototype['totalOutstandingForPeriod'] = undefined;

/**
 * @member {Number} totalOverdue
 */
PostLoansRepaymentSchedulePeriods.prototype['totalOverdue'] = undefined;

/**
 * @member {Number} totalActualCostOfLoanForPeriod
 */
PostLoansRepaymentSchedulePeriods.prototype['totalActualCostOfLoanForPeriod'] = undefined;






export default PostLoansRepaymentSchedulePeriods;

