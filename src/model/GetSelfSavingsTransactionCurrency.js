

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsTransactionCurrency model module.
 * @module model/GetSelfSavingsTransactionCurrency
 * @version 1.0
 */
class GetSelfSavingsTransactionCurrency {
    /**
     * Constructs a new <code>GetSelfSavingsTransactionCurrency</code>.
     * @alias module:model/GetSelfSavingsTransactionCurrency
     */
    constructor() { 
        
        GetSelfSavingsTransactionCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsTransactionCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsTransactionCurrency} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsTransactionCurrency} The populated <code>GetSelfSavingsTransactionCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsTransactionCurrency();

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
GetSelfSavingsTransactionCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetSelfSavingsTransactionCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetSelfSavingsTransactionCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetSelfSavingsTransactionCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetSelfSavingsTransactionCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetSelfSavingsTransactionCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetSelfSavingsTransactionCurrency.prototype['displayLabel'] = undefined;






export default GetSelfSavingsTransactionCurrency;

