

import ApiClient from '../ApiClient';
import GetLoanCurrency from './GetLoanCurrency';
import GetSelfLoansLoanIdTransactionsType from './GetSelfLoansLoanIdTransactionsType';

/**
 * The GetSelfLoansLoanIdTransactionsTransactionIdResponse model module.
 * @module model/GetSelfLoansLoanIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class GetSelfLoansLoanIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>GetSelfLoansLoanIdTransactionsTransactionIdResponse</code>.
     * GetSelfLoansLoanIdTransactionsTransactionIdResponse
     * @alias module:model/GetSelfLoansLoanIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        GetSelfLoansLoanIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansLoanIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansLoanIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansLoanIdTransactionsTransactionIdResponse} The populated <code>GetSelfLoansLoanIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansLoanIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetSelfLoansLoanIdTransactionsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('manuallyReversed')) {
                obj['manuallyReversed'] = ApiClient.convertToType(data['manuallyReversed'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('interestPortion')) {
                obj['interestPortion'] = ApiClient.convertToType(data['interestPortion'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['id'] = undefined;

/**
 * @member {module:model/GetSelfLoansLoanIdTransactionsType} type
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['type'] = undefined;

/**
 * @member {Date} date
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['date'] = undefined;

/**
 * @member {Boolean} manuallyReversed
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['manuallyReversed'] = undefined;

/**
 * @member {module:model/GetLoanCurrency} currency
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} interestPortion
 */
GetSelfLoansLoanIdTransactionsTransactionIdResponse.prototype['interestPortion'] = undefined;






export default GetSelfLoansLoanIdTransactionsTransactionIdResponse;

