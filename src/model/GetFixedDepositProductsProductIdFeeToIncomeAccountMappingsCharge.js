

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge model module.
 * @module model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge
 * @version 1.0
 */
class GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge</code>.
     * @alias module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge} The populated <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge();

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
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.prototype['penalty'] = undefined;






export default GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge;

