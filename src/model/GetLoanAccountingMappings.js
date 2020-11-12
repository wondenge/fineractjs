

import ApiClient from '../ApiClient';
import GetLoanFundSourceAccount from './GetLoanFundSourceAccount';
import GetLoanIncomeFromFeeAccount from './GetLoanIncomeFromFeeAccount';
import GetLoanIncomeFromPenaltyAccount from './GetLoanIncomeFromPenaltyAccount';
import GetLoanInterestOnLoanAccount from './GetLoanInterestOnLoanAccount';
import GetLoanOverpaymentLiabilityAccount from './GetLoanOverpaymentLiabilityAccount';
import GetLoanPortfolioAccount from './GetLoanPortfolioAccount';
import GetLoanTransfersInSuspenseAccount from './GetLoanTransfersInSuspenseAccount';
import GetLoanWriteOffAccount from './GetLoanWriteOffAccount';

/**
 * The GetLoanAccountingMappings model module.
 * @module model/GetLoanAccountingMappings
 * @version 1.0
 */
class GetLoanAccountingMappings {
    /**
     * Constructs a new <code>GetLoanAccountingMappings</code>.
     * @alias module:model/GetLoanAccountingMappings
     */
    constructor() { 
        
        GetLoanAccountingMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanAccountingMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanAccountingMappings} obj Optional instance to populate.
     * @return {module:model/GetLoanAccountingMappings} The populated <code>GetLoanAccountingMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanAccountingMappings();

            if (data.hasOwnProperty('fundSourceAccount')) {
                obj['fundSourceAccount'] = GetLoanFundSourceAccount.constructFromObject(data['fundSourceAccount']);
            }
            if (data.hasOwnProperty('loanPortfolioAccount')) {
                obj['loanPortfolioAccount'] = GetLoanPortfolioAccount.constructFromObject(data['loanPortfolioAccount']);
            }
            if (data.hasOwnProperty('transfersInSuspenseAccount')) {
                obj['transfersInSuspenseAccount'] = GetLoanTransfersInSuspenseAccount.constructFromObject(data['transfersInSuspenseAccount']);
            }
            if (data.hasOwnProperty('interestOnLoanAccount')) {
                obj['interestOnLoanAccount'] = GetLoanInterestOnLoanAccount.constructFromObject(data['interestOnLoanAccount']);
            }
            if (data.hasOwnProperty('incomeFromFeeAccount')) {
                obj['incomeFromFeeAccount'] = GetLoanIncomeFromFeeAccount.constructFromObject(data['incomeFromFeeAccount']);
            }
            if (data.hasOwnProperty('incomeFromPenaltyAccount')) {
                obj['incomeFromPenaltyAccount'] = GetLoanIncomeFromPenaltyAccount.constructFromObject(data['incomeFromPenaltyAccount']);
            }
            if (data.hasOwnProperty('writeOffAccount')) {
                obj['writeOffAccount'] = GetLoanWriteOffAccount.constructFromObject(data['writeOffAccount']);
            }
            if (data.hasOwnProperty('overpaymentLiabilityAccount')) {
                obj['overpaymentLiabilityAccount'] = GetLoanOverpaymentLiabilityAccount.constructFromObject(data['overpaymentLiabilityAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoanFundSourceAccount} fundSourceAccount
 */
GetLoanAccountingMappings.prototype['fundSourceAccount'] = undefined;

/**
 * @member {module:model/GetLoanPortfolioAccount} loanPortfolioAccount
 */
GetLoanAccountingMappings.prototype['loanPortfolioAccount'] = undefined;

/**
 * @member {module:model/GetLoanTransfersInSuspenseAccount} transfersInSuspenseAccount
 */
GetLoanAccountingMappings.prototype['transfersInSuspenseAccount'] = undefined;

/**
 * @member {module:model/GetLoanInterestOnLoanAccount} interestOnLoanAccount
 */
GetLoanAccountingMappings.prototype['interestOnLoanAccount'] = undefined;

/**
 * @member {module:model/GetLoanIncomeFromFeeAccount} incomeFromFeeAccount
 */
GetLoanAccountingMappings.prototype['incomeFromFeeAccount'] = undefined;

/**
 * @member {module:model/GetLoanIncomeFromPenaltyAccount} incomeFromPenaltyAccount
 */
GetLoanAccountingMappings.prototype['incomeFromPenaltyAccount'] = undefined;

/**
 * @member {module:model/GetLoanWriteOffAccount} writeOffAccount
 */
GetLoanAccountingMappings.prototype['writeOffAccount'] = undefined;

/**
 * @member {module:model/GetLoanOverpaymentLiabilityAccount} overpaymentLiabilityAccount
 */
GetLoanAccountingMappings.prototype['overpaymentLiabilityAccount'] = undefined;






export default GetLoanAccountingMappings;

