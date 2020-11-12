

import ApiClient from '../ApiClient';
import GetChargesAppliesToResponse from './GetChargesAppliesToResponse';
import GetChargesCalculationTypeResponse from './GetChargesCalculationTypeResponse';
import GetChargesCurrencyResponse from './GetChargesCurrencyResponse';
import GetChargesPaymentModeResponse from './GetChargesPaymentModeResponse';
import GetChargesTimeTypeResponse from './GetChargesTimeTypeResponse';

/**
 * The GetChargesResponse model module.
 * @module model/GetChargesResponse
 * @version 1.0
 */
class GetChargesResponse {
    /**
     * Constructs a new <code>GetChargesResponse</code>.
     * GetChargesResponse
     * @alias module:model/GetChargesResponse
     */
    constructor() { 
        
        GetChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesResponse} obj Optional instance to populate.
     * @return {module:model/GetChargesResponse} The populated <code>GetChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'String');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetChargesCurrencyResponse.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetChargesTimeTypeResponse.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetChargesAppliesToResponse.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetChargesCalculationTypeResponse.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = GetChargesPaymentModeResponse.constructFromObject(data['chargePaymentMode']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetChargesResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetChargesResponse.prototype['name'] = undefined;

/**
 * @member {String} active
 */
GetChargesResponse.prototype['active'] = undefined;

/**
 * @member {String} penalty
 */
GetChargesResponse.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetChargesCurrencyResponse} currency
 */
GetChargesResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetChargesResponse.prototype['amount'] = undefined;

/**
 * @member {module:model/GetChargesTimeTypeResponse} chargeTimeType
 */
GetChargesResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetChargesAppliesToResponse} chargeAppliesTo
 */
GetChargesResponse.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetChargesCalculationTypeResponse} chargeCalculationType
 */
GetChargesResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetChargesPaymentModeResponse} chargePaymentMode
 */
GetChargesResponse.prototype['chargePaymentMode'] = undefined;






export default GetChargesResponse;

