

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsInterestTemplateType model module.
 * @module model/GetLoanProductsInterestTemplateType
 * @version 1.0
 */
class GetLoanProductsInterestTemplateType {
    /**
     * Constructs a new <code>GetLoanProductsInterestTemplateType</code>.
     * @alias module:model/GetLoanProductsInterestTemplateType
     */
    constructor() { 
        
        GetLoanProductsInterestTemplateType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsInterestTemplateType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsInterestTemplateType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsInterestTemplateType} The populated <code>GetLoanProductsInterestTemplateType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsInterestTemplateType();

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
GetLoanProductsInterestTemplateType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsInterestTemplateType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsInterestTemplateType.prototype['description'] = undefined;






export default GetLoanProductsInterestTemplateType;

