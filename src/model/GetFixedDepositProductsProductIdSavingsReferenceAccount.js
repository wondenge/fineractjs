

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdSavingsReferenceAccount model module.
 * @module model/GetFixedDepositProductsProductIdSavingsReferenceAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdSavingsReferenceAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdSavingsReferenceAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdSavingsReferenceAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdSavingsReferenceAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdSavingsReferenceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdSavingsReferenceAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdSavingsReferenceAccount} The populated <code>GetFixedDepositProductsProductIdSavingsReferenceAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdSavingsReferenceAccount();

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
GetFixedDepositProductsProductIdSavingsReferenceAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdSavingsReferenceAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdSavingsReferenceAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdSavingsReferenceAccount;

