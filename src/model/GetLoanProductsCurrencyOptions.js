

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsCurrencyOptions model module.
 * @module model/GetLoanProductsCurrencyOptions
 * @version 1.0
 */
class GetLoanProductsCurrencyOptions {
    /**
     * Constructs a new <code>GetLoanProductsCurrencyOptions</code>.
     * @alias module:model/GetLoanProductsCurrencyOptions
     */
    constructor() { 
        
        GetLoanProductsCurrencyOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsCurrencyOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsCurrencyOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsCurrencyOptions} The populated <code>GetLoanProductsCurrencyOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsCurrencyOptions();

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
GetLoanProductsCurrencyOptions.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsCurrencyOptions.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetLoanProductsCurrencyOptions.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetLoanProductsCurrencyOptions.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetLoanProductsCurrencyOptions.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetLoanProductsCurrencyOptions.prototype['displayLabel'] = undefined;






export default GetLoanProductsCurrencyOptions;

