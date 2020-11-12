

import ApiClient from '../ApiClient';
import GetSelfSavingsPaymentDetailData from './GetSelfSavingsPaymentDetailData';
import GetSelfSavingsTransactionCurrency from './GetSelfSavingsTransactionCurrency';
import GetSelfSavingsTransactionType from './GetSelfSavingsTransactionType';

/**
 * The GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse model module.
 * @module model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse</code>.
     * GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse
     * @alias module:model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse} The populated <code>GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = GetSelfSavingsTransactionType.constructFromObject(data['transactionType']);
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfSavingsTransactionCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('paymentDetailData')) {
                obj['paymentDetailData'] = GetSelfSavingsPaymentDetailData.constructFromObject(data['paymentDetailData']);
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
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['id'] = undefined;

/**
 * @member {module:model/GetSelfSavingsTransactionType} transactionType
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['transactionType'] = undefined;

/**
 * @member {Number} accountId
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['accountId'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {Date} date
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['date'] = undefined;

/**
 * @member {module:model/GetSelfSavingsTransactionCurrency} currency
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetSelfSavingsPaymentDetailData} paymentDetailData
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['paymentDetailData'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} runningBalance
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['runningBalance'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.prototype['reversed'] = undefined;






export default GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse;

