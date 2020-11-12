

import ApiClient from '../ApiClient';

/**
 * The PostStaffResponse model module.
 * @module model/PostStaffResponse
 * @version 1.0
 */
class PostStaffResponse {
    /**
     * Constructs a new <code>PostStaffResponse</code>.
     * PostStaffResponse
     * @alias module:model/PostStaffResponse
     */
    constructor() { 
        
        PostStaffResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostStaffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostStaffResponse} obj Optional instance to populate.
     * @return {module:model/PostStaffResponse} The populated <code>PostStaffResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStaffResponse();

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
PostStaffResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostStaffResponse.prototype['resourceId'] = undefined;






export default PostStaffResponse;

