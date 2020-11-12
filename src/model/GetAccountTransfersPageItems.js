

import ApiClient from '../ApiClient';
import GetAccountTransfersFromAccountType from './GetAccountTransfersFromAccountType';
import GetAccountTransfersFromClientOptions from './GetAccountTransfersFromClientOptions';
import GetAccountTransfersPageItemsCurrency from './GetAccountTransfersPageItemsCurrency';
import GetAccountTransfersPageItemsFromAccount from './GetAccountTransfersPageItemsFromAccount';
import GetAccountTransfersPageItemsFromOffice from './GetAccountTransfersPageItemsFromOffice';
import GetAccountTransfersPageItemsToAccountType from './GetAccountTransfersPageItemsToAccountType';

/**
 * The GetAccountTransfersPageItems model module.
 * @module model/GetAccountTransfersPageItems
 * @version 1.0
 */
class GetAccountTransfersPageItems {
    /**
     * Constructs a new <code>GetAccountTransfersPageItems</code>.
     * @alias module:model/GetAccountTransfersPageItems
     */
    constructor() { 
        
        GetAccountTransfersPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersPageItems} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersPageItems} The populated <code>GetAccountTransfersPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersPageItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('reversed')) {
                obj['reversed'] = ApiClient.convertToType(data['reversed'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountTransfersPageItemsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('transferAmount')) {
                obj['transferAmount'] = ApiClient.convertToType(data['transferAmount'], 'Number');
            }
            if (data.hasOwnProperty('transferDate')) {
                obj['transferDate'] = ApiClient.convertToType(data['transferDate'], 'Date');
            }
            if (data.hasOwnProperty('transferDescription')) {
                obj['transferDescription'] = ApiClient.convertToType(data['transferDescription'], 'String');
            }
            if (data.hasOwnProperty('fromOffice')) {
                obj['fromOffice'] = GetAccountTransfersPageItemsFromOffice.constructFromObject(data['fromOffice']);
            }
            if (data.hasOwnProperty('fromClient')) {
                obj['fromClient'] = GetAccountTransfersFromClientOptions.constructFromObject(data['fromClient']);
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = GetAccountTransfersFromAccountType.constructFromObject(data['fromAccountType']);
            }
            if (data.hasOwnProperty('fromAccount')) {
                obj['fromAccount'] = GetAccountTransfersPageItemsFromAccount.constructFromObject(data['fromAccount']);
            }
            if (data.hasOwnProperty('toOffice')) {
                obj['toOffice'] = GetAccountTransfersPageItemsFromOffice.constructFromObject(data['toOffice']);
            }
            if (data.hasOwnProperty('toClient')) {
                obj['toClient'] = GetAccountTransfersFromClientOptions.constructFromObject(data['toClient']);
            }
            if (data.hasOwnProperty('toAccountType')) {
                obj['toAccountType'] = GetAccountTransfersPageItemsToAccountType.constructFromObject(data['toAccountType']);
            }
            if (data.hasOwnProperty('toAccount')) {
                obj['toAccount'] = GetAccountTransfersPageItemsFromAccount.constructFromObject(data['toAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersPageItems.prototype['id'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetAccountTransfersPageItems.prototype['reversed'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsCurrency} currency
 */
GetAccountTransfersPageItems.prototype['currency'] = undefined;

/**
 * @member {Number} transferAmount
 */
GetAccountTransfersPageItems.prototype['transferAmount'] = undefined;

/**
 * @member {Date} transferDate
 */
GetAccountTransfersPageItems.prototype['transferDate'] = undefined;

/**
 * @member {String} transferDescription
 */
GetAccountTransfersPageItems.prototype['transferDescription'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsFromOffice} fromOffice
 */
GetAccountTransfersPageItems.prototype['fromOffice'] = undefined;

/**
 * @member {module:model/GetAccountTransfersFromClientOptions} fromClient
 */
GetAccountTransfersPageItems.prototype['fromClient'] = undefined;

/**
 * @member {module:model/GetAccountTransfersFromAccountType} fromAccountType
 */
GetAccountTransfersPageItems.prototype['fromAccountType'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsFromAccount} fromAccount
 */
GetAccountTransfersPageItems.prototype['fromAccount'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsFromOffice} toOffice
 */
GetAccountTransfersPageItems.prototype['toOffice'] = undefined;

/**
 * @member {module:model/GetAccountTransfersFromClientOptions} toClient
 */
GetAccountTransfersPageItems.prototype['toClient'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsToAccountType} toAccountType
 */
GetAccountTransfersPageItems.prototype['toAccountType'] = undefined;

/**
 * @member {module:model/GetAccountTransfersPageItemsFromAccount} toAccount
 */
GetAccountTransfersPageItems.prototype['toAccount'] = undefined;






export default GetAccountTransfersPageItems;

