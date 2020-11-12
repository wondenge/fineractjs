

import ApiClient from '../ApiClient';

/**
 * The PutCachechangesSwagger model module.
 * @module model/PutCachechangesSwagger
 * @version 1.0
 */
class PutCachechangesSwagger {
    /**
     * Constructs a new <code>PutCachechangesSwagger</code>.
     * @alias module:model/PutCachechangesSwagger
     */
    constructor() { 
        
        PutCachechangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCachechangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCachechangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutCachechangesSwagger} The populated <code>PutCachechangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCachechangesSwagger();

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
PutCachechangesSwagger.prototype['cacheType'] = undefined;






export default PutCachechangesSwagger;

