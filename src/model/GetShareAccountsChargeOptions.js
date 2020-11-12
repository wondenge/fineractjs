

import ApiClient from '../ApiClient';
import GetShareAccountsChargeAppliesTo from './GetShareAccountsChargeAppliesTo';
import GetShareAccountsChargeCalculationType from './GetShareAccountsChargeCalculationType';
import GetShareAccountsChargePaymentMode from './GetShareAccountsChargePaymentMode';
import GetShareAccountsChargeTimeType from './GetShareAccountsChargeTimeType';
import GetShareAccountsCurrency from './GetShareAccountsCurrency';

/**
 * The GetShareAccountsChargeOptions model module.
 * @module model/GetShareAccountsChargeOptions
 * @version 1.0
 */
class GetShareAccountsChargeOptions {
    /**
     * Constructs a new <code>GetShareAccountsChargeOptions</code>.
     * @alias module:model/GetShareAccountsChargeOptions
     */
    constructor() { 
        
        GetShareAccountsChargeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsChargeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsChargeOptions} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsChargeOptions} The populated <code>GetShareAccountsChargeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsChargeOptions();

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
                obj['currency'] = GetShareAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetShareAccountsChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetShareAccountsChargeAppliesTo.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('calculationType')) {
                obj['calculationType'] = GetShareAccountsChargeCalculationType.constructFromObject(data['calculationType']);
            }
            if (data.hasOwnProperty('paymentMode')) {
                obj['paymentMode'] = GetShareAccountsChargePaymentMode.constructFromObject(data['paymentMode']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetShareAccountsChargeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareAccountsChargeOptions.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetShareAccountsChargeOptions.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetShareAccountsChargeOptions.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetShareAccountsCurrency} currency
 */
GetShareAccountsChargeOptions.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetShareAccountsChargeOptions.prototype['amount'] = undefined;

/**
 * @member {module:model/GetShareAccountsChargeTimeType} chargeTimeType
 */
GetShareAccountsChargeOptions.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetShareAccountsChargeAppliesTo} chargeAppliesTo
 */
GetShareAccountsChargeOptions.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetShareAccountsChargeCalculationType} calculationType
 */
GetShareAccountsChargeOptions.prototype['calculationType'] = undefined;

/**
 * @member {module:model/GetShareAccountsChargePaymentMode} paymentMode
 */
GetShareAccountsChargeOptions.prototype['paymentMode'] = undefined;






export default GetShareAccountsChargeOptions;

