

import ApiClient from '../ApiClient';
import Permission from './Permission';

/**
 * The Role model module.
 * @module model/Role
 * @version 1.0
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * @alias module:model/Role
     */
    constructor() { 
        
        Role.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [Permission]);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Role.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Role.prototype['name'] = undefined;

/**
 * @member {Boolean} disabled
 */
Role.prototype['disabled'] = undefined;

/**
 * @member {Array.<module:model/Permission>} permissions
 */
Role.prototype['permissions'] = undefined;

/**
 * @member {Boolean} enabled
 */
Role.prototype['enabled'] = undefined;

/**
 * @member {Boolean} new
 */
Role.prototype['new'] = undefined;






export default Role;

