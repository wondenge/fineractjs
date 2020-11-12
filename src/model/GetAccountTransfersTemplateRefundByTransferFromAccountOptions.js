

import ApiClient from '../ApiClient';
import GetAccountTransfersTemplateRefundByTransferCurrency from './GetAccountTransfersTemplateRefundByTransferCurrency';

/**
 * The GetAccountTransfersTemplateRefundByTransferFromAccountOptions model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferFromAccountOptions {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferFromAccountOptions</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferFromAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferFromAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions} The populated <code>GetAccountTransfersTemplateRefundByTransferFromAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferFromAccountOptions();

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
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['clientName'] = undefined;

/**
 * @member {Number} productId
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['productName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferCurrency} currency
 */
GetAccountTransfersTemplateRefundByTransferFromAccountOptions.prototype['currency'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferFromAccountOptions;

