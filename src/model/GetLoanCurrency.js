

import ApiClient from '../ApiClient';

/**
 * The GetLoanCurrency model module.
 * @module model/GetLoanCurrency
 * @version 1.0
 */
class GetLoanCurrency {
    /**
     * Constructs a new <code>GetLoanCurrency</code>.
     * @alias module:model/GetLoanCurrency
     */
    constructor() { 
        
        GetLoanCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanCurrency} obj Optional instance to populate.
     * @return {module:model/GetLoanCurrency} The populated <code>GetLoanCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanCurrency();

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
GetLoanCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetLoanCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetLoanCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetLoanCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetLoanCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetLoanCurrency.prototype['displayLabel'] = undefined;






export default GetLoanCurrency;

