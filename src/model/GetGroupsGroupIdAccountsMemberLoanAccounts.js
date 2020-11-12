

import ApiClient from '../ApiClient';
import GetGroupsGroupIdAccountsMemberLoanStatus from './GetGroupsGroupIdAccountsMemberLoanStatus';
import GetGroupsGroupIdAccountsMemberLoanType from './GetGroupsGroupIdAccountsMemberLoanType';

/**
 * The GetGroupsGroupIdAccountsMemberLoanAccounts model module.
 * @module model/GetGroupsGroupIdAccountsMemberLoanAccounts
 * @version 1.0
 */
class GetGroupsGroupIdAccountsMemberLoanAccounts {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsMemberLoanAccounts</code>.
     * @alias module:model/GetGroupsGroupIdAccountsMemberLoanAccounts
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsMemberLoanAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsMemberLoanAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsMemberLoanAccounts} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsMemberLoanAccounts} The populated <code>GetGroupsGroupIdAccountsMemberLoanAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsMemberLoanAccounts();

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
                obj['status'] = GetGroupsGroupIdAccountsMemberLoanStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = GetGroupsGroupIdAccountsMemberLoanType.constructFromObject(data['loanType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdAccountsMemberLoanAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetGroupsGroupIdAccountsMemberLoanAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetGroupsGroupIdAccountsMemberLoanAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetGroupsGroupIdAccountsMemberLoanAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsMemberLoanStatus} status
 */
GetGroupsGroupIdAccountsMemberLoanAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsMemberLoanType} loanType
 */
GetGroupsGroupIdAccountsMemberLoanAccounts.prototype['loanType'] = undefined;






export default GetGroupsGroupIdAccountsMemberLoanAccounts;

