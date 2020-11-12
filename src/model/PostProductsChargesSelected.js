

import ApiClient from '../ApiClient';

/**
 * The PostProductsChargesSelected model module.
 * @module model/PostProductsChargesSelected
 * @version 1.0
 */
class PostProductsChargesSelected {
    /**
     * Constructs a new <code>PostProductsChargesSelected</code>.
     * @alias module:model/PostProductsChargesSelected
     */
    constructor() { 
        
        PostProductsChargesSelected.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProductsChargesSelected</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProductsChargesSelected} obj Optional instance to populate.
     * @return {module:model/PostProductsChargesSelected} The populated <code>PostProductsChargesSelected</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProductsChargesSelected();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PostProductsChargesSelected.prototype['id'] = undefined;






export default PostProductsChargesSelected;

