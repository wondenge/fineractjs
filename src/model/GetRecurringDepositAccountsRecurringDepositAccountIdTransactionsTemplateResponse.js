

import ApiClient from '../ApiClient';
import GetRecurringCurrency from './GetRecurringCurrency';
import GetRecurringTransactionType from './GetRecurringTransactionType';

/**
 * The GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse model module.
 * @module model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse
 * @version 1.0
 */
class GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse</code>.
     * GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse
     * @alias module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse
     */
    constructor() { 
        
        GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse} The populated <code>GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = GetRecurringTransactionType.constructFromObject(data['transactionType']);
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
                obj['currency'] = GetRecurringCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('reversed')) {
                obj['reversed'] = ApiClient.convertToType(data['reversed'], 'Boolean');
            }
            if (data.hasOwnProperty('paymentTypeOptions')) {
                obj['paymentTypeOptions'] = ApiClient.convertToType(data['paymentTypeOptions'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['id'] = undefined;

/**
 * @member {module:model/GetRecurringTransactionType} transactionType
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['transactionType'] = undefined;

/**
 * @member {Number} accountId
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['accountId'] = undefined;

/**
 * @member {String} accountNo
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['accountNo'] = undefined;

/**
 * @member {Date} date
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['date'] = undefined;

/**
 * @member {module:model/GetRecurringCurrency} currency
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['amount'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['reversed'] = undefined;

/**
 * @member {Array.<Number>} paymentTypeOptions
 */
GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.prototype['paymentTypeOptions'] = undefined;






export default GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse;

