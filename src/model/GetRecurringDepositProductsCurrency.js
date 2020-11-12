

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsCurrency model module.
 * @module model/GetRecurringDepositProductsCurrency
 * @version 1.0
 */
class GetRecurringDepositProductsCurrency {
    /**
     * Constructs a new <code>GetRecurringDepositProductsCurrency</code>.
     * @alias module:model/GetRecurringDepositProductsCurrency
     */
    constructor() { 
        
        GetRecurringDepositProductsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsCurrency} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsCurrency} The populated <code>GetRecurringDepositProductsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsCurrency();

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
GetRecurringDepositProductsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetRecurringDepositProductsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetRecurringDepositProductsCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetRecurringDepositProductsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetRecurringDepositProductsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetRecurringDepositProductsCurrency.prototype['displayLabel'] = undefined;






export default GetRecurringDepositProductsCurrency;

