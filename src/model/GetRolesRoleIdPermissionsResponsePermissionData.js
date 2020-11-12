

import ApiClient from '../ApiClient';

/**
 * The GetRolesRoleIdPermissionsResponsePermissionData model module.
 * @module model/GetRolesRoleIdPermissionsResponsePermissionData
 * @version 1.0
 */
class GetRolesRoleIdPermissionsResponsePermissionData {
    /**
     * Constructs a new <code>GetRolesRoleIdPermissionsResponsePermissionData</code>.
     * @alias module:model/GetRolesRoleIdPermissionsResponsePermissionData
     */
    constructor() { 
        
        GetRolesRoleIdPermissionsResponsePermissionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRolesRoleIdPermissionsResponsePermissionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRolesRoleIdPermissionsResponsePermissionData} obj Optional instance to populate.
     * @return {module:model/GetRolesRoleIdPermissionsResponsePermissionData} The populated <code>GetRolesRoleIdPermissionsResponsePermissionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRolesRoleIdPermissionsResponsePermissionData();

            if (data.hasOwnProperty('grouping')) {
                obj['grouping'] = ApiClient.convertToType(data['grouping'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('entityName')) {
                obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
            }
            if (data.hasOwnProperty('actionName')) {
                obj['actionName'] = ApiClient.convertToType(data['actionName'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} grouping
 */
GetRolesRoleIdPermissionsResponsePermissionData.prototype['grouping'] = undefined;

/**
 * @member {String} code
 */
GetRolesRoleIdPermissionsResponsePermissionData.prototype['code'] = undefined;

/**
 * @member {String} entityName
 */
GetRolesRoleIdPermissionsResponsePermissionData.prototype['entityName'] = undefined;

/**
 * @member {String} actionName
 */
GetRolesRoleIdPermissionsResponsePermissionData.prototype['actionName'] = undefined;

/**
 * @member {Boolean} selected
 */
GetRolesRoleIdPermissionsResponsePermissionData.prototype['selected'] = undefined;






export default GetRolesRoleIdPermissionsResponsePermissionData;

