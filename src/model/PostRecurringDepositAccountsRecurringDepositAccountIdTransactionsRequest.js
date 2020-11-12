

import ApiClient from '../ApiClient';

/**
 * The PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest model module.
 * @module model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest
 * @version 1.0
 */
class PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest {
    /**
     * Constructs a new <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest</code>.
     * PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest
     * @alias module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest
     */
    constructor() { 
        
        PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} The populated <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
            }
            if (data.hasOwnProperty('transactionAmount')) {
                obj['transactionAmount'] = ApiClient.convertToType(data['transactionAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentTypeId')) {
                obj['paymentTypeId'] = ApiClient.convertToType(data['paymentTypeId'], 'Number');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('checkNumber')) {
                obj['checkNumber'] = ApiClient.convertToType(data['checkNumber'], 'String');
            }
            if (data.hasOwnProperty('routingCode')) {
                obj['routingCode'] = ApiClient.convertToType(data['routingCode'], 'String');
            }
            if (data.hasOwnProperty('receiptNumber')) {
                obj['receiptNumber'] = ApiClient.convertToType(data['receiptNumber'], 'String');
            }
            if (data.hasOwnProperty('bankNumber')) {
                obj['bankNumber'] = ApiClient.convertToType(data['bankNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} transactionDate
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['transactionDate'] = undefined;

/**
 * @member {Number} transactionAmount
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['transactionAmount'] = undefined;

/**
 * @member {Number} paymentTypeId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['paymentTypeId'] = undefined;

/**
 * @member {String} accountNumber
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['accountNumber'] = undefined;

/**
 * @member {String} checkNumber
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['checkNumber'] = undefined;

/**
 * @member {String} routingCode
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['routingCode'] = undefined;

/**
 * @member {String} receiptNumber
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['receiptNumber'] = undefined;

/**
 * @member {String} bankNumber
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.prototype['bankNumber'] = undefined;






export default PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest;

