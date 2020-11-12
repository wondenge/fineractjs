

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsSavingsReferenceAccount model module.
 * @module model/GetSavingsProductsSavingsReferenceAccount
 * @version 1.0
 */
class GetSavingsProductsSavingsReferenceAccount {
    /**
     * Constructs a new <code>GetSavingsProductsSavingsReferenceAccount</code>.
     * @alias module:model/GetSavingsProductsSavingsReferenceAccount
     */
    constructor() { 
        
        GetSavingsProductsSavingsReferenceAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsSavingsReferenceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsSavingsReferenceAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsSavingsReferenceAccount} The populated <code>GetSavingsProductsSavingsReferenceAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsSavingsReferenceAccount();

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
GetSavingsProductsSavingsReferenceAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsSavingsReferenceAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsSavingsReferenceAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsSavingsReferenceAccount;

