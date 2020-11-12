

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdSavingsControlAccount model module.
 * @module model/GetFixedDepositProductsProductIdSavingsControlAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdSavingsControlAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdSavingsControlAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdSavingsControlAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdSavingsControlAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdSavingsControlAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdSavingsControlAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdSavingsControlAccount} The populated <code>GetFixedDepositProductsProductIdSavingsControlAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdSavingsControlAccount();

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
GetFixedDepositProductsProductIdSavingsControlAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdSavingsControlAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdSavingsControlAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdSavingsControlAccount;

