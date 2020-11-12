

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsSavingsControlAccount model module.
 * @module model/GetSavingsProductsSavingsControlAccount
 * @version 1.0
 */
class GetSavingsProductsSavingsControlAccount {
    /**
     * Constructs a new <code>GetSavingsProductsSavingsControlAccount</code>.
     * @alias module:model/GetSavingsProductsSavingsControlAccount
     */
    constructor() { 
        
        GetSavingsProductsSavingsControlAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsSavingsControlAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsSavingsControlAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsSavingsControlAccount} The populated <code>GetSavingsProductsSavingsControlAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsSavingsControlAccount();

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
GetSavingsProductsSavingsControlAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsSavingsControlAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsSavingsControlAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsSavingsControlAccount;

