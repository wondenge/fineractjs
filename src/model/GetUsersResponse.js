

import ApiClient from '../ApiClient';
import RoleData from './RoleData';
import StaffData from './StaffData';

/**
 * The GetUsersResponse model module.
 * @module model/GetUsersResponse
 * @version 1.0
 */
class GetUsersResponse {
    /**
     * Constructs a new <code>GetUsersResponse</code>.
     * GetUsersResponse
     * @alias module:model/GetUsersResponse
     */
    constructor() { 
        
        GetUsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUsersResponse} obj Optional instance to populate.
     * @return {module:model/GetUsersResponse} The populated <code>GetUsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUsersResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('passwordNeverExpires')) {
                obj['passwordNeverExpires'] = ApiClient.convertToType(data['passwordNeverExpires'], 'Boolean');
            }
            if (data.hasOwnProperty('staff')) {
                obj['staff'] = StaffData.constructFromObject(data['staff']);
            }
            if (data.hasOwnProperty('selectedRoles')) {
                obj['selectedRoles'] = ApiClient.convertToType(data['selectedRoles'], [RoleData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetUsersResponse.prototype['id'] = undefined;

/**
 * @member {String} username
 */
GetUsersResponse.prototype['username'] = undefined;

/**
 * @member {Number} officeId
 */
GetUsersResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetUsersResponse.prototype['officeName'] = undefined;

/**
 * @member {String} firstname
 */
GetUsersResponse.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetUsersResponse.prototype['lastname'] = undefined;

/**
 * @member {String} email
 */
GetUsersResponse.prototype['email'] = undefined;

/**
 * @member {Boolean} passwordNeverExpires
 */
GetUsersResponse.prototype['passwordNeverExpires'] = undefined;

/**
 * @member {module:model/StaffData} staff
 */
GetUsersResponse.prototype['staff'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} selectedRoles
 */
GetUsersResponse.prototype['selectedRoles'] = undefined;






export default GetUsersResponse;

