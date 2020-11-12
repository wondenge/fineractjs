

import ApiClient from '../ApiClient';
import GetLoanChargeCalculationType from './GetLoanChargeCalculationType';
import GetLoanChargeTimeType from './GetLoanChargeTimeType';
import GetLoanProductsChargeAppliesTo from './GetLoanProductsChargeAppliesTo';
import GetLoanProductsCurrencyOptions from './GetLoanProductsCurrencyOptions';
import GetLoansChargePaymentMode from './GetLoansChargePaymentMode';

/**
 * The GetLoanProductsChargeOptions model module.
 * @module model/GetLoanProductsChargeOptions
 * @version 1.0
 */
class GetLoanProductsChargeOptions {
    /**
     * Constructs a new <code>GetLoanProductsChargeOptions</code>.
     * @alias module:model/GetLoanProductsChargeOptions
     */
    constructor() { 
        
        GetLoanProductsChargeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsChargeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsChargeOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsChargeOptions} The populated <code>GetLoanProductsChargeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsChargeOptions();

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
                obj['currency'] = GetLoanProductsCurrencyOptions.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetLoanChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = GetLoanProductsChargeAppliesTo.constructFromObject(data['chargeAppliesTo']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetLoanChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = GetLoansChargePaymentMode.constructFromObject(data['chargePaymentMode']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsChargeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsChargeOptions.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetLoanProductsChargeOptions.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetLoanProductsChargeOptions.prototype['penalty'] = undefined;

/**
 * @member {module:model/GetLoanProductsCurrencyOptions} currency
 */
GetLoanProductsChargeOptions.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetLoanProductsChargeOptions.prototype['amount'] = undefined;

/**
 * @member {module:model/GetLoanChargeTimeType} chargeTimeType
 */
GetLoanProductsChargeOptions.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetLoanProductsChargeAppliesTo} chargeAppliesTo
 */
GetLoanProductsChargeOptions.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {module:model/GetLoanChargeCalculationType} chargeCalculationType
 */
GetLoanProductsChargeOptions.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetLoansChargePaymentMode} chargePaymentMode
 */
GetLoanProductsChargeOptions.prototype['chargePaymentMode'] = undefined;






export default GetLoanProductsChargeOptions;

