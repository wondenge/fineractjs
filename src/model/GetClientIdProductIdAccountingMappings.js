

import ApiClient from '../ApiClient';
import GetShareAccountsIncomeFromFeeAccountId from './GetShareAccountsIncomeFromFeeAccountId';
import GetShareAccountsShareEquityId from './GetShareAccountsShareEquityId';
import GetShareAccountsShareReferenceId from './GetShareAccountsShareReferenceId';
import GetShareAccountsShareSuspenseId from './GetShareAccountsShareSuspenseId';

/**
 * The GetClientIdProductIdAccountingMappings model module.
 * @module model/GetClientIdProductIdAccountingMappings
 * @version 1.0
 */
class GetClientIdProductIdAccountingMappings {
    /**
     * Constructs a new <code>GetClientIdProductIdAccountingMappings</code>.
     * @alias module:model/GetClientIdProductIdAccountingMappings
     */
    constructor() { 
        
        GetClientIdProductIdAccountingMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientIdProductIdAccountingMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientIdProductIdAccountingMappings} obj Optional instance to populate.
     * @return {module:model/GetClientIdProductIdAccountingMappings} The populated <code>GetClientIdProductIdAccountingMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientIdProductIdAccountingMappings();

            if (data.hasOwnProperty('shareReferenceId')) {
                obj['shareReferenceId'] = GetShareAccountsShareReferenceId.constructFromObject(data['shareReferenceId']);
            }
            if (data.hasOwnProperty('incomeFromFeeAccountId')) {
                obj['incomeFromFeeAccountId'] = GetShareAccountsIncomeFromFeeAccountId.constructFromObject(data['incomeFromFeeAccountId']);
            }
            if (data.hasOwnProperty('ShareEquityId')) {
                obj['ShareEquityId'] = GetShareAccountsShareEquityId.constructFromObject(data['ShareEquityId']);
            }
            if (data.hasOwnProperty('shareSuspenseId')) {
                obj['shareSuspenseId'] = GetShareAccountsShareSuspenseId.constructFromObject(data['shareSuspenseId']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetShareAccountsShareReferenceId} shareReferenceId
 */
GetClientIdProductIdAccountingMappings.prototype['shareReferenceId'] = undefined;

/**
 * @member {module:model/GetShareAccountsIncomeFromFeeAccountId} incomeFromFeeAccountId
 */
GetClientIdProductIdAccountingMappings.prototype['incomeFromFeeAccountId'] = undefined;

/**
 * @member {module:model/GetShareAccountsShareEquityId} ShareEquityId
 */
GetClientIdProductIdAccountingMappings.prototype['ShareEquityId'] = undefined;

/**
 * @member {module:model/GetShareAccountsShareSuspenseId} shareSuspenseId
 */
GetClientIdProductIdAccountingMappings.prototype['shareSuspenseId'] = undefined;






export default GetClientIdProductIdAccountingMappings;

