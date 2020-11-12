

import ApiClient from '../ApiClient';

/**
 * The PostCollectionSheetBulkRepaymentTransactions model module.
 * @module model/PostCollectionSheetBulkRepaymentTransactions
 * @version 1.0
 */
class PostCollectionSheetBulkRepaymentTransactions {
    /**
     * Constructs a new <code>PostCollectionSheetBulkRepaymentTransactions</code>.
     * @alias module:model/PostCollectionSheetBulkRepaymentTransactions
     */
    constructor() { 
        
        PostCollectionSheetBulkRepaymentTransactions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCollectionSheetBulkRepaymentTransactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCollectionSheetBulkRepaymentTransactions} obj Optional instance to populate.
     * @return {module:model/PostCollectionSheetBulkRepaymentTransactions} The populated <code>PostCollectionSheetBulkRepaymentTransactions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCollectionSheetBulkRepaymentTransactions();

            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('transactionAmount')) {
                obj['transactionAmount'] = ApiClient.convertToType(data['transactionAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentTypeId')) {
                obj['paymentTypeId'] = ApiClient.convertToType(data['paymentTypeId'], 'Number');
            }
            if (data.hasOwnProperty('receiptNumber')) {
                obj['receiptNumber'] = ApiClient.convertToType(data['receiptNumber'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} loanId
 */
PostCollectionSheetBulkRepaymentTransactions.prototype['loanId'] = undefined;

/**
 * @member {Number} transactionAmount
 */
PostCollectionSheetBulkRepaymentTransactions.prototype['transactionAmount'] = undefined;

/**
 * @member {Number} paymentTypeId
 */
PostCollectionSheetBulkRepaymentTransactions.prototype['paymentTypeId'] = undefined;

/**
 * @member {Number} receiptNumber
 */
PostCollectionSheetBulkRepaymentTransactions.prototype['receiptNumber'] = undefined;






export default PostCollectionSheetBulkRepaymentTransactions;

