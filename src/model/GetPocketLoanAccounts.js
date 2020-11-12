

import ApiClient from '../ApiClient';

/**
 * The GetPocketLoanAccounts model module.
 * @module model/GetPocketLoanAccounts
 * @version 1.0
 */
class GetPocketLoanAccounts {
    /**
     * Constructs a new <code>GetPocketLoanAccounts</code>.
     * @alias module:model/GetPocketLoanAccounts
     */
    constructor() { 
        
        GetPocketLoanAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPocketLoanAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPocketLoanAccounts} obj Optional instance to populate.
     * @return {module:model/GetPocketLoanAccounts} The populated <code>GetPocketLoanAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPocketLoanAccounts();

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
GetPocketLoanAccounts.prototype['pocketId'] = undefined;

/**
 * @member {Number} accountId
 */
GetPocketLoanAccounts.prototype['accountId'] = undefined;

/**
 * @member {Number} accountType
 */
GetPocketLoanAccounts.prototype['accountType'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetPocketLoanAccounts.prototype['accountNumber'] = undefined;

/**
 * @member {Number} id
 */
GetPocketLoanAccounts.prototype['id'] = undefined;






export default GetPocketLoanAccounts;

