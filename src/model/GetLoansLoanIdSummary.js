

import ApiClient from '../ApiClient';
import GetLoansLoanIdCurrency from './GetLoansLoanIdCurrency';
import GetLoansLoanIdDisbursementDetails from './GetLoansLoanIdDisbursementDetails';
import GetLoansLoanIdLinkedAccount from './GetLoansLoanIdLinkedAccount';
import GetLoansLoanIdOverdueCharges from './GetLoansLoanIdOverdueCharges';

/**
 * The GetLoansLoanIdSummary model module.
 * @module model/GetLoansLoanIdSummary
 * @version 1.0
 */
class GetLoansLoanIdSummary {
    /**
     * Constructs a new <code>GetLoansLoanIdSummary</code>.
     * @alias module:model/GetLoansLoanIdSummary
     */
    constructor() { 
        
        GetLoansLoanIdSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdSummary} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdSummary} The populated <code>GetLoansLoanIdSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoansLoanIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('principalDisbursed')) {
                obj['principalDisbursed'] = ApiClient.convertToType(data['principalDisbursed'], 'Number');
            }
            if (data.hasOwnProperty('principalPaid')) {
                obj['principalPaid'] = ApiClient.convertToType(data['principalPaid'], 'Number');
            }
            if (data.hasOwnProperty('principalWrittenOff')) {
                obj['principalWrittenOff'] = ApiClient.convertToType(data['principalWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('principalOutstanding')) {
                obj['principalOutstanding'] = ApiClient.convertToType(data['principalOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('principalOverdue')) {
                obj['principalOverdue'] = ApiClient.convertToType(data['principalOverdue'], 'Number');
            }
            if (data.hasOwnProperty('interestCharged')) {
                obj['interestCharged'] = ApiClient.convertToType(data['interestCharged'], 'Number');
            }
            if (data.hasOwnProperty('interestPaid')) {
                obj['interestPaid'] = ApiClient.convertToType(data['interestPaid'], 'Number');
            }
            if (data.hasOwnProperty('interestWaived')) {
                obj['interestWaived'] = ApiClient.convertToType(data['interestWaived'], 'Number');
            }
            if (data.hasOwnProperty('interestWrittenOff')) {
                obj['interestWrittenOff'] = ApiClient.convertToType(data['interestWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('interestOutstanding')) {
                obj['interestOutstanding'] = ApiClient.convertToType(data['interestOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('interestOverdue')) {
                obj['interestOverdue'] = ApiClient.convertToType(data['interestOverdue'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesCharged')) {
                obj['feeChargesCharged'] = ApiClient.convertToType(data['feeChargesCharged'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesDueAtDisbursementCharged')) {
                obj['feeChargesDueAtDisbursementCharged'] = ApiClient.convertToType(data['feeChargesDueAtDisbursementCharged'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesPaid')) {
                obj['feeChargesPaid'] = ApiClient.convertToType(data['feeChargesPaid'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesWaived')) {
                obj['feeChargesWaived'] = ApiClient.convertToType(data['feeChargesWaived'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesWrittenOff')) {
                obj['feeChargesWrittenOff'] = ApiClient.convertToType(data['feeChargesWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesOutstanding')) {
                obj['feeChargesOutstanding'] = ApiClient.convertToType(data['feeChargesOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('feeChargesOverdue')) {
                obj['feeChargesOverdue'] = ApiClient.convertToType(data['feeChargesOverdue'], 'Number');
            }
            if (data.hasOwnProperty('penaltyChargesCharged')) {
                obj['penaltyChargesCharged'] = ApiClient.convertToType(data['penaltyChargesCharged'], 'Number');
            }
            if (data.hasOwnProperty('penaltyChargesPaid')) {
                obj['penaltyChargesPaid'] = ApiClient.convertToType(data['penaltyChargesPaid'], 'Number');
            }
            if (data.hasOwnProperty('penaltyChargesWaived')) {
                obj['penaltyChargesWaived'] = ApiClient.convertToType(data['penaltyChargesWaived'], 'Number');
            }
            if (data.hasOwnProperty('penaltyChargesWrittenOff')) {
                obj['penaltyChargesWrittenOff'] = ApiClient.convertToType(data['penaltyChargesWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('penaltyChargesOutstanding')) {
                obj['penaltyChargesOutstanding'] = ApiClient.convertToType(data['penaltyChargesOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('penaltyChargesOverdue')) {
                obj['penaltyChargesOverdue'] = ApiClient.convertToType(data['penaltyChargesOverdue'], 'Number');
            }
            if (data.hasOwnProperty('totalExpectedRepayment')) {
                obj['totalExpectedRepayment'] = ApiClient.convertToType(data['totalExpectedRepayment'], 'Number');
            }
            if (data.hasOwnProperty('totalRepayment')) {
                obj['totalRepayment'] = ApiClient.convertToType(data['totalRepayment'], 'Number');
            }
            if (data.hasOwnProperty('totalExpectedCostOfLoan')) {
                obj['totalExpectedCostOfLoan'] = ApiClient.convertToType(data['totalExpectedCostOfLoan'], 'Number');
            }
            if (data.hasOwnProperty('totalCostOfLoan')) {
                obj['totalCostOfLoan'] = ApiClient.convertToType(data['totalCostOfLoan'], 'Number');
            }
            if (data.hasOwnProperty('totalWaived')) {
                obj['totalWaived'] = ApiClient.convertToType(data['totalWaived'], 'Number');
            }
            if (data.hasOwnProperty('totalWrittenOff')) {
                obj['totalWrittenOff'] = ApiClient.convertToType(data['totalWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('totalOutstanding')) {
                obj['totalOutstanding'] = ApiClient.convertToType(data['totalOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('totalOverdue')) {
                obj['totalOverdue'] = ApiClient.convertToType(data['totalOverdue'], 'Number');
            }
            if (data.hasOwnProperty('overdueSinceDate')) {
                obj['overdueSinceDate'] = ApiClient.convertToType(data['overdueSinceDate'], 'Date');
            }
            if (data.hasOwnProperty('linkedAccount')) {
                obj['linkedAccount'] = GetLoansLoanIdLinkedAccount.constructFromObject(data['linkedAccount']);
            }
            if (data.hasOwnProperty('disbursementDetails')) {
                obj['disbursementDetails'] = ApiClient.convertToType(data['disbursementDetails'], [GetLoansLoanIdDisbursementDetails]);
            }
            if (data.hasOwnProperty('fixedEmiAmount')) {
                obj['fixedEmiAmount'] = ApiClient.convertToType(data['fixedEmiAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxOutstandingLoanBalance')) {
                obj['maxOutstandingLoanBalance'] = ApiClient.convertToType(data['maxOutstandingLoanBalance'], 'Number');
            }
            if (data.hasOwnProperty('canDisburse')) {
                obj['canDisburse'] = ApiClient.convertToType(data['canDisburse'], 'Boolean');
            }
            if (data.hasOwnProperty('emiAmountVariations')) {
                obj['emiAmountVariations'] = ApiClient.convertToType(data['emiAmountVariations'], [Object]);
            }
            if (data.hasOwnProperty('inArrears')) {
                obj['inArrears'] = ApiClient.convertToType(data['inArrears'], 'Boolean');
            }
            if (data.hasOwnProperty('isNPA')) {
                obj['isNPA'] = ApiClient.convertToType(data['isNPA'], 'Boolean');
            }
            if (data.hasOwnProperty('overdueCharges')) {
                obj['overdueCharges'] = ApiClient.convertToType(data['overdueCharges'], [GetLoansLoanIdOverdueCharges]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoansLoanIdCurrency} currency
 */
GetLoansLoanIdSummary.prototype['currency'] = undefined;

/**
 * @member {Number} principalDisbursed
 */
GetLoansLoanIdSummary.prototype['principalDisbursed'] = undefined;

/**
 * @member {Number} principalPaid
 */
GetLoansLoanIdSummary.prototype['principalPaid'] = undefined;

/**
 * @member {Number} principalWrittenOff
 */
GetLoansLoanIdSummary.prototype['principalWrittenOff'] = undefined;

/**
 * @member {Number} principalOutstanding
 */
GetLoansLoanIdSummary.prototype['principalOutstanding'] = undefined;

/**
 * @member {Number} principalOverdue
 */
GetLoansLoanIdSummary.prototype['principalOverdue'] = undefined;

/**
 * @member {Number} interestCharged
 */
GetLoansLoanIdSummary.prototype['interestCharged'] = undefined;

/**
 * @member {Number} interestPaid
 */
GetLoansLoanIdSummary.prototype['interestPaid'] = undefined;

/**
 * @member {Number} interestWaived
 */
GetLoansLoanIdSummary.prototype['interestWaived'] = undefined;

/**
 * @member {Number} interestWrittenOff
 */
GetLoansLoanIdSummary.prototype['interestWrittenOff'] = undefined;

/**
 * @member {Number} interestOutstanding
 */
GetLoansLoanIdSummary.prototype['interestOutstanding'] = undefined;

/**
 * @member {Number} interestOverdue
 */
GetLoansLoanIdSummary.prototype['interestOverdue'] = undefined;

/**
 * @member {Number} feeChargesCharged
 */
GetLoansLoanIdSummary.prototype['feeChargesCharged'] = undefined;

/**
 * @member {Number} feeChargesDueAtDisbursementCharged
 */
GetLoansLoanIdSummary.prototype['feeChargesDueAtDisbursementCharged'] = undefined;

/**
 * @member {Number} feeChargesPaid
 */
GetLoansLoanIdSummary.prototype['feeChargesPaid'] = undefined;

/**
 * @member {Number} feeChargesWaived
 */
GetLoansLoanIdSummary.prototype['feeChargesWaived'] = undefined;

/**
 * @member {Number} feeChargesWrittenOff
 */
GetLoansLoanIdSummary.prototype['feeChargesWrittenOff'] = undefined;

/**
 * @member {Number} feeChargesOutstanding
 */
GetLoansLoanIdSummary.prototype['feeChargesOutstanding'] = undefined;

/**
 * @member {Number} feeChargesOverdue
 */
GetLoansLoanIdSummary.prototype['feeChargesOverdue'] = undefined;

/**
 * @member {Number} penaltyChargesCharged
 */
GetLoansLoanIdSummary.prototype['penaltyChargesCharged'] = undefined;

/**
 * @member {Number} penaltyChargesPaid
 */
GetLoansLoanIdSummary.prototype['penaltyChargesPaid'] = undefined;

/**
 * @member {Number} penaltyChargesWaived
 */
GetLoansLoanIdSummary.prototype['penaltyChargesWaived'] = undefined;

/**
 * @member {Number} penaltyChargesWrittenOff
 */
GetLoansLoanIdSummary.prototype['penaltyChargesWrittenOff'] = undefined;

/**
 * @member {Number} penaltyChargesOutstanding
 */
GetLoansLoanIdSummary.prototype['penaltyChargesOutstanding'] = undefined;

/**
 * @member {Number} penaltyChargesOverdue
 */
GetLoansLoanIdSummary.prototype['penaltyChargesOverdue'] = undefined;

/**
 * @member {Number} totalExpectedRepayment
 */
GetLoansLoanIdSummary.prototype['totalExpectedRepayment'] = undefined;

/**
 * @member {Number} totalRepayment
 */
GetLoansLoanIdSummary.prototype['totalRepayment'] = undefined;

/**
 * @member {Number} totalExpectedCostOfLoan
 */
GetLoansLoanIdSummary.prototype['totalExpectedCostOfLoan'] = undefined;

/**
 * @member {Number} totalCostOfLoan
 */
GetLoansLoanIdSummary.prototype['totalCostOfLoan'] = undefined;

/**
 * @member {Number} totalWaived
 */
GetLoansLoanIdSummary.prototype['totalWaived'] = undefined;

/**
 * @member {Number} totalWrittenOff
 */
GetLoansLoanIdSummary.prototype['totalWrittenOff'] = undefined;

/**
 * @member {Number} totalOutstanding
 */
GetLoansLoanIdSummary.prototype['totalOutstanding'] = undefined;

/**
 * @member {Number} totalOverdue
 */
GetLoansLoanIdSummary.prototype['totalOverdue'] = undefined;

/**
 * @member {Date} overdueSinceDate
 */
GetLoansLoanIdSummary.prototype['overdueSinceDate'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdLinkedAccount} linkedAccount
 */
GetLoansLoanIdSummary.prototype['linkedAccount'] = undefined;

/**
 * @member {Array.<module:model/GetLoansLoanIdDisbursementDetails>} disbursementDetails
 */
GetLoansLoanIdSummary.prototype['disbursementDetails'] = undefined;

/**
 * @member {Number} fixedEmiAmount
 */
GetLoansLoanIdSummary.prototype['fixedEmiAmount'] = undefined;

/**
 * @member {Number} maxOutstandingLoanBalance
 */
GetLoansLoanIdSummary.prototype['maxOutstandingLoanBalance'] = undefined;

/**
 * @member {Boolean} canDisburse
 */
GetLoansLoanIdSummary.prototype['canDisburse'] = undefined;

/**
 * @member {Array.<Object>} emiAmountVariations
 */
GetLoansLoanIdSummary.prototype['emiAmountVariations'] = undefined;

/**
 * @member {Boolean} inArrears
 */
GetLoansLoanIdSummary.prototype['inArrears'] = undefined;

/**
 * @member {Boolean} isNPA
 */
GetLoansLoanIdSummary.prototype['isNPA'] = undefined;

/**
 * @member {Array.<module:model/GetLoansLoanIdOverdueCharges>} overdueCharges
 */
GetLoansLoanIdSummary.prototype['overdueCharges'] = undefined;






export default GetLoansLoanIdSummary;

