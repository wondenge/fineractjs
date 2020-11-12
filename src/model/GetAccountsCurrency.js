

import ApiClient from '../ApiClient';

/**
 * The GetAccountsCurrency model module.
 * @module model/GetAccountsCurrency
 * @version 1.0
 */
class GetAccountsCurrency {
    /**
     * Constructs a new <code>GetAccountsCurrency</code>.
     * @alias module:model/GetAccountsCurrency
     */
    constructor() { 
        
        GetAccountsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsCurrency} obj Optional instance to populate.
     * @return {module:model/GetAccountsCurrency} The populated <code>GetAccountsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsCurrency();

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
GetAccountsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetAccountsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetAccountsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetAccountsCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetAccountsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetAccountsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetAccountsCurrency.prototype['displayLabel'] = undefined;






export default GetAccountsCurrency;

