

import ApiClient from '../ApiClient';
import GetSavingsProductsFeeToIncomeAccountMappingsCharge from './GetSavingsProductsFeeToIncomeAccountMappingsCharge';
import GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount from './GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount';

/**
 * The GetSavingsProductsFeeToIncomeAccountMappings model module.
 * @module model/GetSavingsProductsFeeToIncomeAccountMappings
 * @version 1.0
 */
class GetSavingsProductsFeeToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetSavingsProductsFeeToIncomeAccountMappings</code>.
     * @alias module:model/GetSavingsProductsFeeToIncomeAccountMappings
     */
    constructor() { 
        
        GetSavingsProductsFeeToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsFeeToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsFeeToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsFeeToIncomeAccountMappings} The populated <code>GetSavingsProductsFeeToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsFeeToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetSavingsProductsFeeToIncomeAccountMappingsCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsProductsFeeToIncomeAccountMappingsCharge} charge
 */
GetSavingsProductsFeeToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount} incomeAccount
 */
GetSavingsProductsFeeToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetSavingsProductsFeeToIncomeAccountMappings;

