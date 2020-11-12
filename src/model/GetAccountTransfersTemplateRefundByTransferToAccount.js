

import ApiClient from '../ApiClient';
import GetAccountTransfersTemplateRefundByTransferCurrency from './GetAccountTransfersTemplateRefundByTransferCurrency';

/**
 * The GetAccountTransfersTemplateRefundByTransferToAccount model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferToAccount
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferToAccount {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferToAccount</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferToAccount
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferToAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferToAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferToAccount} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferToAccount} The populated <code>GetAccountTransfersTemplateRefundByTransferToAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferToAccount();

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
            if (data.hasOwnProperty('fieldOfficerId')) {
                obj['fieldOfficerId'] = ApiClient.convertToType(data['fieldOfficerId'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountTransfersTemplateRefundByTransferCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['clientName'] = undefined;

/**
 * @member {Number} productId
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['productName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferCurrency} currency
 */
GetAccountTransfersTemplateRefundByTransferToAccount.prototype['currency'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferToAccount;

