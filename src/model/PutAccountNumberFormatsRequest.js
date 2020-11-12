

import ApiClient from '../ApiClient';

/**
 * The PutAccountNumberFormatsRequest model module.
 * @module model/PutAccountNumberFormatsRequest
 * @version 1.0
 */
class PutAccountNumberFormatsRequest {
    /**
     * Constructs a new <code>PutAccountNumberFormatsRequest</code>.
     * PutAccountNumberFormatsRequest
     * @alias module:model/PutAccountNumberFormatsRequest
     */
    constructor() { 
        
        PutAccountNumberFormatsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountNumberFormatsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountNumberFormatsRequest} obj Optional instance to populate.
     * @return {module:model/PutAccountNumberFormatsRequest} The populated <code>PutAccountNumberFormatsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountNumberFormatsRequest();

            if (data.hasOwnProperty('prefixType')) {
                obj['prefixType'] = ApiClient.convertToType(data['prefixType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} prefixType
 */
PutAccountNumberFormatsRequest.prototype['prefixType'] = undefined;






export default PutAccountNumberFormatsRequest;

