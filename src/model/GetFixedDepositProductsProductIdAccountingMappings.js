

import ApiClient from '../ApiClient';
import GetFixedDepositProductsProductIdIncomeFromFeeAccount from './GetFixedDepositProductsProductIdIncomeFromFeeAccount';
import GetFixedDepositProductsProductIdIncomeFromPenaltyAccount from './GetFixedDepositProductsProductIdIncomeFromPenaltyAccount';
import GetFixedDepositProductsProductIdInterestOnSavingsAccount from './GetFixedDepositProductsProductIdInterestOnSavingsAccount';
import GetFixedDepositProductsProductIdSavingsControlAccount from './GetFixedDepositProductsProductIdSavingsControlAccount';
import GetFixedDepositProductsProductIdSavingsReferenceAccount from './GetFixedDepositProductsProductIdSavingsReferenceAccount';
import GetFixedDepositProductsProductIdTransfersInSuspenseAccount from './GetFixedDepositProductsProductIdTransfersInSuspenseAccount';

/**
 * The GetFixedDepositProductsProductIdAccountingMappings model module.
 * @module model/GetFixedDepositProductsProductIdAccountingMappings
 * @version 1.0
 */
class GetFixedDepositProductsProductIdAccountingMappings {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdAccountingMappings</code>.
     * @alias module:model/GetFixedDepositProductsProductIdAccountingMappings
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdAccountingMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdAccountingMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdAccountingMappings} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdAccountingMappings} The populated <code>GetFixedDepositProductsProductIdAccountingMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdAccountingMappings();

            if (data.hasOwnProperty('savingsReferenceAccount')) {
                obj['savingsReferenceAccount'] = GetFixedDepositProductsProductIdSavingsReferenceAccount.constructFromObject(data['savingsReferenceAccount']);
            }
            if (data.hasOwnProperty('incomeFromFeeAccount')) {
                obj['incomeFromFeeAccount'] = GetFixedDepositProductsProductIdIncomeFromFeeAccount.constructFromObject(data['incomeFromFeeAccount']);
            }
            if (data.hasOwnProperty('incomeFromPenaltyAccount')) {
                obj['incomeFromPenaltyAccount'] = GetFixedDepositProductsProductIdIncomeFromPenaltyAccount.constructFromObject(data['incomeFromPenaltyAccount']);
            }
            if (data.hasOwnProperty('interestOnSavingsAccount')) {
                obj['interestOnSavingsAccount'] = GetFixedDepositProductsProductIdInterestOnSavingsAccount.constructFromObject(data['interestOnSavingsAccount']);
            }
            if (data.hasOwnProperty('savingsControlAccount')) {
                obj['savingsControlAccount'] = GetFixedDepositProductsProductIdSavingsControlAccount.constructFromObject(data['savingsControlAccount']);
            }
            if (data.hasOwnProperty('transfersInSuspenseAccount')) {
                obj['transfersInSuspenseAccount'] = GetFixedDepositProductsProductIdTransfersInSuspenseAccount.constructFromObject(data['transfersInSuspenseAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFixedDepositProductsProductIdSavingsReferenceAccount} savingsReferenceAccount
 */
GetFixedDepositProductsProductIdAccountingMappings.prototype['savingsReferenceAccount'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdIncomeFromFeeAccount} incomeFromFeeAccount
 */
GetFixedDepositProductsProductIdAccountingMappings.prototype['incomeFromFeeAccount'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount} incomeFromPenaltyAccount
 */
GetFixedDepositProductsProductIdAccountingMappings.prototype['incomeFromPenaltyAccount'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdInterestOnSavingsAccount} interestOnSavingsAccount
 */
GetFixedDepositProductsProductIdAccountingMappings.prototype['interestOnSavingsAccount'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdSavingsControlAccount} savingsControlAccount
 */
GetFixedDepositProductsProductIdAccountingMappings.prototype['savingsControlAccount'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount} transfersInSuspenseAccount
 */
GetFixedDepositProductsProductIdAccountingMappings.prototype['transfersInSuspenseAccount'] = undefined;






export default GetFixedDepositProductsProductIdAccountingMappings;

