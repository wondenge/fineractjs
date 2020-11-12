

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsAccountChartCurrency model module.
 * @module model/GetFixedDepositAccountsAccountChartCurrency
 * @version 1.0
 */
class GetFixedDepositAccountsAccountChartCurrency {
    /**
     * Constructs a new <code>GetFixedDepositAccountsAccountChartCurrency</code>.
     * @alias module:model/GetFixedDepositAccountsAccountChartCurrency
     */
    constructor() { 
        
        GetFixedDepositAccountsAccountChartCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsAccountChartCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsAccountChartCurrency} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsAccountChartCurrency} The populated <code>GetFixedDepositAccountsAccountChartCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsAccountChartCurrency();

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
GetFixedDepositAccountsAccountChartCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositAccountsAccountChartCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetFixedDepositAccountsAccountChartCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetFixedDepositAccountsAccountChartCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetFixedDepositAccountsAccountChartCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetFixedDepositAccountsAccountChartCurrency.prototype['displayLabel'] = undefined;






export default GetFixedDepositAccountsAccountChartCurrency;

