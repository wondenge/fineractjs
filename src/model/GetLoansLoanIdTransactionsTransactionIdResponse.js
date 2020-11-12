

import ApiClient from '../ApiClient';
import GetLoansCurrency from './GetLoansCurrency';
import GetLoansType from './GetLoansType';

/**
 * The GetLoansLoanIdTransactionsTransactionIdResponse model module.
 * @module model/GetLoansLoanIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class GetLoansLoanIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>GetLoansLoanIdTransactionsTransactionIdResponse</code>.
     * GetLoansLoanIdTransactionsTransactionIdResponse
     * @alias module:model/GetLoansLoanIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        GetLoansLoanIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdTransactionsTransactionIdResponse} The populated <code>GetLoansLoanIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetLoansType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('manuallyReversed')) {
                obj['manuallyReversed'] = ApiClient.convertToType(data['manuallyReversed'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoansCurrency.constructFromObject(data['currency']);
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
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['id'] = undefined;

/**
 * @member {module:model/GetLoansType} type
 */
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['type'] = undefined;

/**
 * @member {Date} date
 */
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['date'] = undefined;

/**
 * @member {Boolean} manuallyReversed
 */
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['manuallyReversed'] = undefined;

/**
 * @member {module:model/GetLoansCurrency} currency
 */
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} interestPortion
 */
GetLoansLoanIdTransactionsTransactionIdResponse.prototype['interestPortion'] = undefined;






export default GetLoansLoanIdTransactionsTransactionIdResponse;

