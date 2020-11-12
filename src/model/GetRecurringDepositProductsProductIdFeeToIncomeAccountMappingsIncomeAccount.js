

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount model module.
 * @module model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount} The populated <code>GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount;

