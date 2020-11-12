

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdTransactionsTransactionIdRequest model module.
 * @module model/PostLoansLoanIdTransactionsTransactionIdRequest
 * @version 1.0
 */
class PostLoansLoanIdTransactionsTransactionIdRequest {
    /**
     * Constructs a new <code>PostLoansLoanIdTransactionsTransactionIdRequest</code>.
     * PostLoansLoanIdTransactionsTransactionIdRequest
     * @alias module:model/PostLoansLoanIdTransactionsTransactionIdRequest
     */
    constructor() { 
        
        PostLoansLoanIdTransactionsTransactionIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdTransactionsTransactionIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdTransactionsTransactionIdRequest} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdTransactionsTransactionIdRequest} The populated <code>PostLoansLoanIdTransactionsTransactionIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdTransactionsTransactionIdRequest();

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
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostLoansLoanIdTransactionsTransactionIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostLoansLoanIdTransactionsTransactionIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} transactionDate
 */
PostLoansLoanIdTransactionsTransactionIdRequest.prototype['transactionDate'] = undefined;

/**
 * @member {Number} transactionAmount
 */
PostLoansLoanIdTransactionsTransactionIdRequest.prototype['transactionAmount'] = undefined;

/**
 * @member {String} note
 */
PostLoansLoanIdTransactionsTransactionIdRequest.prototype['note'] = undefined;






export default PostLoansLoanIdTransactionsTransactionIdRequest;

