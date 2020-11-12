

import ApiClient from '../ApiClient';
import ExtensionData from './ExtensionData';
import GeoCodeData from './GeoCodeData';
import InteropTransactionTypeData from './InteropTransactionTypeData';
import MoneyData from './MoneyData';

/**
 * The InteropTransferRequestData model module.
 * @module model/InteropTransferRequestData
 * @version 1.0
 */
class InteropTransferRequestData {
    /**
     * Constructs a new <code>InteropTransferRequestData</code>.
     * @alias module:model/InteropTransferRequestData
     * @param transactionCode {String} 
     * @param accountId {String} 
     * @param amount {module:model/MoneyData} 
     * @param transactionRole {module:model/InteropTransferRequestData.TransactionRoleEnum} 
     * @param transferCode {String} 
     */
    constructor(transactionCode, accountId, amount, transactionRole, transferCode) { 
        
        InteropTransferRequestData.initialize(this, transactionCode, accountId, amount, transactionRole, transferCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCode, accountId, amount, transactionRole, transferCode) { 
        obj['transactionCode'] = transactionCode;
        obj['accountId'] = accountId;
        obj['amount'] = amount;
        obj['transactionRole'] = transactionRole;
        obj['transferCode'] = transferCode;
    }

    /**
     * Constructs a <code>InteropTransferRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropTransferRequestData} obj Optional instance to populate.
     * @return {module:model/InteropTransferRequestData} The populated <code>InteropTransferRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropTransferRequestData();

            if (data.hasOwnProperty('transactionCode')) {
                obj['transactionCode'] = ApiClient.convertToType(data['transactionCode'], 'String');
            }
            if (data.hasOwnProperty('requestCode')) {
                obj['requestCode'] = ApiClient.convertToType(data['requestCode'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = MoneyData.constructFromObject(data['amount']);
            }
            if (data.hasOwnProperty('transactionRole')) {
                obj['transactionRole'] = ApiClient.convertToType(data['transactionRole'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = InteropTransactionTypeData.constructFromObject(data['transactionType']);
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('geoCode')) {
                obj['geoCode'] = GeoCodeData.constructFromObject(data['geoCode']);
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
            }
            if (data.hasOwnProperty('extensionList')) {
                obj['extensionList'] = ApiClient.convertToType(data['extensionList'], [ExtensionData]);
            }
            if (data.hasOwnProperty('transferCode')) {
                obj['transferCode'] = ApiClient.convertToType(data['transferCode'], 'String');
            }
            if (data.hasOwnProperty('fspFee')) {
                obj['fspFee'] = MoneyData.constructFromObject(data['fspFee']);
            }
            if (data.hasOwnProperty('fspCommission')) {
                obj['fspCommission'] = MoneyData.constructFromObject(data['fspCommission']);
            }
            if (data.hasOwnProperty('expirationLocalDate')) {
                obj['expirationLocalDate'] = ApiClient.convertToType(data['expirationLocalDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} transactionCode
 */
InteropTransferRequestData.prototype['transactionCode'] = undefined;

/**
 * @member {String} requestCode
 */
InteropTransferRequestData.prototype['requestCode'] = undefined;

/**
 * @member {String} accountId
 */
InteropTransferRequestData.prototype['accountId'] = undefined;

/**
 * @member {module:model/MoneyData} amount
 */
InteropTransferRequestData.prototype['amount'] = undefined;

/**
 * @member {module:model/InteropTransferRequestData.TransactionRoleEnum} transactionRole
 */
InteropTransferRequestData.prototype['transactionRole'] = undefined;

/**
 * @member {module:model/InteropTransactionTypeData} transactionType
 */
InteropTransferRequestData.prototype['transactionType'] = undefined;

/**
 * @member {String} note
 */
InteropTransferRequestData.prototype['note'] = undefined;

/**
 * @member {module:model/GeoCodeData} geoCode
 */
InteropTransferRequestData.prototype['geoCode'] = undefined;

/**
 * @member {Date} expiration
 */
InteropTransferRequestData.prototype['expiration'] = undefined;

/**
 * @member {Array.<module:model/ExtensionData>} extensionList
 */
InteropTransferRequestData.prototype['extensionList'] = undefined;

/**
 * @member {String} transferCode
 */
InteropTransferRequestData.prototype['transferCode'] = undefined;

/**
 * @member {module:model/MoneyData} fspFee
 */
InteropTransferRequestData.prototype['fspFee'] = undefined;

/**
 * @member {module:model/MoneyData} fspCommission
 */
InteropTransferRequestData.prototype['fspCommission'] = undefined;

/**
 * @member {Date} expirationLocalDate
 */
InteropTransferRequestData.prototype['expirationLocalDate'] = undefined;





/**
 * Allowed values for the <code>transactionRole</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransferRequestData['TransactionRoleEnum'] = {

    /**
     * value: "PAYER"
     * @const
     */
    "PAYER": "PAYER",

    /**
     * value: "PAYEE"
     * @const
     */
    "PAYEE": "PAYEE"
};



export default InteropTransferRequestData;

