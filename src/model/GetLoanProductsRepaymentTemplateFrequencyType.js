  

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsRepaymentTemplateFrequencyType model module.
 * @module model/GetLoanProductsRepaymentTemplateFrequencyType
 * @version 1.0
 */
class GetLoanProductsRepaymentTemplateFrequencyType {
    /**
     * Constructs a new <code>GetLoanProductsRepaymentTemplateFrequencyType</code>.
     * @alias module:model/GetLoanProductsRepaymentTemplateFrequencyType
     */
    constructor() { 
        
        GetLoanProductsRepaymentTemplateFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsRepaymentTemplateFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsRepaymentTemplateFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsRepaymentTemplateFrequencyType} The populated <code>GetLoanProductsRepaymentTemplateFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsRepaymentTemplateFrequencyType();

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
GetLoanProductsRepaymentTemplateFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsRepaymentTemplateFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsRepaymentTemplateFrequencyType.prototype['description'] = undefined;






export default GetLoanProductsRepaymentTemplateFrequencyType;

