

import ApiClient from '../ApiClient';
import GetSavingsProductsIncomeFromPenaltyAccount from './GetSavingsProductsIncomeFromPenaltyAccount';
import GetSavingsProductsPenaltyToIncomeAccountMappingsCharge from './GetSavingsProductsPenaltyToIncomeAccountMappingsCharge';

/**
 * The GetSavingsProductsPenaltyToIncomeAccountMappings model module.
 * @module model/GetSavingsProductsPenaltyToIncomeAccountMappings
 * @version 1.0
 */
class GetSavingsProductsPenaltyToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetSavingsProductsPenaltyToIncomeAccountMappings</code>.
     * @alias module:model/GetSavingsProductsPenaltyToIncomeAccountMappings
     */
    constructor() { 
        
        GetSavingsProductsPenaltyToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsPenaltyToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsPenaltyToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsPenaltyToIncomeAccountMappings} The populated <code>GetSavingsProductsPenaltyToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsPenaltyToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetSavingsProductsIncomeFromPenaltyAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge} charge
 */
GetSavingsProductsPenaltyToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetSavingsProductsIncomeFromPenaltyAccount} incomeAccount
 */
GetSavingsProductsPenaltyToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetSavingsProductsPenaltyToIncomeAccountMappings;

