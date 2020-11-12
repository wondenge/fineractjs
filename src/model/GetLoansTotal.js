

import ApiClient from '../ApiClient';

/**
 * The GetLoansTotal model module.
 * @module model/GetLoansTotal
 * @version 1.0
 */
class GetLoansTotal {
    /**
     * Constructs a new <code>GetLoansTotal</code>.
     * @alias module:model/GetLoansTotal
     */
    constructor() { 
        
        GetLoansTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansTotal} obj Optional instance to populate.
     * @return {module:model/GetLoansTotal} The populated <code>GetLoansTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansTotal();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('digitsAfterDecimal')) {
                obj['digitsAfterDecimal'] = ApiClient.convertToType(data['digitsAfterDecimal'], 'Number');
            }
            if (data.hasOwnProperty('inMultiplesOf')) {
                obj['inMultiplesOf'] = ApiClient.convertToType(data['inMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('defaultName')) {
                obj['defaultName'] = ApiClient.convertToType(data['defaultName'], 'String');
            }
            if (data.hasOwnProperty('nameCode')) {
                obj['nameCode'] = ApiClient.convertToType(data['nameCode'], 'String');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('zero')) {
                obj['zero'] = ApiClient.convertToType(data['zero'], 'Boolean');
            }
            if (data.hasOwnProperty('greaterThanZero')) {
                obj['greaterThanZero'] = ApiClient.convertToType(data['greaterThanZero'], 'Boolean');
            }
            if (data.hasOwnProperty('displaySymbolValue')) {
                obj['displaySymbolValue'] = ApiClient.convertToType(data['displaySymbolValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currencyCode
 */
GetLoansTotal.prototype['currencyCode'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
GetLoansTotal.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetLoansTotal.prototype['inMultiplesOf'] = undefined;

/**
 * @member {Number} amount
 */
GetLoansTotal.prototype['amount'] = undefined;

/**
 * @member {String} defaultName
 */
GetLoansTotal.prototype['defaultName'] = undefined;

/**
 * @member {String} nameCode
 */
GetLoansTotal.prototype['nameCode'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetLoansTotal.prototype['displaySymbol'] = undefined;

/**
 * @member {Boolean} zero
 */
GetLoansTotal.prototype['zero'] = undefined;

/**
 * @member {Boolean} greaterThanZero
 */
GetLoansTotal.prototype['greaterThanZero'] = undefined;

/**
 * @member {String} displaySymbolValue
 */
GetLoansTotal.prototype['displaySymbolValue'] = undefined;






export default GetLoansTotal;

