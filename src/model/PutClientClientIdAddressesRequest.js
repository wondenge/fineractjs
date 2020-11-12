

import ApiClient from '../ApiClient';

/**
 * The PutClientClientIdAddressesRequest model module.
 * @module model/PutClientClientIdAddressesRequest
 * @version 1.0
 */
class PutClientClientIdAddressesRequest {
    /**
     * Constructs a new <code>PutClientClientIdAddressesRequest</code>.
     * PutClientClientIdAddressesRequest
     * @alias module:model/PutClientClientIdAddressesRequest
     */
    constructor() { 
        
        PutClientClientIdAddressesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutClientClientIdAddressesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutClientClientIdAddressesRequest} obj Optional instance to populate.
     * @return {module:model/PutClientClientIdAddressesRequest} The populated <code>PutClientClientIdAddressesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutClientClientIdAddressesRequest();

            if (data.hasOwnProperty('addressId')) {
                obj['addressId'] = ApiClient.convertToType(data['addressId'], 'Number');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} addressId
 */
PutClientClientIdAddressesRequest.prototype['addressId'] = undefined;

/**
 * @member {String} street
 */
PutClientClientIdAddressesRequest.prototype['street'] = undefined;






export default PutClientClientIdAddressesRequest;

