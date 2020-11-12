

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdCurrency model module.
 * @module model/GetFixedDepositProductsProductIdCurrency
 * @version 1.0
 */
class GetFixedDepositProductsProductIdCurrency {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdCurrency</code>.
     * @alias module:model/GetFixedDepositProductsProductIdCurrency
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdCurrency} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdCurrency} The populated <code>GetFixedDepositProductsProductIdCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdCurrency();

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
GetFixedDepositProductsProductIdCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetFixedDepositProductsProductIdCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetFixedDepositProductsProductIdCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetFixedDepositProductsProductIdCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetFixedDepositProductsProductIdCurrency.prototype['displayLabel'] = undefined;






export default GetFixedDepositProductsProductIdCurrency;

