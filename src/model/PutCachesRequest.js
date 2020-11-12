

import ApiClient from '../ApiClient';

/**
 * The PutCachesRequest model module.
 * @module model/PutCachesRequest
 * @version 1.0
 */
class PutCachesRequest {
    /**
     * Constructs a new <code>PutCachesRequest</code>.
     * PutCachesRequest
     * @alias module:model/PutCachesRequest
     */
    constructor() { 
        
        PutCachesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCachesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCachesRequest} obj Optional instance to populate.
     * @return {module:model/PutCachesRequest} The populated <code>PutCachesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCachesRequest();

            if (data.hasOwnProperty('cacheType')) {
                obj['cacheType'] = ApiClient.convertToType(data['cacheType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cacheType
 */
PutCachesRequest.prototype['cacheType'] = undefined;






export default PutCachesRequest;

