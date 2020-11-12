

import ApiClient from '../ApiClient';

/**
 * The PutSelfUserRequest model module.
 * @module model/PutSelfUserRequest
 * @version 1.0
 */
class PutSelfUserRequest {
    /**
     * Constructs a new <code>PutSelfUserRequest</code>.
     * PutSelfUserRequest
     * @alias module:model/PutSelfUserRequest
     */
    constructor() { 
        
        PutSelfUserRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfUserRequest} obj Optional instance to populate.
     * @return {module:model/PutSelfUserRequest} The populated <code>PutSelfUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfUserRequest();

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
 * @member {String} password
 */
PutSelfUserRequest.prototype['password'] = undefined;

/**
 * @member {String} repeatPassword
 */
PutSelfUserRequest.prototype['repeatPassword'] = undefined;






export default PutSelfUserRequest;

