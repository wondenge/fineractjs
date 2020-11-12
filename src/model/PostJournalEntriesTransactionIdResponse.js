

import ApiClient from '../ApiClient';

/**
 * The PostJournalEntriesTransactionIdResponse model module.
 * @module model/PostJournalEntriesTransactionIdResponse
 * @version 1.0
 */
class PostJournalEntriesTransactionIdResponse {
    /**
     * Constructs a new <code>PostJournalEntriesTransactionIdResponse</code>.
     * PostJournalEntriesTransactionIdResponse
     * @alias module:model/PostJournalEntriesTransactionIdResponse
     */
    constructor() { 
        
        PostJournalEntriesTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostJournalEntriesTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostJournalEntriesTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/PostJournalEntriesTransactionIdResponse} The populated <code>PostJournalEntriesTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostJournalEntriesTransactionIdResponse();

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
PostJournalEntriesTransactionIdResponse.prototype['officeId'] = undefined;






export default PostJournalEntriesTransactionIdResponse;

