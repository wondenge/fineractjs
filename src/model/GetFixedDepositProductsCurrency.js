

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsCurrency model module.
 * @module model/GetFixedDepositProductsCurrency
 * @version 1.0
 */
class GetFixedDepositProductsCurrency {
    /**
     * Constructs a new <code>GetFixedDepositProductsCurrency</code>.
     * @alias module:model/GetFixedDepositProductsCurrency
     */
    constructor() { 
        
        GetFixedDepositProductsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsCurrency} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsCurrency} The populated <code>GetFixedDepositProductsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsCurrency();

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
GetFixedDepositProductsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetFixedDepositProductsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetFixedDepositProductsCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetFixedDepositProductsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetFixedDepositProductsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetFixedDepositProductsCurrency.prototype['displayLabel'] = undefined;






export default GetFixedDepositProductsCurrency;

