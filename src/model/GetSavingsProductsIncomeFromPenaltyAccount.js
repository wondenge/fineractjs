

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsIncomeFromPenaltyAccount model module.
 * @module model/GetSavingsProductsIncomeFromPenaltyAccount
 * @version 1.0
 */
class GetSavingsProductsIncomeFromPenaltyAccount {
    /**
     * Constructs a new <code>GetSavingsProductsIncomeFromPenaltyAccount</code>.
     * @alias module:model/GetSavingsProductsIncomeFromPenaltyAccount
     */
    constructor() { 
        
        GetSavingsProductsIncomeFromPenaltyAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsIncomeFromPenaltyAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsIncomeFromPenaltyAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsIncomeFromPenaltyAccount} The populated <code>GetSavingsProductsIncomeFromPenaltyAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsIncomeFromPenaltyAccount();

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
GetSavingsProductsIncomeFromPenaltyAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsIncomeFromPenaltyAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsIncomeFromPenaltyAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsIncomeFromPenaltyAccount;

