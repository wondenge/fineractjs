

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdInterestOnSavingsAccount model module.
 * @module model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdInterestOnSavingsAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdInterestOnSavingsAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdInterestOnSavingsAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdInterestOnSavingsAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount} The populated <code>GetRecurringDepositProductsProductIdInterestOnSavingsAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdInterestOnSavingsAccount();

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
GetRecurringDepositProductsProductIdInterestOnSavingsAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdInterestOnSavingsAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdInterestOnSavingsAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdInterestOnSavingsAccount;

