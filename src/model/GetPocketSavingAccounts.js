

import ApiClient from '../ApiClient';

/**
 * The GetPocketSavingAccounts model module.
 * @module model/GetPocketSavingAccounts
 * @version 1.0
 */
class GetPocketSavingAccounts {
    /**
     * Constructs a new <code>GetPocketSavingAccounts</code>.
     * @alias module:model/GetPocketSavingAccounts
     */
    constructor() { 
        
        GetPocketSavingAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPocketSavingAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPocketSavingAccounts} obj Optional instance to populate.
     * @return {module:model/GetPocketSavingAccounts} The populated <code>GetPocketSavingAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPocketSavingAccounts();

            if (data.hasOwnProperty('pocketId')) {
                obj['pocketId'] = ApiClient.convertToType(data['pocketId'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'Number');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} pocketId
 */
GetPocketSavingAccounts.prototype['pocketId'] = undefined;

/**
 * @member {Number} accountId
 */
GetPocketSavingAccounts.prototype['accountId'] = undefined;

/**
 * @member {Number} accountType
 */
GetPocketSavingAccounts.prototype['accountType'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetPocketSavingAccounts.prototype['accountNumber'] = undefined;

/**
 * @member {Number} id
 */
GetPocketSavingAccounts.prototype['id'] = undefined;






export default GetPocketSavingAccounts;

