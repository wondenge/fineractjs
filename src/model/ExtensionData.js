

import ApiClient from '../ApiClient';

/**
 * The ExtensionData model module.
 * @module model/ExtensionData
 * @version 1.0
 */
class ExtensionData {
    /**
     * Constructs a new <code>ExtensionData</code>.
     * @alias module:model/ExtensionData
     * @param key {String} 
     */
    constructor(key) { 
        
        ExtensionData.initialize(this, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key) { 
        obj['key'] = key;
    }

    /**
     * Constructs a <code>ExtensionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtensionData} obj Optional instance to populate.
     * @return {module:model/ExtensionData} The populated <code>ExtensionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionData();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
ExtensionData.prototype['key'] = undefined;

/**
 * @member {String} value
 */
ExtensionData.prototype['value'] = undefined;






export default ExtensionData;

