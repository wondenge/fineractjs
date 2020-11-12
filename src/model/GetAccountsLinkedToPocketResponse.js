  

import ApiClient from '../ApiClient';
import GetPocketLoanAccounts from './GetPocketLoanAccounts';
import GetPocketSavingAccounts from './GetPocketSavingAccounts';

/**
 * The GetAccountsLinkedToPocketResponse model module.
 * @module model/GetAccountsLinkedToPocketResponse
 * @version 1.0
 */
class GetAccountsLinkedToPocketResponse {
    /**
     * Constructs a new <code>GetAccountsLinkedToPocketResponse</code>.
     * GetAccountsLinkedToPocketResponse
     * @alias module:model/GetAccountsLinkedToPocketResponse
     */
    constructor() { 
        
        GetAccountsLinkedToPocketResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsLinkedToPocketResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsLinkedToPocketResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountsLinkedToPocketResponse} The populated <code>GetAccountsLinkedToPocketResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsLinkedToPocketResponse();

            if (data.hasOwnProperty('loanAccounts')) {
                obj['loanAccounts'] = ApiClient.convertToType(data['loanAccounts'], [GetPocketLoanAccounts]);
            }
            if (data.hasOwnProperty('savingAccounts')) {
                obj['savingAccounts'] = ApiClient.convertToType(data['savingAccounts'], [GetPocketSavingAccounts]);
            }
            if (data.hasOwnProperty('shareAccounts')) {
                obj['shareAccounts'] = ApiClient.convertToType(data['shareAccounts'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetPocketLoanAccounts>} loanAccounts
 */
GetAccountsLinkedToPocketResponse.prototype['loanAccounts'] = undefined;

/**
 * @member {Array.<module:model/GetPocketSavingAccounts>} savingAccounts
 */
GetAccountsLinkedToPocketResponse.prototype['savingAccounts'] = undefined;

/**
 * @member {Array.<Object>} shareAccounts
 */
GetAccountsLinkedToPocketResponse.prototype['shareAccounts'] = undefined;






export default GetAccountsLinkedToPocketResponse;

