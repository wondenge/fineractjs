

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdSavingsReferenceAccount model module.
 * @module model/GetRecurringDepositProductsProductIdSavingsReferenceAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdSavingsReferenceAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdSavingsReferenceAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdSavingsReferenceAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdSavingsReferenceAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdSavingsReferenceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdSavingsReferenceAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdSavingsReferenceAccount} The populated <code>GetRecurringDepositProductsProductIdSavingsReferenceAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdSavingsReferenceAccount();

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
GetRecurringDepositProductsProductIdSavingsReferenceAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdSavingsReferenceAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdSavingsReferenceAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdSavingsReferenceAccount;

