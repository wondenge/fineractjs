

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsIncomeFromFeeAccount model module.
 * @module model/GetSavingsProductsIncomeFromFeeAccount
 * @version 1.0
 */
class GetSavingsProductsIncomeFromFeeAccount {
    /**
     * Constructs a new <code>GetSavingsProductsIncomeFromFeeAccount</code>.
     * @alias module:model/GetSavingsProductsIncomeFromFeeAccount
     */
    constructor() { 
        
        GetSavingsProductsIncomeFromFeeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsIncomeFromFeeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsIncomeFromFeeAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsIncomeFromFeeAccount} The populated <code>GetSavingsProductsIncomeFromFeeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsIncomeFromFeeAccount();

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
GetSavingsProductsIncomeFromFeeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsIncomeFromFeeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsIncomeFromFeeAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsIncomeFromFeeAccount;

