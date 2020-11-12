

import ApiClient from '../ApiClient';
import GetFixedDepositProductsProductIdIncomeFromPenaltyAccount from './GetFixedDepositProductsProductIdIncomeFromPenaltyAccount';
import GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge from './GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge';

/**
 * The GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings model module.
 * @module model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings
 * @version 1.0
 */
class GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings</code>.
     * @alias module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings} The populated <code>GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetFixedDepositProductsProductIdIncomeFromPenaltyAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge} charge
 */
GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount} incomeAccount
 */
GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings;

