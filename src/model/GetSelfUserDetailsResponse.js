

import ApiClient from '../ApiClient';
import GetSelfUserDetailsOrganisationalRole from './GetSelfUserDetailsOrganisationalRole';
import GetSelfUserDetailsRoles from './GetSelfUserDetailsRoles';

/**
 * The GetSelfUserDetailsResponse model module.
 * @module model/GetSelfUserDetailsResponse
 * @version 1.0
 */
class GetSelfUserDetailsResponse {
    /**
     * Constructs a new <code>GetSelfUserDetailsResponse</code>.
     * GetSelfUserDetailsResponse
     * @alias module:model/GetSelfUserDetailsResponse
     */
    constructor() { 
        
        GetSelfUserDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfUserDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfUserDetailsResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfUserDetailsResponse} The populated <code>GetSelfUserDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfUserDetailsResponse();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('base64EncodedAuthenticationKey')) {
                obj['base64EncodedAuthenticationKey'] = ApiClient.convertToType(data['base64EncodedAuthenticationKey'], 'String');
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
                obj['organisationalRole'] = GetSelfUserDetailsOrganisationalRole.constructFromObject(data['organisationalRole']);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [GetSelfUserDetailsRoles]);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('isSelfServiceUser')) {
                obj['isSelfServiceUser'] = ApiClient.convertToType(data['isSelfServiceUser'], 'Boolean');
            }
            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
GetSelfUserDetailsResponse.prototype['username'] = undefined;

/**
 * @member {Number} userId
 */
GetSelfUserDetailsResponse.prototype['userId'] = undefined;

/**
 * @member {String} base64EncodedAuthenticationKey
 */
GetSelfUserDetailsResponse.prototype['base64EncodedAuthenticationKey'] = undefined;

/**
 * @member {Boolean} authenticated
 */
GetSelfUserDetailsResponse.prototype['authenticated'] = undefined;

/**
 * @member {Number} officeId
 */
GetSelfUserDetailsResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetSelfUserDetailsResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} staffId
 */
GetSelfUserDetailsResponse.prototype['staffId'] = undefined;

/**
 * @member {String} staffDisplayName
 */
GetSelfUserDetailsResponse.prototype['staffDisplayName'] = undefined;

/**
 * @member {module:model/GetSelfUserDetailsOrganisationalRole} organisationalRole
 */
GetSelfUserDetailsResponse.prototype['organisationalRole'] = undefined;

/**
 * @member {Array.<module:model/GetSelfUserDetailsRoles>} roles
 */
GetSelfUserDetailsResponse.prototype['roles'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
GetSelfUserDetailsResponse.prototype['permissions'] = undefined;

/**
 * @member {Boolean} isSelfServiceUser
 */
GetSelfUserDetailsResponse.prototype['isSelfServiceUser'] = undefined;

/**
 * @member {Array.<Number>} clients
 */
GetSelfUserDetailsResponse.prototype['clients'] = undefined;






export default GetSelfUserDetailsResponse;

