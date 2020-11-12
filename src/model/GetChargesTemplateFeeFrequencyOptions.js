

import ApiClient from '../ApiClient';

/**
 * The GetChargesTemplateFeeFrequencyOptions model module.
 * @module model/GetChargesTemplateFeeFrequencyOptions
 * @version 1.0
 */
class GetChargesTemplateFeeFrequencyOptions {
    /**
     * Constructs a new <code>GetChargesTemplateFeeFrequencyOptions</code>.
     * @alias module:model/GetChargesTemplateFeeFrequencyOptions
     */
    constructor() { 
        
        GetChargesTemplateFeeFrequencyOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesTemplateFeeFrequencyOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesTemplateFeeFrequencyOptions} obj Optional instance to populate.
     * @return {module:model/GetChargesTemplateFeeFrequencyOptions} The populated <code>GetChargesTemplateFeeFrequencyOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesTemplateFeeFrequencyOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetChargesTemplateFeeFrequencyOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesTemplateFeeFrequencyOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesTemplateFeeFrequencyOptions.prototype['description'] = undefined;






export default GetChargesTemplateFeeFrequencyOptions;

