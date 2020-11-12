

import ApiClient from '../ApiClient';
import PutRolesRoleIdResponseChanges from './PutRolesRoleIdResponseChanges';

/**
 * The PutRolesRoleIdResponse model module.
 * @module model/PutRolesRoleIdResponse
 * @version 1.0
 */
class PutRolesRoleIdResponse {
    /**
     * Constructs a new <code>PutRolesRoleIdResponse</code>.
     * PutRolesRoleIdResponse
     * @alias module:model/PutRolesRoleIdResponse
     */
    constructor() { 
        
        PutRolesRoleIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRolesRoleIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRolesRoleIdResponse} obj Optional instance to populate.
     * @return {module:model/PutRolesRoleIdResponse} The populated <code>PutRolesRoleIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRolesRoleIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutRolesRoleIdResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutRolesRoleIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutRolesRoleIdResponseChanges} changes
 */
PutRolesRoleIdResponse.prototype['changes'] = undefined;






export default PutRolesRoleIdResponse;

