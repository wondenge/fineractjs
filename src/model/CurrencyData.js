

import ApiClient from '../ApiClient';

/**
 * The CurrencyData model module.
 * @module model/CurrencyData
 * @version 1.0
 */
class CurrencyData {
    /**
     * Constructs a new <code>CurrencyData</code>.
     * @alias module:model/CurrencyData
     */
    constructor() { 
        
        CurrencyData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyData} obj Optional instance to populate.
     * @return {module:model/CurrencyData} The populated <code>CurrencyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CurrencyData.prototype['name'] = undefined;






export default CurrencyData;

