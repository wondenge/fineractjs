  

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsRepaymentFrequencyType model module.
 * @module model/GetLoanProductsRepaymentFrequencyType
 * @version 1.0
 */
class GetLoanProductsRepaymentFrequencyType {
    /**
     * Constructs a new <code>GetLoanProductsRepaymentFrequencyType</code>.
     * @alias module:model/GetLoanProductsRepaymentFrequencyType
     */
    constructor() { 
        
        GetLoanProductsRepaymentFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsRepaymentFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsRepaymentFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsRepaymentFrequencyType} The populated <code>GetLoanProductsRepaymentFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsRepaymentFrequencyType();

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
GetLoanProductsRepaymentFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsRepaymentFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsRepaymentFrequencyType.prototype['description'] = undefined;






export default GetLoanProductsRepaymentFrequencyType;

