

import ApiClient from '../ApiClient';
import GetIncomeFromFeeAccountId from './GetIncomeFromFeeAccountId';
import GetShareEquityId from './GetShareEquityId';
import GetShareReferenceId from './GetShareReferenceId';
import GetShareSuspenseId from './GetShareSuspenseId';

/**
 * The GetProductsAccountingMappings model module.
 * @module model/GetProductsAccountingMappings
 * @version 1.0
 */
class GetProductsAccountingMappings {
    /**
     * Constructs a new <code>GetProductsAccountingMappings</code>.
     * @alias module:model/GetProductsAccountingMappings
     */
    constructor() { 
        
        GetProductsAccountingMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsAccountingMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsAccountingMappings} obj Optional instance to populate.
     * @return {module:model/GetProductsAccountingMappings} The populated <code>GetProductsAccountingMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsAccountingMappings();

            if (data.hasOwnProperty('shareReferenceId')) {
                obj['shareReferenceId'] = GetShareReferenceId.constructFromObject(data['shareReferenceId']);
            }
            if (data.hasOwnProperty('incomeFromFeeAccountId')) {
                obj['incomeFromFeeAccountId'] = GetIncomeFromFeeAccountId.constructFromObject(data['incomeFromFeeAccountId']);
            }
            if (data.hasOwnProperty('shareEquityId')) {
                obj['shareEquityId'] = GetShareEquityId.constructFromObject(data['shareEquityId']);
            }
            if (data.hasOwnProperty('shareSuspenseId')) {
                obj['shareSuspenseId'] = GetShareSuspenseId.constructFromObject(data['shareSuspenseId']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetShareReferenceId} shareReferenceId
 */
GetProductsAccountingMappings.prototype['shareReferenceId'] = undefined;

/**
 * @member {module:model/GetIncomeFromFeeAccountId} incomeFromFeeAccountId
 */
GetProductsAccountingMappings.prototype['incomeFromFeeAccountId'] = undefined;

/**
 * @member {module:model/GetShareEquityId} shareEquityId
 */
GetProductsAccountingMappings.prototype['shareEquityId'] = undefined;

/**
 * @member {module:model/GetShareSuspenseId} shareSuspenseId
 */
GetProductsAccountingMappings.prototype['shareSuspenseId'] = undefined;






export default GetProductsAccountingMappings;

