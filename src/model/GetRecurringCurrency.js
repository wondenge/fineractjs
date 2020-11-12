

import ApiClient from '../ApiClient';

/**
 * The GetRecurringCurrency model module.
 * @module model/GetRecurringCurrency
 * @version 1.0
 */
class GetRecurringCurrency {
    /**
     * Constructs a new <code>GetRecurringCurrency</code>.
     * @alias module:model/GetRecurringCurrency
     */
    constructor() { 
        
        GetRecurringCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringCurrency} obj Optional instance to populate.
     * @return {module:model/GetRecurringCurrency} The populated <code>GetRecurringCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringCurrency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('decimalPlaces')) {
                obj['decimalPlaces'] = ApiClient.convertToType(data['decimalPlaces'], 'Number');
            }
            if (data.hasOwnProperty('inMultiplesOf')) {
                obj['inMultiplesOf'] = ApiClient.convertToType(data['inMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('nameCode')) {
                obj['nameCode'] = ApiClient.convertToType(data['nameCode'], 'String');
            }
            if (data.hasOwnProperty('displayLabel')) {
                obj['displayLabel'] = ApiClient.convertToType(data['displayLabel'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
GetRecurringCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetRecurringCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetRecurringCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetRecurringCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetRecurringCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetRecurringCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetRecurringCurrency.prototype['displayLabel'] = undefined;






export default GetRecurringCurrency;

