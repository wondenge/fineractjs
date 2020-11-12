

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsCurrency model module.
 * @module model/GetRecurringDepositAccountsCurrency
 * @version 1.0
 */
class GetRecurringDepositAccountsCurrency {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsCurrency</code>.
     * @alias module:model/GetRecurringDepositAccountsCurrency
     */
    constructor() { 
        
        GetRecurringDepositAccountsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsCurrency} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsCurrency} The populated <code>GetRecurringDepositAccountsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsCurrency();

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
GetRecurringDepositAccountsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositAccountsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetRecurringDepositAccountsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetRecurringDepositAccountsCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetRecurringDepositAccountsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetRecurringDepositAccountsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetRecurringDepositAccountsCurrency.prototype['displayLabel'] = undefined;






export default GetRecurringDepositAccountsCurrency;

