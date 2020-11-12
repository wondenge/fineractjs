

import ApiClient from '../ApiClient';

/**
 * The PostProductsTypeResponse model module.
 * @module model/PostProductsTypeResponse
 * @version 1.0
 */
class PostProductsTypeResponse {
    /**
     * Constructs a new <code>PostProductsTypeResponse</code>.
     * PostProductsTypeResponse
     * @alias module:model/PostProductsTypeResponse
     */
    constructor() { 
        
        PostProductsTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProductsTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProductsTypeResponse} obj Optional instance to populate.
     * @return {module:model/PostProductsTypeResponse} The populated <code>PostProductsTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProductsTypeResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostProductsTypeResponse.prototype['resourceId'] = undefined;






export default PostProductsTypeResponse;

