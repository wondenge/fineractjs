

import ApiClient from '../ApiClient';
import GetClientsLoanAccounts from './GetClientsLoanAccounts';
import GetClientsSavingsAccounts from './GetClientsSavingsAccounts';

/**
 * The GetClientsClientIdAccountsResponse model module.
 * @module model/GetClientsClientIdAccountsResponse
 * @version 1.0
 */
class GetClientsClientIdAccountsResponse {
    /**
     * Constructs a new <code>GetClientsClientIdAccountsResponse</code>.
     * GetClientsClientIdAccountsResponse
     * @alias module:model/GetClientsClientIdAccountsResponse
     */
    constructor() { 
        
        GetClientsClientIdAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdAccountsResponse} The populated <code>GetClientsClientIdAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdAccountsResponse();

            if (data.hasOwnProperty('loanAccounts')) {
                obj['loanAccounts'] = ApiClient.convertToType(data['loanAccounts'], [GetClientsLoanAccounts]);
            }
            if (data.hasOwnProperty('savingsAccounts')) {
                obj['savingsAccounts'] = ApiClient.convertToType(data['savingsAccounts'], [GetClientsSavingsAccounts]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetClientsLoanAccounts>} loanAccounts
 */
GetClientsClientIdAccountsResponse.prototype['loanAccounts'] = undefined;

/**
 * @member {Array.<module:model/GetClientsSavingsAccounts>} savingsAccounts
 */
GetClientsClientIdAccountsResponse.prototype['savingsAccounts'] = undefined;






export default GetClientsClientIdAccountsResponse;

