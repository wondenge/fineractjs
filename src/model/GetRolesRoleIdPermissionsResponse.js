

import ApiClient from '../ApiClient';
import GetRolesRoleIdPermissionsResponsePermissionData from './GetRolesRoleIdPermissionsResponsePermissionData';

/**
 * The GetRolesRoleIdPermissionsResponse model module.
 * @module model/GetRolesRoleIdPermissionsResponse
 * @version 1.0
 */
class GetRolesRoleIdPermissionsResponse {
    /**
     * Constructs a new <code>GetRolesRoleIdPermissionsResponse</code>.
     * GetRolesRoleIdPermissionsResponse
     * @alias module:model/GetRolesRoleIdPermissionsResponse
     */
    constructor() { 
        
        GetRolesRoleIdPermissionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRolesRoleIdPermissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRolesRoleIdPermissionsResponse} obj Optional instance to populate.
     * @return {module:model/GetRolesRoleIdPermissionsResponse} The populated <code>GetRolesRoleIdPermissionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRolesRoleIdPermissionsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('permissionUsageData')) {
                obj['permissionUsageData'] = ApiClient.convertToType(data['permissionUsageData'], [GetRolesRoleIdPermissionsResponsePermissionData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRolesRoleIdPermissionsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRolesRoleIdPermissionsResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetRolesRoleIdPermissionsResponse.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/GetRolesRoleIdPermissionsResponsePermissionData>} permissionUsageData
 */
GetRolesRoleIdPermissionsResponse.prototype['permissionUsageData'] = undefined;






export default GetRolesRoleIdPermissionsResponse;

