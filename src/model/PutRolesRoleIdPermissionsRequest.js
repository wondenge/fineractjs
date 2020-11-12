

import ApiClient from '../ApiClient';
import PostRolesRoleIdPermissionsResponsePermissions from './PostRolesRoleIdPermissionsResponsePermissions';

/**
 * The PutRolesRoleIdPermissionsRequest model module.
 * @module model/PutRolesRoleIdPermissionsRequest
 * @version 1.0
 */
class PutRolesRoleIdPermissionsRequest {
    /**
     * Constructs a new <code>PutRolesRoleIdPermissionsRequest</code>.
     * PutRolesRoleIdPermissionsRequest
     * @alias module:model/PutRolesRoleIdPermissionsRequest
     */
    constructor() { 
        
        PutRolesRoleIdPermissionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRolesRoleIdPermissionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRolesRoleIdPermissionsRequest} obj Optional instance to populate.
     * @return {module:model/PutRolesRoleIdPermissionsRequest} The populated <code>PutRolesRoleIdPermissionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRolesRoleIdPermissionsRequest();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = PostRolesRoleIdPermissionsResponsePermissions.constructFromObject(data['permissions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PostRolesRoleIdPermissionsResponsePermissions} permissions
 */
PutRolesRoleIdPermissionsRequest.prototype['permissions'] = undefined;






export default PutRolesRoleIdPermissionsRequest;

