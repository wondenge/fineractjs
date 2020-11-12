

import ApiClient from '../ApiClient';

/**
 * The PostRolesRoleIdPermissionsResponsePermissions model module.
 * @module model/PostRolesRoleIdPermissionsResponsePermissions
 * @version 1.0
 */
class PostRolesRoleIdPermissionsResponsePermissions {
    /**
     * Constructs a new <code>PostRolesRoleIdPermissionsResponsePermissions</code>.
     * @alias module:model/PostRolesRoleIdPermissionsResponsePermissions
     */
    constructor() { 
        
        PostRolesRoleIdPermissionsResponsePermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRolesRoleIdPermissionsResponsePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRolesRoleIdPermissionsResponsePermissions} obj Optional instance to populate.
     * @return {module:model/PostRolesRoleIdPermissionsResponsePermissions} The populated <code>PostRolesRoleIdPermissionsResponsePermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRolesRoleIdPermissionsResponsePermissions();

            if (data.hasOwnProperty('ALL_FUNCTIONS_READ')) {
                obj['ALL_FUNCTIONS_READ'] = ApiClient.convertToType(data['ALL_FUNCTIONS_READ'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ALL_FUNCTIONS_READ
 */
PostRolesRoleIdPermissionsResponsePermissions.prototype['ALL_FUNCTIONS_READ'] = undefined;






export default PostRolesRoleIdPermissionsResponsePermissions;

