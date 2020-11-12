

import ApiClient from '../ApiClient';
import GetChargesAppliesTo from './GetChargesAppliesTo';
import GetChargesChargeCalculationType from './GetChargesChargeCalculationType';
import GetChargesCurrencyResponse from './GetChargesCurrencyResponse';
import GetSavingsChargesChargeTimeType from './GetSavingsChargesChargeTimeType';

/**
 * The GetSavingsChargesOptions model module.
 * @module model/GetSavingsChargesOptions
 * @version 1.0
 */
class GetSavingsChargesOptions {
    /**
     * Constructs a new <code>GetSavingsChargesOptions</code>.
     * @alias module:model/GetSavingsChargesOptions
     */
    constructor() { 
        
        GetSavingsChargesOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsChargesOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsChargesOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsChargesOptions} The populated <code>GetSavingsChargesOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsChargesOptions();

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
                obj['currency'] = GetChargesCurrencyResponse.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetSavingsChargesChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargesAppliesTo')) {
                obj['chargesAppliesTo'] = GetChargesAppliesTo.constructFromObject(data['chargesAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetChargesChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsChargesOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsChargesOptions.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetSavingsChargesOptions.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsChargesOptions.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetChargesCurrencyResponse} currency
 */
GetSavingsChargesOptions.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSavingsChargesOptions.prototype['amount'] = undefined;

/**
 * @member {module:model/GetSavingsChargesChargeTimeType} chargeTimeType
 */
GetSavingsChargesOptions.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetChargesAppliesTo} chargesAppliesTo
 */
GetSavingsChargesOptions.prototype['chargesAppliesTo'] = undefined;

/**
 * @member {module:model/GetChargesChargeCalculationType} chargeCalculationType
 */
GetSavingsChargesOptions.prototype['chargeCalculationType'] = undefined;






export default GetSavingsChargesOptions;

