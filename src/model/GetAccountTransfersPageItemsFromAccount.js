

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersPageItemsFromAccount model module.
 * @module model/GetAccountTransfersPageItemsFromAccount
 * @version 1.0
 */
class GetAccountTransfersPageItemsFromAccount {
    /**
     * Constructs a new <code>GetAccountTransfersPageItemsFromAccount</code>.
     * @alias module:model/GetAccountTransfersPageItemsFromAccount
     */
    constructor() { 
        
        GetAccountTransfersPageItemsFromAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersPageItemsFromAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersPageItemsFromAccount} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersPageItemsFromAccount} The populated <code>GetAccountTransfersPageItemsFromAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersPageItemsFromAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersPageItemsFromAccount.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountTransfersPageItemsFromAccount.prototype['accountNo'] = undefined;






export default GetAccountTransfersPageItemsFromAccount;

