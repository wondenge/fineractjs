

import ApiClient from '../ApiClient';
import GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge from './GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge';
import GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount from './GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount';

/**
 * The GetFixedDepositProductsProductIdFeeToIncomeAccountMappings model module.
 * @module model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings
 * @version 1.0
 */
class GetFixedDepositProductsProductIdFeeToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappings</code>.
     * @alias module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdFeeToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings} The populated <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdFeeToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge} charge
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount} incomeAccount
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetFixedDepositProductsProductIdFeeToIncomeAccountMappings;

