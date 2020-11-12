

import ApiClient from '../ApiClient';

/**
 * The GetTaxesComponentsCreditAccount model module.
 * @module model/GetTaxesComponentsCreditAccount
 * @version 1.0
 */
class GetTaxesComponentsCreditAccount {
    /**
     * Constructs a new <code>GetTaxesComponentsCreditAccount</code>.
     * @alias module:model/GetTaxesComponentsCreditAccount
     */
    constructor() { 
        
        GetTaxesComponentsCreditAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaxesComponentsCreditAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaxesComponentsCreditAccount} obj Optional instance to populate.
     * @return {module:model/GetTaxesComponentsCreditAccount} The populated <code>GetTaxesComponentsCreditAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaxesComponentsCreditAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTaxesComponentsCreditAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetTaxesComponentsCreditAccount.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetTaxesComponentsCreditAccount.prototype['glCode'] = undefined;






export default GetTaxesComponentsCreditAccount;

