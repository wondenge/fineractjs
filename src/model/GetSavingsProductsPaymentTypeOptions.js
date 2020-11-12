

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsPaymentTypeOptions model module.
 * @module model/GetSavingsProductsPaymentTypeOptions
 * @version 1.0
 */
class GetSavingsProductsPaymentTypeOptions {
    /**
     * Constructs a new <code>GetSavingsProductsPaymentTypeOptions</code>.
     * @alias module:model/GetSavingsProductsPaymentTypeOptions
     */
    constructor() { 
        
        GetSavingsProductsPaymentTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsPaymentTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsPaymentTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsPaymentTypeOptions} The populated <code>GetSavingsProductsPaymentTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsPaymentTypeOptions();

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
GetSavingsProductsPaymentTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsPaymentTypeOptions.prototype['name'] = undefined;

/**
 * @member {Number} position
 */
GetSavingsProductsPaymentTypeOptions.prototype['position'] = undefined;






export default GetSavingsProductsPaymentTypeOptions;

