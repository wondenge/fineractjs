

import ApiClient from '../ApiClient';
import RoleData from './RoleData';
import StaffData from './StaffData';

/**
 * The GetUsersUserIdResponse model module.
 * @module model/GetUsersUserIdResponse
 * @version 1.0
 */
class GetUsersUserIdResponse {
    /**
     * Constructs a new <code>GetUsersUserIdResponse</code>.
     * GetUsersUserIdResponse
     * @alias module:model/GetUsersUserIdResponse
     */
    constructor() { 
        
        GetUsersUserIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUsersUserIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUsersUserIdResponse} obj Optional instance to populate.
     * @return {module:model/GetUsersUserIdResponse} The populated <code>GetUsersUserIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUsersUserIdResponse();

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
            if (data.hasOwnProperty('availableRoles')) {
                obj['availableRoles'] = ApiClient.convertToType(data['availableRoles'], [RoleData]);
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
GetUsersUserIdResponse.prototype['id'] = undefined;

/**
 * @member {String} username
 */
GetUsersUserIdResponse.prototype['username'] = undefined;

/**
 * @member {Number} officeId
 */
GetUsersUserIdResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetUsersUserIdResponse.prototype['officeName'] = undefined;

/**
 * @member {String} firstname
 */
GetUsersUserIdResponse.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetUsersUserIdResponse.prototype['lastname'] = undefined;

/**
 * @member {String} email
 */
GetUsersUserIdResponse.prototype['email'] = undefined;

/**
 * @member {Boolean} passwordNeverExpires
 */
GetUsersUserIdResponse.prototype['passwordNeverExpires'] = undefined;

/**
 * @member {module:model/StaffData} staff
 */
GetUsersUserIdResponse.prototype['staff'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} availableRoles
 */
GetUsersUserIdResponse.prototype['availableRoles'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} selectedRoles
 */
GetUsersUserIdResponse.prototype['selectedRoles'] = undefined;






export default GetUsersUserIdResponse;

