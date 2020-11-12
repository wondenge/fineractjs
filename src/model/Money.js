

import ApiClient from '../ApiClient';
import MonetaryCurrency from './MonetaryCurrency';

/**
 * The Money model module.
 * @module model/Money
 * @version 1.0
 */
class Money {
    /**
     * Constructs a new <code>Money</code>.
     * @alias module:model/Money
     */
    constructor() { 
        
        Money.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Money} obj Optional instance to populate.
     * @return {module:model/Money} The populated <code>Money</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Money();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('currencyDigitsAfterDecimal')) {
                obj['currencyDigitsAfterDecimal'] = ApiClient.convertToType(data['currencyDigitsAfterDecimal'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('greaterThanZero')) {
                obj['greaterThanZero'] = ApiClient.convertToType(data['greaterThanZero'], 'Boolean');
            }
            if (data.hasOwnProperty('lessThanZero')) {
                obj['lessThanZero'] = ApiClient.convertToType(data['lessThanZero'], 'Boolean');
            }
            if (data.hasOwnProperty('currencyInMultiplesOf')) {
                obj['currencyInMultiplesOf'] = ApiClient.convertToType(data['currencyInMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('amountDefaultedToNullIfZero')) {
                obj['amountDefaultedToNullIfZero'] = ApiClient.convertToType(data['amountDefaultedToNullIfZero'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = MonetaryCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('zero')) {
                obj['zero'] = ApiClient.convertToType(data['zero'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currencyCode
 */
Money.prototype['currencyCode'] = undefined;

/**
 * @member {Number} currencyDigitsAfterDecimal
 */
Money.prototype['currencyDigitsAfterDecimal'] = undefined;

/**
 * @member {Number} amount
 */
Money.prototype['amount'] = undefined;

/**
 * @member {Boolean} greaterThanZero
 */
Money.prototype['greaterThanZero'] = undefined;

/**
 * @member {Boolean} lessThanZero
 */
Money.prototype['lessThanZero'] = undefined;

/**
 * @member {Number} currencyInMultiplesOf
 */
Money.prototype['currencyInMultiplesOf'] = undefined;

/**
 * @member {Number} amountDefaultedToNullIfZero
 */
Money.prototype['amountDefaultedToNullIfZero'] = undefined;

/**
 * @member {module:model/MonetaryCurrency} currency
 */
Money.prototype['currency'] = undefined;

/**
 * @member {Boolean} zero
 */
Money.prototype['zero'] = undefined;






export default Money;

