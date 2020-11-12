

import ApiClient from '../ApiClient';

/**
 * The GetSelfUserDetailsOrganisationalRole model module.
 * @module model/GetSelfUserDetailsOrganisationalRole
 * @version 1.0
 */
class GetSelfUserDetailsOrganisationalRole {
    /**
     * Constructs a new <code>GetSelfUserDetailsOrganisationalRole</code>.
     * @alias module:model/GetSelfUserDetailsOrganisationalRole
     */
    constructor() { 
        
        GetSelfUserDetailsOrganisationalRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfUserDetailsOrganisationalRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfUserDetailsOrganisationalRole} obj Optional instance to populate.
     * @return {module:model/GetSelfUserDetailsOrganisationalRole} The populated <code>GetSelfUserDetailsOrganisationalRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfUserDetailsOrganisationalRole();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
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
GetSelfUserDetailsOrganisationalRole.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfUserDetailsOrganisationalRole.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfUserDetailsOrganisationalRole.prototype['description'] = undefined;






export default GetSelfUserDetailsOrganisationalRole;

