

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsValueConditionTypeOptions model module.
 * @module model/GetLoanProductsValueConditionTypeOptions
 * @version 1.0
 */
class GetLoanProductsValueConditionTypeOptions {
    /**
     * Constructs a new <code>GetLoanProductsValueConditionTypeOptions</code>.
     * @alias module:model/GetLoanProductsValueConditionTypeOptions
     */
    constructor() { 
        
        GetLoanProductsValueConditionTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsValueConditionTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsValueConditionTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsValueConditionTypeOptions} The populated <code>GetLoanProductsValueConditionTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsValueConditionTypeOptions();

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
GetLoanProductsValueConditionTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsValueConditionTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsValueConditionTypeOptions.prototype['description'] = undefined;






export default GetLoanProductsValueConditionTypeOptions;

