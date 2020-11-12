

import ApiClient from '../ApiClient';
import GetAccountTransfersTemplateRefundByTransferCurrency from './GetAccountTransfersTemplateRefundByTransferCurrency';

/**
 * The GetAccountTransfersTemplateRefundByTransferFromAccount model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferFromAccount
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferFromAccount {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferFromAccount</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferFromAccount
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferFromAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferFromAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferFromAccount} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferFromAccount} The populated <code>GetAccountTransfersTemplateRefundByTransferFromAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferFromAccount();

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
            if (data.hasOwnProperty('amtForTransfer')) {
                obj['amtForTransfer'] = ApiClient.convertToType(data['amtForTransfer'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['clientName'] = undefined;

/**
 * @member {Number} productId
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['productName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferCurrency} currency
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['currency'] = undefined;

/**
 * @member {Number} amtForTransfer
 */
GetAccountTransfersTemplateRefundByTransferFromAccount.prototype['amtForTransfer'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferFromAccount;

