

import ApiClient from '../ApiClient';
import ExtensionData from './ExtensionData';
import GeoCodeData from './GeoCodeData';
import InteropTransactionTypeData from './InteropTransactionTypeData';
import MoneyData from './MoneyData';

/**
 * The InteropTransactionRequestData model module.
 * @module model/InteropTransactionRequestData
 * @version 1.0
 */
class InteropTransactionRequestData {
    /**
     * Constructs a new <code>InteropTransactionRequestData</code>.
     * @alias module:model/InteropTransactionRequestData
     * @param transactionCode {String} 
     * @param accountId {String} 
     * @param amount {module:model/MoneyData} 
     * @param transactionRole {module:model/InteropTransactionRequestData.TransactionRoleEnum} 
     */
    constructor(transactionCode, accountId, amount, transactionRole) { 
        
        InteropTransactionRequestData.initialize(this, transactionCode, accountId, amount, transactionRole);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCode, accountId, amount, transactionRole) { 
        obj['transactionCode'] = transactionCode;
        obj['accountId'] = accountId;
        obj['amount'] = amount;
        obj['transactionRole'] = transactionRole;
    }

    /**
     * Constructs a <code>InteropTransactionRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropTransactionRequestData} obj Optional instance to populate.
     * @return {module:model/InteropTransactionRequestData} The populated <code>InteropTransactionRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropTransactionRequestData();

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
InteropTransactionRequestData.prototype['transactionCode'] = undefined;

/**
 * @member {String} requestCode
 */
InteropTransactionRequestData.prototype['requestCode'] = undefined;

/**
 * @member {String} accountId
 */
InteropTransactionRequestData.prototype['accountId'] = undefined;

/**
 * @member {module:model/MoneyData} amount
 */
InteropTransactionRequestData.prototype['amount'] = undefined;

/**
 * @member {module:model/InteropTransactionRequestData.TransactionRoleEnum} transactionRole
 */
InteropTransactionRequestData.prototype['transactionRole'] = undefined;

/**
 * @member {module:model/InteropTransactionTypeData} transactionType
 */
InteropTransactionRequestData.prototype['transactionType'] = undefined;

/**
 * @member {String} note
 */
InteropTransactionRequestData.prototype['note'] = undefined;

/**
 * @member {module:model/GeoCodeData} geoCode
 */
InteropTransactionRequestData.prototype['geoCode'] = undefined;

/**
 * @member {Date} expiration
 */
InteropTransactionRequestData.prototype['expiration'] = undefined;

/**
 * @member {Array.<module:model/ExtensionData>} extensionList
 */
InteropTransactionRequestData.prototype['extensionList'] = undefined;

/**
 * @member {Date} expirationLocalDate
 */
InteropTransactionRequestData.prototype['expirationLocalDate'] = undefined;





/**
 * Allowed values for the <code>transactionRole</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransactionRequestData['TransactionRoleEnum'] = {

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



export default InteropTransactionRequestData;

