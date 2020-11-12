

import ApiClient from '../ApiClient';

/**
 * The PutClientClientIdAddressesResponse model module.
 * @module model/PutClientClientIdAddressesResponse
 * @version 1.0
 */
class PutClientClientIdAddressesResponse {
    /**
     * Constructs a new <code>PutClientClientIdAddressesResponse</code>.
     * PutClientClientIdAddressesResponse
     * @alias module:model/PutClientClientIdAddressesResponse
     */
    constructor() { 
        
        PutClientClientIdAddressesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutClientClientIdAddressesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutClientClientIdAddressesResponse} obj Optional instance to populate.
     * @return {module:model/PutClientClientIdAddressesResponse} The populated <code>PutClientClientIdAddressesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutClientClientIdAddressesResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutClientClientIdAddressesResponse.prototype['resourceId'] = undefined;






export default PutClientClientIdAddressesResponse;

