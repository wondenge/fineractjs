

import ApiClient from '../ApiClient';
import GetRecurringPaymentDetailData from './GetRecurringPaymentDetailData';
import GetRecurringTransactionsCurrency from './GetRecurringTransactionsCurrency';
import GetRecurringTransactionsTransactionType from './GetRecurringTransactionsTransactionType';

/**
 * The GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse model module.
 * @module model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse</code>.
     * GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse
     * @alias module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse} The populated <code>GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = GetRecurringTransactionsTransactionType.constructFromObject(data['transactionType']);
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetRecurringTransactionsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('paymentDetailData')) {
                obj['paymentDetailData'] = GetRecurringPaymentDetailData.constructFromObject(data['paymentDetailData']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('runningBalance')) {
                obj['runningBalance'] = ApiClient.convertToType(data['runningBalance'], 'Number');
            }
            if (data.hasOwnProperty('reversed')) {
                obj['reversed'] = ApiClient.convertToType(data['reversed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['id'] = undefined;

/**
 * @member {module:model/GetRecurringTransactionsTransactionType} transactionType
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['transactionType'] = undefined;

/**
 * @member {Number} accountId
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['accountId'] = undefined;

/**
 * @member {String} accountNo
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {Date} date
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['date'] = undefined;

/**
 * @member {module:model/GetRecurringTransactionsCurrency} currency
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetRecurringPaymentDetailData} paymentDetailData
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['paymentDetailData'] = undefined;

/**
 * @member {Number} amount
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} runningBalance
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['runningBalance'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['reversed'] = undefined;






export default GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse;

