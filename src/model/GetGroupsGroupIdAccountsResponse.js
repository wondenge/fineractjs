

import ApiClient from '../ApiClient';
import GetGroupsGroupIdAccountsLoanAccounts from './GetGroupsGroupIdAccountsLoanAccounts';
import GetGroupsGroupIdAccountsMemberLoanAccounts from './GetGroupsGroupIdAccountsMemberLoanAccounts';
import GetGroupsGroupIdAccountsMemberSavingsAccounts from './GetGroupsGroupIdAccountsMemberSavingsAccounts';
import GetGroupsGroupIdAccountsSavingAccounts from './GetGroupsGroupIdAccountsSavingAccounts';

/**
 * The GetGroupsGroupIdAccountsResponse model module.
 * @module model/GetGroupsGroupIdAccountsResponse
 * @version 1.0
 */
class GetGroupsGroupIdAccountsResponse {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsResponse</code>.
     * GetGroupsGroupIdAccountsResponse
     * @alias module:model/GetGroupsGroupIdAccountsResponse
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsResponse} The populated <code>GetGroupsGroupIdAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsResponse();

            if (data.hasOwnProperty('loanAccounts')) {
                obj['loanAccounts'] = ApiClient.convertToType(data['loanAccounts'], [GetGroupsGroupIdAccountsLoanAccounts]);
            }
            if (data.hasOwnProperty('savingsAccounts')) {
                obj['savingsAccounts'] = ApiClient.convertToType(data['savingsAccounts'], [GetGroupsGroupIdAccountsSavingAccounts]);
            }
            if (data.hasOwnProperty('memberLoanAccounts')) {
                obj['memberLoanAccounts'] = ApiClient.convertToType(data['memberLoanAccounts'], [GetGroupsGroupIdAccountsMemberLoanAccounts]);
            }
            if (data.hasOwnProperty('memberSavingsAccounts')) {
                obj['memberSavingsAccounts'] = ApiClient.convertToType(data['memberSavingsAccounts'], [GetGroupsGroupIdAccountsMemberSavingsAccounts]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetGroupsGroupIdAccountsLoanAccounts>} loanAccounts
 */
GetGroupsGroupIdAccountsResponse.prototype['loanAccounts'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsGroupIdAccountsSavingAccounts>} savingsAccounts
 */
GetGroupsGroupIdAccountsResponse.prototype['savingsAccounts'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsGroupIdAccountsMemberLoanAccounts>} memberLoanAccounts
 */
GetGroupsGroupIdAccountsResponse.prototype['memberLoanAccounts'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsGroupIdAccountsMemberSavingsAccounts>} memberSavingsAccounts
 */
GetGroupsGroupIdAccountsResponse.prototype['memberSavingsAccounts'] = undefined;






export default GetGroupsGroupIdAccountsResponse;

