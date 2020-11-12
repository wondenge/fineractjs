

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsPaymentTypeOptions model module.
 * @module model/GetLoanProductsPaymentTypeOptions
 * @version 1.0
 */
class GetLoanProductsPaymentTypeOptions {
    /**
     * Constructs a new <code>GetLoanProductsPaymentTypeOptions</code>.
     * @alias module:model/GetLoanProductsPaymentTypeOptions
     */
    constructor() { 
        
        GetLoanProductsPaymentTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsPaymentTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsPaymentTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsPaymentTypeOptions} The populated <code>GetLoanProductsPaymentTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsPaymentTypeOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsPaymentTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsPaymentTypeOptions.prototype['name'] = undefined;

/**
 * @member {Number} position
 */
GetLoanProductsPaymentTypeOptions.prototype['position'] = undefined;






export default GetLoanProductsPaymentTypeOptions;

