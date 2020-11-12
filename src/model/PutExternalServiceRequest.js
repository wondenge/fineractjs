

import ApiClient from '../ApiClient';

/**
 * The PutExternalServiceRequest model module.
 * @module model/PutExternalServiceRequest
 * @version 1.0
 */
class PutExternalServiceRequest {
    /**
     * Constructs a new <code>PutExternalServiceRequest</code>.
     * PutExternalServiceRequest
     * @alias module:model/PutExternalServiceRequest
     */
    constructor() { 
        
        PutExternalServiceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutExternalServiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutExternalServiceRequest} obj Optional instance to populate.
     * @return {module:model/PutExternalServiceRequest} The populated <code>PutExternalServiceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutExternalServiceRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
PutExternalServiceRequest.prototype['username'] = undefined;

/**
 * @member {String} password
 */
PutExternalServiceRequest.prototype['password'] = undefined;






export default PutExternalServiceRequest;

