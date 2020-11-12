

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsWithdrawalFeeTypeOptions model module.
 * @module model/GetSavingsProductsWithdrawalFeeTypeOptions
 * @version 1.0
 */
class GetSavingsProductsWithdrawalFeeTypeOptions {
    /**
     * Constructs a new <code>GetSavingsProductsWithdrawalFeeTypeOptions</code>.
     * @alias module:model/GetSavingsProductsWithdrawalFeeTypeOptions
     */
    constructor() { 
        
        GetSavingsProductsWithdrawalFeeTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsWithdrawalFeeTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsWithdrawalFeeTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsWithdrawalFeeTypeOptions} The populated <code>GetSavingsProductsWithdrawalFeeTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsWithdrawalFeeTypeOptions();

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
GetSavingsProductsWithdrawalFeeTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsWithdrawalFeeTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsWithdrawalFeeTypeOptions.prototype['description'] = undefined;






export default GetSavingsProductsWithdrawalFeeTypeOptions;

