

import ApiClient from '../ApiClient';
import GetLoanChargeCalculationType from './GetLoanChargeCalculationType';
import GetLoanChargeCurrency from './GetLoanChargeCurrency';
import GetLoanChargeTemplateChargeAppliesTo from './GetLoanChargeTemplateChargeAppliesTo';
import GetLoanChargeTemplateChargeTimeType from './GetLoanChargeTemplateChargeTimeType';

/**
 * The GetLoanChargeTemplateChargeOptions model module.
 * @module model/GetLoanChargeTemplateChargeOptions
 * @version 1.0
 */
class GetLoanChargeTemplateChargeOptions {
    /**
     * Constructs a new <code>GetLoanChargeTemplateChargeOptions</code>.
     * @alias module:model/GetLoanChargeTemplateChargeOptions
     */
    constructor() { 
        
        GetLoanChargeTemplateChargeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanChargeTemplateChargeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanChargeTemplateChargeOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanChargeTemplateChargeOptions} The populated <code>GetLoanChargeTemplateChargeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanChargeTemplateChargeOptions();

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
                obj['currency'] = GetLoanChargeCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetLoanChargeTemplateChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetLoanChargeTemplateChargeAppliesTo.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetLoanChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanChargeTemplateChargeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanChargeTemplateChargeOptions.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetLoanChargeTemplateChargeOptions.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetLoanChargeTemplateChargeOptions.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetLoanChargeCurrency} currency
 */
GetLoanChargeTemplateChargeOptions.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetLoanChargeTemplateChargeOptions.prototype['amount'] = undefined;

/**
 * @member {module:model/GetLoanChargeTemplateChargeTimeType} chargeTimeType
 */
GetLoanChargeTemplateChargeOptions.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetLoanChargeTemplateChargeAppliesTo} chargeAppliesTo
 */
GetLoanChargeTemplateChargeOptions.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetLoanChargeCalculationType} chargeCalculationType
 */
GetLoanChargeTemplateChargeOptions.prototype['chargeCalculationType'] = undefined;






export default GetLoanChargeTemplateChargeOptions;

