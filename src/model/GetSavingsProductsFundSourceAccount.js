

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsFundSourceAccount model module.
 * @module model/GetSavingsProductsFundSourceAccount
 * @version 1.0
 */
class GetSavingsProductsFundSourceAccount {
    /**
     * Constructs a new <code>GetSavingsProductsFundSourceAccount</code>.
     * @alias module:model/GetSavingsProductsFundSourceAccount
     */
    constructor() { 
        
        GetSavingsProductsFundSourceAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsFundSourceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsFundSourceAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsFundSourceAccount} The populated <code>GetSavingsProductsFundSourceAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsFundSourceAccount();

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
GetSavingsProductsFundSourceAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsFundSourceAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsFundSourceAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsFundSourceAccount;

