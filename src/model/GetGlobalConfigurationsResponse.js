

import ApiClient from '../ApiClient';
import GlobalConfigurationPropertyData from './GlobalConfigurationPropertyData';

/**
 * The GetGlobalConfigurationsResponse model module.
 * @module model/GetGlobalConfigurationsResponse
 * @version 1.0
 */
class GetGlobalConfigurationsResponse {
    /**
     * Constructs a new <code>GetGlobalConfigurationsResponse</code>.
     * GetGlobalConfigurationsResponse
     * @alias module:model/GetGlobalConfigurationsResponse
     */
    constructor() { 
        
        GetGlobalConfigurationsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGlobalConfigurationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGlobalConfigurationsResponse} obj Optional instance to populate.
     * @return {module:model/GetGlobalConfigurationsResponse} The populated <code>GetGlobalConfigurationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGlobalConfigurationsResponse();

            if (data.hasOwnProperty('globalConfiguration')) {
                obj['globalConfiguration'] = ApiClient.convertToType(data['globalConfiguration'], [GlobalConfigurationPropertyData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GlobalConfigurationPropertyData>} globalConfiguration
 */
GetGlobalConfigurationsResponse.prototype['globalConfiguration'] = undefined;






export default GetGlobalConfigurationsResponse;

