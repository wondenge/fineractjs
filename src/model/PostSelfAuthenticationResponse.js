

import ApiClient from '../ApiClient';
import GetSelfUserDetailsOrganisationalRole from './GetSelfUserDetailsOrganisationalRole';
import GetSelfUserDetailsRoles from './GetSelfUserDetailsRoles';

/**
 * The PostSelfAuthenticationResponse model module.
 * @module model/PostSelfAuthenticationResponse
 * @version 1.0
 */
class PostSelfAuthenticationResponse {
    /**
     * Constructs a new <code>PostSelfAuthenticationResponse</code>.
     * PostSelfAuthenticationResponse
     * @alias module:model/PostSelfAuthenticationResponse
     */
    constructor() { 
        
        PostSelfAuthenticationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfAuthenticationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfAuthenticationResponse} obj Optional instance to populate.
     * @return {module:model/PostSelfAuthenticationResponse} The populated <code>PostSelfAuthenticationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfAuthenticationResponse();

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
PostSelfAuthenticationResponse.prototype['username'] = undefined;

/**
 * @member {Number} userId
 */
PostSelfAuthenticationResponse.prototype['userId'] = undefined;

/**
 * @member {String} base64EncodedAuthenticationKey
 */
PostSelfAuthenticationResponse.prototype['base64EncodedAuthenticationKey'] = undefined;

/**
 * @member {Boolean} authenticated
 */
PostSelfAuthenticationResponse.prototype['authenticated'] = undefined;

/**
 * @member {Number} officeId
 */
PostSelfAuthenticationResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
PostSelfAuthenticationResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} staffId
 */
PostSelfAuthenticationResponse.prototype['staffId'] = undefined;

/**
 * @member {String} staffDisplayName
 */
PostSelfAuthenticationResponse.prototype['staffDisplayName'] = undefined;

/**
 * @member {module:model/GetSelfUserDetailsOrganisationalRole} organisationalRole
 */
PostSelfAuthenticationResponse.prototype['organisationalRole'] = undefined;

/**
 * @member {Array.<module:model/GetSelfUserDetailsRoles>} roles
 */
PostSelfAuthenticationResponse.prototype['roles'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
PostSelfAuthenticationResponse.prototype['permissions'] = undefined;

/**
 * @member {Boolean} isSelfServiceUser
 */
PostSelfAuthenticationResponse.prototype['isSelfServiceUser'] = undefined;

/**
 * @member {Array.<Number>} clients
 */
PostSelfAuthenticationResponse.prototype['clients'] = undefined;






export default PostSelfAuthenticationResponse;

