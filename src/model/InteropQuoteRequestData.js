

import ApiClient from '../ApiClient';
import ExtensionData from './ExtensionData';
import GeoCodeData from './GeoCodeData';
import InteropTransactionTypeData from './InteropTransactionTypeData';
import MoneyData from './MoneyData';

/**
 * The InteropQuoteRequestData model module.
 * @module model/InteropQuoteRequestData
 * @version 1.0
 */
class InteropQuoteRequestData {
    /**
     * Constructs a new <code>InteropQuoteRequestData</code>.
     * @alias module:model/InteropQuoteRequestData
     * @param transactionCode {String} 
     * @param accountId {String} 
     * @param amount {module:model/MoneyData} 
     * @param transactionRole {module:model/InteropQuoteRequestData.TransactionRoleEnum} 
     * @param quoteCode {String} 
     * @param amountType {module:model/InteropQuoteRequestData.AmountTypeEnum} 
     */
    constructor(transactionCode, accountId, amount, transactionRole, quoteCode, amountType) { 
        
        InteropQuoteRequestData.initialize(this, transactionCode, accountId, amount, transactionRole, quoteCode, amountType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCode, accountId, amount, transactionRole, quoteCode, amountType) { 
        obj['transactionCode'] = transactionCode;
        obj['accountId'] = accountId;
        obj['amount'] = amount;
        obj['transactionRole'] = transactionRole;
        obj['quoteCode'] = quoteCode;
        obj['amountType'] = amountType;
    }

    /**
     * Constructs a <code>InteropQuoteRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropQuoteRequestData} obj Optional instance to populate.
     * @return {module:model/InteropQuoteRequestData} The populated <code>InteropQuoteRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropQuoteRequestData();

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
            if (data.hasOwnProperty('quoteCode')) {
                obj['quoteCode'] = ApiClient.convertToType(data['quoteCode'], 'String');
            }
            if (data.hasOwnProperty('amountType')) {
                obj['amountType'] = ApiClient.convertToType(data['amountType'], 'String');
            }
            if (data.hasOwnProperty('fees')) {
                obj['fees'] = MoneyData.constructFromObject(data['fees']);
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
InteropQuoteRequestData.prototype['transactionCode'] = undefined;

/**
 * @member {String} requestCode
 */
InteropQuoteRequestData.prototype['requestCode'] = undefined;

/**
 * @member {String} accountId
 */
InteropQuoteRequestData.prototype['accountId'] = undefined;

/**
 * @member {module:model/MoneyData} amount
 */
InteropQuoteRequestData.prototype['amount'] = undefined;

/**
 * @member {module:model/InteropQuoteRequestData.TransactionRoleEnum} transactionRole
 */
InteropQuoteRequestData.prototype['transactionRole'] = undefined;

/**
 * @member {module:model/InteropTransactionTypeData} transactionType
 */
InteropQuoteRequestData.prototype['transactionType'] = undefined;

/**
 * @member {String} note
 */
InteropQuoteRequestData.prototype['note'] = undefined;

/**
 * @member {module:model/GeoCodeData} geoCode
 */
InteropQuoteRequestData.prototype['geoCode'] = undefined;

/**
 * @member {Date} expiration
 */
InteropQuoteRequestData.prototype['expiration'] = undefined;

/**
 * @member {Array.<module:model/ExtensionData>} extensionList
 */
InteropQuoteRequestData.prototype['extensionList'] = undefined;

/**
 * @member {String} quoteCode
 */
InteropQuoteRequestData.prototype['quoteCode'] = undefined;

/**
 * @member {module:model/InteropQuoteRequestData.AmountTypeEnum} amountType
 */
InteropQuoteRequestData.prototype['amountType'] = undefined;

/**
 * @member {module:model/MoneyData} fees
 */
InteropQuoteRequestData.prototype['fees'] = undefined;

/**
 * @member {Date} expirationLocalDate
 */
InteropQuoteRequestData.prototype['expirationLocalDate'] = undefined;





/**
 * Allowed values for the <code>transactionRole</code> property.
 * @enum {String}
 * @readonly
 */
InteropQuoteRequestData['TransactionRoleEnum'] = {

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


/**
 * Allowed values for the <code>amountType</code> property.
 * @enum {String}
 * @readonly
 */
InteropQuoteRequestData['AmountTypeEnum'] = {

    /**
     * value: "SEND"
     * @const
     */
    "SEND": "SEND",

    /**
     * value: "RECEIVE"
     * @const
     */
    "RECEIVE": "RECEIVE"
};



export default InteropQuoteRequestData;

