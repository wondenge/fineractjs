

import ApiClient from '../ApiClient';

/**
 * The PostHolidaysResponse model module.
 * @module model/PostHolidaysResponse
 * @version 1.0
 */
class PostHolidaysResponse {
    /**
     * Constructs a new <code>PostHolidaysResponse</code>.
     * PostHolidaysResponse
     * @alias module:model/PostHolidaysResponse
     */
    constructor() { 
        
        PostHolidaysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostHolidaysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostHolidaysResponse} obj Optional instance to populate.
     * @return {module:model/PostHolidaysResponse} The populated <code>PostHolidaysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostHolidaysResponse();

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
PostHolidaysResponse.prototype['resourceId'] = undefined;






export default PostHolidaysResponse;

