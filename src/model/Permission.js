  

import ApiClient from '../ApiClient';

/**
 * The Permission model module.
 * @module model/Permission
 * @version 1.0
 */
class Permission {
    /**
     * Constructs a new <code>Permission</code>.
     * @alias module:model/Permission
     */
    constructor() { 
        
        Permission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Permission} obj Optional instance to populate.
     * @return {module:model/Permission} The populated <code>Permission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Permission();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('grouping')) {
                obj['grouping'] = ApiClient.convertToType(data['grouping'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
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
Permission.prototype['id'] = undefined;

/**
 * @member {String} grouping
 */
Permission.prototype['grouping'] = undefined;

/**
 * @member {String} code
 */
Permission.prototype['code'] = undefined;

/**
 * @member {Boolean} new
 */
Permission.prototype['new'] = undefined;






export default Permission;

