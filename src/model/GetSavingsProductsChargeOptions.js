

import ApiClient from '../ApiClient';
import GetSavingsChargeCalculationType from './GetSavingsChargeCalculationType';
import GetSavingsChargePaymentMode from './GetSavingsChargePaymentMode';
import GetSavingsChargeTimeType from './GetSavingsChargeTimeType';
import GetSavingsCurrency from './GetSavingsCurrency';
import GetSavingsProductsChargeAppliesTo from './GetSavingsProductsChargeAppliesTo';

/**
 * The GetSavingsProductsChargeOptions model module.
 * @module model/GetSavingsProductsChargeOptions
 * @version 1.0
 */
class GetSavingsProductsChargeOptions {
    /**
     * Constructs a new <code>GetSavingsProductsChargeOptions</code>.
     * @alias module:model/GetSavingsProductsChargeOptions
     */
    constructor() { 
        
        GetSavingsProductsChargeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsChargeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsChargeOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsChargeOptions} The populated <code>GetSavingsProductsChargeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsChargeOptions();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetSavingsProductsChargeAppliesTo.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetSavingsChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = GetSavingsChargePaymentMode.constructFromObject(data['chargePaymentMode']);
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetSavingsChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
GetSavingsProductsChargeOptions.prototype['active'] = undefined;

/**
 * @member {Number} amount
 */
GetSavingsProductsChargeOptions.prototype['amount'] = undefined;

/**
 * @member {module:model/GetSavingsProductsChargeAppliesTo} chargeAppliesTo
 */
GetSavingsProductsChargeOptions.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetSavingsChargeCalculationType} chargeCalculationType
 */
GetSavingsProductsChargeOptions.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetSavingsChargePaymentMode} chargePaymentMode
 */
GetSavingsProductsChargeOptions.prototype['chargePaymentMode'] = undefined;

/**
 * @member {module:model/GetSavingsChargeTimeType} chargeTimeType
 */
GetSavingsProductsChargeOptions.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsProductsChargeOptions.prototype['currency'] = undefined;

/**
 * @member {Number} id
 */
GetSavingsProductsChargeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsChargeOptions.prototype['name'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsProductsChargeOptions.prototype['penalty'] = undefined;






export default GetSavingsProductsChargeOptions;

