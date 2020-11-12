

import ApiClient from '../ApiClient';

/**
 * The ExternalServicesPropertiesData model module.
 * @module model/ExternalServicesPropertiesData
 * @version 1.0
 */
class ExternalServicesPropertiesData {
    /**
     * Constructs a new <code>ExternalServicesPropertiesData</code>.
     * @alias module:model/ExternalServicesPropertiesData
     */
    constructor() { 
        
        ExternalServicesPropertiesData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalServicesPropertiesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalServicesPropertiesData} obj Optional instance to populate.
     * @return {module:model/ExternalServicesPropertiesData} The populated <code>ExternalServicesPropertiesData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalServicesPropertiesData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ExternalServicesPropertiesData.prototype['name'] = undefined;

/**
 * @member {String} value
 */
ExternalServicesPropertiesData.prototype['value'] = undefined;






export default ExternalServicesPropertiesData;

