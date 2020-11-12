

import ApiClient from '../ApiClient';

/**
 * The GetSelfUserDetailsRoles model module.
 * @module model/GetSelfUserDetailsRoles
 * @version 1.0
 */
class GetSelfUserDetailsRoles {
    /**
     * Constructs a new <code>GetSelfUserDetailsRoles</code>.
     * @alias module:model/GetSelfUserDetailsRoles
     */
    constructor() { 
        
        GetSelfUserDetailsRoles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfUserDetailsRoles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfUserDetailsRoles} obj Optional instance to populate.
     * @return {module:model/GetSelfUserDetailsRoles} The populated <code>GetSelfUserDetailsRoles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfUserDetailsRoles();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfUserDetailsRoles.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSelfUserDetailsRoles.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetSelfUserDetailsRoles.prototype['description'] = undefined;






export default GetSelfUserDetailsRoles;

