

import ApiClient from '../ApiClient';

/**
 * The PostRolesResponse model module.
 * @module model/PostRolesResponse
 * @version 1.0
 */
class PostRolesResponse {
    /**
     * Constructs a new <code>PostRolesResponse</code>.
     * PostRolesResponse
     * @alias module:model/PostRolesResponse
     */
    constructor() { 
        
        PostRolesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRolesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRolesResponse} obj Optional instance to populate.
     * @return {module:model/PostRolesResponse} The populated <code>PostRolesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRolesResponse();

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
PostRolesResponse.prototype['resourceId'] = undefined;






export default PostRolesResponse;

