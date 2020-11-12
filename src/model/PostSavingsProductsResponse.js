  

import ApiClient from '../ApiClient';

/**
 * The PostSavingsProductsResponse model module.
 * @module model/PostSavingsProductsResponse
 * @version 1.0
 */
class PostSavingsProductsResponse {
    /**
     * Constructs a new <code>PostSavingsProductsResponse</code>.
     * PostSavingsProductsResponse
     * @alias module:model/PostSavingsProductsResponse
     */
    constructor() { 
        
        PostSavingsProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsProductsResponse} obj Optional instance to populate.
     * @return {module:model/PostSavingsProductsResponse} The populated <code>PostSavingsProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsProductsResponse();

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
PostSavingsProductsResponse.prototype['resourceId'] = undefined;






export default PostSavingsProductsResponse;

