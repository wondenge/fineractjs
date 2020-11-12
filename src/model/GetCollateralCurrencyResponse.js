

import ApiClient from '../ApiClient';

/**
 * The GetCollateralCurrencyResponse model module.
 * @module model/GetCollateralCurrencyResponse
 * @version 1.0
 */
class GetCollateralCurrencyResponse {
    /**
     * Constructs a new <code>GetCollateralCurrencyResponse</code>.
     * @alias module:model/GetCollateralCurrencyResponse
     */
    constructor() { 
        
        GetCollateralCurrencyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCollateralCurrencyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCollateralCurrencyResponse} obj Optional instance to populate.
     * @return {module:model/GetCollateralCurrencyResponse} The populated <code>GetCollateralCurrencyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCollateralCurrencyResponse();

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
GetCollateralCurrencyResponse.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetCollateralCurrencyResponse.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetCollateralCurrencyResponse.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetCollateralCurrencyResponse.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetCollateralCurrencyResponse.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetCollateralCurrencyResponse.prototype['displayLabel'] = undefined;






export default GetCollateralCurrencyResponse;

