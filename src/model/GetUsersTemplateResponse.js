

import ApiClient from '../ApiClient';
import OfficeData from './OfficeData';
import RoleData from './RoleData';

/**
 * The GetUsersTemplateResponse model module.
 * @module model/GetUsersTemplateResponse
 * @version 1.0
 */
class GetUsersTemplateResponse {
    /**
     * Constructs a new <code>GetUsersTemplateResponse</code>.
     * GetUsersTemplateResponse
     * @alias module:model/GetUsersTemplateResponse
     */
    constructor() { 
        
        GetUsersTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUsersTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUsersTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetUsersTemplateResponse} The populated <code>GetUsersTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUsersTemplateResponse();

            if (data.hasOwnProperty('allowedOffices')) {
                obj['allowedOffices'] = ApiClient.convertToType(data['allowedOffices'], [OfficeData]);
            }
            if (data.hasOwnProperty('availableRoles')) {
                obj['availableRoles'] = ApiClient.convertToType(data['availableRoles'], [RoleData]);
            }
            if (data.hasOwnProperty('selfServiceRoles')) {
                obj['selfServiceRoles'] = ApiClient.convertToType(data['selfServiceRoles'], [RoleData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/OfficeData>} allowedOffices
 */
GetUsersTemplateResponse.prototype['allowedOffices'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} availableRoles
 */
GetUsersTemplateResponse.prototype['availableRoles'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} selfServiceRoles
 */
GetUsersTemplateResponse.prototype['selfServiceRoles'] = undefined;






export default GetUsersTemplateResponse;

