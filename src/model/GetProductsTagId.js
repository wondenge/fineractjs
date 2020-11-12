

import ApiClient from '../ApiClient';

/**
 * The GetProductsTagId model module.
 * @module model/GetProductsTagId
 * @version 1.0
 */
class GetProductsTagId {
    /**
     * Constructs a new <code>GetProductsTagId</code>.
     * @alias module:model/GetProductsTagId
     */
    constructor() { 
        
        GetProductsTagId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsTagId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsTagId} obj Optional instance to populate.
     * @return {module:model/GetProductsTagId} The populated <code>GetProductsTagId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsTagId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductsTagId.prototype['id'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetProductsTagId.prototype['isActive'] = undefined;






export default GetProductsTagId;

