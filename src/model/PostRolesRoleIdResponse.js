

import ApiClient from '../ApiClient';

/**
 * The PostRolesRoleIdResponse model module.
 * @module model/PostRolesRoleIdResponse
 * @version 1.0
 */
class PostRolesRoleIdResponse {
    /**
     * Constructs a new <code>PostRolesRoleIdResponse</code>.
     * PostRolesRoleIdResponse
     * @alias module:model/PostRolesRoleIdResponse
     */
    constructor() { 
        
        PostRolesRoleIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRolesRoleIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRolesRoleIdResponse} obj Optional instance to populate.
     * @return {module:model/PostRolesRoleIdResponse} The populated <code>PostRolesRoleIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRolesRoleIdResponse();

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
PostRolesRoleIdResponse.prototype['resourceId'] = undefined;






export default PostRolesRoleIdResponse;

