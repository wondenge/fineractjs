

import ApiClient from '../ApiClient';

/**
 * The PostGlClosuresResponse model module.
 * @module model/PostGlClosuresResponse
 * @version 1.0
 */
class PostGlClosuresResponse {
    /**
     * Constructs a new <code>PostGlClosuresResponse</code>.
     * PostGlClosuresResponse
     * @alias module:model/PostGlClosuresResponse
     */
    constructor() { 
        
        PostGlClosuresResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGlClosuresResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGlClosuresResponse} obj Optional instance to populate.
     * @return {module:model/PostGlClosuresResponse} The populated <code>PostGlClosuresResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGlClosuresResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostGlClosuresResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostGlClosuresResponse.prototype['resourceId'] = undefined;






export default PostGlClosuresResponse;

