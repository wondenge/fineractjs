

import ApiClient from '../ApiClient';
import GetGroupsGroupIdAccountsLoanType from './GetGroupsGroupIdAccountsLoanType';
import GetGroupsGroupIdAccountsStatus from './GetGroupsGroupIdAccountsStatus';

/**
 * The GetGroupsGroupIdAccountsLoanAccounts model module.
 * @module model/GetGroupsGroupIdAccountsLoanAccounts
 * @version 1.0
 */
class GetGroupsGroupIdAccountsLoanAccounts {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsLoanAccounts</code>.
     * @alias module:model/GetGroupsGroupIdAccountsLoanAccounts
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsLoanAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsLoanAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsLoanAccounts} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsLoanAccounts} The populated <code>GetGroupsGroupIdAccountsLoanAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsLoanAccounts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetGroupsGroupIdAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = GetGroupsGroupIdAccountsLoanType.constructFromObject(data['loanType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdAccountsLoanAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetGroupsGroupIdAccountsLoanAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetGroupsGroupIdAccountsLoanAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetGroupsGroupIdAccountsLoanAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsStatus} status
 */
GetGroupsGroupIdAccountsLoanAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsLoanType} loanType
 */
GetGroupsGroupIdAccountsLoanAccounts.prototype['loanType'] = undefined;






export default GetGroupsGroupIdAccountsLoanAccounts;

