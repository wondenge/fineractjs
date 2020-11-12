

import ApiClient from '../ApiClient';
import GetChargeAppliesTo from './GetChargeAppliesTo';
import GetChargeCalculationType from './GetChargeCalculationType';
import GetChargePaymentMode from './GetChargePaymentMode';
import GetChargeTimeType from './GetChargeTimeType';
import GetChargesCurrency from './GetChargesCurrency';

/**
 * The GetProductsCharges model module.
 * @module model/GetProductsCharges
 * @version 1.0
 */
class GetProductsCharges {
    /**
     * Constructs a new <code>GetProductsCharges</code>.
     * @alias module:model/GetProductsCharges
     */
    constructor() { 
        
        GetProductsCharges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsCharges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsCharges} obj Optional instance to populate.
     * @return {module:model/GetProductsCharges} The populated <code>GetProductsCharges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsCharges();

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
                obj['currency'] = GetChargesCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetChargeAppliesTo.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = GetChargePaymentMode.constructFromObject(data['chargePaymentMode']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductsCharges.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsCharges.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetProductsCharges.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetProductsCharges.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetChargesCurrency} currency
 */
GetProductsCharges.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetProductsCharges.prototype['amount'] = undefined;

/**
 * @member {module:model/GetChargeTimeType} chargeTimeType
 */
GetProductsCharges.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetChargeAppliesTo} chargeAppliesTo
 */
GetProductsCharges.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetChargeCalculationType} chargeCalculationType
 */
GetProductsCharges.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetChargePaymentMode} chargePaymentMode
 */
GetProductsCharges.prototype['chargePaymentMode'] = undefined;






export default GetProductsCharges;

