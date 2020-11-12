

import ApiClient from '../ApiClient';
import CurrencyData from './CurrencyData';

/**
 * The GetCurrenciesResponse model module.
 * @module model/GetCurrenciesResponse
 * @version 1.0
 */
class GetCurrenciesResponse {
    /**
     * Constructs a new <code>GetCurrenciesResponse</code>.
     * GetCurrenciesResponse
     * @alias module:model/GetCurrenciesResponse
     */
    constructor() { 
        
        GetCurrenciesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCurrenciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCurrenciesResponse} obj Optional instance to populate.
     * @return {module:model/GetCurrenciesResponse} The populated <code>GetCurrenciesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCurrenciesResponse();

            if (data.hasOwnProperty('selectedCurrencyOptions')) {
                obj['selectedCurrencyOptions'] = ApiClient.convertToType(data['selectedCurrencyOptions'], [CurrencyData]);
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = ApiClient.convertToType(data['currencyOptions'], [CurrencyData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CurrencyData>} selectedCurrencyOptions
 */
GetCurrenciesResponse.prototype['selectedCurrencyOptions'] = undefined;

/**
 * @member {Array.<module:model/CurrencyData>} currencyOptions
 */
GetCurrenciesResponse.prototype['currencyOptions'] = undefined;






export default GetCurrenciesResponse;

