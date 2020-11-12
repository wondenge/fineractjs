

import ApiClient from '../ApiClient';
import GetSelfClientsLoanAccounts from './GetSelfClientsLoanAccounts';
import GetSelfClientsSavingsAccounts from './GetSelfClientsSavingsAccounts';

/**
 * The GetSelfClientsClientIdAccountsResponse model module.
 * @module model/GetSelfClientsClientIdAccountsResponse
 * @version 1.0
 */
class GetSelfClientsClientIdAccountsResponse {
    /**
     * Constructs a new <code>GetSelfClientsClientIdAccountsResponse</code>.
     * GetSelfClientsClientIdAccountsResponse
     * @alias module:model/GetSelfClientsClientIdAccountsResponse
     */
    constructor() { 
        
        GetSelfClientsClientIdAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdAccountsResponse} The populated <code>GetSelfClientsClientIdAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdAccountsResponse();

            if (data.hasOwnProperty('loanAccounts')) {
                obj['loanAccounts'] = ApiClient.convertToType(data['loanAccounts'], [GetSelfClientsLoanAccounts]);
            }
            if (data.hasOwnProperty('savingsAccounts')) {
                obj['savingsAccounts'] = ApiClient.convertToType(data['savingsAccounts'], [GetSelfClientsSavingsAccounts]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetSelfClientsLoanAccounts>} loanAccounts
 */
GetSelfClientsClientIdAccountsResponse.prototype['loanAccounts'] = undefined;

/**
 * @member {Array.<module:model/GetSelfClientsSavingsAccounts>} savingsAccounts
 */
GetSelfClientsClientIdAccountsResponse.prototype['savingsAccounts'] = undefined;






export default GetSelfClientsClientIdAccountsResponse;

