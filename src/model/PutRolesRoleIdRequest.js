

import ApiClient from '../ApiClient';

/**
 * The PutRolesRoleIdRequest model module.
 * @module model/PutRolesRoleIdRequest
 * @version 1.0
 */
class PutRolesRoleIdRequest {
    /**
     * Constructs a new <code>PutRolesRoleIdRequest</code>.
     * PutRolesRoleIdRequest
     * @alias module:model/PutRolesRoleIdRequest
     */
    constructor() { 
        
        PutRolesRoleIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRolesRoleIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRolesRoleIdRequest} obj Optional instance to populate.
     * @return {module:model/PutRolesRoleIdRequest} The populated <code>PutRolesRoleIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRolesRoleIdRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutRolesRoleIdRequest.prototype['description'] = undefined;






export default PutRolesRoleIdRequest;

