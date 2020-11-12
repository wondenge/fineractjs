

import ApiClient from '../ApiClient';

/**
 * The PutCodesRequest model module.
 * @module model/PutCodesRequest
 * @version 1.0
 */
class PutCodesRequest {
    /**
     * Constructs a new <code>PutCodesRequest</code>.
     * PutCodesRequest
     * @alias module:model/PutCodesRequest
     */
    constructor() { 
        
        PutCodesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCodesRequest} obj Optional instance to populate.
     * @return {module:model/PutCodesRequest} The populated <code>PutCodesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCodesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutCodesRequest.prototype['name'] = undefined;






export default PutCodesRequest;

