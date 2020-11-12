

import ApiClient from '../ApiClient';

/**
 * The PutCurrenciesRequest model module.
 * @module model/PutCurrenciesRequest
 * @version 1.0
 */
class PutCurrenciesRequest {
    /**
     * Constructs a new <code>PutCurrenciesRequest</code>.
     * PutCurrenciesRequest
     * @alias module:model/PutCurrenciesRequest
     */
    constructor() { 
        
        PutCurrenciesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCurrenciesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCurrenciesRequest} obj Optional instance to populate.
     * @return {module:model/PutCurrenciesRequest} The populated <code>PutCurrenciesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCurrenciesRequest();

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
PutCurrenciesRequest.prototype['currencies'] = undefined;






export default PutCurrenciesRequest;

