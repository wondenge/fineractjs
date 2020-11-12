

import ApiClient from '../ApiClient';

/**
 * The DeleteRolesRoleIdResponse model module.
 * @module model/DeleteRolesRoleIdResponse
 * @version 1.0
 */
class DeleteRolesRoleIdResponse {
    /**
     * Constructs a new <code>DeleteRolesRoleIdResponse</code>.
     * DeleteRolesRoleIdResponse
     * @alias module:model/DeleteRolesRoleIdResponse
     */
    constructor() { 
        
        DeleteRolesRoleIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRolesRoleIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRolesRoleIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteRolesRoleIdResponse} The populated <code>DeleteRolesRoleIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRolesRoleIdResponse();

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
DeleteRolesRoleIdResponse.prototype['resourceId'] = undefined;






export default DeleteRolesRoleIdResponse;

