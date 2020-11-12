

import ApiClient from '../ApiClient';
import GetProductsAssetAccountOptions from './GetProductsAssetAccountOptions';
import GetProductsEquityAccountOptions from './GetProductsEquityAccountOptions';
import GetProductsIncomeAccountOptions from './GetProductsIncomeAccountOptions';
import GetProductsLiabilityAccountOptions from './GetProductsLiabilityAccountOptions';

/**
 * The GetProductsAccountingMappingOptions model module.
 * @module model/GetProductsAccountingMappingOptions
 * @version 1.0
 */
class GetProductsAccountingMappingOptions {
    /**
     * Constructs a new <code>GetProductsAccountingMappingOptions</code>.
     * @alias module:model/GetProductsAccountingMappingOptions
     */
    constructor() { 
        
        GetProductsAccountingMappingOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsAccountingMappingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsAccountingMappingOptions} obj Optional instance to populate.
     * @return {module:model/GetProductsAccountingMappingOptions} The populated <code>GetProductsAccountingMappingOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsAccountingMappingOptions();

            if (data.hasOwnProperty('liabilityAccountOptions')) {
                obj['liabilityAccountOptions'] = ApiClient.convertToType(data['liabilityAccountOptions'], [GetProductsLiabilityAccountOptions]);
            }
            if (data.hasOwnProperty('assetAccountOptions')) {
                obj['assetAccountOptions'] = ApiClient.convertToType(data['assetAccountOptions'], [GetProductsAssetAccountOptions]);
            }
            if (data.hasOwnProperty('incomeAccountOptions')) {
                obj['incomeAccountOptions'] = ApiClient.convertToType(data['incomeAccountOptions'], [GetProductsIncomeAccountOptions]);
            }
            if (data.hasOwnProperty('equityAccountOptions')) {
                obj['equityAccountOptions'] = ApiClient.convertToType(data['equityAccountOptions'], [GetProductsEquityAccountOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetProductsLiabilityAccountOptions>} liabilityAccountOptions
 */
GetProductsAccountingMappingOptions.prototype['liabilityAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetProductsAssetAccountOptions>} assetAccountOptions
 */
GetProductsAccountingMappingOptions.prototype['assetAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetProductsIncomeAccountOptions>} incomeAccountOptions
 */
GetProductsAccountingMappingOptions.prototype['incomeAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetProductsEquityAccountOptions>} equityAccountOptions
 */
GetProductsAccountingMappingOptions.prototype['equityAccountOptions'] = undefined;






export default GetProductsAccountingMappingOptions;

