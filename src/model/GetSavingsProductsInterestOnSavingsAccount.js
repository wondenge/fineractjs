

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsInterestOnSavingsAccount model module.
 * @module model/GetSavingsProductsInterestOnSavingsAccount
 * @version 1.0
 */
class GetSavingsProductsInterestOnSavingsAccount {
    /**
     * Constructs a new <code>GetSavingsProductsInterestOnSavingsAccount</code>.
     * @alias module:model/GetSavingsProductsInterestOnSavingsAccount
     */
    constructor() { 
        
        GetSavingsProductsInterestOnSavingsAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsInterestOnSavingsAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsInterestOnSavingsAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsInterestOnSavingsAccount} The populated <code>GetSavingsProductsInterestOnSavingsAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsInterestOnSavingsAccount();

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
GetSavingsProductsInterestOnSavingsAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsInterestOnSavingsAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsInterestOnSavingsAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsInterestOnSavingsAccount;

