

import ApiClient from '../ApiClient';

/**
 * The PutProductsChanges model module.
 * @module model/PutProductsChanges
 * @version 1.0
 */
class PutProductsChanges {
    /**
     * Constructs a new <code>PutProductsChanges</code>.
     * @alias module:model/PutProductsChanges
     */
    constructor() { 
        
        PutProductsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProductsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProductsChanges} obj Optional instance to populate.
     * @return {module:model/PutProductsChanges} The populated <code>PutProductsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProductsChanges();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutProductsChanges.prototype['description'] = undefined;

/**
 * @member {Number} unitPrice
 */
PutProductsChanges.prototype['unitPrice'] = undefined;

/**
 * @member {String} locale
 */
PutProductsChanges.prototype['locale'] = undefined;






export default PutProductsChanges;

