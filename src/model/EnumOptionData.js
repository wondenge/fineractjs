

import ApiClient from '../ApiClient';

/**
 * The EnumOptionData model module.
 * @module model/EnumOptionData
 * @version 1.0
 */
class EnumOptionData {
    /**
     * Constructs a new <code>EnumOptionData</code>.
     * @alias module:model/EnumOptionData
     */
    constructor() { 
        
        EnumOptionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnumOptionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnumOptionData} obj Optional instance to populate.
     * @return {module:model/EnumOptionData} The populated <code>EnumOptionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnumOptionData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
EnumOptionData.prototype['id'] = undefined;

/**
 * @member {String} code
 */
EnumOptionData.prototype['code'] = undefined;

/**
 * @member {String} value
 */
EnumOptionData.prototype['value'] = undefined;






export default EnumOptionData;

