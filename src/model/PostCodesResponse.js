

import ApiClient from '../ApiClient';

/**
 * The PostCodesResponse model module.
 * @module model/PostCodesResponse
 * @version 1.0
 */
class PostCodesResponse {
    /**
     * Constructs a new <code>PostCodesResponse</code>.
     * PostCodesResponse
     * @alias module:model/PostCodesResponse
     */
    constructor() { 
        
        PostCodesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCodesResponse} obj Optional instance to populate.
     * @return {module:model/PostCodesResponse} The populated <code>PostCodesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCodesResponse();

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
PostCodesResponse.prototype['resourceId'] = undefined;






export default PostCodesResponse;

