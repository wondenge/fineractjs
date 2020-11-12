

import ApiClient from '../ApiClient';

/**
 * The GetLoansCurrency model module.
 * @module model/GetLoansCurrency
 * @version 1.0
 */
class GetLoansCurrency {
    /**
     * Constructs a new <code>GetLoansCurrency</code>.
     * @alias module:model/GetLoansCurrency
     */
    constructor() { 
        
        GetLoansCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansCurrency} obj Optional instance to populate.
     * @return {module:model/GetLoansCurrency} The populated <code>GetLoansCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansCurrency();

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
GetLoansCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetLoansCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetLoansCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetLoansCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetLoansCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetLoansCurrency.prototype['displayLabel'] = undefined;






export default GetLoansCurrency;

