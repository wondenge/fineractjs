

import ApiClient from '../ApiClient';

/**
 * The PutRolesRoleIdResponseChanges model module.
 * @module model/PutRolesRoleIdResponseChanges
 * @version 1.0
 */
class PutRolesRoleIdResponseChanges {
    /**
     * Constructs a new <code>PutRolesRoleIdResponseChanges</code>.
     * @alias module:model/PutRolesRoleIdResponseChanges
     */
    constructor() { 
        
        PutRolesRoleIdResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRolesRoleIdResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRolesRoleIdResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutRolesRoleIdResponseChanges} The populated <code>PutRolesRoleIdResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRolesRoleIdResponseChanges();

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
PutRolesRoleIdResponseChanges.prototype['description'] = undefined;






export default PutRolesRoleIdResponseChanges;

