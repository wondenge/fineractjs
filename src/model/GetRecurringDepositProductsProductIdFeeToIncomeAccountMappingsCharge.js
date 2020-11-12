

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge model module.
 * @module model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge} The populated <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['penalty'] = undefined;






export default GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge;

