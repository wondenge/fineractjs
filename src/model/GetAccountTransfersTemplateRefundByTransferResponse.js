

import ApiClient from '../ApiClient';
import GetAccountTransfersFromAccountType from './GetAccountTransfersFromAccountType';
import GetAccountTransfersPageItemsToAccountType from './GetAccountTransfersPageItemsToAccountType';
import GetAccountTransfersTemplateRefundByTransferCurrency from './GetAccountTransfersTemplateRefundByTransferCurrency';
import GetAccountTransfersTemplateRefundByTransferFromAccount from './GetAccountTransfersTemplateRefundByTransferFromAccount';
import GetAccountTransfersTemplateRefundByTransferFromAccountOptions from './GetAccountTransfersTemplateRefundByTransferFromAccountOptions';
import GetAccountTransfersTemplateRefundByTransferFromClient from './GetAccountTransfersTemplateRefundByTransferFromClient';
import GetAccountTransfersTemplateRefundByTransferFromClientOptions from './GetAccountTransfersTemplateRefundByTransferFromClientOptions';
import GetAccountTransfersTemplateRefundByTransferFromOffice from './GetAccountTransfersTemplateRefundByTransferFromOffice';
import GetAccountTransfersTemplateRefundByTransferFromOfficeOptions from './GetAccountTransfersTemplateRefundByTransferFromOfficeOptions';
import GetAccountTransfersTemplateRefundByTransferToAccount from './GetAccountTransfersTemplateRefundByTransferToAccount';
import GetAccountTransfersTemplateRefundByTransferToClient from './GetAccountTransfersTemplateRefundByTransferToClient';

/**
 * The GetAccountTransfersTemplateRefundByTransferResponse model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferResponse
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferResponse {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferResponse</code>.
     * GetAccountTransfersTemplateRefundByTransferResponse
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferResponse
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferResponse} The populated <code>GetAccountTransfersTemplateRefundByTransferResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferResponse();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountTransfersTemplateRefundByTransferCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('transferAmount')) {
                obj['transferAmount'] = ApiClient.convertToType(data['transferAmount'], 'Number');
            }
            if (data.hasOwnProperty('transferDate')) {
                obj['transferDate'] = ApiClient.convertToType(data['transferDate'], 'Date');
            }
            if (data.hasOwnProperty('fromOffice')) {
                obj['fromOffice'] = GetAccountTransfersTemplateRefundByTransferFromOffice.constructFromObject(data['fromOffice']);
            }
            if (data.hasOwnProperty('fromClient')) {
                obj['fromClient'] = GetAccountTransfersTemplateRefundByTransferFromClient.constructFromObject(data['fromClient']);
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = GetAccountTransfersPageItemsToAccountType.constructFromObject(data['fromAccountType']);
            }
            if (data.hasOwnProperty('fromAccount')) {
                obj['fromAccount'] = GetAccountTransfersTemplateRefundByTransferFromAccount.constructFromObject(data['fromAccount']);
            }
            if (data.hasOwnProperty('toOffice')) {
                obj['toOffice'] = GetAccountTransfersTemplateRefundByTransferFromOffice.constructFromObject(data['toOffice']);
            }
            if (data.hasOwnProperty('toClient')) {
                obj['toClient'] = GetAccountTransfersTemplateRefundByTransferToClient.constructFromObject(data['toClient']);
            }
            if (data.hasOwnProperty('toAccountType')) {
                obj['toAccountType'] = GetAccountTransfersFromAccountType.constructFromObject(data['toAccountType']);
            }
            if (data.hasOwnProperty('toAccount')) {
                obj['toAccount'] = GetAccountTransfersTemplateRefundByTransferToAccount.constructFromObject(data['toAccount']);
            }
            if (data.hasOwnProperty('fromOfficeOptions')) {
                obj['fromOfficeOptions'] = ApiClient.convertToType(data['fromOfficeOptions'], [GetAccountTransfersTemplateRefundByTransferFromOfficeOptions]);
            }
            if (data.hasOwnProperty('fromClientOptions')) {
                obj['fromClientOptions'] = ApiClient.convertToType(data['fromClientOptions'], [GetAccountTransfersTemplateRefundByTransferFromClientOptions]);
            }
            if (data.hasOwnProperty('fromAccountTypeOptions')) {
                obj['fromAccountTypeOptions'] = ApiClient.convertToType(data['fromAccountTypeOptions'], [GetAccountTransfersFromAccountType]);
            }
            if (data.hasOwnProperty('fromAccountOptions')) {
                obj['fromAccountOptions'] = ApiClient.convertToType(data['fromAccountOptions'], [GetAccountTransfersTemplateRefundByTransferFromAccountOptions]);
            }
            if (data.hasOwnProperty('toOfficeOptions')) {
                obj['toOfficeOptions'] = ApiClient.convertToType(data['toOfficeOptions'], [GetAccountTransfersTemplateRefundByTransferFromOfficeOptions]);
            }
            if (data.hasOwnProperty('toClientOptions')) {
                obj['toClientOptions'] = ApiClient.convertToType(data['toClientOptions'], [GetAccountTransfersTemplateRefundByTransferFromClientOptions]);
            }
            if (data.hasOwnProperty('toAccountTypeOptions')) {
                obj['toAccountTypeOptions'] = ApiClient.convertToType(data['toAccountTypeOptions'], [GetAccountTransfersFromAccountType]);
            }
            if (data.hasOwnProperty('toAccountOptions')) {
                obj['toAccountOptions'] = ApiClient.convertToType(data['toAccountOptions'], [GetAccountTransfersTemplateRefundByTransferToAccount]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferCurrency} currency
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['currency'] = undefined;

/**
 * @member {Number} transferAmount
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['transferAmount'] = undefined;

/**
 * @member {Date} transferDate
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['transferDate'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferFromOffice} fromOffice
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromOffice'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferFromClient} fromClient
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromClient'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsToAccountType} fromAccountType
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromAccountType'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferFromAccount} fromAccount
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromAccount'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferFromOffice} toOffice
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toOffice'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferToClient} toClient
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toClient'] = undefined;

/**
 * @member {module:model/GetAccountTransfersFromAccountType} toAccountType
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toAccountType'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTemplateRefundByTransferToAccount} toAccount
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toAccount'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>} fromOfficeOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromOfficeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersTemplateRefundByTransferFromClientOptions>} fromClientOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromClientOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersFromAccountType>} fromAccountTypeOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromAccountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions>} fromAccountOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['fromAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>} toOfficeOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toOfficeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersTemplateRefundByTransferFromClientOptions>} toClientOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toClientOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersFromAccountType>} toAccountTypeOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toAccountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersTemplateRefundByTransferToAccount>} toAccountOptions
 */
GetAccountTransfersTemplateRefundByTransferResponse.prototype['toAccountOptions'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferResponse;

