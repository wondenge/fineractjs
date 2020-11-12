

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdInterestOnSavingsAccount model module.
 * @module model/GetFixedDepositProductsProductIdInterestOnSavingsAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdInterestOnSavingsAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdInterestOnSavingsAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdInterestOnSavingsAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdInterestOnSavingsAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdInterestOnSavingsAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdInterestOnSavingsAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdInterestOnSavingsAccount} The populated <code>GetFixedDepositProductsProductIdInterestOnSavingsAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdInterestOnSavingsAccount();

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
GetFixedDepositProductsProductIdInterestOnSavingsAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdInterestOnSavingsAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdInterestOnSavingsAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdInterestOnSavingsAccount;

