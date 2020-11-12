

import ApiClient from '../ApiClient';

/**
 * The PostCentersCenterIdResponse model module.
 * @module model/PostCentersCenterIdResponse
 * @version 1.0
 */
class PostCentersCenterIdResponse {
    /**
     * Constructs a new <code>PostCentersCenterIdResponse</code>.
     * PostCentersCenterIdResponse
     * @alias module:model/PostCentersCenterIdResponse
     */
    constructor() { 
        
        PostCentersCenterIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCentersCenterIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCentersCenterIdResponse} obj Optional instance to populate.
     * @return {module:model/PostCentersCenterIdResponse} The populated <code>PostCentersCenterIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCentersCenterIdResponse();

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
PostCentersCenterIdResponse.prototype['resourceId'] = undefined;






export default PostCentersCenterIdResponse;

