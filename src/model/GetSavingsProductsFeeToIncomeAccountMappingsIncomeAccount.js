

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount model module.
 * @module model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount
 * @version 1.0
 */
class GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount {
    /**
     * Constructs a new <code>GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount</code>.
     * @alias module:model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount
     */
    constructor() { 
        
        GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount} The populated <code>GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount();

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
GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount;

