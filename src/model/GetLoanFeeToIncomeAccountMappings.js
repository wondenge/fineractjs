

import ApiClient from '../ApiClient';
import GetLoanCharge from './GetLoanCharge';
import GetLoanIncomeFromFeeAccount from './GetLoanIncomeFromFeeAccount';

/**
 * The GetLoanFeeToIncomeAccountMappings model module.
 * @module model/GetLoanFeeToIncomeAccountMappings
 * @version 1.0
 */
class GetLoanFeeToIncomeAccountMappings {
    /**
     * Constructs a new <code>GetLoanFeeToIncomeAccountMappings</code>.
     * @alias module:model/GetLoanFeeToIncomeAccountMappings
     */
    constructor() { 
        
        GetLoanFeeToIncomeAccountMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanFeeToIncomeAccountMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanFeeToIncomeAccountMappings} obj Optional instance to populate.
     * @return {module:model/GetLoanFeeToIncomeAccountMappings} The populated <code>GetLoanFeeToIncomeAccountMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanFeeToIncomeAccountMappings();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = GetLoanCharge.constructFromObject(data['charge']);
            }
            if (data.hasOwnProperty('incomeAccount')) {
                obj['incomeAccount'] = GetLoanIncomeFromFeeAccount.constructFromObject(data['incomeAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoanCharge} charge
 */
GetLoanFeeToIncomeAccountMappings.prototype['charge'] = undefined;

/**
 * @member {module:model/GetLoanIncomeFromFeeAccount} incomeAccount
 */
GetLoanFeeToIncomeAccountMappings.prototype['incomeAccount'] = undefined;






export default GetLoanFeeToIncomeAccountMappings;

