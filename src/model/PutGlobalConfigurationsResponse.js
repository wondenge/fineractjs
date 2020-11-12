

import ApiClient from '../ApiClient';
import PutGlobalConfigurationsResponsechangesSwagger from './PutGlobalConfigurationsResponsechangesSwagger';

/**
 * The PutGlobalConfigurationsResponse model module.
 * @module model/PutGlobalConfigurationsResponse
 * @version 1.0
 */
class PutGlobalConfigurationsResponse {
    /**
     * Constructs a new <code>PutGlobalConfigurationsResponse</code>.
     * PutGlobalConfigurationsResponse
     * @alias module:model/PutGlobalConfigurationsResponse
     */
    constructor() { 
        
        PutGlobalConfigurationsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGlobalConfigurationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGlobalConfigurationsResponse} obj Optional instance to populate.
     * @return {module:model/PutGlobalConfigurationsResponse} The populated <code>PutGlobalConfigurationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGlobalConfigurationsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutGlobalConfigurationsResponsechangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutGlobalConfigurationsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutGlobalConfigurationsResponsechangesSwagger} changes
 */
PutGlobalConfigurationsResponse.prototype['changes'] = undefined;






export default PutGlobalConfigurationsResponse;

