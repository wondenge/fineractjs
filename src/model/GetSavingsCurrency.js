

import ApiClient from '../ApiClient';

/**
 * The GetSavingsCurrency model module.
 * @module model/GetSavingsCurrency
 * @version 1.0
 */
class GetSavingsCurrency {
    /**
     * Constructs a new <code>GetSavingsCurrency</code>.
     * @alias module:model/GetSavingsCurrency
     */
    constructor() { 
        
        GetSavingsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsCurrency} obj Optional instance to populate.
     * @return {module:model/GetSavingsCurrency} The populated <code>GetSavingsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsCurrency();

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
GetSavingsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetSavingsCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetSavingsCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetSavingsCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetSavingsCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetSavingsCurrency.prototype['displayLabel'] = undefined;






export default GetSavingsCurrency;

