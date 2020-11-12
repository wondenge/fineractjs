

import ApiClient from '../ApiClient';
import PutCachechangesSwagger from './PutCachechangesSwagger';

/**
 * The PutCachesResponse model module.
 * @module model/PutCachesResponse
 * @version 1.0
 */
class PutCachesResponse {
    /**
     * Constructs a new <code>PutCachesResponse</code>.
     * PutCachesResponse
     * @alias module:model/PutCachesResponse
     */
    constructor() { 
        
        PutCachesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCachesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCachesResponse} obj Optional instance to populate.
     * @return {module:model/PutCachesResponse} The populated <code>PutCachesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCachesResponse();

            if (data.hasOwnProperty('cacheType')) {
                obj['cacheType'] = PutCachechangesSwagger.constructFromObject(data['cacheType']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PutCachechangesSwagger} cacheType
 */
PutCachesResponse.prototype['cacheType'] = undefined;






export default PutCachesResponse;

