

import ApiClient from '../ApiClient';

/**
 * The PutGlClosuresRequest model module.
 * @module model/PutGlClosuresRequest
 * @version 1.0
 */
class PutGlClosuresRequest {
    /**
     * Constructs a new <code>PutGlClosuresRequest</code>.
     * PutGlClosuresRequest
     * @alias module:model/PutGlClosuresRequest
     */
    constructor() { 
        
        PutGlClosuresRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGlClosuresRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGlClosuresRequest} obj Optional instance to populate.
     * @return {module:model/PutGlClosuresRequest} The populated <code>PutGlClosuresRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGlClosuresRequest();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} comments
 */
PutGlClosuresRequest.prototype['comments'] = undefined;






export default PutGlClosuresRequest;

