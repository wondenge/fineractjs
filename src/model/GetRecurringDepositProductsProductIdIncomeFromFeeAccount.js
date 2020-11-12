

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdIncomeFromFeeAccount model module.
 * @module model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdIncomeFromFeeAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdIncomeFromFeeAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdIncomeFromFeeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdIncomeFromFeeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount} The populated <code>GetRecurringDepositProductsProductIdIncomeFromFeeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdIncomeFromFeeAccount();

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
GetRecurringDepositProductsProductIdIncomeFromFeeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdIncomeFromFeeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdIncomeFromFeeAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdIncomeFromFeeAccount;

