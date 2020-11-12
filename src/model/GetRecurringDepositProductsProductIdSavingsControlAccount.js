

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdSavingsControlAccount model module.
 * @module model/GetRecurringDepositProductsProductIdSavingsControlAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdSavingsControlAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdSavingsControlAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdSavingsControlAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdSavingsControlAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdSavingsControlAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdSavingsControlAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdSavingsControlAccount} The populated <code>GetRecurringDepositProductsProductIdSavingsControlAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdSavingsControlAccount();

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
GetRecurringDepositProductsProductIdSavingsControlAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdSavingsControlAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdSavingsControlAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdSavingsControlAccount;

