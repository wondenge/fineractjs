

import ApiClient from '../ApiClient';

/**
 * The HookTemplateData model module.
 * @module model/HookTemplateData
 * @version 1.0
 */
class HookTemplateData {
    /**
     * Constructs a new <code>HookTemplateData</code>.
     * @alias module:model/HookTemplateData
     */
    constructor() { 
        
        HookTemplateData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HookTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookTemplateData} obj Optional instance to populate.
     * @return {module:model/HookTemplateData} The populated <code>HookTemplateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HookTemplateData();

            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} serviceId
 */
HookTemplateData.prototype['serviceId'] = undefined;






export default HookTemplateData;

