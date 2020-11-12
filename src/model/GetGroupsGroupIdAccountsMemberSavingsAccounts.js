

import ApiClient from '../ApiClient';
import GetGroupsGroupIdAccountsMemberLoanType from './GetGroupsGroupIdAccountsMemberLoanType';
import GetGroupsGroupIdAccountsSavingCurrency from './GetGroupsGroupIdAccountsSavingCurrency';
import GetGroupsGroupIdAccountsSavingStatus from './GetGroupsGroupIdAccountsSavingStatus';

/**
 * The GetGroupsGroupIdAccountsMemberSavingsAccounts model module.
 * @module model/GetGroupsGroupIdAccountsMemberSavingsAccounts
 * @version 1.0
 */
class GetGroupsGroupIdAccountsMemberSavingsAccounts {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsMemberSavingsAccounts</code>.
     * @alias module:model/GetGroupsGroupIdAccountsMemberSavingsAccounts
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsMemberSavingsAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsMemberSavingsAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsMemberSavingsAccounts} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsMemberSavingsAccounts} The populated <code>GetGroupsGroupIdAccountsMemberSavingsAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsMemberSavingsAccounts();

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
                obj['status'] = GetGroupsGroupIdAccountsSavingStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetGroupsGroupIdAccountsSavingCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = GetGroupsGroupIdAccountsMemberLoanType.constructFromObject(data['accountType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsSavingStatus} status
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsSavingCurrency} currency
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['currency'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsMemberLoanType} accountType
 */
GetGroupsGroupIdAccountsMemberSavingsAccounts.prototype['accountType'] = undefined;






export default GetGroupsGroupIdAccountsMemberSavingsAccounts;

