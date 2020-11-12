

import ApiClient from '../ApiClient';
import ChargeFeeOnMonthDay from './ChargeFeeOnMonthDay';
import GLAccount from './GLAccount';
import TaxGroup from './TaxGroup';

/**
 * The Charge model module.
 * @module model/Charge
 * @version 1.0
 */
class Charge {
    /**
     * Constructs a new <code>Charge</code>.
     * @alias module:model/Charge
     */
    constructor() { 
        
        Charge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Charge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Charge} obj Optional instance to populate.
     * @return {module:model/Charge} The populated <code>Charge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Charge();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = ApiClient.convertToType(data['chargeTimeType'], 'Number');
            }
            if (data.hasOwnProperty('chargeCalculation')) {
                obj['chargeCalculation'] = ApiClient.convertToType(data['chargeCalculation'], 'Number');
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = ApiClient.convertToType(data['chargePaymentMode'], 'Number');
            }
            if (data.hasOwnProperty('feeInterval')) {
                obj['feeInterval'] = ApiClient.convertToType(data['feeInterval'], 'Number');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('minCap')) {
                obj['minCap'] = ApiClient.convertToType(data['minCap'], 'Number');
            }
            if (data.hasOwnProperty('maxCap')) {
                obj['maxCap'] = ApiClient.convertToType(data['maxCap'], 'Number');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = GLAccount.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('taxGroup')) {
                obj['taxGroup'] = TaxGroup.constructFromObject(data['taxGroup']);
            }
            if (data.hasOwnProperty('savingsCharge')) {
                obj['savingsCharge'] = ApiClient.convertToType(data['savingsCharge'], 'Boolean');
            }
            if (data.hasOwnProperty('feeOnMonthDay')) {
                obj['feeOnMonthDay'] = ChargeFeeOnMonthDay.constructFromObject(data['feeOnMonthDay']);
            }
            if (data.hasOwnProperty('annualFee')) {
                obj['annualFee'] = ApiClient.convertToType(data['annualFee'], 'Boolean');
            }
            if (data.hasOwnProperty('monthlyFee')) {
                obj['monthlyFee'] = ApiClient.convertToType(data['monthlyFee'], 'Boolean');
            }
            if (data.hasOwnProperty('loanCharge')) {
                obj['loanCharge'] = ApiClient.convertToType(data['loanCharge'], 'Boolean');
            }
            if (data.hasOwnProperty('clientCharge')) {
                obj['clientCharge'] = ApiClient.convertToType(data['clientCharge'], 'Boolean');
            }
            if (data.hasOwnProperty('overdueInstallment')) {
                obj['overdueInstallment'] = ApiClient.convertToType(data['overdueInstallment'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedLoanChargeTime')) {
                obj['allowedLoanChargeTime'] = ApiClient.convertToType(data['allowedLoanChargeTime'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedClientChargeTime')) {
                obj['allowedClientChargeTime'] = ApiClient.convertToType(data['allowedClientChargeTime'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedSavingsChargeTime')) {
                obj['allowedSavingsChargeTime'] = ApiClient.convertToType(data['allowedSavingsChargeTime'], 'Boolean');
            }
            if (data.hasOwnProperty('disbursementCharge')) {
                obj['disbursementCharge'] = ApiClient.convertToType(data['disbursementCharge'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedSavingsChargeCalculationType')) {
                obj['allowedSavingsChargeCalculationType'] = ApiClient.convertToType(data['allowedSavingsChargeCalculationType'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedClientChargeCalculationType')) {
                obj['allowedClientChargeCalculationType'] = ApiClient.convertToType(data['allowedClientChargeCalculationType'], 'Boolean');
            }
            if (data.hasOwnProperty('percentageOfApprovedAmount')) {
                obj['percentageOfApprovedAmount'] = ApiClient.convertToType(data['percentageOfApprovedAmount'], 'Boolean');
            }
            if (data.hasOwnProperty('percentageOfDisbursementAmount')) {
                obj['percentageOfDisbursementAmount'] = ApiClient.convertToType(data['percentageOfDisbursementAmount'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Charge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Charge.prototype['name'] = undefined;

/**
 * @member {Number} amount
 */
Charge.prototype['amount'] = undefined;

/**
 * @member {String} currencyCode
 */
Charge.prototype['currencyCode'] = undefined;

/**
 * @member {Number} chargeTimeType
 */
Charge.prototype['chargeTimeType'] = undefined;

/**
 * @member {Number} chargeCalculation
 */
Charge.prototype['chargeCalculation'] = undefined;

/**
 * @member {Number} chargePaymentMode
 */
Charge.prototype['chargePaymentMode'] = undefined;

/**
 * @member {Number} feeInterval
 */
Charge.prototype['feeInterval'] = undefined;

/**
 * @member {Boolean} penalty
 */
Charge.prototype['penalty'] = undefined;

/**
 * @member {Boolean} active
 */
Charge.prototype['active'] = undefined;

/**
 * @member {Boolean} deleted
 */
Charge.prototype['deleted'] = undefined;

/**
 * @member {Number} minCap
 */
Charge.prototype['minCap'] = undefined;

/**
 * @member {Number} maxCap
 */
Charge.prototype['maxCap'] = undefined;

/**
 * @member {module:model/GLAccount} account
 */
Charge.prototype['account'] = undefined;

/**
 * @member {module:model/TaxGroup} taxGroup
 */
Charge.prototype['taxGroup'] = undefined;

/**
 * @member {Boolean} savingsCharge
 */
Charge.prototype['savingsCharge'] = undefined;

/**
 * @member {module:model/ChargeFeeOnMonthDay} feeOnMonthDay
 */
Charge.prototype['feeOnMonthDay'] = undefined;

/**
 * @member {Boolean} annualFee
 */
Charge.prototype['annualFee'] = undefined;

/**
 * @member {Boolean} monthlyFee
 */
Charge.prototype['monthlyFee'] = undefined;

/**
 * @member {Boolean} loanCharge
 */
Charge.prototype['loanCharge'] = undefined;

/**
 * @member {Boolean} clientCharge
 */
Charge.prototype['clientCharge'] = undefined;

/**
 * @member {Boolean} overdueInstallment
 */
Charge.prototype['overdueInstallment'] = undefined;

/**
 * @member {Boolean} allowedLoanChargeTime
 */
Charge.prototype['allowedLoanChargeTime'] = undefined;

/**
 * @member {Boolean} allowedClientChargeTime
 */
Charge.prototype['allowedClientChargeTime'] = undefined;

/**
 * @member {Boolean} allowedSavingsChargeTime
 */
Charge.prototype['allowedSavingsChargeTime'] = undefined;

/**
 * @member {Boolean} disbursementCharge
 */
Charge.prototype['disbursementCharge'] = undefined;

/**
 * @member {Boolean} allowedSavingsChargeCalculationType
 */
Charge.prototype['allowedSavingsChargeCalculationType'] = undefined;

/**
 * @member {Boolean} allowedClientChargeCalculationType
 */
Charge.prototype['allowedClientChargeCalculationType'] = undefined;

/**
 * @member {Boolean} percentageOfApprovedAmount
 */
Charge.prototype['percentageOfApprovedAmount'] = undefined;

/**
 * @member {Boolean} percentageOfDisbursementAmount
 */
Charge.prototype['percentageOfDisbursementAmount'] = undefined;

/**
 * @member {Boolean} new
 */
Charge.prototype['new'] = undefined;






export default Charge;

