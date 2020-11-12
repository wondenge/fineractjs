

import ApiClient from '../ApiClient';
import GetGroupsGroupIdAccountsSavingAccountType from './GetGroupsGroupIdAccountsSavingAccountType';
import GetGroupsGroupIdAccountsSavingCurrency from './GetGroupsGroupIdAccountsSavingCurrency';
import GetGroupsGroupIdAccountsSavingStatus from './GetGroupsGroupIdAccountsSavingStatus';

/**
 * The GetGroupsGroupIdAccountsSavingAccounts model module.
 * @module model/GetGroupsGroupIdAccountsSavingAccounts
 * @version 1.0
 */
class GetGroupsGroupIdAccountsSavingAccounts {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsSavingAccounts</code>.
     * @alias module:model/GetGroupsGroupIdAccountsSavingAccounts
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsSavingAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsSavingAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsSavingAccounts} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsSavingAccounts} The populated <code>GetGroupsGroupIdAccountsSavingAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsSavingAccounts();

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
                obj['accountType'] = GetGroupsGroupIdAccountsSavingAccountType.constructFromObject(data['accountType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsSavingStatus} status
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsSavingCurrency} currency
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['currency'] = undefined;

/**
 * @member {module:model/GetGroupsGroupIdAccountsSavingAccountType} accountType
 */
GetGroupsGroupIdAccountsSavingAccounts.prototype['accountType'] = undefined;






export default GetGroupsGroupIdAccountsSavingAccounts;

