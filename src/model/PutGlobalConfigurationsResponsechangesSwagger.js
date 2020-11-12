

import ApiClient from '../ApiClient';

/**
 * The PutGlobalConfigurationsResponsechangesSwagger model module.
 * @module model/PutGlobalConfigurationsResponsechangesSwagger
 * @version 1.0
 */
class PutGlobalConfigurationsResponsechangesSwagger {
    /**
     * Constructs a new <code>PutGlobalConfigurationsResponsechangesSwagger</code>.
     * @alias module:model/PutGlobalConfigurationsResponsechangesSwagger
     */
    constructor() { 
        
        PutGlobalConfigurationsResponsechangesSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGlobalConfigurationsResponsechangesSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGlobalConfigurationsResponsechangesSwagger} obj Optional instance to populate.
     * @return {module:model/PutGlobalConfigurationsResponsechangesSwagger} The populated <code>PutGlobalConfigurationsResponsechangesSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGlobalConfigurationsResponsechangesSwagger();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
PutGlobalConfigurationsResponsechangesSwagger.prototype['enabled'] = undefined;






export default PutGlobalConfigurationsResponsechangesSwagger;

