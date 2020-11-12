

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetCachesResponse model module.
 * @module model/GetCachesResponse
 * @version 1.0
 */
class GetCachesResponse {
    /**
     * Constructs a new <code>GetCachesResponse</code>.
     * GetCachesResponse
     * @alias module:model/GetCachesResponse
     */
    constructor() { 
        
        GetCachesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCachesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCachesResponse} obj Optional instance to populate.
     * @return {module:model/GetCachesResponse} The populated <code>GetCachesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCachesResponse();

            if (data.hasOwnProperty('cacheType')) {
                obj['cacheType'] = EnumOptionData.constructFromObject(data['cacheType']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnumOptionData} cacheType
 */
GetCachesResponse.prototype['cacheType'] = undefined;

/**
 * @member {Boolean} enabled
 */
GetCachesResponse.prototype['enabled'] = undefined;






export default GetCachesResponse;

