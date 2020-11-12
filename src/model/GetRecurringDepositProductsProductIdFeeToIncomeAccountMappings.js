

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge from './GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge';
import GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount from './GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount';

/**
 * The GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings model module.
 * @module model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings} The populated <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge} charge
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount} incomeAccount
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings;

