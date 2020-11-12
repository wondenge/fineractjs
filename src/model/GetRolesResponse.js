

import ApiClient from '../ApiClient';

/**
 * The GetRolesResponse model module.
 * @module model/GetRolesResponse
 * @version 1.0
 */
class GetRolesResponse {
    /**
     * Constructs a new <code>GetRolesResponse</code>.
     * GetRolesResponse
     * @alias module:model/GetRolesResponse
     */
    constructor() { 
        
        GetRolesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRolesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRolesResponse} obj Optional instance to populate.
     * @return {module:model/GetRolesResponse} The populated <code>GetRolesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRolesResponse();

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
GetRolesResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRolesResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetRolesResponse.prototype['description'] = undefined;






export default GetRolesResponse;

