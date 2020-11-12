

import ApiClient from '../ApiClient';
import GetAccountsCurrency from './GetAccountsCurrency';
import GetAccountsStatus from './GetAccountsStatus';
import GetAccountsTimeline from './GetAccountsTimeline';

/**
 * The GetAccountsSummary model module.
 * @module model/GetAccountsSummary
 * @version 1.0
 */
class GetAccountsSummary {
    /**
     * Constructs a new <code>GetAccountsSummary</code>.
     * @alias module:model/GetAccountsSummary
     */
    constructor() { 
        
        GetAccountsSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsSummary} obj Optional instance to populate.
     * @return {module:model/GetAccountsSummary} The populated <code>GetAccountsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsSummary();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('totalApprovedShares')) {
                obj['totalApprovedShares'] = ApiClient.convertToType(data['totalApprovedShares'], 'Number');
            }
            if (data.hasOwnProperty('totalPendingForApprovalShares')) {
                obj['totalPendingForApprovalShares'] = ApiClient.convertToType(data['totalPendingForApprovalShares'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetAccountsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountsCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsSummary.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountsSummary.prototype['accountNo'] = undefined;

/**
 * @member {Number} totalApprovedShares
 */
GetAccountsSummary.prototype['totalApprovedShares'] = undefined;

/**
 * @member {Number} totalPendingForApprovalShares
 */
GetAccountsSummary.prototype['totalPendingForApprovalShares'] = undefined;

/**
 * @member {Number} productId
 */
GetAccountsSummary.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetAccountsSummary.prototype['productName'] = undefined;

/**
 * @member {module:model/GetAccountsStatus} status
 */
GetAccountsSummary.prototype['status'] = undefined;

/**
 * @member {module:model/GetAccountsTimeline} timeline
 */
GetAccountsSummary.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetAccountsCurrency} currency
 */
GetAccountsSummary.prototype['currency'] = undefined;






export default GetAccountsSummary;

