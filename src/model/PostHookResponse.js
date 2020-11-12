

import ApiClient from '../ApiClient';

/**
 * The PostHookResponse model module.
 * @module model/PostHookResponse
 * @version 1.0
 */
class PostHookResponse {
    /**
     * Constructs a new <code>PostHookResponse</code>.
     * PostHookResponse
     * @alias module:model/PostHookResponse
     */
    constructor() { 
        
        PostHookResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostHookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostHookResponse} obj Optional instance to populate.
     * @return {module:model/PostHookResponse} The populated <code>PostHookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostHookResponse();

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
PostHookResponse.prototype['resourceId'] = undefined;






export default PostHookResponse;

