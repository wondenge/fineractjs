

import ApiClient from '../ApiClient';

/**
 * The PostUsersRequest model module.
 * @module model/PostUsersRequest
 * @version 1.0
 */
class PostUsersRequest {
    /**
     * Constructs a new <code>PostUsersRequest</code>.
     * PostUsersRequest
     * @alias module:model/PostUsersRequest
     */
    constructor() { 
        
        PostUsersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUsersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUsersRequest} obj Optional instance to populate.
     * @return {module:model/PostUsersRequest} The populated <code>PostUsersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUsersRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
            }
            if (data.hasOwnProperty('sendPasswordToEmail')) {
                obj['sendPasswordToEmail'] = ApiClient.convertToType(data['sendPasswordToEmail'], 'Boolean');
            }
            if (data.hasOwnProperty('isSelfServiceUser')) {
                obj['isSelfServiceUser'] = ApiClient.convertToType(data['isSelfServiceUser'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
PostUsersRequest.prototype['username'] = undefined;

/**
 * @member {String} firstname
 */
PostUsersRequest.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
PostUsersRequest.prototype['lastname'] = undefined;

/**
 * @member {String} email
 */
PostUsersRequest.prototype['email'] = undefined;

/**
 * @member {Number} officeId
 */
PostUsersRequest.prototype['officeId'] = undefined;

/**
 * @member {Number} staffId
 */
PostUsersRequest.prototype['staffId'] = undefined;

/**
 * @member {String} roles
 */
PostUsersRequest.prototype['roles'] = undefined;

/**
 * @member {Boolean} sendPasswordToEmail
 */
PostUsersRequest.prototype['sendPasswordToEmail'] = undefined;

/**
 * @member {Boolean} isSelfServiceUser
 */
PostUsersRequest.prototype['isSelfServiceUser'] = undefined;






export default PostUsersRequest;

