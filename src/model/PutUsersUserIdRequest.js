

import ApiClient from '../ApiClient';

/**
 * The PutUsersUserIdRequest model module.
 * @module model/PutUsersUserIdRequest
 * @version 1.0
 */
class PutUsersUserIdRequest {
    /**
     * Constructs a new <code>PutUsersUserIdRequest</code>.
     * PutUsersUserIdRequest
     * @alias module:model/PutUsersUserIdRequest
     */
    constructor() { 
        
        PutUsersUserIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutUsersUserIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutUsersUserIdRequest} obj Optional instance to populate.
     * @return {module:model/PutUsersUserIdRequest} The populated <code>PutUsersUserIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutUsersUserIdRequest();

            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('repeatPassword')) {
                obj['repeatPassword'] = ApiClient.convertToType(data['repeatPassword'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstname
 */
PutUsersUserIdRequest.prototype['firstname'] = undefined;

/**
 * @member {String} password
 */
PutUsersUserIdRequest.prototype['password'] = undefined;

/**
 * @member {String} repeatPassword
 */
PutUsersUserIdRequest.prototype['repeatPassword'] = undefined;






export default PutUsersUserIdRequest;

