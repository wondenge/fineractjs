

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdIncomeFromPenaltyAccount model module.
 * @module model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdIncomeFromPenaltyAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdIncomeFromPenaltyAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdIncomeFromPenaltyAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdIncomeFromPenaltyAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount} The populated <code>GetFixedDepositProductsProductIdIncomeFromPenaltyAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdIncomeFromPenaltyAccount();

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
GetFixedDepositProductsProductIdIncomeFromPenaltyAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdIncomeFromPenaltyAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdIncomeFromPenaltyAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdIncomeFromPenaltyAccount;

