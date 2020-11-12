

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount model module.
 * @module model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount} The populated <code>GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount();

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
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount;

