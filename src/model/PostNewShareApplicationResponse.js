

import ApiClient from '../ApiClient';

/**
 * The PostNewShareApplicationResponse model module.
 * @module model/PostNewShareApplicationResponse
 * @version 1.0
 */
class PostNewShareApplicationResponse {
    /**
     * Constructs a new <code>PostNewShareApplicationResponse</code>.
     * PostNewShareApplicationResponse
     * @alias module:model/PostNewShareApplicationResponse
     */
    constructor() { 
        
        PostNewShareApplicationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostNewShareApplicationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostNewShareApplicationResponse} obj Optional instance to populate.
     * @return {module:model/PostNewShareApplicationResponse} The populated <code>PostNewShareApplicationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostNewShareApplicationResponse();

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
PostNewShareApplicationResponse.prototype['resourceId'] = undefined;






export default PostNewShareApplicationResponse;

