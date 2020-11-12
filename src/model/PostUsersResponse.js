

import ApiClient from '../ApiClient';

/**
 * The PostUsersResponse model module.
 * @module model/PostUsersResponse
 * @version 1.0
 */
class PostUsersResponse {
    /**
     * Constructs a new <code>PostUsersResponse</code>.
     * PostUsersResponse
     * @alias module:model/PostUsersResponse
     */
    constructor() { 
        
        PostUsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUsersResponse} obj Optional instance to populate.
     * @return {module:model/PostUsersResponse} The populated <code>PostUsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUsersResponse();

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
PostUsersResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostUsersResponse.prototype['resourceId'] = undefined;






export default PostUsersResponse;

