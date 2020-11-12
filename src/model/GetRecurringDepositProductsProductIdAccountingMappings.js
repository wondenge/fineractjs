

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsProductIdIncomeFromFeeAccount from './GetRecurringDepositProductsProductIdIncomeFromFeeAccount';
import GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount from './GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount';
import GetRecurringDepositProductsProductIdInterestOnSavingsAccount from './GetRecurringDepositProductsProductIdInterestOnSavingsAccount';
import GetRecurringDepositProductsProductIdSavingsControlAccount from './GetRecurringDepositProductsProductIdSavingsControlAccount';
import GetRecurringDepositProductsProductIdSavingsReferenceAccount from './GetRecurringDepositProductsProductIdSavingsReferenceAccount';
import GetRecurringDepositProductsProductIdTransfersInSuspenseAccount from './GetRecurringDepositProductsProductIdTransfersInSuspenseAccount';

/**
 * The GetRecurringDepositProductsProductIdAccountingMappings model module.
 * @module model/GetRecurringDepositProductsProductIdAccountingMappings
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdAccountingMappings {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdAccountingMappings</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdAccountingMappings
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdAccountingMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdAccountingMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdAccountingMappings} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdAccountingMappings} The populated <code>GetRecurringDepositProductsProductIdAccountingMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdAccountingMappings();

            if (data.hasOwnProperty('savingsReferenceAccount')) {
                obj['savingsReferenceAccount'] = GetRecurringDepositProductsProductIdSavingsReferenceAccount.constructFromObject(data['savingsReferenceAccount']);
            }
            if (data.hasOwnProperty('incomeFromFeeAccount')) {
                obj['incomeFromFeeAccount'] = GetRecurringDepositProductsProductIdIncomeFromFeeAccount.constructFromObject(data['incomeFromFeeAccount']);
            }
            if (data.hasOwnProperty('incomeFromPenaltyAccount')) {
                obj['incomeFromPenaltyAccount'] = GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount.constructFromObject(data['incomeFromPenaltyAccount']);
            }
            if (data.hasOwnProperty('interestOnSavingsAccount')) {
                obj['interestOnSavingsAccount'] = GetRecurringDepositProductsProductIdInterestOnSavingsAccount.constructFromObject(data['interestOnSavingsAccount']);
            }
            if (data.hasOwnProperty('savingsControlAccount')) {
                obj['savingsControlAccount'] = GetRecurringDepositProductsProductIdSavingsControlAccount.constructFromObject(data['savingsControlAccount']);
            }
            if (data.hasOwnProperty('transfersInSuspenseAccount')) {
                obj['transfersInSuspenseAccount'] = GetRecurringDepositProductsProductIdTransfersInSuspenseAccount.constructFromObject(data['transfersInSuspenseAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRecurringDepositProductsProductIdSavingsReferenceAccount} savingsReferenceAccount
 */
GetRecurringDepositProductsProductIdAccountingMappings.prototype['savingsReferenceAccount'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount} incomeFromFeeAccount
 */
GetRecurringDepositProductsProductIdAccountingMappings.prototype['incomeFromFeeAccount'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount} incomeFromPenaltyAccount
 */
GetRecurringDepositProductsProductIdAccountingMappings.prototype['incomeFromPenaltyAccount'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount} interestOnSavingsAccount
 */
GetRecurringDepositProductsProductIdAccountingMappings.prototype['interestOnSavingsAccount'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdSavingsControlAccount} savingsControlAccount
 */
GetRecurringDepositProductsProductIdAccountingMappings.prototype['savingsControlAccount'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount} transfersInSuspenseAccount
 */
GetRecurringDepositProductsProductIdAccountingMappings.prototype['transfersInSuspenseAccount'] = undefined;






export default GetRecurringDepositProductsProductIdAccountingMappings;

