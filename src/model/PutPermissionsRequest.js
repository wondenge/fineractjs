

import ApiClient from '../ApiClient';

/**
 * The PutPermissionsRequest model module.
 * @module model/PutPermissionsRequest
 * @version 1.0
 */
class PutPermissionsRequest {
    /**
     * Constructs a new <code>PutPermissionsRequest</code>.
     * PutPermissionsRequest
     * @alias module:model/PutPermissionsRequest
     */
    constructor() { 
        
        PutPermissionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutPermissionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutPermissionsRequest} obj Optional instance to populate.
     * @return {module:model/PutPermissionsRequest} The populated <code>PutPermissionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutPermissionsRequest();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} permissions
 */
PutPermissionsRequest.prototype['permissions'] = undefined;






export default PutPermissionsRequest;

