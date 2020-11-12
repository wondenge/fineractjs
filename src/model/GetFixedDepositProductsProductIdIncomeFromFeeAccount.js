

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdIncomeFromFeeAccount model module.
 * @module model/GetFixedDepositProductsProductIdIncomeFromFeeAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdIncomeFromFeeAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdIncomeFromFeeAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdIncomeFromFeeAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdIncomeFromFeeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdIncomeFromFeeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdIncomeFromFeeAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdIncomeFromFeeAccount} The populated <code>GetFixedDepositProductsProductIdIncomeFromFeeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdIncomeFromFeeAccount();

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
GetFixedDepositProductsProductIdIncomeFromFeeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdIncomeFromFeeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdIncomeFromFeeAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdIncomeFromFeeAccount;

