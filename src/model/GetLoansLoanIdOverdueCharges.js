

import ApiClient from '../ApiClient';
import GetLoanChargeTemplateChargeAppliesTo from './GetLoanChargeTemplateChargeAppliesTo';
import GetLoanCurrency from './GetLoanCurrency';
import GetLoansLoanIdChargeCalculationType from './GetLoansLoanIdChargeCalculationType';
import GetLoansLoanIdChargePaymentMode from './GetLoansLoanIdChargePaymentMode';
import GetLoansLoanIdChargeTimeType from './GetLoansLoanIdChargeTimeType';
import GetLoansLoanIdFeeFrequency from './GetLoansLoanIdFeeFrequency';

/**
 * The GetLoansLoanIdOverdueCharges model module.
 * @module model/GetLoansLoanIdOverdueCharges
 * @version 1.0
 */
class GetLoansLoanIdOverdueCharges {
    /**
     * Constructs a new <code>GetLoansLoanIdOverdueCharges</code>.
     * @alias module:model/GetLoansLoanIdOverdueCharges
     */
    constructor() { 
        
        GetLoansLoanIdOverdueCharges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdOverdueCharges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdOverdueCharges} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdOverdueCharges} The populated <code>GetLoansLoanIdOverdueCharges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdOverdueCharges();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetLoansLoanIdChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetLoanChargeTemplateChargeAppliesTo.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetLoansLoanIdChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = GetLoansLoanIdChargePaymentMode.constructFromObject(data['chargePaymentMode']);
            }
            if (data.hasOwnProperty('feeInterval')) {
                obj['feeInterval'] = ApiClient.convertToType(data['feeInterval'], 'Number');
            }
            if (data.hasOwnProperty('feeFrequency')) {
                obj['feeFrequency'] = GetLoansLoanIdFeeFrequency.constructFromObject(data['feeFrequency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoansLoanIdOverdueCharges.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoansLoanIdOverdueCharges.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetLoansLoanIdOverdueCharges.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetLoansLoanIdOverdueCharges.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetLoanCurrency} currency
 */
GetLoansLoanIdOverdueCharges.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetLoansLoanIdOverdueCharges.prototype['amount'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdChargeTimeType} chargeTimeType
 */
GetLoansLoanIdOverdueCharges.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetLoanChargeTemplateChargeAppliesTo} chargeAppliesTo
 */
GetLoansLoanIdOverdueCharges.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdChargeCalculationType} chargeCalculationType
 */
GetLoansLoanIdOverdueCharges.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdChargePaymentMode} chargePaymentMode
 */
GetLoansLoanIdOverdueCharges.prototype['chargePaymentMode'] = undefined;

/**
 * @member {Number} feeInterval
 */
GetLoansLoanIdOverdueCharges.prototype['feeInterval'] = undefined;

/**
 * @member {module:model/GetLoansLoanIdFeeFrequency} feeFrequency
 */
GetLoansLoanIdOverdueCharges.prototype['feeFrequency'] = undefined;






export default GetLoansLoanIdOverdueCharges;

