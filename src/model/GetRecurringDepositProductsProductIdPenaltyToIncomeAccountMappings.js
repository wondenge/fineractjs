

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount from './GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount';
import GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge from './GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge';

/**
 * The GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings model module.
 * @module model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings} The populated <code>GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge} charge
 */
GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount} incomeAccount
 */
GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings;

