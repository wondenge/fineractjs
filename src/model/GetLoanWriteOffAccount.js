

import ApiClient from '../ApiClient';

/**
 * The GetLoanWriteOffAccount model module.
 * @module model/GetLoanWriteOffAccount
 * @version 1.0
 */
class GetLoanWriteOffAccount {
    /**
     * Constructs a new <code>GetLoanWriteOffAccount</code>.
     * @alias module:model/GetLoanWriteOffAccount
     */
    constructor() { 
        
        GetLoanWriteOffAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanWriteOffAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanWriteOffAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanWriteOffAccount} The populated <code>GetLoanWriteOffAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanWriteOffAccount();

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
GetLoanWriteOffAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanWriteOffAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanWriteOffAccount.prototype['glCode'] = undefined;






export default GetLoanWriteOffAccount;

