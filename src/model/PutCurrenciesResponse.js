

import ApiClient from '../ApiClient';

/**
 * The PutCurrenciesResponse model module.
 * @module model/PutCurrenciesResponse
 * @version 1.0
 */
class PutCurrenciesResponse {
    /**
     * Constructs a new <code>PutCurrenciesResponse</code>.
     * PutCurrenciesResponse
     * @alias module:model/PutCurrenciesResponse
     */
    constructor() { 
        
        PutCurrenciesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCurrenciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCurrenciesResponse} obj Optional instance to populate.
     * @return {module:model/PutCurrenciesResponse} The populated <code>PutCurrenciesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCurrenciesResponse();

            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currencies
 */
PutCurrenciesResponse.prototype['currencies'] = undefined;






export default PutCurrenciesResponse;

