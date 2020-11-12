  

import ApiClient from '../ApiClient';
import GetLoanProductsAssetAccountOptions from './GetLoanProductsAssetAccountOptions';
import GetLoanProductsExpenseAccountOptions from './GetLoanProductsExpenseAccountOptions';
import GetLoanProductsIncomeAccountOptions from './GetLoanProductsIncomeAccountOptions';
import GetLoanProductsLiabilityAccountOptions from './GetLoanProductsLiabilityAccountOptions';

/**
 * The GetLoanProductsAccountingMappingOptions model module.
 * @module model/GetLoanProductsAccountingMappingOptions
 * @version 1.0
 */
class GetLoanProductsAccountingMappingOptions {
    /**
     * Constructs a new <code>GetLoanProductsAccountingMappingOptions</code>.
     * @alias module:model/GetLoanProductsAccountingMappingOptions
     */
    constructor() { 
        
        GetLoanProductsAccountingMappingOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsAccountingMappingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsAccountingMappingOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsAccountingMappingOptions} The populated <code>GetLoanProductsAccountingMappingOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsAccountingMappingOptions();

            if (data.hasOwnProperty('liabilityAccountOptions')) {
                obj['liabilityAccountOptions'] = ApiClient.convertToType(data['liabilityAccountOptions'], [GetLoanProductsLiabilityAccountOptions]);
            }
            if (data.hasOwnProperty('assetAccountOptions')) {
                obj['assetAccountOptions'] = ApiClient.convertToType(data['assetAccountOptions'], [GetLoanProductsAssetAccountOptions]);
            }
            if (data.hasOwnProperty('expenseAccountOptions')) {
                obj['expenseAccountOptions'] = ApiClient.convertToType(data['expenseAccountOptions'], [GetLoanProductsExpenseAccountOptions]);
            }
            if (data.hasOwnProperty('incomeAccountOptions')) {
                obj['incomeAccountOptions'] = ApiClient.convertToType(data['incomeAccountOptions'], [GetLoanProductsIncomeAccountOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetLoanProductsLiabilityAccountOptions>} liabilityAccountOptions
 */
GetLoanProductsAccountingMappingOptions.prototype['liabilityAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsAssetAccountOptions>} assetAccountOptions
 */
GetLoanProductsAccountingMappingOptions.prototype['assetAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsExpenseAccountOptions>} expenseAccountOptions
 */
GetLoanProductsAccountingMappingOptions.prototype['expenseAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsIncomeAccountOptions>} incomeAccountOptions
 */
GetLoanProductsAccountingMappingOptions.prototype['incomeAccountOptions'] = undefined;






export default GetLoanProductsAccountingMappingOptions;

