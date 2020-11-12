

import ApiClient from '../ApiClient';
import PostRolesRoleIdPermissionsResponsePermissions from './PostRolesRoleIdPermissionsResponsePermissions';

/**
 * The PutRolesRoleIdPermissionsResponse model module.
 * @module model/PutRolesRoleIdPermissionsResponse
 * @version 1.0
 */
class PutRolesRoleIdPermissionsResponse {
    /**
     * Constructs a new <code>PutRolesRoleIdPermissionsResponse</code>.
     * PutRolesRoleIdPermissionsResponse
     * @alias module:model/PutRolesRoleIdPermissionsResponse
     */
    constructor() { 
        
        PutRolesRoleIdPermissionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRolesRoleIdPermissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRolesRoleIdPermissionsResponse} obj Optional instance to populate.
     * @return {module:model/PutRolesRoleIdPermissionsResponse} The populated <code>PutRolesRoleIdPermissionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRolesRoleIdPermissionsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = PostRolesRoleIdPermissionsResponsePermissions.constructFromObject(data['permissions']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutRolesRoleIdPermissionsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PostRolesRoleIdPermissionsResponsePermissions} permissions
 */
PutRolesRoleIdPermissionsResponse.prototype['permissions'] = undefined;






export default PutRolesRoleIdPermissionsResponse;

