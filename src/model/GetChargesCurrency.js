

import ApiClient from '../ApiClient';

/**
 * The GetChargesCurrency model module.
 * @module model/GetChargesCurrency
 * @version 1.0
 */
class GetChargesCurrency {
    /**
     * Constructs a new <code>GetChargesCurrency</code>.
     * @alias module:model/GetChargesCurrency
     */
    constructor() { 
        
        GetChargesCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesCurrency} obj Optional instance to populate.
     * @return {module:model/GetChargesCurrency} The populated <code>GetChargesCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesCurrency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('decimalPlaces')) {
                obj['decimalPlaces'] = ApiClient.convertToType(data['decimalPlaces'], 'Number');
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
GetChargesCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetChargesCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetChargesCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetChargesCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetChargesCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetChargesCurrency.prototype['displayLabel'] = undefined;






export default GetChargesCurrency;

