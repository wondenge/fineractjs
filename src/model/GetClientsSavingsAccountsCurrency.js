

import ApiClient from '../ApiClient';

/**
 * The GetClientsSavingsAccountsCurrency model module.
 * @module model/GetClientsSavingsAccountsCurrency
 * @version 1.0
 */
class GetClientsSavingsAccountsCurrency {
    /**
     * Constructs a new <code>GetClientsSavingsAccountsCurrency</code>.
     * @alias module:model/GetClientsSavingsAccountsCurrency
     */
    constructor() { 
        
        GetClientsSavingsAccountsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsSavingsAccountsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsSavingsAccountsCurrency} obj Optional instance to populate.
     * @return {module:model/GetClientsSavingsAccountsCurrency} The populated <code>GetClientsSavingsAccountsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsSavingsAccountsCurrency();

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
GetClientsSavingsAccountsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetClientsSavingsAccountsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetClientsSavingsAccountsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetClientsSavingsAccountsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetClientsSavingsAccountsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetClientsSavingsAccountsCurrency.prototype['displayLabel'] = undefined;






export default GetClientsSavingsAccountsCurrency;

