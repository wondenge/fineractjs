

import ApiClient from '../ApiClient';
import GetSavingsProductsIncomeFromFeeAccount from './GetSavingsProductsIncomeFromFeeAccount';
import GetSavingsProductsIncomeFromPenaltyAccount from './GetSavingsProductsIncomeFromPenaltyAccount';
import GetSavingsProductsInterestOnSavingsAccount from './GetSavingsProductsInterestOnSavingsAccount';
import GetSavingsProductsSavingsControlAccount from './GetSavingsProductsSavingsControlAccount';
import GetSavingsProductsSavingsReferenceAccount from './GetSavingsProductsSavingsReferenceAccount';
import GetSavingsProductsTransfersInSuspenseAccount from './GetSavingsProductsTransfersInSuspenseAccount';

/**
 * The GetSavingsProductsAccountingMappings model module.
 * @module model/GetSavingsProductsAccountingMappings
 * @version 1.0
 */
class GetSavingsProductsAccountingMappings {
    /**
     * Constructs a new <code>GetSavingsProductsAccountingMappings</code>.
     * @alias module:model/GetSavingsProductsAccountingMappings
     */
    constructor() { 
        
        GetSavingsProductsAccountingMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsAccountingMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsAccountingMappings} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsAccountingMappings} The populated <code>GetSavingsProductsAccountingMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsAccountingMappings();

            if (data.hasOwnProperty('savingsReferenceAccount')) {
                obj['savingsReferenceAccount'] = GetSavingsProductsSavingsReferenceAccount.constructFromObject(data['savingsReferenceAccount']);
            }
            if (data.hasOwnProperty('incomeFromFeeAccount')) {
                obj['incomeFromFeeAccount'] = GetSavingsProductsIncomeFromFeeAccount.constructFromObject(data['incomeFromFeeAccount']);
            }
            if (data.hasOwnProperty('incomeFromPenaltyAccount')) {
                obj['incomeFromPenaltyAccount'] = GetSavingsProductsIncomeFromPenaltyAccount.constructFromObject(data['incomeFromPenaltyAccount']);
            }
            if (data.hasOwnProperty('interestOnSavingsAccount')) {
                obj['interestOnSavingsAccount'] = GetSavingsProductsInterestOnSavingsAccount.constructFromObject(data['interestOnSavingsAccount']);
            }
            if (data.hasOwnProperty('savingsControlAccount')) {
                obj['savingsControlAccount'] = GetSavingsProductsSavingsControlAccount.constructFromObject(data['savingsControlAccount']);
            }
            if (data.hasOwnProperty('transfersInSuspenseAccount')) {
                obj['transfersInSuspenseAccount'] = GetSavingsProductsTransfersInSuspenseAccount.constructFromObject(data['transfersInSuspenseAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsProductsSavingsReferenceAccount} savingsReferenceAccount
 */
GetSavingsProductsAccountingMappings.prototype['savingsReferenceAccount'] = undefined;

/**
 * @member {module:model/GetSavingsProductsIncomeFromFeeAccount} incomeFromFeeAccount
 */
GetSavingsProductsAccountingMappings.prototype['incomeFromFeeAccount'] = undefined;

/**
 * @member {module:model/GetSavingsProductsIncomeFromPenaltyAccount} incomeFromPenaltyAccount
 */
GetSavingsProductsAccountingMappings.prototype['incomeFromPenaltyAccount'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestOnSavingsAccount} interestOnSavingsAccount
 */
GetSavingsProductsAccountingMappings.prototype['interestOnSavingsAccount'] = undefined;

/**
 * @member {module:model/GetSavingsProductsSavingsControlAccount} savingsControlAccount
 */
GetSavingsProductsAccountingMappings.prototype['savingsControlAccount'] = undefined;

/**
 * @member {module:model/GetSavingsProductsTransfersInSuspenseAccount} transfersInSuspenseAccount
 */
GetSavingsProductsAccountingMappings.prototype['transfersInSuspenseAccount'] = undefined;






export default GetSavingsProductsAccountingMappings;

