

import ApiClient from '../ApiClient';
import GetSavingsProductsAssetAccountOptions from './GetSavingsProductsAssetAccountOptions';
import GetSavingsProductsExpenseAccountOptions from './GetSavingsProductsExpenseAccountOptions';
import GetSavingsProductsIncomeAccountOptions from './GetSavingsProductsIncomeAccountOptions';
import GetSavingsProductsLiabilityAccountOptions from './GetSavingsProductsLiabilityAccountOptions';

/**
 * The GetSavingsProductsAccountingMappingOptions model module.
 * @module model/GetSavingsProductsAccountingMappingOptions
 * @version 1.0
 */
class GetSavingsProductsAccountingMappingOptions {
    /**
     * Constructs a new <code>GetSavingsProductsAccountingMappingOptions</code>.
     * @alias module:model/GetSavingsProductsAccountingMappingOptions
     */
    constructor() { 
        
        GetSavingsProductsAccountingMappingOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsAccountingMappingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsAccountingMappingOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsAccountingMappingOptions} The populated <code>GetSavingsProductsAccountingMappingOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsAccountingMappingOptions();

            if (data.hasOwnProperty('liabilityAccountOptions')) {
                obj['liabilityAccountOptions'] = ApiClient.convertToType(data['liabilityAccountOptions'], [GetSavingsProductsLiabilityAccountOptions]);
            }
            if (data.hasOwnProperty('assetAccountOptions')) {
                obj['assetAccountOptions'] = ApiClient.convertToType(data['assetAccountOptions'], [GetSavingsProductsAssetAccountOptions]);
            }
            if (data.hasOwnProperty('expenseAccountOptions')) {
                obj['expenseAccountOptions'] = ApiClient.convertToType(data['expenseAccountOptions'], [GetSavingsProductsExpenseAccountOptions]);
            }
            if (data.hasOwnProperty('incomeAccountOptions')) {
                obj['incomeAccountOptions'] = ApiClient.convertToType(data['incomeAccountOptions'], [GetSavingsProductsIncomeAccountOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetSavingsProductsLiabilityAccountOptions>} liabilityAccountOptions
 */
GetSavingsProductsAccountingMappingOptions.prototype['liabilityAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsAssetAccountOptions>} assetAccountOptions
 */
GetSavingsProductsAccountingMappingOptions.prototype['assetAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsExpenseAccountOptions>} expenseAccountOptions
 */
GetSavingsProductsAccountingMappingOptions.prototype['expenseAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsIncomeAccountOptions>} incomeAccountOptions
 */
GetSavingsProductsAccountingMappingOptions.prototype['incomeAccountOptions'] = undefined;






export default GetSavingsProductsAccountingMappingOptions;

