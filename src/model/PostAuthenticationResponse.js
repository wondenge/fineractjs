

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';
import RoleData from './RoleData';

/**
 * The PostAuthenticationResponse model module.
 * @module model/PostAuthenticationResponse
 * @version 1.0
 */
class PostAuthenticationResponse {
    /**
     * Constructs a new <code>PostAuthenticationResponse</code>.
     * PostAuthenticationResponse
     * @alias module:model/PostAuthenticationResponse
     */
    constructor() { 
        
        PostAuthenticationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAuthenticationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAuthenticationResponse} obj Optional instance to populate.
     * @return {module:model/PostAuthenticationResponse} The populated <code>PostAuthenticationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAuthenticationResponse();

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
PostAuthenticationResponse.prototype['username'] = undefined;

/**
 * @member {Number} userId
 */
PostAuthenticationResponse.prototype['userId'] = undefined;

/**
 * @member {String} base64EncodedAuthenticationKey
 */
PostAuthenticationResponse.prototype['base64EncodedAuthenticationKey'] = undefined;

/**
 * @member {Boolean} authenticated
 */
PostAuthenticationResponse.prototype['authenticated'] = undefined;

/**
 * @member {Number} officeId
 */
PostAuthenticationResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
PostAuthenticationResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} staffId
 */
PostAuthenticationResponse.prototype['staffId'] = undefined;

/**
 * @member {String} staffDisplayName
 */
PostAuthenticationResponse.prototype['staffDisplayName'] = undefined;

/**
 * @member {module:model/EnumOptionData} organisationalRole
 */
PostAuthenticationResponse.prototype['organisationalRole'] = undefined;

/**
 * @member {Array.<module:model/RoleData>} roles
 */
PostAuthenticationResponse.prototype['roles'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
PostAuthenticationResponse.prototype['permissions'] = undefined;






export default PostAuthenticationResponse;

