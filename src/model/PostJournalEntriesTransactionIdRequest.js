

import ApiClient from '../ApiClient';

/**
 * The PostJournalEntriesTransactionIdRequest model module.
 * @module model/PostJournalEntriesTransactionIdRequest
 * @version 1.0
 */
class PostJournalEntriesTransactionIdRequest {
    /**
     * Constructs a new <code>PostJournalEntriesTransactionIdRequest</code>.
     * PostJournalEntriesTransactionIdRequest
     * @alias module:model/PostJournalEntriesTransactionIdRequest
     */
    constructor() { 
        
        PostJournalEntriesTransactionIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostJournalEntriesTransactionIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostJournalEntriesTransactionIdRequest} obj Optional instance to populate.
     * @return {module:model/PostJournalEntriesTransactionIdRequest} The populated <code>PostJournalEntriesTransactionIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostJournalEntriesTransactionIdRequest();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * 1
 * @member {Number} officeId
 */
PostJournalEntriesTransactionIdRequest.prototype['officeId'] = undefined;






export default PostJournalEntriesTransactionIdRequest;

