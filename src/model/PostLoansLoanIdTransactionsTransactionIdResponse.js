

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdTransactionsTransactionIdResponse model module.
 * @module model/PostLoansLoanIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class PostLoansLoanIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdTransactionsTransactionIdResponse</code>.
     * PostLoansLoanIdTransactionsTransactionIdResponse
     * @alias module:model/PostLoansLoanIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        PostLoansLoanIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdTransactionsTransactionIdResponse} The populated <code>PostLoansLoanIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostLoansLoanIdTransactionsTransactionIdResponse.prototype['resourceId'] = undefined;






export default PostLoansLoanIdTransactionsTransactionIdResponse;

