

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount model module.
 * @module model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount} The populated <code>GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount();

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
GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount;

