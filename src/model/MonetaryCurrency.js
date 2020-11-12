  

import ApiClient from '../ApiClient';

/**
 * The MonetaryCurrency model module.
 * @module model/MonetaryCurrency
 * @version 1.0
 */
class MonetaryCurrency {
    /**
     * Constructs a new <code>MonetaryCurrency</code>.
     * @alias module:model/MonetaryCurrency
     */
    constructor() { 
        
        MonetaryCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MonetaryCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MonetaryCurrency} obj Optional instance to populate.
     * @return {module:model/MonetaryCurrency} The populated <code>MonetaryCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MonetaryCurrency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('digitsAfterDecimal')) {
                obj['digitsAfterDecimal'] = ApiClient.convertToType(data['digitsAfterDecimal'], 'Number');
            }
            if (data.hasOwnProperty('currencyInMultiplesOf')) {
                obj['currencyInMultiplesOf'] = ApiClient.convertToType(data['currencyInMultiplesOf'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
MonetaryCurrency.prototype['code'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
MonetaryCurrency.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} currencyInMultiplesOf
 */
MonetaryCurrency.prototype['currencyInMultiplesOf'] = undefined;






export default MonetaryCurrency;

