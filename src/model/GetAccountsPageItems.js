

import ApiClient from '../ApiClient';
import GetAccountsChargesCurrency from './GetAccountsChargesCurrency';
import GetAccountsTypePurchasedShares from './GetAccountsTypePurchasedShares';
import GetAccountsTypeStatus from './GetAccountsTypeStatus';
import GetAccountsTypeSummary from './GetAccountsTypeSummary';
import GetAccountsTypeTimeline from './GetAccountsTypeTimeline';

/**
 * The GetAccountsPageItems model module.
 * @module model/GetAccountsPageItems
 * @version 1.0
 */
class GetAccountsPageItems {
    /**
     * Constructs a new <code>GetAccountsPageItems</code>.
     * @alias module:model/GetAccountsPageItems
     */
    constructor() { 
        
        GetAccountsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsPageItems} obj Optional instance to populate.
     * @return {module:model/GetAccountsPageItems} The populated <code>GetAccountsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsPageItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetAccountsTypeStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetAccountsTypeTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountsChargesCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('purchasedShares')) {
                obj['purchasedShares'] = ApiClient.convertToType(data['purchasedShares'], [GetAccountsTypePurchasedShares]);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetAccountsTypeSummary.constructFromObject(data['summary']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsPageItems.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountsPageItems.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetAccountsPageItems.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetAccountsPageItems.prototype['clientName'] = undefined;

/**
 * @member {Number} productId
 */
GetAccountsPageItems.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetAccountsPageItems.prototype['productName'] = undefined;

/**
 * @member {module:model/GetAccountsTypeStatus} status
 */
GetAccountsPageItems.prototype['status'] = undefined;

/**
 * @member {module:model/GetAccountsTypeTimeline} timeline
 */
GetAccountsPageItems.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetAccountsChargesCurrency} currency
 */
GetAccountsPageItems.prototype['currency'] = undefined;

/**
 * @member {Array.<module:model/GetAccountsTypePurchasedShares>} purchasedShares
 */
GetAccountsPageItems.prototype['purchasedShares'] = undefined;

/**
 * @member {module:model/GetAccountsTypeSummary} summary
 */
GetAccountsPageItems.prototype['summary'] = undefined;






export default GetAccountsPageItems;

