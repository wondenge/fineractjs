

import ApiClient from '../ApiClient';

/**
 * The GetProductsCurrency model module.
 * @module model/GetProductsCurrency
 * @version 1.0
 */
class GetProductsCurrency {
    /**
     * Constructs a new <code>GetProductsCurrency</code>.
     * @alias module:model/GetProductsCurrency
     */
    constructor() { 
        
        GetProductsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsCurrency} obj Optional instance to populate.
     * @return {module:model/GetProductsCurrency} The populated <code>GetProductsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsCurrency();

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
GetProductsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetProductsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetProductsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetProductsCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetProductsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetProductsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetProductsCurrency.prototype['displayLabel'] = undefined;






export default GetProductsCurrency;

