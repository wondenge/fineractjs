

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetAccountNumberFormatsResponseTemplate model module.
 * @module model/GetAccountNumberFormatsResponseTemplate
 * @version 1.0
 */
class GetAccountNumberFormatsResponseTemplate {
    /**
     * Constructs a new <code>GetAccountNumberFormatsResponseTemplate</code>.
     * GetAccountNumberFormatsResponseTemplate
     * @alias module:model/GetAccountNumberFormatsResponseTemplate
     */
    constructor() { 
        
        GetAccountNumberFormatsResponseTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountNumberFormatsResponseTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountNumberFormatsResponseTemplate} obj Optional instance to populate.
     * @return {module:model/GetAccountNumberFormatsResponseTemplate} The populated <code>GetAccountNumberFormatsResponseTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountNumberFormatsResponseTemplate();

            if (data.hasOwnProperty('accountTypeOptions')) {
                obj['accountTypeOptions'] = ApiClient.convertToType(data['accountTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('prefixTypeOptions')) {
                obj['prefixTypeOptions'] = ApiClient.convertToType(data['prefixTypeOptions'], {'String': [EnumOptionData]});
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnumOptionData>} accountTypeOptions
 */
GetAccountNumberFormatsResponseTemplate.prototype['accountTypeOptions'] = undefined;

/**
 * @member {Object.<String, Array.<module:model/EnumOptionData>>} prefixTypeOptions
 */
GetAccountNumberFormatsResponseTemplate.prototype['prefixTypeOptions'] = undefined;






export default GetAccountNumberFormatsResponseTemplate;

