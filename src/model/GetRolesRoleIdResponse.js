

import ApiClient from '../ApiClient';

/**
 * The GetRolesRoleIdResponse model module.
 * @module model/GetRolesRoleIdResponse
 * @version 1.0
 */
class GetRolesRoleIdResponse {
    /**
     * Constructs a new <code>GetRolesRoleIdResponse</code>.
     * GetRolesRoleIdResponse
     * @alias module:model/GetRolesRoleIdResponse
     */
    constructor() { 
        
        GetRolesRoleIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRolesRoleIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRolesRoleIdResponse} obj Optional instance to populate.
     * @return {module:model/GetRolesRoleIdResponse} The populated <code>GetRolesRoleIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRolesRoleIdResponse();

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
GetRolesRoleIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRolesRoleIdResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetRolesRoleIdResponse.prototype['description'] = undefined;






export default GetRolesRoleIdResponse;

