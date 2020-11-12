

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdCurrency model module.
 * @module model/GetLoansLoanIdCurrency
 * @version 1.0
 */
class GetLoansLoanIdCurrency {
    /**
     * Constructs a new <code>GetLoansLoanIdCurrency</code>.
     * @alias module:model/GetLoansLoanIdCurrency
     */
    constructor() { 
        
        GetLoansLoanIdCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdCurrency} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdCurrency} The populated <code>GetLoansLoanIdCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdCurrency();

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
GetLoansLoanIdCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetLoansLoanIdCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetLoansLoanIdCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetLoansLoanIdCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetLoansLoanIdCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetLoansLoanIdCurrency.prototype['displayLabel'] = undefined;






export default GetLoansLoanIdCurrency;

