

import ApiClient from '../ApiClient';

/**
 * The PutGlobalConfigurationsRequest model module.
 * @module model/PutGlobalConfigurationsRequest
 * @version 1.0
 */
class PutGlobalConfigurationsRequest {
    /**
     * Constructs a new <code>PutGlobalConfigurationsRequest</code>.
     * PutGlobalConfigurationsRequest
     * @alias module:model/PutGlobalConfigurationsRequest
     */
    constructor() { 
        
        PutGlobalConfigurationsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGlobalConfigurationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGlobalConfigurationsRequest} obj Optional instance to populate.
     * @return {module:model/PutGlobalConfigurationsRequest} The populated <code>PutGlobalConfigurationsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGlobalConfigurationsRequest();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
PutGlobalConfigurationsRequest.prototype['enabled'] = undefined;

/**
 * @member {Number} description
 */
PutGlobalConfigurationsRequest.prototype['description'] = undefined;






export default PutGlobalConfigurationsRequest;

