

import ApiClient from '../ApiClient';
import PostCollectionSheetBulkRepaymentTransactions from './PostCollectionSheetBulkRepaymentTransactions';

/**
 * The PostCollectionSheetRequest model module.
 * @module model/PostCollectionSheetRequest
 * @version 1.0
 */
class PostCollectionSheetRequest {
    /**
     * Constructs a new <code>PostCollectionSheetRequest</code>.
     * PostCollectionSheetRequest
     * @alias module:model/PostCollectionSheetRequest
     */
    constructor() { 
        
        PostCollectionSheetRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCollectionSheetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCollectionSheetRequest} obj Optional instance to populate.
     * @return {module:model/PostCollectionSheetRequest} The populated <code>PostCollectionSheetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCollectionSheetRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
            }
            if (data.hasOwnProperty('actualDisbursementDate')) {
                obj['actualDisbursementDate'] = ApiClient.convertToType(data['actualDisbursementDate'], 'String');
            }
            if (data.hasOwnProperty('bulkDisbursementTransactions')) {
                obj['bulkDisbursementTransactions'] = ApiClient.convertToType(data['bulkDisbursementTransactions'], ['Number']);
            }
            if (data.hasOwnProperty('bulkRepaymentTransactions')) {
                obj['bulkRepaymentTransactions'] = PostCollectionSheetBulkRepaymentTransactions.constructFromObject(data['bulkRepaymentTransactions']);
            }
            if (data.hasOwnProperty('bulkSavingsDueTransactions')) {
                obj['bulkSavingsDueTransactions'] = ApiClient.convertToType(data['bulkSavingsDueTransactions'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PostCollectionSheetRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostCollectionSheetRequest.prototype['locale'] = undefined;

/**
 * @member {String} transactionDate
 */
PostCollectionSheetRequest.prototype['transactionDate'] = undefined;

/**
 * @member {String} actualDisbursementDate
 */
PostCollectionSheetRequest.prototype['actualDisbursementDate'] = undefined;

/**
 * @member {Array.<Number>} bulkDisbursementTransactions
 */
PostCollectionSheetRequest.prototype['bulkDisbursementTransactions'] = undefined;

/**
 * @member {module:model/PostCollectionSheetBulkRepaymentTransactions} bulkRepaymentTransactions
 */
PostCollectionSheetRequest.prototype['bulkRepaymentTransactions'] = undefined;

/**
 * @member {Array.<Number>} bulkSavingsDueTransactions
 */
PostCollectionSheetRequest.prototype['bulkSavingsDueTransactions'] = undefined;






export default PostCollectionSheetRequest;

