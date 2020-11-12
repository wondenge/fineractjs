

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsInterestRateTemplateFrequencyType model module.
 * @module model/GetLoanProductsInterestRateTemplateFrequencyType
 * @version 1.0
 */
class GetLoanProductsInterestRateTemplateFrequencyType {
    /**
     * Constructs a new <code>GetLoanProductsInterestRateTemplateFrequencyType</code>.
     * @alias module:model/GetLoanProductsInterestRateTemplateFrequencyType
     */
    constructor() { 
        
        GetLoanProductsInterestRateTemplateFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsInterestRateTemplateFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsInterestRateTemplateFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsInterestRateTemplateFrequencyType} The populated <code>GetLoanProductsInterestRateTemplateFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsInterestRateTemplateFrequencyType();

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
GetLoanProductsInterestRateTemplateFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsInterestRateTemplateFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsInterestRateTemplateFrequencyType.prototype['description'] = undefined;






export default GetLoanProductsInterestRateTemplateFrequencyType;

