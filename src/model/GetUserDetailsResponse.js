

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';
import RoleData from './RoleData';

/**
 * The GetUserDetailsResponse model module.
 * @module model/GetUserDetailsResponse
 * @version 1.0
 */
class GetUserDetailsResponse {
    /**
     * Constructs a new <code>GetUserDetailsResponse</code>.
     * GetUserDetailsResponse
     * @alias module:model/GetUserDetailsResponse
     */
    constructor() { 
        
        GetUserDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUserDetailsResponse} obj Optional instance to populate.
     * @return {module:model/GetUserDetailsResponse} The populated <code>GetUserDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserDetailsResponse();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('authenticated')) {
                obj['authenticated'] = ApiClient.convertToType(data['authenticated'], 'Boolean');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
            if (data.hasOwnProperty('staffDisplayName')) {
                obj['staffDisplayName'] = ApiClient.convertToType(data['staffDisplayName'], 'String');
            }
            if (data.hasOwnProperty('organisationalRole')) {
                obj['organisationalRole'] = EnumOptionData.constructFromObject(data['organisationalRole']);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [RoleData]);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
GetUserDetailsResponse.prototype['username'] = undefined;

/**
 * @member {Number} userId
 */
GetUserDetailsResponse.prototype['userId'] = undefined;

/**
 * @member {String} accessToken
 */
GetUserDetailsResponse.prototype['accessToken'] = undefined;

/**
 * @member {Boolean} authenticated
 */
GetUserDetailsResponse.prototype['authenticated'] = undefined;

/**
 * @member {Number} officeId
 */
GetUserDetailsResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetUserDetailsResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} staffId
 */
GetUserDetailsResponse.prototype['staffId'] = undefined;

/**
 * @member {String} staffDisplayName
 */
GetUserDetailsResponse.prototype['staffDisplayName'] = undefined;

/**
 * @member {module:model/EnumOptionData} organisationalRole
 */
GetUserDetailsResponse.prototype['organisationalRole'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} roles
 */
GetUserDetailsResponse.prototype['roles'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
GetUserDetailsResponse.prototype['permissions'] = undefined;






export default GetUserDetailsResponse;

